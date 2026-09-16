'use strict';
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'regression');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.cjs')).sort();
if (!files.length) { console.error('no regression tests found in ' + dir); process.exit(1); }

console.log('Local server must be running on http://127.0.0.1:8080 (node server.js)');
console.log('Running ' + files.length + ' regression tests…\n');

const results = [];
for (const f of files) {
  console.log('\n===== ' + f + ' =====');
  const r = spawnSync(process.execPath, [path.join(dir, f)], { stdio: 'inherit', timeout: 600000 });
  results.push({ f, pass: r.status === 0 });
}

console.log('\n===== SUMMARY =====');
let fails = 0;
for (const r of results) {
  console.log((r.pass ? 'PASS ' : 'FAIL ') + r.f);
  if (!r.pass) fails++;
}
console.log('');
console.log(fails ? fails + ' FAILED — see output above' : 'ALL ' + results.length + ' PASSED');
process.exit(fails ? 1 : 0);