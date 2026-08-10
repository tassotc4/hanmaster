import fs from 'fs';

// Read app.js
let content = fs.readFileSync('public/js/app.js', 'utf8');
const lines = content.split('\n');

// Read translations
const translations = JSON.parse(fs.readFileSync('scripts/faq-translations-final.json', 'utf8'));

// Map language codes to their order within SET 2
const langOrder = ['vi', 'fr', 'de', 'pt', 'it', 'ru', 'es', 'ja', 'ko'];

// Escaping for JSON-style strings
function escapeJson(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
}

// For each language, find the closing } of SET 2 section and insert before it
let insertions = [];

for (const lang of langOrder) {
  const dict = translations[lang];
  if (!dict) { console.log(`No translations for ${lang}`); continue; }

  // Build the entries to insert
  const entries = Object.entries(dict);
  const linesToInsert = entries.map(([k, v]) => `    "${escapeJson(k)}":"${escapeJson(v)}"`);
  const insertText = ',\n' + linesToInsert.join(',\n');

  insertions.push({ lang, insertText });
}

// Now find positions of each section's closing in SET 2
// Strategy: find "  },\n  \"<next_lang>\": {" pattern for each section

// Build pattern sequence
const sectionEnds = {};
for (let i = 0; i < langOrder.length; i++) {
  const lang = langOrder[i];
  const nextLang = langOrder[i + 1];
  
  if (nextLang) {
    // Find "},\n  \"nextLang\": {"
    const searchStr = `  },\n  "${nextLang}": {`;
    let idx = content.indexOf(searchStr);
    if (idx === -1) {
      console.log(`Could not find end of ${lang} (searching for ${nextLang})`);
      continue;
    }
    // The }, is 3 chars before the start of searchStr
    sectionEnds[lang] = idx + 2; // position of the closing }
  }
}

// For the last language (ko), find the end differently
// Look for "  },\n" that is followed by non-language-key content
// OR find ";  }" which closes OFFLINE_DICTIONARY
// Actually, let's search for the pattern after ko section
// Find the first non-comment, non-whitespace line after ko's } that's not a language key
// We can search for "  }\n  }\nconst " or similar

// Let me find the KO end by looking for where the SET 2 object closes
// After all language sections, the OFFLINE_DICTIONARY closes with };
// But within it, the last language section closes with },
// and the whole dictionary closes with };

// Last language in SET 2 should be ko
// Find "  }\n" followed by "\n//" or "\nconst" or "\nfunction" etc.
const koCloseSearch = content.match(/\},\n\n\/\/|\},\nconst |\},\nfunction /);
if (koCloseSearch) {
  const idx = koCloseSearch.index;
  // Find the } at position before the match
  sectionEnds['ko'] = idx + 1; // the } is at idx+1 (0-indexed from },)
} else {
  console.log('Could not find end of ko section');
}

console.log('Insertions found:');
for (const [lang, pos] of Object.entries(sectionEnds)) {
  console.log(`  ${lang}: position ${pos} (char ${content.substring(pos-3, pos+5)})`);
}
