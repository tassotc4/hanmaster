#!/usr/bin/env node
'use strict';
// Prod deployment verification for https://mandarincourse.app.
//
//   node scripts/prod-verify.cjs
//
// What it checks:
//   1. Polls prod /sw.js until it serves the SAME CACHE name as the local
//      public/sw.js (the expected version is READ FROM DISK — nothing to
//      hand-edit per release).
//   2. Fetches prod /app.html and asserts all 6 app asset refs carry ?v=NN
//      matching that CACHE number, with 0 stale refs (icon ?v= refs are
//      excluded — they are intentionally versioned separately).
//   3. SHA-256-compares prod assets vs local files:
//      - *.js / *.css / *.html / sw.js: line-ending-normalized (LF) compare.
//        Vercel serves text as LF while the git working copy is CRLF — a raw
//        byte compare ALWAYS false-negatives on this repo (hit repeatedly in
//        the v130/v131 sessions). Any text mismatch that isn't just line
//        endings still fails loudly.
//   Exit 0 = all match. Exit 1 = timeout or mismatch.
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PROD = 'https://mandarincourse.app';
const ROOT = path.join(__dirname, '..');
const POLL_ATTEMPTS = 20;
const POLL_MS = 20000;

const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const lf = b => b.toString('utf8').replace(/\r\n/g, '\n');
const normSha = b => sha(Buffer.from(lf(b)));

async function fetchBuf(url, timeoutMs = 30000) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const r = await fetch(url, { cache: 'no-store', signal: ac.signal });
    if (!r.ok) throw new Error(url + ' -> HTTP ' + r.status);
    return Buffer.from(await r.arrayBuffer());
  } finally { clearTimeout(t); }
}

(async () => {
  const localSw = fs.readFileSync(path.join(ROOT, 'public/sw.js'), 'utf8');
  const m = localSw.match(/const CACHE = '(mandarincourse-v\d+)'/);
  if (!m) { console.error('FAIL: could not read CACHE version from public/sw.js'); process.exit(1); }
  const wantCache = m[1];
  const ver = m[1].replace('mandarincourse-v', ''); // digits only, e.g. '131'
  console.log('Expected version from local public/sw.js: ' + wantCache);

  // 1) Poll prod sw.js
  let prodSw = null;
  for (let i = 1; i <= POLL_ATTEMPTS; i++) {
    try {
      prodSw = await fetchBuf(PROD + '/sw.js');
      const pm = lf(prodSw).match(/mandarincourse-v\d+/);
      console.log('poll ' + i + ': prod sw.js CACHE = ' + (pm ? pm[0] : '(unparseable)'));
      if (pm && pm[0] === wantCache) break;
    } catch (e) { console.log('poll ' + i + ': fetch error: ' + e.message); }
    prodSw = null;
    if (i < POLL_ATTEMPTS) await new Promise(r => setTimeout(r, POLL_MS));
  }
  if (!prodSw) { console.error('TIMEOUT: prod never served ' + wantCache); process.exit(1); }

  // 2) app.html refs
  const prodHtml = lf(await fetchBuf(PROD + '/app.html'));
  const assetRefs = prodHtml.match(/\/(?:js|css)\/[\w.-]+\?v=\d+/g) || [];
  const good = assetRefs.filter(x => x.endsWith('?v=' + ver)).length;
  const stale = assetRefs.filter(x => !x.endsWith('?v=' + ver));
  console.log('prod app.html: ' + good + '/6 refs at ?v=' + ver + (stale.length ? ' | STALE: ' + stale.join(', ') : ''));
  if (good !== 6 || stale.length) { console.error('FAIL: app.html version refs wrong'); process.exit(1); }

  // 3) asset bytes (all text files in this app — LF-normalized compare)
  const pairs = [
    ['public/sw.js', '/sw.js'],
    ['public/app.html', '/app.html'],
    ['public/js/app.js', '/js/app.js?v=' + ver],
    ['public/css/app.css', '/css/app.css?v=' + ver],
    ['public/js/shop.js', '/js/shop.js?v=' + ver],
    ['public/js/translate.js', '/js/translate.js?v=' + ver]
  ];
  let all = true;
  for (const [local, url] of pairs) {
    const prod = await fetchBuf(PROD + url);
    const loc = fs.readFileSync(path.join(ROOT, local));
    const match = normSha(prod) === normSha(loc);
    console.log((match ? 'MATCH ' : 'DIFF  ') + url + '  sha256(LF) ' + normSha(prod).slice(0, 12) + ' vs local ' + normSha(loc).slice(0, 12));
    if (!match) all = false;
  }
  console.log(all ? 'PROD VERIFY: PASS (' + wantCache + ')' : 'PROD VERIFY: FAIL');
  process.exit(all ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
