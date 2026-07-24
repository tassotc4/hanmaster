require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
const app = express();
const PORT = process.env.PORT || 8080;
const staticDir = path.join(__dirname, 'public');
const PAYPAL_API = process.env.PAYPAL_SANDBOX ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';
const nodemailer = require('nodemailer');
const webpush = require('web-push');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

// VAPID keys for push notifications
const vapidPublicKey = process.env.VAPID_PUBLIC_KEY || 'BEzl9Z-eURZF1kqxzhwSxf6WInX8IGKpddG-sw3J58ShazCzbtiHwuXG51XlD1zocw0Vqkdrta94dziWfTHIQG4';
const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY || 'qBAiN51N4Arasyq4wELlHRwtEhhPHutJ0jDZanRtbqM';
webpush.setVapidDetails('mailto:admin@mandarincourse.app', vapidPublicKey, vapidPrivateKey);

// In-memory push subscriptions
const pushSubscriptions = [];

let mailTransporter = null;
let smtpHostResolved = null;
async function resolveSmtpHost(host) {
  try {
    const addrs = await dns.promises.resolve4(host);
    if (addrs && addrs.length > 0) return addrs[0];
  } catch {}
  return host;
}
function getMailTransporter() {
  if (!mailTransporter && process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587');
    const secure = process.env.SMTP_SECURE === 'true';
    mailTransporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: secure,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000
    });
    resolveSmtpHost(host).then(resolved => {
      if (resolved !== host) {
        smtpHostResolved = resolved;
        console.log('SMTP host resolved to IPv4:', resolved);
        mailTransporter = nodemailer.createTransport({
          host: resolved,
          port: port,
          secure: secure,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 15000
        });
      }
    }).catch(() => {});
  }
  return mailTransporter;
}
function smtpConfigured() { return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS); }
function mailgunConfigured() { return !!(process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN); }

async function sendEmailViaMailgun(to, subject, html) {
  if (!mailgunConfigured()) return null;
  const key = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const from = process.env.MAILGUN_FROM || 'MandarinCourse <noreply@' + domain + '>'; // e.g. "MandarinCourse <noreply@mandarincourse.app>"
  const url = 'https://api.mailgun.net/v3/' + domain + '/messages';
  const body = new URLSearchParams();
  body.append('from', from);
  body.append('to', to);
  body.append('subject', subject);
  body.append('html', html);
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Authorization': 'Basic ' + Buffer.from('api:' + key).toString('base64'), 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    });
    const data = await resp.json();
    if (resp.ok) { console.log('Mailgun success:', data.id); return data; }
    console.error('Mailgun error:', resp.status, JSON.stringify(data));
    return { error: data.message || data.error || 'HTTP ' + resp.status };
  } catch (e) {
    console.error('Mailgun exception:', e.message);
    return { error: e.message };
  }
}

app.use(express.json({ limit: '10mb' }));
app.use(express.static(staticDir));

app.get('/health', (req, res) => { res.json({ ok: true, time: Date.now() }); });

app.get('/debug-app', (req, res) => {
  const filePath = path.join(staticDir, 'app.html');
  try {
    const html = fs.readFileSync(filePath, 'utf8');
    const hasDoc = html.includes('docDropZone');
    const fileSize = html.length;
    const lessonsIdx = html.indexOf('<section id="lessons"');
    res.json({ fileSize, hasDoc, lessonsIdx, appJsLineCount: html.split('\n').length });
  } catch(e) {
    res.json({ error: e.message });
  }
});

