import fs from 'fs';
import vm from 'vm';

const html = fs.readFileSync('public/pinyin-chart.html', 'utf8');

// Extract the PC_TRANSLATIONS definition
const match = html.match(/const PC_TRANSLATIONS = (\{[\s\S]*?\});/);
if (!match) {
  console.log('PC_TRANSLATIONS not found');
  process.exit(1);
}

const code = 'var PC_TRANSLATIONS = ' + match[1] + ';';

try {
  const script = new vm.Script(code);
  const sandbox = {};
  vm.createContext(sandbox);
  script.runInContext(sandbox);
  
  const dict = sandbox.PC_TRANSLATIONS;
  console.log('PC_TRANSLATIONS parses OK');
  console.log('Languages:', Object.keys(dict).join(', '));
  
  for (const lang of Object.keys(dict)) {
    const keys = Object.keys(dict[lang]);
    console.log(`  ${lang}: ${keys.length} keys`);
    
    // Check for specific keys
    const checks = [
      'Interactive Pinyin Chart',
      'Click any syllable to hear its pronunciation. Master Mandarin initials, finals, and tones — the foundation of Chinese pronunciation.',
      'Click to play',
      '1st Tone',
    ];
    for (const c of checks) {
      const val = dict[lang][c];
      if (val) {
        console.log(`    has "${c.substring(0, 30)}..." => ${val.substring(0, 40)}`);
      } else {
        console.log(`    MISSING: "${c.substring(0, 30)}..."`);
      }
    }
  }
} catch(e) {
  console.error('Parse error:', e.message);
  console.error('At line ~' + e.lineNumber);
}
