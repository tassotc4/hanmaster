import fs from 'fs';

const c = fs.readFileSync('public/js/app.js', 'utf8');
const idx = c.indexOf('const OFFLINE_DICTIONARY');
if (idx < 0) { console.log('Not found'); process.exit(0); }

let depth = 0;
let inStr = false;
let strChar = '';
let escaped = false;

for (let i = idx; i < c.length; i++) {
  const ch = c[i];
  if (escaped) { escaped = false; continue; }
  if (ch === '\\' && inStr) { escaped = true; continue; }
  if (ch === '"' || ch === "'") {
    if (!inStr) { inStr = true; strChar = ch; }
    else if (ch === strChar) { inStr = false; }
    continue;
  }
  if (inStr) continue;
  if (ch === '{') depth++;
  else if (ch === '}') {
    depth--;
    if (depth === 0) {
      console.log('OFFLINE_DICTIONARY ends at char', i);
      console.log('Length:', i - idx + 1);
      const from = Math.max(0, i - 100);
      console.log('Last 100 chars:', JSON.stringify(c.substring(from, i + 1)));
      break;
    }
  }
}

if (depth !== 0) {
  console.log('Unbalanced! Depth:', depth);
  // Show where it goes wrong
  const from = c.lastIndexOf('{', idx + 5000);
  console.log('Around last {:', c.substring(from, from + 200));
}
