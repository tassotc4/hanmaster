import { readFileSync } from 'fs';

const content = readFileSync('public/js/app.js', 'utf-8');
const lines = content.split('\n');

// Find all language block start lines
const langLines = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^  "([a-z]{2})": {$/);
  if (m) langLines.push({ lang: m[1], line: i });
}

console.log(`Found ${langLines.length} total blocks`);
for (const l of langLines) {
  console.log(`  ${l.lang}: line ${l.line + 1}`);
}

// Build block ranges
const blocks = [];
for (let i = 0; i < langLines.length; i++) {
  const start = langLines[i].line;
  const end = i < langLines.length - 1 ? langLines[i + 1].line : lines.length;
  blocks.push({ lang: langLines[i].lang, start, end, index: i });
}

// Count keys per block
for (const b of blocks) {
  let keys = 0;
  for (let j = b.start + 1; j < b.end - 1; j++) {
    if (lines[j].match(/^    "/)) keys++;
  }
  b.keyCount = keys;
}

// Group: first occurrence of each lang (excluding es) = SET 1, second = SET 2
// es is only in SET 1
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

console.log(`\n=== SET 1 (${set1Blocks.length} blocks) ===`);
for (const b of set1Blocks) {
  console.log(`  ${b.lang}: ${b.keyCount} keys (line ${b.start + 1})`);
}

console.log(`\n=== SET 2 (${set2Blocks.length} blocks) ===`);
for (const b of set2Blocks) {
  console.log(`  ${b.lang}: ${b.keyCount} keys (line ${b.start + 1})`);
}

// Check specific feature-section keys
const testKeys = [
  'Everything You Need to Speak Chinese Fluently',
  'AI Chinese Speaking Tutor',
  'Smart Pronunciation Assessment',
  'Your Gateway to Fluent Chinese',
  'Master Chinese Characters with AI-Powered Handwriting Recognition',
];

console.log('\n=== Checking feature keys in SET 2 ===');
for (const b of set2Blocks) {
  const s2Keys = new Set();
  for (let j = b.start + 1; j < b.end - 1; j++) {
    const m = lines[j].match(/^    "(.+?)": /);
    if (m) s2Keys.add(m[1]);
  }
  const found = testKeys.filter(k => s2Keys.has(k));
  console.log(`${b.lang}: ${found.length}/${testKeys.length}`);
  if (found.length < testKeys.length) {
    for (const k of testKeys) {
      if (!s2Keys.has(k)) console.log(`  MISSING: "${k.slice(0, 50)}..."`);
    }
  }
}

// Verify SET 2 has all SET 1 keys for each language
console.log('\n=== SET 1 keys present in SET 2 ===');
for (const s2 of set2Blocks) {
  const s1 = set1Blocks.find(b => b.lang === s2.lang);
  if (!s1) { console.log(`${s2.lang}: no SET 1 found!`); continue; }
  
  const s1Keys = new Set();
  for (let j = s1.start + 1; j < s1.end - 1; j++) {
    const m = lines[j].match(/^    "(.+?)": /);
    if (m) s1Keys.add(m[1]);
  }
  
  const s2Keys = new Set();
  for (let j = s2.start + 1; j < s2.end - 1; j++) {
    const m = lines[j].match(/^    "(.+?)": /);
    if (m) s2Keys.add(m[1]);
  }
  
  const missing = [...s1Keys].filter(k => !s2Keys.has(k));
  const extra = [...s2Keys].filter(k => !s1Keys.has(k));
  console.log(`${s2.lang}: ${s1Keys.size} in SET 1, ${s2Keys.size} in SET 2, ${missing.length} missing, ${extra.length} extra`);
  if (missing.length > 0) {
    console.log(`  Missing keys (first 5): ${missing.slice(0, 5).join(', ')}`);
  }
}

// Verify syntax
console.log('\n=== Syntax check ===');
try {
  new Function(content);
  console.log('OK: valid JavaScript');
} catch (e) {
  console.log('ERROR: ' + e.message);
}
