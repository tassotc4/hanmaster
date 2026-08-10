import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

// Find the last vi block
let lastViStart = -1, lastViEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) {
    lastViStart = i;
    let depth = 1;
    for (let j = i + 1; j < lines.length && depth > 0; j++) {
      for (let k = 0; k < lines[j].length; k++) {
        if (lines[j][k] === '{') depth++;
        else if (lines[j][k] === '}') depth--;
      }
      if (depth === 0) {
        lastViEnd = j;
        break;
      }
    }
  }
}

const viLines = lines.slice(lastViStart + 1, lastViEnd);

// Check for specific strings
const checks = [
  'Click to view vocabulary',
  'All',
  'Rank',
  'XP',
  'Level',
  'Day Streak',
  'Badges',
  'Answer one question daily',
  'Ready',
  'Share your code',
  'No activity yet',
  'Character 1 of 10',
  'Having read ten thousand books',
  'Biểu đồ Tiến độ',
];

for (const s of checks) {
  const found = viLines.some(l => l.includes(s));
  if (found) {
    const line = viLines.find(l => l.includes(s));
    console.log(`FOUND: "${s}" => ${line.replace(/^\s+/, '').substring(0, 100)}`);
  } else {
    console.log(`NOT IN VI DICT: "${s}"`);
  }
}
