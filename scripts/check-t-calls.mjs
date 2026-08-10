import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');

// Check specific strings
const checks = [
  "t('All'",
  't("All"',
  "t('Rank'",
  "t('Badges'",
  "t('Day Streak'",
  "t('No activity yet'",
  "t('Share your code'",
  "t('Ready!'",
  "t('XP'",
  "t('Level'",
];

for (const s of checks) {
  const idx = code.indexOf(s);
  if (idx >= 0) {
    const start = Math.max(0, idx - 20);
    const end = Math.min(code.length, idx + 60);
    console.log(`FOUND: ${s} -> ${JSON.stringify(code.substring(start, end))}`);
  } else {
    console.log(`NOT FOUND: ${s}`);
  }
}
