'use strict';
// v147 gate: the TTS limiter is separate from apiLimiter.
//  1. ~130 rapid /api/tts calls (Edge, free): NO 429 at the old 40 limit —
//     the 429 first appears at call #121 (the new 120/min/IP cap).
//  2. Static: apiLimiter byte-identical and still on chat/shop; the two
//     limiters use SEPARATE stores.
const path = require('path');
const fs = require('fs');

let pass = true;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };

// --- 2. Static: wiring + separation ---
const s = fs.readFileSync(path.join(__dirname, '../../server.js'), 'utf8');
check('2. ttsLimiter on GET /api/tts', s.includes("app.get('/api/tts', ttsLimiter,"));
check('2. ttsLimiter on POST /api/tts', s.includes("app.post('/api/tts', ttsLimiter,"));
check('2. apiLimiter still on /api/chat', s.includes("app.post('/api/chat', apiLimiter,"));
check('2. apiLimiter still on the shop routes', s.includes("app.post('/api/shop/create-order', apiLimiter,") && s.includes("app.post('/api/shop/capture-order', apiLimiter,"));
check('2. apiLimiter still at 40 with its own store',
  /const rateLimitStore = \{\};/.test(s) && /rateLimitStore\[ip\]\.length >= 40/.test(s));
check('2. ttsLimiter at 120 with a SEPARATE store',
  /const ttsRateLimitStore = \{\};/.test(s) && /ttsRateLimitStore\[ip\]\.length >= 120/.test(s));
check('2. apiLimiter function body unchanged (byte-identical shape)',
  /function apiLimiter\(req, res, next\) \{\r?\n  const ip = req\.ip \|\| req\.connection\.remoteAddress;/.test(s));

(async () => {
  // --- 1. Behavioral: 130 rapid TTS calls ---
  // Wait for a fresh 60s window first: a previous run of this test (or the
  // suite's earlier tests) may have filled the per-IP bucket — the counter
  // carries over within the window and would break the #121 assertion.
  await new Promise(r => setTimeout(r, 65000));
  const results = [];
  for (let i = 0; i < 130; i++) {
    try {
      const r = await fetch('http://127.0.0.1:8080/api/tts?text=hi&lang=en-US');
      results.push(r.status);
    } catch (e) { results.push(0); }
  }
  const counts = {};
  results.forEach(x => counts[x] = (counts[x] || 0) + 1);
  const first429 = results.indexOf(429);
  check('1. 130 rapid TTS calls: no 429 before #121 (old 40-limit gone)',
    first429 === -1 || first429 >= 120, 'first429=' + (first429 + 1) + ' counts=' + JSON.stringify(counts));
  check('1. the 120 cap still works (429s at #121+)', first429 === 120, 'first429 at call #' + (first429 + 1));

  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
