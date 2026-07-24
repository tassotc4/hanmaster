import fs from 'fs';

const html = fs.readFileSync('public/app.html', 'utf8');
const lines = html.split('\n');

// Find the main inline <script> tag (not the GA one-liner)
let startIdx = -1;
let endIdx = -1;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line === '<script>' && i > 100) { // skip early head scripts
    startIdx = i;
  }
  if (startIdx !== -1 && line === '</script>' && i > startIdx && i > 600) {
    endIdx = i;
    break;
  }
}

if (startIdx === -1 || endIdx === -1) {
  console.log('Could not find script boundaries');
  process.exit(1);
}

const jsContent = lines.slice(startIdx + 1, endIdx).join('\n');
fs.writeFileSync('public/js/app.js', jsContent, 'utf8');

const newLines = [...lines.slice(0, startIdx), '<script src="/js/app.js"></script>', ...lines.slice(endIdx + 1)];
fs.writeFileSync('public/app.html', newLines.join('\n'), 'utf8');

console.log(`Extracted ${jsContent.split('\n').length} lines of JS to public/js/app.js`);
console.log(`app.html reduced from ${lines.length} to ${newLines.length} lines`);
