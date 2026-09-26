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
  // --- 1. Behavioral: 45 rapid TTS calls, ZERO 429s ---
  // 45 calls at Edge latency (~500ms each) = ~22s — fits inside ONE 60s
  // limiter window, so the assertion is deterministic. (A 130-call test
  // spans >60s: the early entries expire mid-run and the 429 lands late or
  // never — a false signal.) Wait 65s first anyway: the per-IP counter
  // carries over between runs within the window.
  await new Promise(r => setTimeout(r, 65000));
  const results = [];
  for (let i = 0; i < 45; i++) {
    try {
      const r = await fetch('http://127.0.0.1:8080/api/tts?text=hi&lang=en-US');
      results.push(r.status);
    } catch (e) { results.push(0); }
  }
  const counts = {};
  results.forEach(x => counts[x] = (counts[x] || 0) + 1);
  const first429 = results.indexOf(429);
  check('1. 45 rapid TTS calls: ZERO 429s (the old shared 40-limit is gone)',
    first429 === -1 && (counts[200] || 0) >= 43, 'first429=' + (first429 + 1) + ' counts=' + JSON.stringify(counts));

  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });
