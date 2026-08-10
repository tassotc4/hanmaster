import fs from 'fs';

const html = fs.readFileSync('public/app.html', 'utf8');

// Get full FAQ section
const faqStart = html.indexOf('FAQ (SEO/AEO/GEO ENHANCEMENT)');
const faqEnd = html.indexOf('toggleFaq()', faqStart) + 100;

const faqSection = html.substring(faqStart, faqEnd);
const regex = /data-tr="([^"]+)"/g;
let match;
const keys = [];
while ((match = regex.exec(faqSection)) !== null) {
  keys.push(match[1]);
}

// Now check each key against the Vietnamese dictionary
const code = fs.readFileSync('public/js/app.js', 'utf8');
const dictStart = code.indexOf('const OFFLINE_DICTIONARY = {');
const dictEnd = code.indexOf('};', dictStart) + 2;
const dictPart = code.substring(dictStart, dictEnd);

// Find the LAST vi block
const viLines = [];
let depth = 0;
let inVi = false;
let lastViStart = -1;
let lastViEnd = -1;

const lines = dictPart.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) {
    inVi = true;
    depth = 1;
    lastViStart = i;
  }
  if (inVi) {
    viLines.push({ line: i, text: lines[i] });
    for (let k = 0; k < lines[i].length; k++) {
      if (lines[i][k] === '{') depth++;
      if (lines[i][k] === '}') depth--;
    }
    if (depth === 0) {
      lastViEnd = i;
      inVi = false;
    }
  }
}

// Build the vi dict as a simple object
const viEntries = {};
for (let i = lastViStart + 1; i < lastViEnd; i++) {
  const line = lines[i];
  // Match "key":"value" pattern
  const kvMatch = line.match(/^\s+"((?:[^"\\]|\\.)*?)"\s*:\s*"((?:[^"\\]|\\.)*?)"/);
  if (kvMatch) {
    viEntries[kvMatch[1]] = kvMatch[2];
  }
}

console.log(`Total data-tr keys in HTML: ${keys.length}`);
console.log(`Total Vietnamese dict entries: ${Object.keys(viEntries).length}`);

// Check each data-tr key
let missing = [];
for (const key of keys) {
  if (viEntries[key]) {
    // console.log(`OK: ${key.substring(0, 60)} -> ${viEntries[key].substring(0, 40)}`);
  } else {
    console.log(`** MISSING: "${key}"`);
    missing.push(key);
  }
}

console.log(`\nMissing keys: ${missing.length}`);
missing.forEach(k => console.log(`  - "${k}"`));

// Also check the toggle FAQ button
const toggleRegex = /t\('([^']+)'\)/g;
let tmatch;
const trKeys = [];
const allCode = code.substring(lines[0] === '\n' ? 1 : 0);
// Simpler: just grep for t('Show all FAQ')
if (allCode.includes("t('Show all FAQ')")) {
  console.log('\nToggle button: Show all FAQ is wrapped in t()');
}
