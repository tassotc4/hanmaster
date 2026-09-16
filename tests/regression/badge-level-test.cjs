'use strict';
const { launch, bootTutor } = require('../helpers/bootstrap.cjs');

(async () => {
  const browser = await launch();
  const { page, errors } = await bootTutor(browser, { theme: 'dark', mode: 'live', level: 'beginner' });
  await new Promise(r => setTimeout(r, 300));

  const expect = async (tag, wantBadge, wantStored) => {
    const st = await page.evaluate(() => {
      const badge = document.getElementById('tutAiLevel');
      const lvlLabel = document.querySelector('#tutLvTabs')?.closest('.ghost-wrap')?.querySelector('.ghost-label');
      return {
        badgeText: badge ? badge.textContent : '(missing)',
        badgeVisible: badge ? badge.style.display !== 'none' : false,
        topicsLabel: lvlLabel ? lvlLabel.textContent : '(missing)',
        storedLevel: localStorage.getItem('chinese_level')
      };
    });
    const pass = st.badgeText === wantBadge && st.badgeVisible && st.storedLevel === wantStored;
    console.log((pass ? 'PASS ' : 'FAIL ') + tag + ': ' + JSON.stringify(st) + (pass ? '' : '  (wanted badge "' + wantBadge + '", level "' + wantStored + '")'));
    return pass;
  };

  let ok = true;
  ok = (await expect('INITIAL (beginner)', 'AI: Beginner', 'beginner')) && ok;
  await page.evaluate(() => setChineseLevel('advanced'));
  await new Promise(r => setTimeout(r, 300));
  ok = (await expect('AFTER setChineseLevel(advanced)', 'AI: Advanced', 'advanced')) && ok;
  await page.evaluate(() => applyLevelSetting('intermediate'));
  await new Promise(r => setTimeout(r, 300));
  ok = (await expect('AFTER applyLevelSetting(intermediate)', 'AI: Intermediate', 'intermediate')) && ok;
  const topicsLabel = (await page.evaluate(() => document.querySelector('#tutLvTabs')?.closest('.ghost-wrap')?.querySelector('.ghost-label')?.textContent || '')).trim();
  console.log((topicsLabel === 'Topics' ? 'PASS ' : 'FAIL ') + 'TOPICS LABEL: "' + topicsLabel + '"');

  console.log('page errors:', errors.length ? errors : 'none');
  await browser.close();
  process.exit(ok && errors.length === 0 ? 0 : 1);
})().catch(e => { console.error('FATAL', e); process.exit(1); });