app.get('/app', (req, res) => {
  const filePath = path.join(staticDir, 'app.html');
  let html = fs.readFileSync(filePath, 'utf8');
  // Inject upload section if missing from HTML
  if (!html.includes('docDropZone')) {
    const inject = '<section id="docUpload" class="py-12 px-5" style="background:var(--bg2)"><div class="max-w-4xl mx-auto"><div class="text-center mb-6 fu"><div class="sl"><i class="fas fa-file-upload mr-1"></i> <span data-tr="Document AI">Document AI</span></div><h2 class="fc font-bold text-xl md:text-2xl mb-2" data-tr="Upload & Process Documents with AI">Upload & Process Documents with AI</h2><p class="text-sm" style="color:var(--fg2)" data-tr="Upload PDF, Word, text files, or handwritten images. The AI tutor will summarize, fix errors, or translate them.">Upload PDF, Word, text files, or handwritten images. The AI tutor will summarize, fix errors, or translate them.</p><div class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mt-2" style="background:rgba(212,166,79,.12);color:var(--gold)" data-tr="Premium Feature">Premium Feature</div></div><div class="cd p-6 md:p-8 text-center" style="border:2px dashed var(--border);border-radius:16px;cursor:pointer" id="docDropZone" onclick="document.getElementById(\'docFileInput\').click()"><input type="file" id="docFileInput" accept=".pdf,.docx,.txt,.jpg,.jpeg,.png,.webp,.bmp,.heic,.heif" style="display:none" onchange="handleDocUpload(this)"><div id="docUploadPlaceholder"><div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style="background:rgba(212,166,79,.1)"><i class="fas fa-cloud-upload-alt text-2xl" style="color:var(--gold)"></i></div><p class="font-bold text-sm mb-1" data-tr="Click to upload or drag & drop">Click to upload or drag & drop</p><p class="text-xs" style="color:var(--muted)" data-tr="PDF, DOCX, TXT, JPG, PNG — Max 20MB">PDF, DOCX, TXT, JPG, PNG — Max 20MB</p></div><div id="docUploadFileInfo" style="display:none" class="flex flex-col items-center gap-3"><div class="flex items-center gap-2 text-sm font-medium" style="color:var(--gold)" id="docFileName"></div><div class="flex flex-wrap justify-center gap-2" id="docActions"><button onclick="processDocument(\'summarize\')" class="bp text-xs py-2 px-4"><i class="fas fa-align-left mr-1"></i> Summarize</button><button onclick="processDocument(\'fix-errors\')" class="bp text-xs py-2 px-4"><i class="fas fa-pen-fancy mr-1"></i> Fix Errors</button><button onclick="processDocument(\'translate-zh2en\')" class="bp text-xs py-2 px-4"><i class="fas fa-language mr-1"></i> Chinese\u2192English</button><button onclick="processDocument(\'translate-en2zh\')" class="bp text-xs py-2 px-4"><i class="fas fa-language mr-1"></i> English\u2192Chinese</button><button onclick="processDocument(\'business-translate\')" class="bp text-xs py-2 px-4"><i class="fas fa-briefcase mr-1"></i> Business Translate</button><button onclick="clearDocUpload()" class="bq text-xs py-2 px-4" style="color:var(--accent)"><i class="fas fa-times mr-1"></i> Clear</button></div><div id="docResultArea" class="w-full text-left cd p-4 text-sm leading-relaxed" style="display:none;background:var(--card2);border-radius:12px;max-height:400px;overflow-y:auto"></div></div></div></div></section>';
    const lessonsIdx = html.indexOf('<section id="lessons"');
    if (lessonsIdx !== -1) {
      html = html.slice(0, lessonsIdx) + inject + '\n' + html.slice(lessonsIdx);
    }
  }
  // Note: upload JS functions (processDocument, sendDoc, etc.) are now in app.js itself, no inline injection needed
  res.send(html);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.get('/printable/hsk1-vocab', (req, res) => {
  res.sendFile(path.join(staticDir, 'printable', 'hsk1-vocab.html'));
});

app.get('/pinyin-chart', (req, res) => {
  res.sendFile(path.join(staticDir, 'pinyin-chart.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(staticDir, 'admin.html'));
});

app.post('/api/admin/stats', (req, res) => {
  const { key } = req.body || {};
  if (key !== process.env.ADMIN_KEY && key !== 'tassotc4@yahoo.com') return res.status(401).json({ error: 'Unauthorized' });
  const reminders = Array.isArray(global._reminders) ? global._reminders.length : 0;
  res.json({
    reminders,
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    node: process.version,
    env: process.env.NODE_ENV || 'development',
    smtp_configured: !!process.env.SMTP_HOST,
    mailgun_configured: mailgunConfigured()
  });
});

app.post('/api/test', (req, res) => {
  res.json({ ok: true, body: req.body });
});

app.post('/api/chat', async (req, res) => {
  if (!req.body || !Array.isArray(req.body.contents)) {
    return res.status(400).json({ error: 'Missing or invalid contents array' });
  }

  const { contents, systemInstruction } = req.body;
  const hasInlineData = contents.some(c => c.parts && c.parts.some(p => p.inlineData));

  if (hasInlineData) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'Server key not configured' });
    try {
      let audioData, mimeType = 'audio/wav', textParts = [];
      for (const c of contents) {
        for (const p of c.parts || []) {
          if (p.inlineData) { audioData = p.inlineData.data; mimeType = p.inlineData.mimeType || 'audio/wav'; }
          if (p.text) textParts.push(p.text);
        }
      }
      if (!audioData) return res.status(400).json({ error: 'No audio data' });

      const buf = Buffer.from(audioData, 'base64');
      console.log("Audio buffer size:", buf.length, "mimeType:", mimeType);
      if (buf.length < 100) return res.status(400).json({ error: 'Audio too small: ' + buf.length + ' bytes' });
      const form = new FormData();
      const blob = new Blob([buf], { type: mimeType });
      const ext = mimeType.includes('webm') ? 'webm' : mimeType.includes('mp4') ? 'mp4' : mimeType.includes('mpeg') ? 'mpeg' : mimeType.includes('ogg') ? 'ogg' : mimeType.includes('opus') ? 'opus' : mimeType.includes('wav') ? 'wav' : 'webm';
      form.append('file', blob, `audio.${ext}`);
      form.append('model', 'whisper-large-v3-turbo');
      form.append('response_format', 'json');

      const wr = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
        method: 'POST', headers: { 'Authorization': `Bearer ${apiKey}` }, body: form
      });
      const wd = await wr.json();
      if (!wr.ok) return res.status(wr.status).json({ error: wd });

      const transcribed = wd.text || '';
      if (!transcribed.trim() || /no audio|no speech|没有音频|unable to transcribe/i.test(transcribed)) {
        return res.status(400).json({ error: 'No speech detected in audio' });
      }
      const userMsg = textParts.length > 0
        ? textParts.map(t => t.replace(/\{\{transcribed\}\}/g, transcribed)).join('\n')
        : transcribed;

      const messages = [];
      if (systemInstruction) messages.push({ role: 'system', content: systemInstruction });
      messages.push({ role: 'user', content: userMsg });

      const cr = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
        body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages, temperature: 0.3 })
      });
      const cd = await cr.json();
      if (!cr.ok) return res.status(cr.status).json({ error: cd });
      const responseText = cd.choices?.[0]?.message?.content || transcribed;
      return res.json({ candidates: [{ content: { parts: [{ text: responseText }] } }] });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Server Groq key not configured' });

  try {
    const messages = [];
    if (systemInstruction) {
      messages.push({ role: 'system', content: systemInstruction });
    }
    for (const c of contents) {
      const text = (c.parts || []).map(p => p.text || '').join('');
      if (text.trim()) messages.push({ role: 'user', content: text });
    }

    const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages, temperature: 0.2 })
    });
    const data = await resp.json();
    if (!resp.ok) return res.status(resp.status).json({ error: data });
    const text = data.choices?.[0]?.message?.content || '';
    res.json({ candidates: [{ content: { parts: [{ text }] } }] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/tts', async (req, res) => {
  const text = req.query.text;
  const lang = req.query.lang || 'zh-CN';
  if (!text || text.length > 500) return res.status(400).json({ error: 'Missing or too long text' });
  try {
    const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=${encodeURIComponent(lang)}&client=gtx&q=${encodeURIComponent(text)}`;
    const resp = await fetch(url);
    if (!resp.ok) return res.status(502).json({ error: 'TTS upstream failed' });
    const buf = Buffer.from(await resp.arrayBuffer());
    res.set('Content-Type', 'audio/mpeg');
    res.set('Cache-Control', 'public, max-age=86400');
    res.send(buf);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/tts', async (req, res) => {
  const { text, lang } = req.body || {};
  if (!text || !lang) return res.status(400).json({ error: 'Missing text or lang' });
  try {
    const url = 'https://translate.google.com/translate_tts?ie=UTF-8&q=' + encodeURIComponent(text.substring(0,200)) + '&tl=' + encodeURIComponent(lang) + '&client=tw-ob&ttsspeed=1';
    const resp = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } });
    if (!resp.ok) return res.status(502).json({ error: 'TTS upstream returned ' + resp.status });
    const buf = await resp.arrayBuffer();
    res.set({ 'Content-Type': 'audio/mpeg', 'Content-Length': buf.byteLength, 'Cache-Control': 'public, max-age=86400' });
    res.send(Buffer.from(buf));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/save-reminder', (req, res) => {
  const { email, frequency, time, timezone } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email required' });
  if (!Array.isArray(global._reminders)) global._reminders = [];
  const existing = global._reminders.findIndex(r => r.email === email);
  if (existing >= 0) global._reminders[existing] = { email, frequency: frequency || 'daily', time: time || '09:00', timezone: timezone || 'UTC', updated_at: new Date().toISOString() };
  else global._reminders.push({ email, frequency: frequency || 'daily', time: time || '09:00', timezone: timezone || 'UTC', created_at: new Date().toISOString(), updated_at: new Date().toISOString() });
  res.json({ ok: true });
});

app.post('/api/test-smtp', async (req, res) => {
  const { key } = req.body || {};
  if (key !== process.env.ADMIN_KEY && key !== 'tassotc4@yahoo.com') return res.status(401).json({ error: 'Unauthorized' });
  
  if (mailgunConfigured()) {
    const result = await sendEmailViaMailgun(
      process.env.MAILGUN_TO || 'tassotc4@yahoo.com',
      'MandarinCourse SMTP Test',
      '<p>Test email from MandarinCourse via Mailgun API.</p>'
    );
    if (result) return res.json({ ok: true, via: 'mailgun', id: result.id });
    return res.json({ ok: false, error: 'Mailgun API test failed. Visit /api/test-mailgun?key=YOUR_ADMIN_KEY for details.' });
  }
  
  const host = process.env.SMTP_HOST || 'not set';
  const port = parseInt(process.env.SMTP_PORT || '587');
  const net = require('net');
  try {
    await new Promise((resolve, reject) => {
      const sock = net.createConnection(port, host, () => { sock.end(); resolve(); });
      sock.on('error', reject);
      sock.setTimeout(5000, () => { sock.destroy(); reject(new Error('TCP timeout')); });
    });
  } catch (e) {
    return res.json({ ok: false, error: 'Cannot reach ' + host + ':' + port + ' - SMTP blocked. Use Mailgun API instead (set MAILGUN_API_KEY and MAILGUN_DOMAIN).' });
  }
  const transporter = getMailTransporter();
  if (!transporter) return res.json({ ok: false, error: 'SMTP not configured.' });
  try {
    await transporter.verify();
    res.json({ ok: true });
  } catch (e) {
    res.json({ ok: false, error: 'SMTP handshake failed: ' + e.message });
  }
});

app.post('/api/send-reminder', async (req, res) => {
  const { email } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email required' });
  const html = '<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#0D0A08;color:#F5EDE6"><div style="text-align:center;margin-bottom:24px"><div style="width:48px;height:48px;border-radius:12px;background:#C83525;color:#fff;font-size:24px;display:flex;align-items:center;justify-content:center;margin:0 auto 8px">汉</div><h2 style="margin:0;font-size:20px">MandarinCourse</h2></div><p style="font-size:14px;line-height:1.6">Time for your daily Chinese practice! Open the app and continue your learning journey.</p><a href="https://mandarincourse.app/app" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#C83525,#E04535);color:#fff;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;margin:16px 0">Start Learning</a><p style="font-size:12px;color:#7A6B5D;margin-top:24px">You received this because you set up study reminders on MandarinCourse.</p></div>';
  
  // Try Mailgun API first (always works, uses HTTPS port 443)
  if (mailgunConfigured()) {
    const result = await sendEmailViaMailgun(email, 'Your Daily Chinese Study Reminder', html);
    if (result) return res.json({ ok: true, via: 'mailgun', id: result.id });
    return res.json({ ok: false, error: 'Mailgun failed. Check MAILGUN_API_KEY in Render env vars.' });
  }
  
  // Fallback to SMTP
  const transporter = getMailTransporter();
  if (!transporter) {
    console.log('REMINDER (no SMTP): To ' + email);
    return res.json({ ok: true, note: 'Logged (no email provider configured). Add MAILGUN_API_KEY to Render env vars for email delivery.' });
  }
  try {
    await transporter.sendMail({
      from: '"MandarinCourse" <' + (process.env.SMTP_FROM || process.env.SMTP_USER) + '>',
      to: email, subject: 'Your Daily Chinese Study Reminder', html
    });
    res.json({ ok: true });
  } catch (err) {
    console.log('REMINDER FAILED:', err.message);
    res.json({ ok: true, note: 'Logged (SMTP error). Use Mailgun API instead - add MAILGUN_API_KEY to Render env vars.' });
  }
});

app.get('/api/test-mailgun', async (req, res) => {
  const { key } = req.query || {};
  if (key !== process.env.ADMIN_KEY && key !== 'tassotc4@yahoo.com') return res.status(401).json({ error: 'Unauthorized' });
  if (!mailgunConfigured()) return res.json({ ok: false, error: 'MAILGUN_API_KEY or MAILGUN_DOMAIN not set in env vars' });
  const domain = process.env.MAILGUN_DOMAIN;
  const apiKey = process.env.MAILGUN_API_KEY;
  // Test domain validity
  try {
    // Try actual send to diagnose the issue
    const testResult = await sendEmailViaMailgun(
      'tassotc4@yahoo.com',
      'Mailgun Diagnostic',
      '<p>Test from MandarinCourse</p>'
    );
    if (testResult && testResult.id) return res.json({ ok: true, via: 'mailgun', id: testResult.id });
    if (testResult && testResult.error) return res.json({ ok: false, error: 'Mailgun API: ' + testResult.error + '. Also verify that your MAILGUN_FROM email exists or set it to postmaster@' + process.env.MAILGUN_DOMAIN });
    // Check if the issue is domain or API key
    const resp = await fetch('https://api.mailgun.net/v3/domains/' + domain, {
      headers: { 'Authorization': 'Basic ' + Buffer.from('api:' + apiKey).toString('base64') }
    });
    if (resp.status === 401) return res.json({ ok: false, error: 'Invalid API key. Get it from Mailgun Dashboard → Settings → API Keys (private key starting with key-).' });
    if (resp.status === 404) return res.json({ ok: false, error: 'Domain "' + domain + '" not found. Go to Mailgun → Domains and copy the exact domain name. Also ensure your recipient tassotc4@yahoo.com is added to Authorized Recipients and verified.' });
    const data = await resp.json();
    return res.json({ ok: false, error: 'Domain found but send failed. Check that tassotc4@yahoo.com is an Authorized Recipient in Mailgun → Send → Authorized Recipients. Domain state: ' + (data.domain ? data.domain.state : 'unknown') });
  } catch (e) {
    return res.json({ ok: false, error: 'Mailgun API unreachable: ' + e.message });
  }
});

app.get('/api/debug-dns', async (req, res) => {
  const hosts = ['smtp.gmail.com', 'smtp-mail.outlook.com', 'smtp.sendgrid.net'];
  const results = [];
  for (const host of hosts) {
    try {
      const v4 = await dns.promises.resolve4(host);
      results.push(host + ' IPv4: ' + v4.join(', '));
    } catch (e) { results.push(host + ' IPv4: FAIL (' + e.message + ')'); }
    try {
      const v6 = await dns.promises.resolve6(host);
      results.push(host + ' IPv6: ' + v6.join(', '));
    } catch (e) { results.push(host + ' IPv6: FAIL (' + e.message + ')'); }
  }
  results.push('SMTP_HOST: ' + (process.env.SMTP_HOST || 'not set'));
  results.push('SMTP_PORT: ' + (process.env.SMTP_PORT || 'not set (default 587)'));
  res.json(results);
});

// Check reminders every 10 minutes and send due emails
const reminderHtml = '<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#0D0A08;color:#F5EDE6"><div style="text-align:center;margin-bottom:24px"><div style="width:48px;height:48px;border-radius:12px;background:#C83525;color:#fff;font-size:24px;display:flex;align-items:center;justify-content:center;margin:0 auto 8px">汉</div><h2 style="margin:0;font-size:20px">MandarinCourse</h2></div><p style="font-size:14px;line-height:1.6">Time for your daily Chinese practice! Open the app and continue learning.</p><a href="https://mandarincourse.app/app" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#C83525,#E04535);color:#fff;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;margin:16px 0">Start Learning</a></div>';
setInterval(async () => {
  if (!Array.isArray(global._reminders)) return;
  const now = new Date();
  const currentHour = now.getUTCHours().toString().padStart(2,'0');
  const currentMin = now.getUTCMinutes().toString().padStart(2,'0');
  const currentTime = currentHour + ':' + currentMin;
  for (const r of global._reminders) {
    if (r.time && r.time === currentTime) {
      if (mailgunConfigured()) {
        await sendEmailViaMailgun(r.email, 'Your Daily Chinese Study Reminder', reminderHtml);
      } else {
        const transporter = getMailTransporter();
        if (transporter) {
          try {
            await transporter.sendMail({
              from: '"MandarinCourse" <' + (process.env.SMTP_FROM || process.env.SMTP_USER) + '>',
              to: r.email, subject: 'Your Daily Chinese Study Reminder', html: reminderHtml
            });
          } catch(e) { console.error('Reminder send failed:', e.message); }
        } else {
          console.log('REMINDER due for ' + r.email + ' but no email provider configured');
        }
      }
    }
  }
}, 60000);

app.post('/api/paypal/create-order', async (req, res) => {
  const accessToken = await getPayPalAccessToken();
  if (!accessToken) return res.status(500).json({ error: 'Failed to get PayPal token' });

  try {
    const resp = await fetch(
      PAYPAL_API + '/v2/checkout/orders',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          intent: 'CAPTURE',
          purchase_units: [{
            description: 'MandarinCourse Premium - Monthly',
            amount: { currency_code: 'USD', value: '9.00' }
          }]
        })
      }
    );
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/paypal/capture-order', async (req, res) => {
  const { orderId } = req.body || {};
  if (!orderId || typeof orderId !== 'string') {
    return res.status(400).json({ error: 'Missing orderId' });
  }
  const accessToken = await getPayPalAccessToken();
  if (!accessToken) return res.status(500).json({ error: 'Failed to get PayPal token' });

  try {
    const resp = await fetch(
      PAYPAL_API + `/v2/checkout/orders/${orderId}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function getPayPalAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !secret || secret === 'YOUR_PAYPAL_SECRET') return null;
  try {
    const resp = await fetch(PAYPAL_API + '/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + secret).toString('base64')
      },
      body: new URLSearchParams({ grant_type: 'client_credentials' })
    });
    const data = await resp.json();
    return data.access_token;
  } catch {
    return null;
  }
}

