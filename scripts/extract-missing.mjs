import fs from 'fs';

// Focus on strings that are clearly user-visible in the UI
// Filter out DOM/internal strings, punctuation, and very short technical strings
const code = fs.readFileSync('public/js/app.js', 'utf8');
const html = fs.readFileSync('public/app.html', 'utf8');

const allKeys = new Set();

// t() calls in JS
const tRegex = /t\(['"]([^'"]+?)['"]\)/g;
let m;
while ((m = tRegex.exec(code)) !== null) allKeys.add(m[1]);

// data-tr in HTML
const dtRegex = /data-tr="([^"]+)"/g;
while ((m = dtRegex.exec(html)) !== null) allKeys.add(m[1]);

// Vietnamese dict keys
const lines = code.split('\n');
let lastViStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) lastViStart = i;
}
const viKeys = new Set();
let depth = 0;
let inVi = false;
for (let i = lastViStart; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) { inVi = true; depth = 1; continue; }
  if (inVi) {
    const kvMatch = lines[i].match(/^\s+"([^"]+?)"\s*:/);
    if (kvMatch) viKeys.add(kvMatch[1]);
    for (let k = 0; k < lines[i].length; k++) {
      if (lines[i][k] === '{') depth++;
      if (lines[i][k] === '}') depth--;
    }
    if (depth === 0) break;
  }
}

// Filter to user-visible strings only
const ignorePatterns = [
  /^[ .,:;!?@#$%^&*()_+\-=\[\]{}|\\\/<>]$/,  // single punctuation
  /^(div|span|p|h[1-6]|button|input|label|select|option|canvas|img|a|ul|ol|li|script|style|section|nav|header|footer|main|article|aside)$/i,
  /^#/,
  /^\d+[a-z]/,
  /^\s+$/,
  /^(your@email|display_name|ref|speak|replay|press mic|items|lines|minutes|points|pts|month)/,
  /^for 25%/,  // string fragment
];

const userVisible = [];
for (const key of allKeys) {
  if (viKeys.has(key)) continue; // already translated
  if (key.length < 3) continue; // too short to be meaningful
  if (ignorePatterns.some(p => p.test(key))) continue;
  if (/^[a-z]/.test(key) && !key.includes(' ')) continue; // single lowercase word (likely internal)
  userVisible.push(key);
}

// Deduplicate and sort
const unique = [...new Set(userVisible)].sort();
console.log(`User-visible strings needing translation: ${unique.length}`);
console.log('\n--- LIST ---');
unique.forEach(s => console.log(s));
