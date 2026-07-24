import fs from 'fs';

const content = fs.readFileSync('public/js/vocab-extra-data.js', 'utf8');
const lines = content.split('\n');
let found = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line || line.startsWith('const ') || line === '];') continue;
  
  let count = 0;
  for (let j = 0; j < line.length; j++) {
    if (line[j] === "'" && (j === 0 || line[j-1] !== '\\')) {
      count++;
    }
  }
  if (count % 2 !== 0) {
    console.log(`Line ${i+1}: ${count} quotes: ${line.substring(0, 100)}`);
    found = true;
  }
}
if (!found) console.log('All lines have even unescaped quotes');
