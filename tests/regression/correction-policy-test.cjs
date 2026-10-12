// v160 correction-policy gate: verifies the tutor systemInstruction in app.js
// contains the required correction rules (behavior can't be unit-tested; the
// source strings are asserted, Jo checks live).
const path = require('path');

let pass = true;
const check = (name, ok, detail) => { console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + detail : '')); if (!ok) pass = false; };

const src = require('fs').readFileSync(path.join(__dirname, '../../public/js/app.js'), 'utf8');

// The translator + tutor prompt lives in one systemInstruction string; find the
// correction-policy rule (rule 5) so the checks anchor on the real shipped text.
const rule5M = src.match(/"5\. CORRECTION POLICY[\s\S]*?\\n" \+/);
check('1. the CORRECTION POLICY rule is present in the shipped prompt', !!rule5M, '');
const rule5 = rule5M ? rule5M[0] : '';

check('2. "only correct actual grammar or word-choice errors"',
  rule5.indexOf('only correct actual grammar or word-choice errors') !== -1, '');
check('3. "If the student\'s sentence is correct, emit NO correction at all"',
  rule5.indexOf("If the student's sentence is correct, emit NO correction at all") !== -1, '');
check('4. "NEVER change the student\'s meaning" (the 啤酒→茶 rule)',
  rule5.indexOf("NEVER change the student's meaning") !== -1 && rule5.indexOf('啤酒') !== -1 && rule5.indexOf('茶') !== -1, '');
check('5. "NEVER replace a correctly used word just because it is above their HSK level" + ACKNOWLEDGE',
  rule5.indexOf('NEVER replace a correctly used word just because it is above their HSK level') !== -1 &&
  rule5.indexOf('ACKNOWLEDGE') !== -1, '');
check('6. "MINIMAL edits to the student\'s OWN sentence"',
  rule5.indexOf("MINIMAL edits to the student's OWN sentence") !== -1, '');
check('7. the pipe format [CORRECTION: <cn> | <explanation>] is described',
  rule5.indexOf('[CORRECTION:') !== -1 && rule5.indexOf('|') !== -1 && rule5.indexOf('INSIDE the marker') !== -1, '');

// Parser defensive + note fallback source checks (the v160 render fix).
check('8. the parser drops everything after the correction marker (slice)',
  /corrMarkerM[\s\S]{0,120}reply = reply\.slice\(0, corrMarkerM\.index\)/.test(src), '');
check('9. the loose note fallback covers Explanation/Note/Use/Instead',
  src.indexOf('(?:Explanation|Note|Use|Instead)') !== -1, '');
check('10. the correction card renders the note (muted) when present',
  src.indexOf('(correctionNote ?') !== -1 && src.indexOf('escapeHtml(correctionNote)') !== -1, '');

// v161 additions (user-approved Part B fix): doubt = no correction, no
// punctuation/style corrections, 3-field marker, and the vocabulary locks
// scoped to the tutor's OWN Chinese only.
check('11. WHEN IN DOUBT, emit NO correction',
  rule5.indexOf('WHEN IN DOUBT, emit NO correction') !== -1, '');
check('12. NEVER correct punctuation (speech recognition omits it)',
  rule5.indexOf('NEVER correct punctuation') !== -1 && rule5.indexOf('speech recognition') !== -1 && rule5.indexOf('对我每天走路两个小时') !== -1, '');
check('13. style preferences (digit vs character numbers) are NOT errors',
  rule5.indexOf('Style preferences') !== -1 && rule5.indexOf('NOT errors') !== -1 && rule5.indexOf('character 五') !== -1, '');
check('14. the 3-field marker [CORRECTION: zh | note | translation] is described',
  rule5.indexOf('translation of the corrected sentence') !== -1 && rule5.indexOf('separated by pipes') !== -1, '');
check('15. the vocabulary locks are scoped to the tutor\'s OWN Chinese (never + beginner)',
  (src.match(/VOCABULARY LOCK — YOUR OWN Chinese/g) || []).length === 2 &&
  (src.match(/NEVER to the student's sentence/g) || []).length === 2 &&
  (src.match(/Your OWN Chinese must stay EXACTLY/g) || []).length === 2,
  '');
check('16. the style rules stop rewriting the student\'s sentence ("their exact MEANING")',
  (src.match(/teach the Chinese for their exact MEANING/g) || []).length === 2, '');

console.log(pass ? 'RESULT: PASS' : 'RESULT: FAIL');
process.exitCode = pass ? 0 : 1;
