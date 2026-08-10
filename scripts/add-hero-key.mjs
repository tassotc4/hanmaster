import fs from 'fs';

let code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

// Find the last vi block
let lastViStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) lastViStart = i;
}

// Find where "Pinyin Chart" entry is in the last vi block
const key = 'Click any syllable to hear its pronunciation. Master Mandarin initials, finals, and tones — the foundation of Chinese pronunciation.';
const viValue = 'Nhấn vào âm tiết bất kỳ để nghe cách phát âm. Nắm vững thanh mẫu, vận mẫu và thanh điệu — nền tảng của phát âm tiếng Trung.';

// Search for "Pinyin Chart" or "Interactive Pinyin Chart" in the last vi block
for (let i = lastViStart; i < lines.length; i++) {
  if (lines[i].includes('"Pinyin Chart"') && !lines[i].includes('Interactive')) {
    // Insert after this line
    const indent = '    ';
    const newLine = `${indent}"${key}": "${viValue}",`;
    lines.splice(i, 0, newLine);
    console.log(`Inserted at line ${i+1}`);
    break;
  }
}

code = lines.join('\n');
fs.writeFileSync('public/js/app.js', code, 'utf8');
console.log('Done');
