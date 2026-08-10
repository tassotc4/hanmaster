import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('public/js/app.js', 'utf-8');
const lines = content.split('\n');

// 1. Find dictionary boundaries using brace-depth
let dictStart = -1, dictEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().startsWith('const OFFLINE_DICTIONARY = {')) dictStart = i;
  if (dictStart >= 0 && lines[i].trim() === '};') {
    let depth = 0;
    for (let j = dictStart; j <= i; j++) {
      for (const ch of lines[j]) { if (ch === '{') depth++; if (ch === '}') depth--; }
    }
    if (depth === 0) { dictEnd = i; break; }
  }
}
if (dictEnd < 0) throw new Error('Could not find dictionary end');
console.log(`Dictionary: lines ${dictStart + 1} to ${dictEnd + 1}`);

// 2. Find all language markers
const langMarkers = [];
for (let i = dictStart; i <= dictEnd; i++) {
  const m = lines[i].match(/^  "([a-z]{2})": {$/);
  if (m) langMarkers.push({ lang: m[1], lineIdx: i });
}

// 3. Build blocks with true end via brace-depth
const blocks = [];
for (let i = 0; i < langMarkers.length; i++) {
  const start = langMarkers[i].lineIdx;
  let depth = 0, started = false, endIdx = -1;
  for (let j = start; j <= dictEnd; j++) {
    for (const ch of lines[j]) { if (ch === '{') { depth++; started = true; } if (ch === '}') depth--; }
    if (started && depth === 0) { endIdx = j + 1; break; }
  }
  blocks.push({ lang: langMarkers[i].lang, start, end: endIdx });
}

// 4. Classify SET 1 / SET 2
const seen = new Set();
const set1 = [], set2 = [];
for (const b of blocks) {
  if (b.lang === 'es' && !seen.has('es')) { seen.add('es'); set1.push(b); }
  else if (!seen.has(b.lang)) { seen.add(b.lang); set1.push(b); }
  else { set2.push(b); }
}

console.log(`SET 1: ${set1.length}, SET 2: ${set2.length}`);

// 5. Helper: extract ALL keys from a block (handles multi-key-per-line)
function extractAllKeyLines(start, end) {
  const map = new Map(); // key -> {lineText, lineIdx}
  for (let i = start + 1; i < end - 1; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed === '},' || trimmed === '}' || trimmed === '') continue;
    // Extract ALL keys from the line: "key": ...
    const keyRegex = /"([^"]+)":\s*"/g;
    let match;
    while ((match = keyRegex.exec(line)) !== null) {
      map.set(match[1], { lineText: line, lineIdx: i });
    }
  }
  return map;
}

// Add lines for missing keys, handling trailing commas
const insertions = []; // { lineIdx, lines[] }
let missingCount = {};

for (let i = set2.length - 1; i >= 0; i--) {
  const s2 = set2[i];
  const s1 = set1.find(b => b.lang === s2.lang);
  if (!s1) continue;

  const s1Keys = extractAllKeyLines(s1.start, s1.end);
  const s2Keys = extractAllKeyLines(s2.start, s2.end);

  const missing = [];
  for (const [key, val] of s1Keys) {
    if (!s2Keys.has(key)) missing.push(key);
  }

  if (missing.length === 0) { missingCount[s2.lang] = 0; continue; }
  missingCount[s2.lang] = missing.length;

  // Find the closing brace position
  const closeBrace = s2.end - 1;
  const trimmed = lines[closeBrace].trim();
  if (trimmed !== '},' && trimmed !== '}') {
    console.log(`ERROR ${s2.lang}: closing brace expected at ${closeBrace + 1}, got "${trimmed}"`);
    continue;
  }

  // Check if the last content line has a trailing comma
  // Walk back from closeBrace-1 to find the last non-empty, non-brace content line
  let lastContentIdx = closeBrace - 1;
  while (lastContentIdx > s2.start) {
    const t = lines[lastContentIdx].trim();
    if (t !== '' && t !== '},' && t !== '}') break;
    lastContentIdx--;
  }

  const lastLineHasComma = lines[lastContentIdx].trimEnd().endsWith(',');
  
  // Build insertion lines: one per missing key, in format "    "key": "value","
  const insertLines = missing.map(k => {
    const v = s1Keys.get(k);
    return v.lineText;
  });

  // If the last content line doesn't have a trailing comma, add one to it
  if (!lastLineHasComma && lastContentIdx > s2.start) {
    // We'll modify the line before insertion by appending a comma
    insertions.push({ lineIdx: lastContentIdx, modify: true, text: lines[lastContentIdx] + ',' });
  }

  insertions.push({ lineIdx: closeBrace, modify: false, lines: insertLines });
}

// Apply modifications and insertions bottom-to-top
let newLines = [...lines];
// Sort by lineIdx descending
insertions.sort((a, b) => b.lineIdx - a.lineIdx);

for (const ins of insertions) {
  if (ins.modify) {
    // Replace the line with a comma-added version
    const oldLine = ins.text.substring(0, ins.text.length - 1); // remove trailing comma we added
    if (newLines[ins.lineIdx] === oldLine) {
      newLines[ins.lineIdx] = ins.text;
    }
  } else {
    newLines.splice(ins.lineIdx, 0, ...ins.lines);
  }
}

writeFileSync('public/js/app.js', newLines.join('\n'), 'utf-8');
console.log(`\nDone. ${newLines.length} lines written.`);

// Summary
console.log('\n=== Missing keys added per language ===');
for (const lang of Object.keys(missingCount).sort()) {
  console.log(`  ${lang}: ${missingCount[lang]}`);
}
