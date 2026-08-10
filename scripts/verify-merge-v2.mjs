import { readFileSync } from 'fs';

const content = readFileSync('public/js/app.js', 'utf-8');
const lines = content.split('\n');

// Find dictionary and all language blocks
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

const langMarkers = [];
for (let i = dictStart; i <= dictEnd; i++) {
  const m = lines[i].match(/^  "([a-z]{2})": {$/);
  if (m) langMarkers.push({ lang: m[1], lineIdx: i });
}

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

const seen = new Set();
const set1 = [], set2 = [];
for (const b of blocks) {
  if (b.lang === 'es' && !seen.has('es')) { seen.add('es'); set1.push(b); }
  else if (!seen.has(b.lang)) { seen.add(b.lang); set1.push(b); }
  else { set2.push(b); }
}

function extractAllKeys(start, end) {
  const keys = new Set();
  for (let i = start + 1; i < end - 1; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed === '},' || trimmed === '}' || trimmed === '') continue;
    const keyRegex = /"([^"]+)":\s*"/g;
    let match;
    while ((match = keyRegex.exec(line)) !== null) {
      keys.add(match[1]);
    }
  }
  return keys;
}

console.log('=== Key counts ===');
for (const s2 of set2) {
  const s1 = set1.find(b => b.lang === s2.lang);
  if (!s1) continue;
  const s1keys = extractAllKeys(s1.start, s1.end);
  const s2keys = extractAllKeys(s2.start, s2.end);
  const missing = [...s1keys].filter(k => !s2keys.has(k));
  const extra = [...s2keys].filter(k => !s1keys.has(k));
  console.log(`${s2.lang}: S1=${s1keys.size}, S2=${s2keys.size}, missing=${missing.length}, extra=${extra.length}`);
}

console.log('\n=== Feature keys in SET 2 ===');
const testKeys = [
  'Everything You Need to Speak Chinese Fluently',
  'AI Chinese Speaking Tutor',
  'Smart Pronunciation Assessment',
  'Your Gateway to Fluent Chinese',
  'Master Chinese Characters with AI-Powered Handwriting Recognition',
];
for (const s2 of set2) {
  const s2keys = extractAllKeys(s2.start, s2.end);
  const found = testKeys.filter(k => s2keys.has(k));
  console.log(`${s2.lang}: ${found.length}/${testKeys.length}`);
  if (found.length < testKeys.length) {
    for (const k of testKeys) {
      if (!s2keys.has(k)) console.log(`  MISSING: "${k.substring(0, 60)}..."`);
    }
  }
}

console.log('\n=== Duplicate check ===');
const allKeys = new Map();
for (const b of blocks) {
  const keys = extractAllKeys(b.start, b.end);
  for (const k of keys) {
    if (!allKeys.has(k)) allKeys.set(k, []);
    allKeys.get(k).push(b.lang);
  }
}
let dupCount = 0;
for (const [k, langs] of allKeys) {
  const blockSet = new Set(langs);
  if (blockSet.size !== langs.length) {
    const counts = {};
    for (const l of langs) counts[l] = (counts[l] || 0) + 1;
    const duplicates = Object.entries(counts).filter(([, c]) => c > 1).map(([l]) => l);
    console.log(`  Duplicate key "${k.substring(0, 60)}..." in: ${duplicates.join(', ')}`);
    dupCount++;
  }
}
if (dupCount === 0) console.log('  No duplicate keys found.');
else console.log(`  Found ${dupCount} duplicate keys.`);
