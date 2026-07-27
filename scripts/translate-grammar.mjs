import fs from 'fs';

const OUT_DIR = 'C:\\Users\\HP\\Documents\\Default Project\\scripts\\';

const LANGUAGES = {
  es: 'es', fr: 'fr', de: 'de', pt: 'pt', it: 'it', ru: 'ru', vi: 'vi', ja: 'ja', ko: 'ko'
};

let result = {};
try {
  result = JSON.parse(fs.readFileSync(OUT_DIR + 'grammar-translations.json', 'utf8'));
  console.log('Loaded existing:', Object.keys(result).join(', '));
} catch(e) {
  console.log('Starting fresh');
}

const extraContent = fs.readFileSync('public/js/extra-content.js', 'utf8');
const match = extraContent.match(/const EXTRA_GRAMMAR = \[([\s\S]*?)\];/);
const items = eval('[' + match[1] + ']');
const allKeys = new Set();
items.forEach(item => {
  if (item.t) allKeys.add(item.t);
  if (item.f) allKeys.add(item.f);
  if (item.en) allKeys.add(item.en);
});
const keys = [...allKeys].sort();
console.log(`Found ${keys.length} unique strings`);

function escapeJson(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
}

async function translateText(text, toLang) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${toLang}&dt=t&q=${encodeURIComponent(text)}`;
  const resp = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const data = await resp.json();
  // Format: [[["translation","source",...]], "en", ...]
  return data?.[0]?.[0]?.[0] || text;
}

async function translateLanguage(code) {
  console.log(`\n=== Translating to ${code} ===`);
  const translations = {};

  // Process in parallel batches of 3 for speed
  const batchSize = 3;
  for (let i = 0; i < keys.length; i += batchSize) {
    const batch = keys.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(key =>
      translateText(key, code).catch(e => {
        console.warn(`  Failed: "${key.substring(0, 30)}..." -> ${e.message}`);
        return null;
      })
    ));
    batch.forEach((key, idx) => {
      if (results[idx] && results[idx] !== key) {
        translations[key] = results[idx];
      }
    });
    if ((i / batchSize + 1) % 30 === 0) {
      console.log(`  ${Math.min(i + batchSize, keys.length)}/${keys.length}`);
    }
    // Small delay between batches to avoid rate limiting
    await new Promise(r => setTimeout(r, 300));
  }

  console.log(`  Got ${Object.keys(translations).length} translations`);
  return translations;
}

async function main() {
  for (const [code, locale] of Object.entries(LANGUAGES)) {
    if (result[code] && Object.keys(result[code]).length >= keys.length * 0.9) {
      console.log(`Skipping ${code} (already done)`);
      continue;
    }
    try {
      result[code] = await translateLanguage(locale);
      fs.writeFileSync(OUT_DIR + 'grammar-translations.json', JSON.stringify(result, null, 2), 'utf8');
      console.log('  Saved');
    } catch (e) {
      console.error(`Failed for ${code}:`, e.message);
    }
  }

  let output = '';
  for (const [code, dict] of Object.entries(result)) {
    if (!dict || Object.keys(dict).length === 0) continue;
    output += `  "${code}": {\n`;
    const entries = Object.entries(dict);
    const lines = entries.map(([k, v]) => `    "${escapeJson(k)}":"${escapeJson(v)}"`);
    output += lines.join(',\n') + '\n  },\n';
  }
  fs.writeFileSync(OUT_DIR + 'grammar-translations-output.txt', output, 'utf8');
  console.log('\nDone!');
  for (const [code, dict] of Object.entries(result)) {
    console.log(`  ${code}: ${Object.keys(dict).length} translations`);
  }
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
