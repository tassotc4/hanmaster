import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('public/js/app.js', 'utf-8');
const lines = content.split('\n');

// Find all language block boundaries
// SET 1: es(15), fr(872), ja(1270), ko(1668), de(2066), pt(2464), it(2862), ru(3260), vi(3658)
// SET 2: fr(4136), de(5254), pt(6486), it(7641), ru(8795), vi(9949), ja(11588), ko(12779)
// End of dict: line 13967 (0-indexed: 13966)

const langSet1 = {
  es: 15, fr: 872, ja: 1270, ko: 1668, de: 2066, pt: 2464, it: 2862, ru: 3260, vi: 3658
};
const langSet2 = {
  fr: 4136, de: 5254, pt: 6486, it: 7641, ru: 8795, vi: 9949, ja: 11588, ko: 12779
};
const dictEnd = 13967; // line of `};` closing the dictionary

function getBlockLines(startLine, endLine) {
  // startLine is the "xx": { line, endLine is the line before next block or dict end
  // The content lines are from startLine+1 to endLine-2 (excluding the closing }, or },)
  const start = startLine; // 0-indexed
  const end = endLine; // 0-indexed, exclusive
  return lines.slice(start, end);
}

function getBlockKeys(startLine, endLine) {
  const block = getBlockLines(startLine, endLine);
  const keys = [];
  for (const line of block) {
    // Skip opening brace line and closing brace line
    if (line === `"es": {` || line === `"fr": {` || line === `"de": {` || line === `"pt": {` ||
        line === `"it": {` || line === `"ru": {` || line === `"vi": {` || line === `"ja": {` ||
        line === `"ko": {`) continue;
    // Skip closing brace lines
    if (line.trimEnd() === '},' || line.trimEnd() === '}') continue;
    // Skip empty lines
    if (line.trim() === '') continue;
    // Extract key using regex - match "key": at start of line
    // The line format is:   "key": "value",
    const match = line.match(/^\s{4}"(.+?)": /);
    if (match) {
      keys.push(match[1]);
    }
  }
  return keys;
}

// For each language in SET 2 (process bottom-to-top to preserve line positions)
// Order in SET 2: fr, de, pt, it, ru, vi, ja, ko
// Bottom-to-top: ko, ja, vi, ru, it, pt, de, fr
const set2Langs = ['fr', 'de', 'pt', 'it', 'ru', 'vi', 'ja', 'ko'];
const bottomUp = ['ko', 'ja', 'vi', 'ru', 'it', 'pt', 'de', 'fr'];

// First, find all set2 block end positions (0-indexed, exclusive)
function findBlockEnd(startLine) {
  // startLine is the "xx": { line (0-indexed)
  // Find the matching closing brace by counting depth
  let depth = 0;
  let started = false;
  for (let i = startLine; i < lines.length; i++) {
    const line = lines[i];
    for (const ch of line) {
      if (ch === '{') { depth++; started = true; }
      if (ch === '}') depth--;
    }
    if (started && depth === 0) {
      return i + 1; // exclusive end (line after closing brace)
    }
  }
  return lines.length;
}

function extractKeys(startLine, endLineExclusive) {
  const keys = new Map(); // key -> full line text
  for (let i = startLine + 1; i < endLineExclusive - 1; i++) {
    const line = lines[i];
    const trimmed = line.trimEnd();
    // Skip closing lines
    if (trimmed === '},' || trimmed === '}') continue;
    if (trimmed === '') continue;
    // Extract key
    const match = line.match(/^\s{4}"(.+?)": /);
    if (match) {
      keys.set(match[1], line);
    }
  }
  return keys;
}

console.log('=== Finding SET 1 vs SET 2 key differences ===\n');

// Process in bottom-up order
const insertions = []; // { lineIndex, insertLines[] }

for (const lang of bottomUp) {
  const set1Start = langSet1[lang];
  const set2Start = langSet2[lang];
  if (!set1Start || !set2Start) {
    console.log(`Skipping ${lang}: missing SET 1 or SET 2`);
    continue;
  }
  
  // 0-indexed
  const s1idx = set1Start - 1;
  const s2idx = set2Start - 1;
  
  // Find set1 end
  const s1End = findBlockEnd(s1idx);
  // Find set2 end
  const s2End = findBlockEnd(s2idx);
  
  const set1Keys = extractKeys(s1idx, s1End);
  const set2Keys = extractKeys(s2idx, s2End);
  
  // Find keys in SET 1 not in SET 2
  const missing = [];
  for (const [key, line] of set1Keys) {
    if (!set2Keys.has(key)) {
      missing.push(line);
    }
  }
  
  if (missing.length === 0) {
    console.log(`${lang}: 0 missing keys, skipping`);
    continue;
  }
  
  // Find the insertion point: right before the closing brace of SET 2
  // The closing brace is at s2End - 1 (0-indexed)
  // We want to insert before that line
  const insertAt = s2End - 1; // line index of closing brace
  
  console.log(`${lang}: ${missing.length} missing keys, inserting at line ${insertAt + 1}`);
  
  insertions.push({
    lineIndex: insertAt,
    lines: missing.map(l => l.replace(/,$/, ',')) // ensure trailing comma
  });
}

// Apply insertions from bottom to top (already in bottom-up order)
console.log('\n=== Applying insertions ===\n');

let modifiedLines = [...lines];

// Sort insertions by lineIndex descending (bottom-up)
insertions.sort((a, b) => b.lineIndex - a.lineIndex);

for (const ins of insertions) {
  const before = ins.lines.join('\n');
  const after = `\n${ins.lines.join('\n')}\n`;
  // Insert before the closing brace
  console.log(`Inserting ${ins.lines.length} lines at position ${ins.lineIndex}`);
  modifiedLines.splice(ins.lineIndex, 0, ...ins.lines);
}

// Write back
writeFileSync('public/js/app.js', modifiedLines.join('\n'), 'utf-8');
console.log(`\nDone. Wrote ${modifiedLines.length} lines back.`);

// Verify: check that no language lines appear inside another language's block
console.log('\n=== Post-merge verification ===\n');

// Parse and count keys per language
const newContent = readFileSync('public/js/app.js', 'utf-8');
const newLines = newContent.split('\n');

// Find all language blocks again
const allLangLines = [];
for (let i = 0; i < newLines.length; i++) {
  const m = newLines[i].match(/^\s{2}"([a-z]{2})":\s*\{$/);
  if (m) allLangLines.push({ lang: m[1], line: i + 1 });
}

let totalSet1 = 0, totalSet2 = 0;
for (let i = 0; i < allLangLines.length; i++) {
  const { lang, line } = allLangLines[i];
  const nextLine = i < allLangLines.length - 1 ? allLangLines[i + 1].line : newLines.length;
  const blockEndLine = nextLine - 1;
  
  let keyCount = 0;
  for (let j = line; j < blockEndLine; j++) {
    if (newLines[j - 1].match(/^\s{4}".+?": /)) keyCount++;
  }
  
  const setType = line <= 4136 ? 'SET1' : 'SET2';
  if (setType === 'SET1') totalSet1 += keyCount;
  else totalSet2 += keyCount;
  console.log(`  ${lang} (${setType}, line ${line}): ${keyCount} keys`);
}
console.log(`\nTotal SET 1: ${totalSet1}, Total SET 2: ${totalSet2}`);
