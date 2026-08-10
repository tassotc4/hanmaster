import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync('public/js/app.js', 'utf-8');
const lines = content.split('\n');

// 1. Find all language block start lines:   "xx": {
const langMarkers = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^  "([a-z]{2})": {$/);
  if (m) langMarkers.push({ lang: m[1], lineIdx: i });
}

// Also find the dictionary closing `};`
let dictEndIdx = -1;
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].trim() === '};' && lines[i].charAt(0) === '}') {
    dictEndIdx = i;
    break;
  }
}

console.log(`Found ${langMarkers.length} language blocks, dict ends at line ${dictEndIdx + 1}`);

// 2. Build block ranges: each block is from its start line to the next start line (or dict end)
const blocks = [];
for (let i = 0; i < langMarkers.length; i++) {
  const start = langMarkers[i].lineIdx;
  const end = i < langMarkers.length - 1 ? langMarkers[i + 1].lineIdx : dictEndIdx;
  blocks.push({ lang: langMarkers[i].lang, start, end, index: i });
}

// 3. Classify SET 1 vs SET 2: first occurrence of each lang = SET 1, second = SET 2
const seen = new Set();
const set1Blocks = [];
const set2Blocks = [];
for (const b of blocks) {
  if (b.lang === 'es') {
    set1Blocks.push(b);
  } else if (!seen.has(b.lang)) {
    seen.add(b.lang);
    set1Blocks.push(b);
  } else {
    set2Blocks.push(b);
  }
}

console.log(`SET 1: ${set1Blocks.length} blocks`);
for (const b of set1Blocks) console.log(`  ${b.lang}: lines ${b.start + 1}-${b.end}`);
console.log(`SET 2: ${set2Blocks.length} blocks`);
for (const b of set2Blocks) console.log(`  ${b.lang}: lines ${b.start + 1}-${b.end}`);

// 4. Helper: extract all keys and their full line text from a block
function getKeyLines(start, end) {
  const map = new Map(); // key -> line text
  for (let i = start + 1; i < end; i++) {
    const line = lines[i];
    const trimmed = line.trimEnd();
    if (trimmed === '},' || trimmed === '}') continue;
    if (trimmed === '' || trimmed.startsWith('//')) continue;
    const m = line.match(/^    "(.+?)": /);
    if (m) {
      map.set(m[1], line);
    }
  }
  return map;
}

// 5. For each language, find SET 1 keys missing from SET 2
// Process bottom-to-top so insert positions stay valid
const insertions = []; // { lineIdx, lines[] }

for (const s2 of set2Blocks) {
  const s1 = set1Blocks.find(b => b.lang === s2.lang);
  if (!s1) { console.log(`ERROR: no SET 1 for ${s2.lang}`); continue; }
  
  const s1Keys = getKeyLines(s1.start, s1.end);
  const s2Keys = getKeyLines(s2.start, s2.end);
  
  // Find keys in S1 not in S2
  const missing = [];
  for (const [key, line] of s1Keys) {
    if (!s2Keys.has(key)) {
      missing.push(line);
    }
  }
  
  if (missing.length === 0) {
    console.log(`${s2.lang}: 0 missing, skipping`);
    continue;
  }
  
  // Insertion point: right before the closing `},` or `}` of SET 2
  // Find the last non-empty line of the block that is a closing brace
  let insertAt = s2.end - 1;
  // Walk backwards from s2.end to find the `},` or `}` that closes the block
  while (insertAt > s2.start) {
    const trimmed = lines[insertAt].trimEnd();
    if (trimmed === '},' || trimmed === '}') break;
    insertAt--;
  }
  
  console.log(`${s2.lang}: ${missing.length} missing keys, inserting at line ${insertAt + 1}`);
  insertions.push({ lineIdx: insertAt, lines: missing });
}

// 6. Apply insertions bottom-to-top
insertions.sort((a, b) => b.lineIdx - a.lineIdx);

console.log('\nApplying insertions...');
let newLines = [...lines];
for (const ins of insertions) {
  newLines.splice(ins.lineIdx, 0, ...ins.lines);
  console.log(`  Inserted ${ins.lines.length} lines at position ${ins.lineIdx + 1}`);
}

writeFileSync('public/js/app.js', newLines.join('\n'), 'utf-8');
console.log(`\nDone. File has ${newLines.length} lines.`);
