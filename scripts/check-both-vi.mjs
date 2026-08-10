import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

// Find ALL vi sections with their boundaries
const sections = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i] === '  "vi": {') {
    let depth = 1;
    for (let j = i + 1; j < lines.length && depth > 0; j++) {
      for (let k = 0; k < lines[j].length; k++) {
        if (lines[j][k] === '{') depth++;
        else if (lines[j][k] === '}') depth--;
      }
      if (depth === 0) {
        sections.push({ start: i, end: j });
        break;
      }
    }
  }
}

console.log(`Found ${sections.length} vi sections`);
sections.forEach((s, idx) => console.log(`  [${idx}] lines ${s.start+1}-${s.end+1}`));

// FAQ answer keys to check
const answerKeys = [
  'MandarinCourse uses browser-native Speech Recognition',
  "Yes! MandarinCourse is a Progressive Web App",
  'The tone visualizer captures',
  'The flashcard review deck',
  'Sign up with email for 7 days free',
  'MandarinCourse covers HSK 1 through HSK 9',
  'MandarinCourse focuses on real speaking practice',
  'Yes, you can cancel your Premium subscription',
];

// For each section, check which FAQ translations exist
for (let sIdx = 0; sIdx < sections.length; sIdx++) {
  const { start, end } = sections[sIdx];
  console.log(`\n=== Section ${sIdx} (lines ${start+1}-${end+1}) ===`);
  
  // Check question keys
  const qKeys = [
    'Frequently Asked Questions',
    'Direct answers about our features',
    'How does the AI Speaking Tutor grade',
    'Can I use MandarinCourse offline',
    'How does the Tone Pitch Visualizer',
    'What is the Spaced Repetition System',
    'Is MandarinCourse free',
    'What HSK levels does MandarinCourse cover',
    'Is this better than Duolingo',
    'Can I cancel my Premium subscription',
    'Show all FAQ',
  ];
  
  for (const qKey of qKeys) {
    let found = false;
    for (let i = start; i <= end; i++) {
      if (lines[i].includes(qKey)) {
        found = true;
        const colonIdx = lines[i].indexOf('":"');
        if (colonIdx > 0 && colonIdx < lines[i].length - 3) {
          const val = lines[i].substring(colonIdx + 3).replace(/",?$/, '').substring(0, 50);
          console.log(`  Q: ${qKey.substring(0, 50)}... => ${val}...`);
        } else {
          console.log(`  Q: ${qKey.substring(0, 50)}... => (no value, line: ${lines[i].substring(0, 80)})`);
        }
        break;
      }
    }
    if (!found) console.log(`  Q: ${qKey.substring(0, 50)}... => NOT FOUND`);
  }
  
  // Check answer keys
  for (const aKey of answerKeys) {
    let found = false;
    for (let i = start; i <= end; i++) {
      if (lines[i].includes(aKey.substring(0, 30))) {
        found = true;
        const colonIdx = lines[i].indexOf('":"');
        if (colonIdx > 0 && colonIdx < lines[i].length - 3) {
          const val = lines[i].substring(colonIdx + 3).replace(/",?$/, '').substring(0, 50);
          console.log(`  A: ${aKey.substring(0, 50)}... => ${val}...`);
        } else {
          console.log(`  A: ${aKey.substring(0, 50)}... => (no value)`);
        }
        break;
      }
    }
    if (!found) console.log(`  A: ${aKey.substring(0, 50)}... => NOT FOUND`);
  }
}
