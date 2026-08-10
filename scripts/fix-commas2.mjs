import fs from 'fs';

let code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');
let fixed = 0;

for (let i = 0; i < lines.length - 1; i++) {
  const curMatch = lines[i].match(/^\s+"[^"]+"\s*:\s*"[^"]*"$/);
  if (!curMatch) continue;
  
  // Look ahead past blank lines for the next meaningful line
  let nextMeaningful = -1;
  for (let j = i + 1; j < lines.length; j++) {
    if (lines[j].trim()) {
      nextMeaningful = j;
      break;
    }
  }
  
  if (nextMeaningful === -1) continue; // no more lines
  
  const nextLineTrimmed = lines[nextMeaningful].trim();
  const nextIsKv = nextLineTrimmed.startsWith('"') && nextLineTrimmed.includes('":');
  
  // Also check if it's a closing brace
  const nextIsClosing = nextLineTrimmed === '},' || nextLineTrimmed === '}';
  
  if (nextIsKv && !nextIsClosing) {
    lines[i] = lines[i] + ',';
    fixed++;
    console.log(`  Fixed line ${i+1}: ${lines[i].substring(0, 80)}`);
  }
}

if (fixed > 0) {
  code = lines.join('\n');
  fs.writeFileSync('public/js/app.js', code, 'utf8');
  console.log(`\nFixed ${fixed} missing commas`);
} else {
  console.log('No missing commas found');
}