// ===== PUSH NOTIFICATIONS =====
app.get('/api/vapid-public-key', (req, res) => {
  res.json({ publicKey: vapidPublicKey });
});

app.post('/api/subscribe', (req, res) => {
  const sub = req.body;
  if (!sub || !sub.endpoint) return res.status(400).json({ error: 'Invalid subscription' });
  const existing = pushSubscriptions.findIndex(s => s.endpoint === sub.endpoint);
  if (existing !== -1) pushSubscriptions[existing] = sub;
  else pushSubscriptions.push(sub);
  if (pushSubscriptions.length > 500) pushSubscriptions.length = 500;
  console.log('Push subscriptions:', pushSubscriptions.length);
  res.json({ ok: true });
});

app.post('/api/unsubscribe', (req, res) => {
  const { endpoint } = req.body || {};
  if (!endpoint) return res.status(400).json({ error: 'Missing endpoint' });
  const idx = pushSubscriptions.findIndex(s => s.endpoint === endpoint);
  if (idx !== -1) pushSubscriptions.splice(idx, 1);
  res.json({ ok: true });
});

app.post('/api/send-push-test', async (req, res) => {
  const { key } = req.body || {};
  if (key !== process.env.ADMIN_KEY && key !== 'tassotc4@yahoo.com') return res.status(401).json({ error: 'Unauthorized' });
  let sent = 0, failed = 0;
  for (const sub of pushSubscriptions) {
    try {
      await webpush.sendNotification(sub, JSON.stringify({
        title: 'MandarinCourse',
        body: 'Time to practice Chinese! 🎯',
        url: '/app'
      }));
      sent++;
    } catch (e) {
      if (e.statusCode === 410) failed++; // expired
    }
  }
  res.json({ ok: true, sent, failed, total: pushSubscriptions.length });
});

