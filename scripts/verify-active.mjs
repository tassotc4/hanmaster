import fs from 'fs';
import vm from 'vm';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const start = code.indexOf('const OFFLINE_DICTIONARY = {');
const end = code.indexOf('};', start) + 2;
const dictCode = code.substring(start, end).replace('const OFFLINE_DICTIONARY', 'this.OFFLINE_DICTIONARY');

const script = new vm.Script(dictCode);
const sandbox = {};
vm.createContext(sandbox);
script.runInContext(sandbox);

const dict = sandbox.OFFLINE_DICTIONARY;

if (!dict) {
  console.error('Failed to extract dictionary');
  process.exit(1);
}

console.log('Key counts per language:');
for (const lang of ['es','fr','de','pt','it','ru','vi','ja','ko']) {
  if (dict[lang]) {
    console.log(`  ${lang}: ${Object.keys(dict[lang]).length} keys`);
  } else {
    console.log(`  ${lang}: NOT FOUND`);
  }
}

console.log('\nChecking specific translations:');
const tests = [
  ['es', 'Pinyin Chart'],
  ['vi', 'Pinyin Chart'],
  ['vi', 'Interactive Pinyin Chart'],
  ['es', 'Show all FAQ'],
  ['fr', 'Show all FAQ'],
  ['ja', 'Pinyin Chart'],
  ['ko', 'Pinyin Chart'],
  ['vi', 'How does the AI Speaking Tutor grade my pronunciation?'],
];

let allOk = true;
for (const [lang, key] of tests) {
  const val = dict[lang]?.[key];
  if (val) {
    console.log(`  OK [${lang}] "${key}" = "${val.substring(0, 60)}..."`);
  } else {
    console.log(`  ** MISSING [${lang}] "${key}"`);
    allOk = false;
  }
}

if (allOk) console.log('\nAll translations active!');
else console.log('\nSome translations missing!');
