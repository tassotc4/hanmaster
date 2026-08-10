import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');

// Check specific English strings that the user sees
const checks = [
  'Click to view vocabulary',
  'All',
  'Rank',
  'XP',
  'Level',
  'Day Streak',
  'Badges',
  'Answer one question daily',
  'Ready!',
  'Share your code',
  'No activity yet',
  'Character 1 of 10',
  'Having read ten thousand books',
  'Hello',
  'Goodbye',
  'Thank you',
  'Tone Pitch Visualizer',
  'Speak to visualize tone',
  'Pitch curve plots here',
];

// For exact matches only (to avoid false positives)
let viBlock = code.substring(code.indexOf('"vi":'));
viBlock = viBlock.substring(0, viBlock.indexOf('  "ja":'));

for (const s of checks) {
  // Search for exact key pattern
  const escaped = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`"${escaped}"\\s*:`);
  const match = viBlock.match(re);
  if (match) {
    // Extract the full line
    const idx = match.index;
    const lineStart = viBlock.lastIndexOf('\n', idx) + 1;
    const lineEnd = viBlock.indexOf('\n', idx);
    const line = viBlock.substring(lineStart, lineEnd).trim();
    console.log(`OK: "${s}" => ${line.substring(0, 100)}`);
  } else {
    console.log(`MISSING: "${s}"`);
  }
}
