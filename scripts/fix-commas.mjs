import fs from 'fs';

let code = fs.readFileSync('public/js/app.js', 'utf8');

// Find all lines ending with "...":"..." (no trailing comma) followed by next line starting with "    \""
// These are kv pairs missing a trailing comma
const lines = code.split('\n');
let fixed = 0;
for (let i = 0; i < lines.length - 1; i++) {
  // Current line: ends with ":"..." (no comma)
  // Next line: starts with whitespace and a quote (i.e., another kv pair, not closing brace)
  const curMatch = lines[i].match(/^\s+"[^"]+"\s*:\s*"[^"]*"$/);
  const nextLineTrimmed = lines[i+1].trim();
  const nextIsKv = nextLineTrimmed.startsWith('"') && nextLineTrimmed.includes('":');
  
  if (curMatch && nextIsKv) {
    // This line is missing a trailing comma
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
