import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

const langs = ['es', 'fr', 'de', 'pt', 'it', 'ru', 'vi', 'ja', 'ko', 'en'];
const langLines = {};

for (let i = 0; i < lines.length; i++) {
  const trimmed = lines[i].trim();
  for (const lang of langs) {
    // Match "lang": {
    const re = new RegExp(`^"${lang}"\\s*:\\s*\\{$`);
    if (re.test(trimmed)) {
      if (!langLines[lang]) langLines[lang] = [];
      langLines[lang].push(i + 1); // 1-indexed
    }
  }
}

for (const lang of Object.keys(langLines).sort()) {
  const positions = langLines[lang];
  const lastPos = positions[positions.length - 1];
  // Find where this block ends
  let depth = 0;
  let endLine = lastPos;
  let started = false;
  for (let i = lastPos - 1; i < lines.length; i++) {
    const line = lines[i];
    for (const ch of line) {
      if (ch === '{') { depth++; started = true; }
      if (ch === '}') depth--;
    }
    if (started && depth === 0) { endLine = i + 1; break; }
  }
  
  // Check if hero description key exists in the LAST block
  let hasKey = false;
  for (let i = lastPos - 1; i < endLine; i++) {
    if (lines[i].includes('Click any syllable to hear its pronunciation. Master Mandarin')) {
      hasKey = true;
      break;
    }
  }
  
  console.log(`${lang}: ${positions.length} occurrences, last at line ${lastPos}, ends at line ${endLine}, has hero key: ${hasKey}`);
}
