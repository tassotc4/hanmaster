import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

let inVi = false;
let depth = 0;
let viEnd = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) {
    inVi = true;
    depth = 0;
  }
  if (inVi) {
    for (let k = 0; k < lines[i].length; k++) {
      if (lines[i][k] === '{') depth++;
      if (lines[i][k] === '}') depth--;
    }
    if (depth === 0) {
      viEnd = i;
      break;
    }
  }
}

console.log(`vi block ends at line ${viEnd + 1}`);
console.log(`Line ${viEnd}: ${JSON.stringify(lines[viEnd])}`);
console.log(`Line ${viEnd + 1}: ${JSON.stringify(lines[viEnd + 1])}`);

// Also check the last few lines of the whole file
const lastLines = lines.slice(-5);
console.log('\nLast 5 lines:');
lastLines.forEach((l, i) => console.log(`  ${lines.length - 5 + i + 1}: ${JSON.stringify(l)}`));
