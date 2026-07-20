let translateInput, translateOutput, translateLang, translateBtn, translateSpeak, translateCopy;
let lastTranslateResult = '';
const LANG_NAMES = { en:'English', es:'Spanish', fr:'French', ja:'Japanese', ko:'Korean', de:'German', pt:'Portuguese', it:'Italian', ru:'Russian', vi:'Vietnamese' };
const _trCache = {};

function initTranslate() {
  translateInput = document.getElementById('trInput');
  translateOutput = document.getElementById('trOutput');
  translateLang = document.getElementById('trLang');
  translateBtn = document.getElementById('trBtn');
  translateSpeak = document.getElementById('trSpeak');
  translateCopy = document.getElementById('trCopy');
  if (!translateBtn) return;
  translateBtn.addEventListener('click', doTranslate);
  translateSpeak.addEventListener('click', speakTranslate);
  translateCopy.addEventListener('click', copyTranslateToChat);
  translateInput.addEventListener('keydown', e => { if (e.key === 'Enter') doTranslate(); });
}

async function doTranslate() {
  const text = translateInput.value.trim();
  if (!text) return;
  translateOutput.innerHTML = '<div style="color:var(--muted)">Translating...</div>';
  translateBtn.disabled = true;
  const dir = translateLang ? translateLang.value : 'en-zh';
  const cacheKey = dir + '|' + text;
  if (_trCache[cacheKey]) {
    const cached = _trCache[cacheKey];
    lastTranslateResult = cached;
    translateOutput.innerHTML = formatTranslateResult(cached);
    translateSpeak.disabled = false;
    translateCopy.disabled = false;
    translateBtn.disabled = false;
    return;
  }
  try {
    let sysInstr;
    if (dir === 'to-en') {
      sysInstr = 'Translate to English. Reply in one line: English translation | original Chinese | pinyin. No extra text.';
    } else {
      const srcLang = dir.split('-')[0];
      const langName = LANG_NAMES[srcLang] || 'English';
      sysInstr = `Translate to Chinese. The source is ${langName}. Reply in one line: Chinese | pinyin | ${langName} back-translation. No extra text.`;
    }
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text }] }], systemInstruction: sysInstr })
    });
    const data = await res.json();
    let reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Translation failed.';
    reply = reply.replace(/^["']|["']$/g, '').trim();
    _trCache[cacheKey] = reply;
    lastTranslateResult = reply;
    translateOutput.innerHTML = formatTranslateResult(reply);
    translateSpeak.disabled = false;
    translateCopy.disabled = false;
  } catch (e) {
    translateOutput.innerHTML = '<span style="color:var(--accent)">Error: ' + e.message + '</span>';
  }
  translateBtn.disabled = false;
}

function formatTranslateResult(text) {
  const parts = text.split('|').map(s => s.trim());
  if (parts.length >= 3) {
    const cnChars = parts[0].match(/[\u4e00-\u9fff]+/g);
    return '<div class="fc text-3xl font-black mb-2" style="color:var(--gold)">' + (cnChars ? cnChars.join('') : parts[0]) + '</div><div style="color:var(--fg2);font-size:13px">' + parts[1] + '</div><div style="color:var(--muted);font-size:12px;margin-top:2px">' + parts.slice(2).join(' | ') + '</div>';
  }
  const cnMatch = text.match(/[\u4e00-\u9fff]+/g);
  if (cnMatch) {
    return '<div class="fc text-3xl font-black" style="color:var(--gold)">' + cnMatch.join('') + '</div>';
  }
  return text;
}

function speakTranslate() {
  if (!lastTranslateResult) return;
  const cnText = lastTranslateResult.split('|')[0] || lastTranslateResult;
  const cnChars = cnText.match(/[\u4e00-\u9fff]+/g);
  if (cnChars && cnChars.join('').length > 0) {
    speak(cnChars.join(''));
  } else {
    speak(translateInput.value);
  }
}

function copyTranslateToChat() {
  const cnText = lastTranslateResult ? lastTranslateResult.split('|')[0] : '';
  const cnChars = cnText.match(/[\u4e00-\u9fff]+/g);
  const text = cnChars ? cnChars.join('') : translateInput.value;
  const input = document.querySelector('.tut-input');
  if (input) { input.value = text; input.focus(); toast('Copied to AI Tutor!', 'var(--gold)'); }
}

let _trRecActive = false;

function translateVoiceInput() {
  const ic = document.getElementById('trMicIc');
  const input = document.getElementById('trInput');
  if (!ic || !input) return;

  if (_trRecActive) {
    if (window._trRecorder && window._trRecorder.state !== 'inactive') {
      try { window._trRecorder.stop(); } catch(e) {}
    }
    if (window._trStream) {
      window._trStream.getTracks().forEach(t => t.stop());
      window._trStream = null;
    }
    _trRecActive = false;
    ic.className = 'fas fa-microphone';
    const chunks = window._trChunks || [];
    window._trChunks = [];
    if (chunks.length === 0) { input.placeholder = 'Enter text to translate...'; return; }
    input.placeholder = 'Translating...';
    const mime = window._audioMime || 'audio/mp4';
    const blob = new Blob(chunks, { type: mime });
    const reader = new FileReader();
    reader.onloadend = () => {
      const trLang = document.getElementById('trLang');
      const dir = trLang ? trLang.value : 'en-zh';
      const srcLang = dir === 'to-en' ? 'zh' : dir.split('-')[0];
      const langName = LANG_NAMES[srcLang] || 'English';
      fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ role: 'user', parts: [{ inlineData: { mimeType: mime, data: reader.result.split(',')[1] } }] }], systemInstruction: `Transcribe ${langName} speech from this audio and output ONLY the Chinese translation.` })
      }).then(r => r.json()).then(d => {
        const text = d.candidates?.[0]?.content?.parts?.[0]?.text || '';
        input.value = text;
        input.placeholder = 'Enter text to translate...';
        if (text) doTranslate();
      }).catch(() => { input.placeholder = 'Failed. Try typing.'; });
    };
    reader.readAsDataURL(blob);
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { toast('Mic not available', 'var(--accent)'); return; }
  _trRecActive = true;
  ic.className = 'fas fa-stop';
  input.placeholder = 'Recording... tap mic to stop';
  navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true } }).then(stream => {
    window._trStream = stream;
    window._trChunks = [];
    let mime = 'audio/mp4';
    if (typeof MediaRecorder.isTypeSupported === 'function') { if (!MediaRecorder.isTypeSupported(mime)) mime = 'audio/ogg;codecs=opus'; if (!MediaRecorder.isTypeSupported(mime)) mime = 'audio/webm'; if (!MediaRecorder.isTypeSupported(mime)) mime = ''; }
    if (!mime) { _trRecActive = false; ic.className = 'fas fa-microphone'; input.placeholder = 'Not supported'; return; }
    window._trRecorder = new MediaRecorder(stream, { mimeType: mime, audioBitsPerSecond: 192000 });
    window._trRecorder.ondataavailable = e => { if (e.data.size > 0) window._trChunks.push(e.data); };
    window._trRecorder.start(250);
  }).catch(() => { _trRecActive = false; ic.className = 'fas fa-microphone'; input.placeholder = 'Mic denied.'; });
}

document.addEventListener('DOMContentLoaded', initTranslate);
