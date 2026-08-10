import fs from 'fs';

// Read the app.js content
let code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

const key = 'Click any syllable to hear its pronunciation. Master Mandarin initials, finals, and tones — the foundation of Chinese pronunciation.';

const translations = {
  'es': 'Haz clic en cualquier sílaba para escuchar su pronunciación. Domina las iniciales, finales y tonos del mandarín — la base de la pronunciación china.',
  'fr': 'Cliquez sur n\'importe quelle syllabe pour entendre sa prononciation. Maîtrisez les initiales, finales et tons du mandarin — les bases de la prononciation chinoise.',
  'de': 'Klicken Sie auf eine beliebige Silbe, um ihre Aussprache zu hören. Meistern Sie die Initialen, Finalen und Töne des Mandarin — die Grundlage der chinesischen Aussprache.',
  'pt': 'Clique em qualquer sílaba para ouvir sua pronúncia. Domine as iniciais, finais e tons do mandarim — a base da pronúncia chinesa.',
  'it': 'Clicca su qualsiasi sillaba per ascoltare la sua pronuncia. Padroneggia iniziali, finali e toni del mandarino — le basi della pronuncia cinese.',
  'ru': 'Нажмите на любой слог, чтобы услышать его произношение. Освойте инициали, финали и тоны путунхуа — основу китайского произношения.',
  'vi': 'Nhấn vào âm tiết bất kỳ để nghe cách phát âm. Nắm vững thanh mẫu, vận mẫu và thanh điệu — nền tảng của phát âm tiếng Trung.',
  'ja': '任意の音節をクリックして発音を聞きます。中国語発音の基礎である、母音・子音・声調をマスターしましょう。',
  'ko': '음절을 클릭하여 발음을 들어보세요. 중국어 발음의 기초인 성모, 운모, 성조를 마스터하세요.',
};

// Find the LAST occurrence of each language block
const langPatterns = {};
for (const lang of Object.keys(translations)) {
  // Build a regex to match lines like:   "es": {
  langPatterns[lang] = new RegExp(`^\\s*"${lang}"\\s*:\\s*\\{`);
}

// Track the last line number for each language
const lastLangLine = {};
for (let i = 0; i < lines.length; i++) {
  for (const lang of Object.keys(langPatterns)) {
    if (langPatterns[lang].test(lines[i])) {
      lastLangLine[lang] = i; // 0-indexed
    }
  }
}

// For each language, find the end of its block and insert the key before the closing brace
const insertions = []; // { index, text }

for (const lang of Object.keys(translations)) {
  const startLine = lastLangLine[lang];
  if (startLine === undefined) {
    console.log(`WARNING: ${lang} not found`);
    continue;
  }

  // Find the matching closing brace for this language block
  let depth = 0;
  let endLine = -1;
  let started = false;
  for (let i = startLine; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === '{') { depth++; started = true; }
      if (ch === '}') depth--;
    }
    if (started && depth === 0) {
      endLine = i;
      break;
    }
  }

  if (endLine === -1) {
    console.log(`WARNING: Could not find end for ${lang}`);
    continue;
  }

  // Check if the key already exists in this block
  let exists = false;
  for (let i = startLine; i <= endLine; i++) {
    if (lines[i].includes(key)) {
      exists = true;
      break;
    }
  }

  if (exists) {
    console.log(`${lang}: key already exists, skipping`);
    continue;
  }

  // Insert the new key-value pair BEFORE the closing "  },"
  // The closing line is typically "  },"
  const indent = '    ';
  const newLine = `${indent}"${key}": "${translations[lang]}",`;

  // Insert at the beginning of the closing brace line
  insertions.push({
    index: endLine,
    line: newLine,
    lang,
    endLineContent: lines[endLine],
  });

  console.log(`${lang}: inserting at line ${endLine + 1} before "${lines[endLine].trim()}"`);
}

// Apply insertions in reverse order to preserve line numbers
insertions.sort((a, b) => b.index - a.index);

for (const ins of insertions) {
  lines.splice(ins.index, 0, ins.line);
}

// Write back
code = lines.join('\n');
fs.writeFileSync('public/js/app.js', code);
console.log(`\nDone! Added ${insertions.length} translations.`);
