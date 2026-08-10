import fs from 'fs';
import vm from 'vm';

const appJS = fs.readFileSync('public/js/app.js', 'utf8');
const appHTML = fs.readFileSync('public/app.html', 'utf8');

// Extract OFFLINE_DICTIONARY
const start = appJS.indexOf('const OFFLINE_DICTIONARY = {');
const koEndLine = appJS.indexOf('\uC74C\uC808\uC744 \uD074\uB9AD\uD558\uC5EC \uBC1C\uC74C\uC744 \uB4E4\uC5B4\uBCF4\uC138\uC694'); // Korean hero key
const endLineEnd = appJS.indexOf('};', koEndLine);
const dictCode = 'var OFFLINE_DICTIONARY = ' + appJS.substring(start + 'const OFFLINE_DICTIONARY = '.length, endLineEnd + 2);

const tmpFile = 'C:\\Users\\HP\\AppData\\Local\\Temp\\opencode\\test_dict_app.js';
fs.writeFileSync(tmpFile, dictCode + '\n;module.exports = OFFLINE_DICTIONARY;');
const dict = require(tmpFile);

// Collect all keys from last occurrence of each language
const allKeys = new Set();
// Use Japanese as reference (SET 2 has most keys)
for (const key of Object.keys(dict['ja'] || {})) {
  allKeys.add(key);
}

// Extract all data-tr values from app.html
const dataTrMatches = appHTML.matchAll(/data-tr="([^"]+)"/g);
const usedKeys = new Set();
for (const m of dataTrMatches) usedKeys.add(m[1]);

console.log('=== data-tr keys in app.html NOT in OFFLINE_DICTIONARY (ja reference) ===');
let missingCount = 0;
for (const key of usedKeys) {
  // Check if key exists in any language's dictionary
  let exists = false;
  for (const lang of Object.keys(dict)) {
    if (dict[lang][key] !== undefined) { exists = true; break; }
  }
  if (!exists) {
    console.log('  MISSING: ' + key);
    missingCount++;
  }
}
console.log(`Total missing: ${missingCount}`);
