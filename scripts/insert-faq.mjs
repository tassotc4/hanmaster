import fs from 'fs';

let content = fs.readFileSync('public/js/app.js', 'utf8');
const translations = JSON.parse(fs.readFileSync('scripts/faq-translations-final.json', 'utf8'));

function escapeJson(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
}

// Build insertion text per language (entries only, no leading comma)
const insertions = {};
for (const [lang, dict] of Object.entries(translations)) {
  const entries = Object.entries(dict);
  if (entries.length === 0) continue;
  insertions[lang] = entries.map(([k, v]) => `    "${escapeJson(k)}":"${escapeJson(v)}"`).join(',\n');
}

const langOrder = ['es', 'fr', 'de', 'pt', 'it', 'ru', 'vi', 'ja', 'ko'];

// Strategy: find each language section in the OFFLINE_DICTIONARY,
// identify the closing "  }," and insert new entries before it
// with proper comma handling

for (const lang of langOrder) {
  const insertText = insertions[lang];
  if (!insertText) { console.log(`Skipping ${lang}`); continue; }

  // Find all occurrences of "LANG": { in the file
  const regex = new RegExp(`"${lang}"\\s*:\\s*\\{`, 'g');
  let match;
  let lastOccurrence = -1;
  while ((match = regex.exec(content)) !== null) {
    lastOccurrence = match.index;
  }

  if (lastOccurrence === -1) {
    console.log(`${lang}: section not found`);
    continue;
  }

  // From the opening brace, find the matching closing }
  const openBrace = content.indexOf('{', lastOccurrence);
  let depth = 0;
  let closeBrace = -1;
  for (let i = openBrace; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) { closeBrace = i; break; }
    }
  }

  if (closeBrace === -1) {
    console.log(`${lang}: no matching closing brace`);
    continue;
  }

  // Get the text before the closing brace
  const sectionContent = content.substring(openBrace + 1, closeBrace).trimEnd();

  // Check if the last line ends with a comma
  const lastLine = sectionContent.split('\n').pop().trim();
  const hasTrailingComma = lastLine.endsWith(',');

  // Build replacement
  // If last line has comma, we insert after it without extra comma
  // If not, we add a comma before the new entries
  const prefix = hasTrailingComma ? '\n' : '\n  ,\n';
  
  // The text to insert: newline + indentation + new entries + newline + closing
  const replacement = prefix + insertText + '\n  ';

  // Replace the closing "}" (with optional comma after)
  // We need to handle "  }" possibly followed by "," then newline and next section
  const afterClose = content.substring(closeBrace);
  
  // The close is somewhere inside "  },\n  \"nextLang\": {" or similar
  // We'll just replace the closeBrace character
  content = content.substring(0, closeBrace) + replacement + afterClose;

  console.log(`${lang}: inserted before closing brace`);
}

fs.writeFileSync('public/js/app.js', content, 'utf8');
console.log('\nDone! All languages inserted.');
