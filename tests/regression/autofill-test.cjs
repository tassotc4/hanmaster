'use strict';
const path = require('path');
const { launch, bootTutor, SCRATCH } = require('../helpers/bootstrap.cjs');

const AUTOFILL_EMAIL = 'opencode.autofill.test@example.com';

(async () => {
  const browser = await launch();
  const { page, errors } = await bootTutor(browser, { theme: 'dark', mode: 'live', abortApi: true });
  await new Promise(r => setTimeout(r, 500));

  const hasInput = await page.evaluate(() => {
    const i = document.getElementById('tutTypeInput');
    if (!i) return false;
    i.disabled = false;
    return true;
  });
  if (!hasInput) { console.log('AUTOFILL: FAIL — #tutTypeInput not reachable'); await browser.close(); process.exit(1); }

  const before = await page.evaluate(() => {
    const i = document.getElementById('tutTypeInput');
    return { value: i.value, placeholder: i.getAttribute('placeholder'), autocomplete: i.getAttribute('autocomplete'), spellcheck: i.getAttribute('spellcheck'), lpignore: i.getAttribute('data-lpignore'), opass: i.getAttribute('data-1password-ignore') };
  });

  let autofill = { supported: null, error: null, valueAfter: null };
  try {
    const cdp = await page.createCDPSession();
    await cdp.send('Autofill.enable');
    await cdp.send('Autofill.setAddresses', { addresses: [{ fields: [{ name: 'EMAIL', value: AUTOFILL_EMAIL }] }] });
    autofill.supported = true;
    const doc = await cdp.send('DOM.getDocument', { depth: 1 });
    const q = await cdp.send('DOM.querySelector', { nodeId: doc.root.nodeId, selector: '#tutTypeInput' });
    const tree = await cdp.send('Page.getFrameTree');
    await cdp.send('Autofill.trigger', { fieldId: q.nodeId, frameId: tree.frameTree.frame.id });
    await new Promise(r => setTimeout(r, 1500));
    autofill.valueAfter = await page.evaluate(() => document.getElementById('tutTypeInput').value);
  } catch (e) {
    autofill.error = String(e).slice(0, 200);
  }

  const autocap = await page.evaluate(() => {
    const i = document.getElementById('tutTypeInput');
    return { autocapitalize: i.getAttribute('autocapitalize'), autocorrect: i.getAttribute('autocorrect') };
  });

  console.log('=== AUTOFILL VERIFICATION (local) ===');
  console.log('attrs: ' + JSON.stringify({ autocomplete: before.autocomplete, spellcheck: before.spellcheck, lpignore: before.lpignore, opass: before.opass }));
  console.log('autocapitalize=' + autocap.autocapitalize + ' autocorrect=' + autocap.autocorrect);
  console.log('valueBeforeTrigger: "' + before.value + '" placeholder: "' + before.placeholder + '"');
  console.log('autofill: ' + JSON.stringify(autofill));
  const leaked = !!(autofill.supported && autofill.valueAfter && autofill.valueAfter.length > 0);
  const cleanPlaceholder = before.placeholder === 'Type or speak Chinese here — e.g. 你好';
  console.log((leaked ? 'FAIL' : 'PASS') + ' leak-check: input value after Chrome Autofill trigger = "' + (autofill.valueAfter || '(empty)') + '"');
  console.log((cleanPlaceholder ? 'PASS' : 'FAIL') + ' placeholder-intact: "' + before.placeholder + '"');
  console.log('pageErrors: ' + JSON.stringify(errors.slice(0, 3)));
  if (autofill.supported) await page.screenshot({ path: path.join(SCRATCH, 'autofill-local.png') });
  await browser.close();
  console.log(leaked ? 'OVERALL: EMAIL LEAK STILL PRESENT' : 'OVERALL: NO AUTOFILL LEAK');
  process.exit(leaked ? 1 : 0);
})().catch(e => { console.error('FATAL', e); process.exit(1); });