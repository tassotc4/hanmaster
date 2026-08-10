import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const html = fs.readFileSync('public/app.html', 'utf8');
const lines = code.split('\n');

// 1. Find all t('...') calls in app.js
const tCalls = new Set();
const tRegex = /t\(['"]([^'"]+?)['"]\)/g;
let match;
while ((match = tRegex.exec(code)) !== null) {
  tCalls.add(match[1]);
}

// 2. Find all data-tr="..." in app.html
const dtRegex = /data-tr="([^"]+)"/g;
while ((match = dtRegex.exec(html)) !== null) {
  tCalls.add(match[1]);
}

console.log(`Total unique translatable strings: ${tCalls.size}`);

// 3. Find the LAST vi block and extract all keys
let lastViStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) {
    lastViStart = i;
  }
}

// Extract all keys from the last vi block as a Set
const viKeys = new Set();
let depth = 0;
let inVi = false;
for (let i = lastViStart; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) {
    inVi = true;
    depth = 1;
    continue;
  }
  if (inVi) {
    // Extract key from "key":"value" pattern
    const kvMatch = lines[i].match(/^\s+"([^"]+?)"\s*:/);
    if (kvMatch) {
      viKeys.add(kvMatch[1]);
    }
    for (let k = 0; k < lines[i].length; k++) {
      if (lines[i][k] === '{') depth++;
      if (lines[i][k] === '}') depth--;
    }
    if (depth === 0) break;
  }
}

console.log(`Vietnamese dict keys: ${viKeys.size}`);

// 4. Find missing strings
const missing = [];
for (const s of tCalls) {
  if (!viKeys.has(s)) {
    missing.push(s);
  }
}

console.log(`\nStrings NOT in Vietnamese dictionary: ${missing.length}`);
missing.sort().forEach(s => console.log(`  "${s}"`));
