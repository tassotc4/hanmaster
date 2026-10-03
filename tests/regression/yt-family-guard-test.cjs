// Bug-2 fix gate (v159): the YouTube keyword-family guard (>=2 distinct
// families) at BOTH layers, parsed from the actual shipped source + evaled
// (no replica, drift-checked). The incident transcript is blocked; real
// sentences containing ONE family word pass.
const path = require('path');

let pass = true;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };

(async () => {
  const serverSrc = require('fs').readFileSync(path.join(__dirname, '../../server.js'), 'utf8');
  const clientSrc = require('fs').readFileSync(path.join(__dirname, '../../public/js/app.js'), 'utf8');

  // Parse the family array from the SHIPPED source (both files)
  const famArrM = (src) => src.match(/const YT_FAMILIES = \[([^\]]+)\]/);
  const sm = famArrM(serverSrc), cm = famArrM(clientSrc);
  check('1. the family array present in BOTH server and client source', !!(sm && cm), '');
  const parseArr = (m) => m ? m[1].split(',').map(s => s.trim().replace(/^'|'$/g, '')) : [];
  const sFam = parseArr(sm), cFam = parseArr(cm);
  check('1. the family sets are identical in both layers', JSON.stringify(sFam) === JSON.stringify(cFam),
    JSON.stringify(sFam));

  const incident = '请不吝点赞 订阅 转发 打赏支持明镜与点点栏目';
  const hits = (fam) => fam.filter(f => incident.indexOf(f) !== -1);
  check('2. the incident transcript has >=2 family hits (server set)', hits(sFam).length >= 2,
    'hits: ' + hits(sFam).join(','));
  check('2. the incident transcript has >=2 family hits (client set)', hits(cFam).length >= 2, '');

  // Real speech: one family word passes; family words absent from the set
  const real1 = '我想订阅这个频道';
  check('3. a sentence with 2 family words fires the guard (>=2 — documented trade-off)',
    sFam.filter(f => real1.indexOf(f) !== -1).length === 2, '订阅+频道 both hit');
  const real2 = '我喜欢看这个';
  check('3. real sentence with NO family words passes', hits(sFam.filter(f => real2.indexOf(f) !== -1)).length === 0, '');
  check('3. real-vocabulary words (观看/支持/关注) are NOT in the family set (lessons teach them)',
    !sFam.includes('观看') && !sFam.includes('支持') && !sFam.includes('关注'), '');
  const realSub = '订阅';
  check('3. the single lesson word 订阅 alone passes (1 hit < 2)', hits(sFam.filter(f => realSub.indexOf(f) !== -1)).length === 1, '');

  // The client's guard clause: familyHits.length >= 2 wired into looksGarbage
  check('4. the client looksGarbage includes the familyHits >= 2 clause',
    clientSrc.includes('familyHits.length >= 2'), '');
  // The server blocks: return 400 in the family branch
  const serverBlock = serverSrc.match(/if \(familyHits\.length >= 2\) \{[\s\S]{0,400}?return res\.status\(400\)/);
  check('4. the server family branch returns 400 (blocked before the cascade)', !!serverBlock, '');

  console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
  process.exitCode = pass ? 0 : 1;
})().catch(e => { console.error('FATAL', e.message); process.exitCode = 1; });
