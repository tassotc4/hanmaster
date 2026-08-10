import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

// Find all language block positions
const langBlocks = {};
const langs = ['es','fr','de','pt','it','ru','vi','ja','ko'];
for (let i = 0; i < lines.length; i++) {
  const t = lines[i].trim();
  for (const lang of langs) {
    if (t === `"${lang}": {`) {
      if (!langBlocks[lang]) langBlocks[lang] = [];
      langBlocks[lang].push(i);
    }
  }
}

// For each language with 2+ blocks, merge keys from SET 1 into SET 2
for (const lang of langs) {
  const blocks = langBlocks[lang];
  if (!blocks || blocks.length < 2) {
    console.log(`${lang}: ${blocks ? blocks.length : 0} block(s), skipping`);
    continue;
  }
  
  const set1Start = blocks[0];
  const set2Start = blocks[1];
  
  // Find end of SET 1
  let depth = 0, set1End = set1Start, started = false;
  for (let i = set1Start; i < lines.length; i++) {
    for (const ch of lines[i]) { if (ch === '{') { depth++; started = true; } if (ch === '}') depth--; }
    if (started && depth === 0) { set1End = i; break; }
  }
  
  // Find end of SET 2
  depth = 0; let set2End = set2Start; started = false;
  for (let i = set2Start; i < lines.length; i++) {
    for (const ch of lines[i]) { if (ch === '{') { depth++; started = true; } if (ch === '}') depth--; }
    if (started && depth === 0) { set2End = i; break; }
  }
  
  // Extract SET 1 keys
  const set1Lines = lines.slice(set1Start + 1, set1End);
  const set1Keys = new Map();
  for (const line of set1Lines) {
    // Match "english key": "translated value",
    const m = line.match(/^\s*"((?:[^"\\]|\\.)*)"\s*:\s*"((?:[^"\\]|\\.)*)",?\s*$/);
    if (m) {
      const enKey = m[1];
      const transVal = m[2];
      if (!set1Keys.has(enKey)) {
        set1Keys.set(enKey, { value: transVal, line: line });
      }
    }
  }
  
  // Extract SET 2 keys
  const set2Lines = lines.slice(set2Start + 1, set2End);
  const set2Keys = new Set();
  for (const line of set2Lines) {
    const m = line.match(/^\s*"((?:[^"\\]|\\.)*)"\s*:\s*"[^"]*",?\s*$/);
    if (m) set2Keys.add(m[1]);
  }
  
  // Find keys in SET 1 not in SET 2
  const missingKeys = [];
  for (const [enKey, data] of set1Keys) {
    if (!set2Keys.has(enKey)) {
      missingKeys.push({ enKey, value: data.value, originalLine: data.line });
    }
  }
  
  if (missingKeys.length === 0) {
    console.log(`${lang}: no missing keys`);
    continue;
  }
  
  // Insert missing keys before the closing brace of SET 2
  // The closing brace is at set2End. The line before it should be the last entry.
  // We'll insert the missing keys just before set2End.
  
  const insertionLines = missingKeys.map(k => {
    // Get the indentation from the original
    const indent = k.originalLine.match(/^(\s*)/)[1];
    return `${indent}"${k.enKey}": "${k.value}",`;
  });
  
  // Insert before set2End
  lines.splice(set2End, 0, ...insertionLines);
  
  console.log(`${lang}: added ${missingKeys.length} missing keys`);
}

fs.writeFileSync('public/js/app.js', lines.join('\n'));
console.log('\nDone merging all languages');
