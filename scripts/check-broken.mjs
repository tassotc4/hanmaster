import fs from 'fs';

const content = fs.readFileSync('public/js/vocab-extra-data.js', 'utf8');
const lines = content.split('\n');
let brokenCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line || line.startsWith('const ') || line === '];') continue;

  // Count unescaped single quotes
  let count = 0;
  for (let j = 0; j < line.length; j++) {
    if (line[j] === "'" && (j === 0 || line[j-1] !== '\\')) {
      count++;
    }
  }

  if (count % 2 !== 0) {
    // Odd count could still be valid if the string delimiters match.
    // Check: is the problematic ' inside a double-quoted string?
    // If there's a "dá'àn" pattern (double-quoted), the inner ' is fine.
    // But if it's 'dá'àn' (single-quoted), it's broken.
    
    // Strategy: find the SINGLE-QUOTED segments and count quotes within them
    let inDouble = false;
    let inSingle = false;
    let singleQuoteCount = 0;
    
    for (let j = 0; j < line.length; j++) {
      const c = line[j];
      const prev = j > 0 ? line[j-1] : '';
      
      if (c === '"' && !inSingle) {
        inDouble = !inDouble;
      } else if (c === "'" && prev !== '\\' && !inDouble) {
        inSingle = !inSingle;
        singleQuoteCount++;
      }
    }
    
    if (singleQuoteCount % 2 !== 0) {
      console.log(`BROKEN line ${i+1} (${singleQuoteCount} unescaped single quotes): ${line.substring(0, 120)}`);
      brokenCount++;
    }
  }
}

console.log(`\nBroken lines: ${brokenCount}`);
