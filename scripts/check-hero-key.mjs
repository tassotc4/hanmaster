import fs from 'fs';

const html = fs.readFileSync('public/pinyin-chart.html', 'utf8');

// Find the Vietnamese section
const viMatch = html.match(/"vi":\s*\{([^}]+)\}/);
if (viMatch) {
  const viBlock = viMatch[1];
  const key = 'Click any syllable to hear its pronunciation. Master Mandarin initials, finals, and tones — the foundation of Chinese pronunciation.';
  const found = viBlock.includes(key);
  console.log('Key in vi dict:', found);
  if (!found) {
    // Show what keys are in vi dict (first 500 chars)
    console.log('vi dict keys (first 500 chars):', viBlock.substring(0, 500));
  }
} else {
  console.log('Could not find vi section in PC_TRANSLATIONS');
  // Try alternative regex
  const fullMatch = html.match(/PC_TRANSLATIONS\s*=\s*\{([\s\S]*?)\};/);
  if (fullMatch) {
    console.log('Found PC_TRANSLATIONS, length:', fullMatch[1].length);
    const viIdx = fullMatch[1].indexOf('"vi":');
    if (viIdx >= 0) {
      const fromVi = fullMatch[1].substring(viIdx);
      console.log('From vi: (first 300 chars)', fromVi.substring(0, 300));
    }
  }
}
