import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const html = fs.readFileSync('public/app.html', 'utf8');
const lines = code.split('\n');

// Find ALL t('...') and data-tr="..." strings
const allKeys = new Set();

const tRegex = /t\(['"]([^'"]+?)['"]\)/g;
let m;
while ((m = tRegex.exec(code)) !== null) {
  const s = m[1];
  if (s.length >= 3) allKeys.add(s);
}

const dtRegex = /data-tr="([^"]+)"/g;
while ((m = dtRegex.exec(html)) !== null) {
  if (m[1].length >= 3) allKeys.add(m[1]);
}

console.log(`Total translatable strings: ${allKeys.size}`);

// Get ALL language dictionary keys from the LAST block of each language
function getDictKeys(langCode) {
  let langStart = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`"${langCode}":`)) {
      langStart = i;
    }
  }
  if (langStart === -1) return new Set();
  
  const keys = new Set();
  let depth = 0;
  let inLang = false;
  for (let i = langStart; i < lines.length; i++) {
    if (lines[i].includes(`"${langCode}":`)) { inLang = true; depth = 1; continue; }
    if (inLang) {
      const kvMatch = lines[i].match(/^\s+"([^"]+?)"\s*:/);
      if (kvMatch) keys.add(kvMatch[1]);
      for (let k = 0; k < lines[i].length; k++) {
        if (lines[i][k] === '{') depth++;
        if (lines[i][k] === '}') depth--;
      }
      if (depth === 0) break;
    }
  }
  return keys;
}

const langs = ['es', 'fr', 'de', 'pt', 'it', 'ru', 'vi', 'ja', 'ko'];
const dicts = {};
for (const lang of langs) {
  dicts[lang] = getDictKeys(lang);
  console.log(`${lang}: ${dicts[lang].size} keys`);
}

// Find strings missing from ALL languages (not just vi)
const missingAll = [];
const missingVi = [];
for (const key of allKeys) {
  const missingLangs = langs.filter(l => !dicts[l].has(key));
  if (missingLangs.length === langs.length) {
    missingAll.push(key);
  } else if (!dicts.vi.has(key)) {
    missingVi.push(key);
  }
}

console.log(`\nStrings missing from ALL 9 languages: ${missingAll.length}`);
console.log(`Strings missing from Vietnamese only: ${missingVi.length}`);

if (missingVi.length > 0) {
  console.log('\nMissing from Vietnamese (first 30):');
  missingVi.sort().slice(0, 30).forEach(s => console.log(`  - "${s}"`));
}
