import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

const viSections = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"vi":')) {
    viSections.push(i + 1);
  }
}
console.log('vi sections found at lines:', viSections.join(', '));

// Find the last one and show its first 20 and last 20 lines
const lastIdx = viSections[viSections.length - 1] - 1;
console.log('\nLast vi section starts at line', lastIdx + 1);
console.log('\n--- First 5 lines ---');
for (let i = lastIdx; i < Math.min(lastIdx + 5, lines.length); i++) {
  console.log((i + 1) + ': ' + lines[i].substring(0, 120));
}

// Find where this vi block ends
let viEnd = lastIdx;
let depth = 1;
for (let j = lastIdx + 1; j < lines.length && depth > 0; j++) {
  for (let k = 0; k < lines[j].length; k++) {
    if (lines[j][k] === '{') depth++;
    else if (lines[j][k] === '}') depth--;
  }
  if (depth === 0) {
    viEnd = j;
    break;
  }
}
console.log('\n--- Last 5 lines (ends at line', viEnd + 1, ') ---');
for (let i = Math.max(lastIdx, viEnd - 4); i <= viEnd; i++) {
  console.log((i + 1) + ': ' + lines[i].substring(0, 120));
}

// Now check for FAQ strings within this block
console.log('\n--- FAQ-related entries in this vi block ---');
const faqKeys = [
  'Frequently Asked Questions',
  'Learn More',
  'Direct answers about',
  'Show all',
  'How does the AI',
  'Can I use MandarinCourse',
  'How does the Tone',
  'What is the Spaced',
  'Is MandarinCourse free',
  'What HSK levels',
  'Is this better',
  'Can I cancel',
  'That\'s a great question',
  'MandarinCourse is a Progressive',
  'It captures the pitch',
  'The flashcard deck',
  'MandarinCourse is not free',
  'MandarinCourse covers HSK',
  'MandarinCourse focuses on',
  'Yes, you can cancel',
  'Pinyin Chart',
  'Interactive Pinyin Chart',
];

for (let i = lastIdx; i <= viEnd; i++) {
  for (const key of faqKeys) {
    if (lines[i].includes(key.substring(0, 15))) {
      console.log((i + 1) + ': ' + lines[i].substring(0, 140));
      break;
    }
  }
}
