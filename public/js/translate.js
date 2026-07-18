let translateInput, translateOutput, translateLang, translateBtn, translateSpeak, translateCopy;
let lastTranslateResult = '';

function initTranslate() {
  translateInput = document.getElementById('trInput');
  translateOutput = document.getElementById('trOutput');
  translateLang = document.getElementById('trLang');
  translateBtn = document.getElementById('trBtn');
  translateSpeak = document.getElementById('trSpeak');
  translateCopy = document.getElementById('trCopy');
  if (!translateBtn) return;
  translateBtn.addEventListener('click', doTranslate);
  translateInput.addEventListener('keydown', e => { if (e.key === 'Enter') doTranslate(); });
}

async function doTranslate() {
  const text = translateInput.value.trim();
  if (!text) return;
  translateOutput.innerHTML = '<div style="color:var(--muted)">Translating...</div>';
  translateBtn.disabled = true;
  const dir = translateLang ? translateLang.value : 'to-zh';
  const prompt = dir === 'to-zh'
    ? `Translate this to Chinese (Mandarin). Return ONLY: the Chinese translation, pinyin pronunciation, and English back-translation. Format: **Chinese**: ... | **Pinyin**: ... | **English**: ...\n\n${text}`
    : `Translate this to English. Return ONLY: the English translation. Also include the original Chinese text with pinyin. Format: **English**: ... | **Chinese**: ... | **Pinyin**: ...\n\n${text}`;
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text }] }], systemInstruction: { parts: [{ text: 'You are a Chinese-English translator. Translate accurately and return in a clean format.' }] } })
    });
    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Translation failed.';
    lastTranslateResult = reply;
    translateOutput.innerHTML = formatTranslateResult(reply, dir);
    translateSpeak.disabled = false;
    translateCopy.disabled = false;
  } catch (e) {
    translateOutput.innerHTML = '<span style="color:var(--accent)">Error: ' + e.message + '</span>';
  }
  translateBtn.disabled = false;
}

function formatTranslateResult(text, dir) {
  const lines = text.split('\n').filter(l => l.trim());
  let html = '';
  lines.forEach(l => {
    if (l.includes('**Chinese**') || l.match(/\*\*.+?\*\*/)) {
      html += '<div class="mb-1">' + l.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>') + '</div>';
    } else {
      html += '<div class="mb-1">' + l + '</div>';
    }
  });
  // Extract Chinese characters for pinyin display
  const cnMatch = text.match(/[\u4e00-\u9fff]+/g);
  if (cnMatch) {
    const cnText = cnMatch.join('');
    if (cnText) {
      html += '<div class="mt-3 fc text-3xl font-black" style="color:var(--gold)">' + cnText + '</div>';
    }
  }
  return html || text;
}

function speakTranslate() {
  if (!lastTranslateResult) return;
  const cnChars = lastTranslateResult.match(/[\u4e00-\u9fff]+/g);
  if (cnChars && cnChars.join('').length > 0) {
    speak(cnChars.join(''));
  } else {
    speak(translateInput.value);
  }
}

function copyTranslateToChat() {
  const cnChars = lastTranslateResult ? lastTranslateResult.match(/[\u4e00-\u9fff]+/g) : null;
  const text = cnChars ? cnChars.join('') : translateInput.value;
  const input = document.querySelector('.tut-input');
  if (input) { input.value = text; input.focus(); toast('Copied to AI Tutor!', 'var(--gold)'); }
}

document.addEventListener('DOMContentLoaded', initTranslate);
