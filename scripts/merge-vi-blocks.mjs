import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');
const lines = code.split('\n');

// Find ALL vi blocks with precise line ranges
const viBlocks = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i] === '  "vi": {') {
    let depth = 1;
    const startLine = i;
    for (let j = i + 1; j < lines.length && depth > 0; j++) {
      for (let k = 0; k < lines[j].length; k++) {
        if (lines[j][k] === '{') depth++;
        if (lines[j][k] === '}') depth--;
      }
      if (depth === 0) {
        viBlocks.push({ start: startLine, end: j });
        break;
      }
    }
  }
}

console.log(`Found ${viBlocks.length} vi blocks`);

// Extract kv pairs by parsing each line of the block
function extractEntries(block) {
  const entries = [];
  for (let i = block.start + 1; i < block.end; i++) {
    const line = lines[i];
    // Match:     "key": "value",
    // Keys/values may contain escaped quotes
    const match = line.match(/^\s+"((?:[^"\\]|\\.)*)"\s*:\s*"((?:[^"\\]|\\.)*)",?\s*$/);
    if (match) {
      entries.push({
        key: match[1],
        value: match[2],
        lineIdx: i,
        raw: line
      });
    } else if (line.trim()) {
      console.log(`  WARNING: Could not parse line ${i + 1}: ${line.substring(0, 80)}`);
    }
  }
  return entries;
}

const block0Entries = extractEntries(viBlocks[0]);
const block1Entries = extractEntries(viBlocks[1]);

console.log(`\nBlock 0 entries: ${block0Entries.length}`);
console.log(`Block 1 entries: ${block1Entries.length}`);

// Build key sets
const block0Keys = new Set(block0Entries.map(e => e.key));
const block1Keys = new Set(block1Entries.map(e => e.key));

// Keys in block 0 not in block 1
const missing = block0Entries.filter(e => !block1Keys.has(e.key));
console.log(`\nKeys in Block 0 but NOT in Block 1: ${missing.length}`);

// Generate insertion text
const insertionLines = [];
for (const entry of missing) {
  insertionLines.push(`    "${entry.key}": "${entry.value}",`);
}

// Insert before the last line (which is `  },`)
const insertBefore = viBlocks[1].end;
const closingLine = lines[insertBefore];
const indent = '  ';

// Create new lines array
const newLines = [
  ...lines.slice(0, insertBefore),
  ...insertionLines,
  closingLine,
  ...lines.slice(insertBefore + 1)
];

console.log(`\nInserting ${insertionLines.length} lines before line ${insertBefore + 1}`);

// Write back
fs.writeFileSync('public/js/app.js', newLines.join('\n'), 'utf8');
console.log('Written back to public/js/app.js');

// Verify the output
const verifyCode = fs.readFileSync('public/js/app.js', 'utf8');
const verifyLines = verifyCode.split('\n');

// Find the last vi block again and count entries
let lastViStart = -1;
let lastViEnd = -1;
for (let i = 0; i < verifyLines.length; i++) {
  if (verifyLines[i] === '  "vi": {') {
    lastViStart = i;
    let depth = 1;
    for (let j = i + 1; j < verifyLines.length && depth > 0; j++) {
      for (let k = 0; k < verifyLines[j].length; k++) {
        if (verifyLines[j][k] === '{') depth++;
        if (verifyLines[j][k] === '}') depth--;
      }
      if (depth === 0) {
        lastViEnd = j;
        break;
      }
    }
  }
}

// Count kv pairs in last block
const kvCount = (verifyCode.substring(verifyLines[lastViStart], verifyLines[lastViEnd]).match(/^\s+"[^"]+":\s*"[^"]*"/gm) || []).length;
console.log(`\nLast vi block entries (via regex): ${kvCount}`);

// Verify specific keys
const checkKeys = [
  'Click to view vocabulary',
  'Pitch curve plots here',
  'Speak to visualize tone',
  'Select a tone below to practice',
  'Tone Pitch Visualizer',
  'Vocab List',
  'Hello',
  'Goodbye',
  'Thank you',
];

for (const key of checkKeys) {
  if (verifyCode.includes(`"${key}":`)) {
    console.log(`  OK: "${key}" present`);
  } else {
    console.log(`  MISSING: "${key}"`);
  }
}
