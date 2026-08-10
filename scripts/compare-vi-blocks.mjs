import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

// Find ALL vi blocks
const viBlocks = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i] === '  "vi": {') {
    let depth = 1;
    let content = '';
    for (let j = i + 1; j < lines.length && depth > 0; j++) {
      content += lines[j] + '\n';
      for (let k = 0; k < lines[j].length; k++) {
        if (lines[j][k] === '{') depth++;
        if (lines[j][k] === '}') depth--;
      }
      if (depth === 0) {
        viBlocks.push({ start: i, end: j, content });
        break;
      }
    }
  }
}

console.log(`Found ${viBlocks.length} vi blocks`);

for (let idx = 0; idx < viBlocks.length; idx++) {
  const block = viBlocks[idx];
  console.log(`\n=== Block ${idx} (lines ${block.start+1}-${block.end+1}) ===`);
  console.log(`Content size: ${block.content.length} chars`);
  
  // Extract keys
  const keys = new Set();
  const kvRegex = /^\s+"([^"]+?)"\s*:/gm;
  let m;
  while ((m = kvRegex.exec(block.content)) !== null) {
    keys.add(m[1]);
  }
  console.log(`Keys: ${keys.size}`);
}

// Compare block 0 vs block 1
const block0Keys = new Set();
const block1Keys = new Set();
const kvRegex2 = /^\s+"([^"]+?)"\s*:/gm;

let m2;
kvRegex2.lastIndex = 0;
while ((m2 = kvRegex2.exec(viBlocks[0].content)) !== null) block0Keys.add(m2[1]);

kvRegex2.lastIndex = 0;
while ((m2 = kvRegex2.exec(viBlocks[1].content)) !== null) block1Keys.add(m2[1]);

// Keys in block 0 but not in block 1 (these went missing!)
const missingInBlock1 = [...block0Keys].filter(k => !block1Keys.has(k));
console.log(`\nKeys in Block 0 but NOT in Block 1 (went missing): ${missingInBlock1.length}`);
missingInBlock1.sort().forEach(k => {
  // Find the value from block 0
  const regex = new RegExp(`^\\s+"${escapeRegex(k)}"\\s*:\\s*"`, 'm');
  const keyLine = viBlocks[0].content.match(new RegExp(`^\\s+"${escapeRegex(k)}"\\s*:\\s*"[^"]+"`, 'm'));
  const val = keyLine ? keyLine[0].substring(0, 100) : '(not found)';
  console.log(`  "${k}" => ${val}`);
});

// Also count keys in block 1 but not in block 0 (newly added)
const newInBlock1 = [...block1Keys].filter(k => !block0Keys.has(k));
console.log(`\nKeys in Block 1 but NOT in Block 0 (new): ${newInBlock1.length}`);

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
