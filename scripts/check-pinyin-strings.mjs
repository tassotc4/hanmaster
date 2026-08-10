import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

// Find the last vi block
let lastViStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) lastViStart = i;
}

// Check pinyin-chart related strings
const pinyinStrings = [
  'Click to play',
  'Column / Row label',
  'Currently playing',
  '1st Tone',
  '2nd Tone',
  '3rd Tone',
  '4th Tone',
  'Neutral',
  'Search any pinyin',
];

const viLines = lines.slice(lastViStart);

for (const s of pinyinStrings) {
  const regex = new RegExp(`"${s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*:`);
  if (viLines.some(l => regex.test(l))) {
    const line = viLines.find(l => regex.test(l));
    console.log(`OK: "${s}" -> ${line.replace(/^\s+/, '').substring(0, 100)}`);
  } else {
    console.log(`MISSING: "${s}"`);
  }
}
