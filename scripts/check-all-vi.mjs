import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

const viStarts = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) viStarts.push(i);
}

console.log(`Found ${viStarts.length} vi blocks at lines: ${viStarts.map(n => n+1).join(', ')}`);

for (const start of viStarts) {
  let depth = 0;
  let end = -1;
  for (let j = start; j < lines.length; j++) {
    for (let k = 0; k < lines[j].length; k++) {
      if (lines[j][k] === '{') depth++;
      if (lines[j][k] === '}') depth--;
    }
    if (depth === 0) { end = j; break; }
  }
  console.log(`Block at line ${start+1} ends at line ${end+1}`);
  console.log(`  End line: ${JSON.stringify(lines[end])}`);
  console.log(`  Next line: ${JSON.stringify(lines[end+1])}`);
}
