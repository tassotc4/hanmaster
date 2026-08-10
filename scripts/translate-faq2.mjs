import fs from 'fs';

const OUT_DIR = 'C:\\Users\\HP\\Documents\\Default Project\\scripts\\';

const LANGUAGES = {
  es: 'es', fr: 'fr', de: 'de', pt: 'pt', it: 'it', ru: 'ru', vi: 'vi', ja: 'ja', ko: 'ko'
};

const keys = [
  "Pinyin Chart",
  "Interactive Pinyin Chart",
  "Direct answers about our features, offline compatibility, and pronunciation grading.",
  "How does the AI Speaking Tutor grade my pronunciation?",
  "Can I use MandarinCourse offline without internet?",
  "What HSK levels does MandarinCourse cover?",
  "Is this better than Duolingo or HelloChinese?",
  "Can I cancel my Premium subscription anytime?",
  "Show all FAQ"
];

// Long strings that need sentence-by-sentence translation
const longKeys = {
  "MandarinCourse uses browser-native Speech Recognition to listen to your utterance and compares it to the target sentence using a text-similarity scoring algorithm. In Live Mode, it connects to Gemini to evaluate natural conversation flow.": [
    "MandarinCourse uses browser-native Speech Recognition to listen to your utterance and compares it to the target sentence using a text-similarity scoring algorithm.",
    "In Live Mode, it connects to Gemini to evaluate natural conversation flow."
  ],
  "Yes! MandarinCourse is a Progressive Web App (PWA) that caches all scripts, assets, writing animations, and logic locally. The tone visualizer, character writing quizzes, and SRS flashcards run 100% offline client-side. Features that require internet: Live AI Tutor Mode, Document AI upload, and Grammar Check.": [
    "Yes! MandarinCourse is a Progressive Web App (PWA) that caches all scripts, assets, writing animations, and logic locally.",
    "The tone visualizer, character writing quizzes, and SRS flashcards run 100% offline client-side.",
    "Features that require internet: Live AI Tutor Mode, Document AI upload, and Grammar Check."
  ],
  "How does the Tone Pitch Visualizer help with Chinese tones?": [
    "How does the Tone Pitch Visualizer help with Chinese tones?"
  ],
  "The tone visualizer captures your voice's pitch curve using Web Audio autocorrelation. It graphs your spoken pitch curve on a canvas alongside reference guides for the four tones (Flat, Rising, Dipping, Falling), giving you instant visual feedback.": [
    "The tone visualizer captures your voice's pitch curve using Web Audio autocorrelation.",
    "It graphs your spoken pitch curve on a canvas alongside reference guides for the four tones (Flat, Rising, Dipping, Falling), giving you instant visual feedback."
  ],
  "What is the Spaced Repetition System (SRS) used for?": [
    "What is the Spaced Repetition System (SRS) used for?"
  ],
  "The flashcard review deck uses a Spaced Repetition engine. By grading cards as Again, Hard, Good, or Easy, the algorithm schedules reviews. You can toggle the 'Due Reviews Only' box to study efficiently.": [
    "The flashcard review deck uses a Spaced Repetition engine.",
    "By grading cards as Again, Hard, Good, or Easy, the algorithm schedules reviews.",
    "You can toggle the 'Due Reviews Only' box to study efficiently."
  ],
  "Sign up with email for 7 days free access to all HSK 1-9 features. After the trial, Premium is $9/month for unlimited access. Cancel anytime.": [
    "Sign up with email for 7 days free access to all HSK 1-9 features.",
    "After the trial, Premium is $9/month for unlimited access.",
    "Cancel anytime."
  ],
  "MandarinCourse covers HSK 1 through HSK 9 (the new HSK 3.0 standard). This includes over 10,000 vocabulary words with pinyin, audio, and example sentences.": [
    "MandarinCourse covers HSK 1 through HSK 9 (the new HSK 3.0 standard).",
    "This includes over 10,000 vocabulary words with pinyin, audio, and example sentences."
  ],
  "MandarinCourse focuses on real speaking practice with AI-powered pronunciation grading, a tone pitch visualizer, and SRS flashcards. Unlike gamified apps, you actively speak and get scored. It also covers all 9 HSK levels with offline PWA support.": [
    "MandarinCourse focuses on real speaking practice with AI-powered pronunciation grading, a tone pitch visualizer, and SRS flashcards.",
    "Unlike gamified apps, you actively speak and get scored.",
    "It also covers all 9 HSK levels with offline PWA support."
  ],
  "Yes, you can cancel your Premium subscription at any time. No long-term commitment required. After canceling, you keep access until the end of your current billing period.": [
    "Yes, you can cancel your Premium subscription at any time.",
    "No long-term commitment required.",
    "After canceling, you keep access until the end of your current billing period."
  ]
};

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
  return data?.[0]?.[0]?.[0] || text;
}

async function translateLongString(fullKey, sentences, code) {
  const translated = [];
  for (const sentence of sentences) {
    try {
      const tr = await translateText(sentence, code);
      translated.push(tr);
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.warn(`  Failed sentence: "${sentence.substring(0,40)}..."`);
      translated.push(sentence);
    }
  }
  return translated.join(' ');
}

async function translateLanguage(code) {
  console.log(`\n=== Translating to ${code} ===`);
  const translations = {};

  // Short keys in parallel
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
    await new Promise(r => setTimeout(r, 500));
  }

  // Long keys - translate each sentence
  for (const [fullKey, sentences] of Object.entries(longKeys)) {
    try {
      translations[fullKey] = await translateLongString(fullKey, sentences, code);
    } catch (e) {
      console.warn(`  Failed long key: "${fullKey.substring(0,40)}..."`);
    }
  }

  console.log(`  Got ${Object.keys(translations).length} translations`);
  return translations;
}

async function main() {
  const result = {};

  for (const [code, locale] of Object.entries(LANGUAGES)) {
    try {
      result[code] = await translateLanguage(locale);
      console.log(`  Done ${code}`);
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
  fs.writeFileSync(OUT_DIR + 'faq-translations-output2.txt', output, 'utf8');
  fs.writeFileSync(OUT_DIR + 'faq-translations2.json', JSON.stringify(result, null, 2), 'utf8');
  
  console.log('\nDone!');
  for (const [code, dict] of Object.entries(result)) {
    console.log(`  ${code}: ${Object.keys(dict).length} translations`);
  }
}

main().catch(console.error);