// Periodic push reminder (every 6 hours)
setInterval(async () => {
  if (pushSubscriptions.length === 0) return;
  for (const sub of pushSubscriptions) {
    try {
      await webpush.sendNotification(sub, JSON.stringify({
        title: 'MandarinCourse',
        body: 'Keep your streak alive! Practice Chinese now.',
        url: '/app'
      }));
    } catch (e) {
      if (e.statusCode === 410) {
        const idx = pushSubscriptions.indexOf(sub);
        if (idx !== -1) pushSubscriptions.splice(idx, 1);
      }
    }
  }
}, 6 * 60 * 60 * 1000);

// ===== LEADERBOARD API =====
const leaderboardScores = [];
app.post('/api/leaderboard/save', (req, res) => {
  const { name, score, level } = req.body || {};
  if (!name || !score) return res.status(400).json({ error: 'Missing name or score' });
  leaderboardScores.push({ name: name.slice(0,30), score: +score || 0, level: level || 'HSK 1', date: new Date().toISOString() });
  leaderboardScores.sort((a,b) => b.score - a.score);
  if (leaderboardScores.length > 200) leaderboardScores.length = 200;
  res.json({ ok: true });
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardScores.slice(0, 50));
});

// ===== PODCAST MP3 DOWNLOAD =====
const PODCAST_EPISODES = [
  { id:'ep1', title:'Greetings & Introductions', file:'podcast-ep1.mp3', duration:'8:30' },
  { id:'ep2', title:'Numbers & Daily Life', file:'podcast-ep2.mp3', duration:'10:15' },
  { id:'ep3', title:'Food & Restaurant', file:'podcast-ep3.mp3', duration:'9:45' },
  { id:'ep4', title:'Travel & Directions', file:'podcast-ep4.mp3', duration:'11:00' },
  { id:'ep5', title:'Chinese Culture & Customs', file:'podcast-ep5.mp3', duration:'12:20' },
];

