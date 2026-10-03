// Empty-contents 400 (v158): {"contents":[]} returns 400 BEFORE the provider
// cascade — empty requests must not consume provider calls or increment the
// chat_all_failed_503 counter (the real-outage signal used to measure
// outages).
const path = require('path');

let pass = true;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };

(async () => {
  // 1. Source: the empty-array guard sits in the FIRST check (before the cascade)
  const src = require('fs').readFileSync(path.join(__dirname, '../../server.js'), 'utf8');
  const idxGuard = src.indexOf('req.body.contents.length === 0');
  const idxCascade = src.indexOf('const PROVIDERS = [');
  check('1. the empty-array guard sits in the 400 check, before the provider cascade',
    idxGuard !== -1 && idxCascade !== -1 && idxGuard < idxCascade, '');

  // 2. Behavioral: {"contents":[]} -> 400, fast (no cascade ran)
  const t0 = Date.now();
  const r = await fetch('http://127.0.0.1:8080/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [] })
  });
  const dt = Date.now() - t0;
  const body = await r.json();
  check('2. {"contents":[]} returns 400', r.status === 400,
    JSON.stringify({ status: r.status, error: body.error }));
  check('2. the 400 returns fast — no provider cascade ran (timing proxy)',
    dt < 1500, 'elapsed ' + dt + 'ms');
  check('2. the message matches the shape-check error',
    body.error === 'Missing or invalid contents array', body.error);

  // 3. No regression: the missing/non-array contents still 400
  const r2 = await fetch('http://127.0.0.1:8080/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{}'
  });
  check('3. missing contents still 400', r2.status === 400, 'status ' + r2.status);

  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  // process.exitCode (not process.exit): process.exit() cuts the undici
  // keep-alive sockets mid-close and trips a libuv assertion on Windows
  // (src\win\async.c), making the runner see a non-zero exit even when the
  // checks passed. The event loop drains naturally (~4s keep-alive timeout).
  process.exitCode = pass ? 0 : 1;
})().catch(e => { console.error('FATAL', e.message); process.exitCode = 1; });
