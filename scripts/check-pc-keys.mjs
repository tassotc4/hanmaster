import fs from 'fs';
import vm from 'vm';

const html = fs.readFileSync('public/pinyin-chart.html', 'utf8');

// Extract PC_TRANSLATIONS
const match = html.match(/const PC_TRANSLATIONS = (\{[\s\S]*?\});/);
const code = 'var PC_TRANSLATIONS = ' + match[1] + ';';
const script = new vm.Script(code);
const sandbox = {};
vm.createContext(sandbox);
script.runInContext(sandbox);
const dict = sandbox.PC_TRANSLATIONS;

// Extract all data-tr values from HTML
const dataTrMatches = html.matchAll(/data-tr="([^"]+)"/g);
const usedKeys = new Set();
for (const m of dataTrMatches) usedKeys.add(m[1]);

// Also check what text the regex-based footer translation covers
const footerRegex = /(Free interactive Pinyin chart from|Home|Launch App|MandarinCourse| — AI Chinese Tutor\.)/g;

console.log('=== data-tr keys used but NOT in PC_TRANSLATIONS ===');
for (const key of usedKeys) {
  const found = Object.values(dict).some(langDict => langDict[key] !== undefined);
  if (!found) console.log('  MISSING: ' + key);
}

console.log('\n=== Keys in PC_TRANSLATIONS but NOT used in HTML ===');
const allDictKeys = new Set();
for (const lang of Object.keys(dict)) {
  for (const key of Object.keys(dict[lang])) allDictKeys.add(key);
}
for (const key of allDictKeys) {
  if (!usedKeys.has(key)) console.log('  UNUSED: ' + key);
}

console.log('\n=== Check specific untranslated text in HTML ===');
// Look for text nodes that aren't inside data-tr
const textPatterns = [
  'Launch App',
  'MandarinCourse',
];
for (const p of textPatterns) {
  // Count occurrences in HTML
  const re = new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const count = (html.match(re) || []).length;
  console.log(`  "${p}" appears ${count} times`);
}