app.get('/api/podcast-episodes', (req, res) => {
  res.json(PODCAST_EPISODES);
});

app.get('/api/podcast-download/:id', (req, res) => {
  const ep = PODCAST_EPISODES.find(e => e.id === req.params.id);
  if (!ep) return res.status(404).json({ error: 'Episode not found' });
  const filePath = path.join(__dirname, 'public', 'audio', ep.file);
  if (require('fs').existsSync(filePath)) {
    res.download(filePath, ep.file);
  } else {
    // Return info if file doesn't exist yet
    res.json({ error: 'File not yet published', episode: ep });
  }
});

// ===== DOCUMENT UPLOAD & AI PROCESSING =====
app.post('/api/upload-document', upload.single('document'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const action = req.body.action || 'summarize';
    const file = req.file;
    let extractedText = '';

    // Detect type from magic bytes when MIME is generic/missing
    const buf = file.buffer;
    const magic = buf[0].toString(16).padStart(2,'0') + buf[1].toString(16).padStart(2,'0');
    if (!file.mimetype || file.mimetype === 'application/octet-stream' || file.mimetype === '') {
      if (magic === 'ffd8') file.mimetype = 'image/jpeg';
      else if (magic === '8950') file.mimetype = 'image/png';
      else if (magic === '2550') file.mimetype = 'application/pdf';
      else if (buf.slice(0,4).toString() === 'PK\u0003\u0004') { // .docx / .zip
        file.mimetype = file.originalname.toLowerCase().endsWith('.docx') ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : 'application/octet-stream';
      }
      // Fallback to extension
      else {
        const ext = path.extname(file.originalname).toLowerCase();
        if (['.jpg','.jpeg'].includes(ext)) file.mimetype = 'image/jpeg';
        else if (ext === '.png') file.mimetype = 'image/png';
        else if (ext === '.webp') file.mimetype = 'image/webp';
        else if (ext === '.bmp') file.mimetype = 'image/bmp';
        else if (ext === '.pdf') file.mimetype = 'application/pdf';
        else if (ext === '.txt') file.mimetype = 'text/plain';
      }
    }

    // Extract text based on file type
    if (file.mimetype.startsWith('image/')) {
      console.log('Server received image: ' + file.originalname + ' ' + file.size + ' bytes');
      // qwen tokenizer costs ~3.2 tokens per base64 char. 8000 TPM limit means max ~2200 base64 chars.
      // Client compresses to ~80px/20% quality (~400-700 bytes). If larger, reject early.
      if (file.size > 1000) {
        return res.status(400).json({ error: 'Image too large (' + file.size + ' bytes). Please use a smaller image or crop before uploading.' });
      }
      const base64 = file.buffer.toString('base64');
      if (base64.length > 1400) {
        return res.status(400).json({ error: 'Image data too large after encoding. Please reduce image size or quality.' });
      }
      console.log('Image OK: ' + file.size + ' bytes, ' + base64.length + ' base64 chars');
      // Handwriting/image — use Groq vision model
      const apiKey = process.env.GROQ_API_KEY;
      if (!apiKey) return res.status(500).json({ error: 'Server key not configured' });
      const model = 'qwen/qwen3.6-27b';
      const visionResp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
        body: JSON.stringify({
          model,
          messages: [{
            role: 'user',
            content: [
              { type: 'text', text: 'Transcribe all Chinese and English text from this image exactly as written. If it is handwritten Chinese, convert it to digital Chinese text. Return only the transcribed text.' },
              { type: 'image_url', image_url: { url: `data:${file.mimetype};base64,${base64}`, detail: 'low' } }
            ]
          }],
          temperature: 0.1,
          max_tokens: 8192
        })
      });
      const visionData = await visionResp.json();
      if (!visionResp.ok) {
        console.error('Groq vision error:', JSON.stringify(visionData));
        return res.status(visionResp.status).json({ error: 'Vision API: ' + (visionData.error?.message || JSON.stringify(visionData)) });
      }
      extractedText = visionData.choices?.[0]?.message?.content || '';
      if (!extractedText) return res.status(500).json({ error: 'Vision model returned empty result. Try a clearer photo with visible text.' });
    } else if (file.mimetype === 'application/pdf') {
      let pdf;
      try { pdf = require('pdf-parse'); } catch (e) { return res.status(500).json({ error: 'PDF parsing not available on this server' }); }
      const pdfData = await pdf(file.buffer);
      extractedText = pdfData.text;
    } else if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      let mm;
      try { mm = require('mammoth'); } catch (e) { return res.status(500).json({ error: 'DOCX parsing not available on this server' }); }
      const result = await mm.extractRawText({ buffer: file.buffer });
      extractedText = result.value;
    } else if (file.mimetype === 'text/plain') {
      extractedText = file.buffer.toString('utf-8');
    } else {
      return res.status(400).json({ error: 'Unsupported file type (' + file.mimetype + '). Accepted: PDF, DOCX, TXT, JPG, PNG, WEBP, BMP, HEIC' });
    }

    if (!extractedText.trim()) return res.status(400).json({ error: 'No text could be extracted from the document' });
    if (extractedText.length > 50000) extractedText = extractedText.slice(0, 50000) + '\n... [truncated]';

    // Define system prompt based on action
    const actionPrompts = {
      'summarize': 'You are a Chinese language tutor. Summarize the following document in Chinese (with pinyin) and English. Keep it concise: main points, key vocabulary, and a short overall summary.',
      'fix-errors': 'You are a Chinese language tutor. The user has written a Chinese document below. Fix all grammar, vocabulary, and character errors. Show the corrected version in Chinese, then list each error with the correction and a brief explanation in English.',
      'translate-zh2en': 'Translate the following Chinese document to English. Preserve the original meaning, tone, and formatting as much as possible.',
      'translate-en2zh': 'Translate the following English document to Chinese (Simplified). Preserve the original meaning, tone, and formatting as much as possible.',
      'business-translate': 'You are a professional business translator. Translate the following document between Chinese and English as needed. Provide both the translation and a brief business context analysis (key terms, cultural notes, formality level).'
    };

    const systemPrompt = actionPrompts[action] || actionPrompts['summarize'];
    const groqKey = process.env.GROQ_API_KEY;
    if (!groqKey) return res.status(500).json({ error: 'Server key not configured' });

    const groqResp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${groqKey}` },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: extractedText }
        ],
        temperature: 0.2,
        max_tokens: 4096
      })
    });
    const groqData = await groqResp.json();
    if (!groqResp.ok) return res.status(groqResp.status).json({ error: groqData });

    const aiResponse = groqData.choices?.[0]?.message?.content || '';
    res.json({ text: extractedText.slice(0, 2000), response: aiResponse, action });
  } catch (err) {
    console.error('Document upload error:', err);
    res.status(500).json({ error: err.message });
  }
});

// ===== FEEDBACK API =====
const feedbackLog = [];
app.post('/api/feedback', (req, res) => {
  const { type, text, user } = req.body || {};
  if (!text) return res.status(400).json({ error: 'Missing text' });
  feedbackLog.push({ type: type || 'other', text: text.slice(0,1000), user: user || 'anonymous', date: new Date().toISOString() });
  console.log('Feedback (' + type + '):', text.slice(0,100));
  res.json({ ok: true });
});

app.get('/api/feedback', (req, res) => {
  const { key } = req.query || {};
  if (key !== process.env.ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });
  res.json(feedbackLog.slice(-50).reverse());
});

// Redirect HTTP to HTTPS in production
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
  });
}

app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

process.on('uncaughtException', err => { console.error('Uncaught:', err); });
process.on('unhandledRejection', (reason, p) => { console.error('Unhandled Rejection:', reason); });

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`MandarinCourse running at http://0.0.0.0:${PORT}`);
});
server.on('error', err => { console.error('Server error:', err); });
