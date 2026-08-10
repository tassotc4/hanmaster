import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('public/js/app.js', 'utf-8');
const lines = content.split('\n');

// 1. Find the OFFLINE_DICTIONARY boundaries using brace-depth counting
let dictStart = -1;
let dictEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().startsWith('const OFFLINE_DICTIONARY = {')) dictStart = i;
  if (dictStart >= 0 && lines[i].trim() === '};') {
    // Must be the matching };
    // Simple: find the first }; after the opening { by counting depth
    if (dictStart >= 0 && dictEnd < 0) {
      let depth = 0;
      for (let j = dictStart; j <= i; j++) {
        const line = lines[j];
        for (const ch of line) { if (ch === '{') depth++; if (ch === '}') depth--; }
      }
      if (depth === 0) { dictEnd = i; break; }
    }
  }
}
if (dictEnd < 0) throw new Error('Could not find dictionary end');

console.log(`Dictionary: lines ${dictStart + 1} to ${dictEnd + 1}`);

// 2. Find all language markers within the dictionary:   "xx": {
const langMarkers = [];
for (let i = dictStart; i <= dictEnd; i++) {
  const m = lines[i].match(/^  "([a-z]{2})": {$/);
  if (m) langMarkers.push({ lang: m[1], lineIdx: i });
}

console.log(`Found ${langMarkers.length} language blocks`);

// 3. Build block ranges using the markers
const blocks = [];
for (let i = 0; i < langMarkers.length; i++) {
  const start = langMarkers[i].lineIdx;
  // Find the true end of this block using brace depth
  let depth = 0;
  let started = false;
  let endIdx = -1;
  for (let j = start; j <= dictEnd; j++) {
    for (const ch of lines[j]) {
      if (ch === '{') { depth++; started = true; }
      if (ch === '}') depth--;
    }
    if (started && depth === 0) { endIdx = j + 1; break; }
  }
  blocks.push({ lang: langMarkers[i].lang, start, end: endIdx, index: i });
}

// 4. Classify as SET 1 or SET 2
const seen = new Set();
const set1Blocks = [];
const set2Blocks = [];
for (const b of blocks) {
  if (b.lang === 'es' && !seen.has('es-set1')) {
    seen.add('es-set1');
    set1Blocks.push(b);
  } else if (!seen.has(b.lang)) {
    seen.add(b.lang);
    set1Blocks.push(b);
  } else {
    set2Blocks.push(b);
  }
}

console.log(`SET 1: ${set1Blocks.length} blocks, SET 2: ${set2Blocks.length} blocks`);
for (const b of set2Blocks) {
  const s1 = set1Blocks.find(x => x.lang === b.lang);
  if (!s1) continue;
  // Count keys in SET 1 and SET 2
  let s1keys = 0, s2keys = 0;
  for (let j = s1.start + 1; j < s1.end - 1; j++) if (lines[j].match(/^    "/)) s1keys++;
  for (let j = b.start + 1; j < b.end - 1; j++) if (lines[j].match(/^    "/)) s2keys++;
  console.log(`  ${b.lang}: SET1=${s1keys} keys, SET2=${s2keys} keys (lines ${b.start+1}-${b.end})`);
}

// 5. For each SET 2 block, find missing keys from SET 1
function getKeyLines(start, end) {
  const map = new Map();
  for (let i = start + 1; i < end - 1; i++) {
    const line = lines[i];
    const trimmed = line.trimEnd();
    if (trimmed === '},' || trimmed === '}') continue;
    if (trimmed === '' || trimmed.startsWith('//')) continue;
    const m = line.match(/^    "(.+?)": /);
    if (m) map.set(m[1], line);
  }
  return map;
}

// Process bottom-to-top
const insertions = [];
for (let i = set2Blocks.length - 1; i >= 0; i--) {
  const s2 = set2Blocks[i];
  const s1 = set1Blocks.find(b => b.lang === s2.lang);
  if (!s1) continue;
  
  const s1Keys = getKeyLines(s1.start, s1.end);
  const s2Keys = getKeyLines(s2.start, s2.end);
  
  const missing = [];
  for (const [key, line] of s1Keys) {
    if (!s2Keys.has(key)) missing.push(line);
  }
  
  if (missing.length === 0) { console.log(`${s2.lang}: 0 missing`); continue; }
  
  // Insertion point is right before the closing brace of SET 2
  // The closing brace is at s2.end - 1 (exclusive end - 1 = last line index of block)
  const closeBrace = s2.end - 1;
  const trimmed = lines[closeBrace].trim();
  if (trimmed !== '},' && trimmed !== '}') {
    console.log(`ERROR: ${s2.lang}: expected closing brace at line ${closeBrace + 1}, got "${trimmed}"`);
    continue;
  }
  
  console.log(`${s2.lang}: ${missing.length} keys to insert at line ${closeBrace + 1}`);
  insertions.push({ lineIdx: closeBrace, lines: missing });
}

// 6. Apply insertions (already in bottom-up order since we iterated backwards)
console.log('\nApplying insertions...');
let newLines = [...lines];
for (const ins of insertions) {
  newLines.splice(ins.lineIdx, 0, ...ins.lines);
  console.log(`  +${ins.lines.length} lines at position ${ins.lineIdx + 1}`);
}

writeFileSync('public/js/app.js', newLines.join('\n'), 'utf-8');
console.log(`\nDone. ${newLines.length} lines written.`);
