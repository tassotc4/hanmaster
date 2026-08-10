import fs from 'fs';

const html = fs.readFileSync('public/pinyin-chart.html', 'utf8');

console.log('Has data-tr on p:', html.includes('data-tr="Click any syllable'));
console.log('Has legend translations:', html.includes('data-tr="Click to play"'));
console.log('Has tone button translations:', html.includes('data-tr="1st Tone"'));
console.log('Has PC_TRANSLATIONS:', html.includes('PC_TRANSLATIONS'));
console.log('Has apply translations code:', html.includes('// Apply translations'));

// Check the end of the file
const last200 = html.slice(-200);
console.log('\n--- Last 200 chars ---');
console.log(last200);
