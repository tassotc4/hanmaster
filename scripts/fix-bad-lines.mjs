import fs from 'fs';

let code = fs.readFileSync('public/js/app.js', 'utf8');

// Fix 1: "nhân dân tệ"\r, -> "nhân dân tệ",
code = code.replace(/"nhân dân tệ"\r,/, '"nhân dân tệ",');

// Fix 2: Check for any bare `,` on its own line
// Find lines that are just `,` or `,` with whitespace
const lines = code.split('\n');
let fixed = false;
for (let i = 0; i < lines.length; i++) {
  // Check if this line starts with the vi block pattern and has a bare comma
  if (/^\s*,?\s*$/.test(lines[i]) && lines[i].trim() === ',') {
    // Remove this bare comma line
    lines.splice(i, 1);
    fixed = true;
    console.log(`Removed bare comma at line ${i + 1}`);
  }
}

if (fixed) {
  code = lines.join('\n');
}

fs.writeFileSync('public/js/app.js', code, 'utf8');
console.log('Fixed. Checking syntax...');
