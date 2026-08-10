import fs from 'fs';

const html = fs.readFileSync('public/pinyin-chart.html', 'utf8');

// Find PC_TRANSLATIONS
const match = html.match(/const PC_TRANSLATIONS = \{([\s\S]*?)\};/);
if (!match) {
  console.log('PC_TRANSLATIONS not found');
  process.exit(1);
}

const objText = match[1];

// Check for each language section
const langs = ['es', 'fr', 'de', 'pt', 'it', 'ru', 'vi', 'ja', 'ko'];
for (const lang of langs) {
  const pattern = `"${lang}":\\s*\\{`;
  const re = new RegExp(pattern);
  if (re.test(objText)) {
    // Find the closing of this section
    const startIdx = objText.search(re);
    const fromStart = objText.substring(startIdx);
    
    // Count braces to find the end
    let depth = 0;
    let endIdx = 0;
    for (let i = 0; i < fromStart.length; i++) {
      if (fromStart[i] === '{') depth++;
      if (fromStart[i] === '}') depth--;
      if (depth === 0) { endIdx = startIdx + i + 1; break; }
    }
    
    const section = objText.substring(startIdx, endIdx);
    const keyCount = (section.match(/"[^"]+":\s*"[^"]*"/g) || []).length;
    const hasHeroKey = section.includes('Click any syllable to hear its pronunciation');
    console.log(`${lang}: ${keyCount} keys, has hero desc: ${hasHeroKey}`);
    
    // Check if the section ends properly
    const trimmedEnd = section.trim();
    console.log(`  ends with: ${JSON.stringify(trimmedEnd.substring(Math.max(0, trimmedEnd.length - 20)))}`);
  } else {
    console.log(`${lang}: NOT FOUND`);
  }
}
