require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const staticDir = path.join(__dirname, 'public');
const PAYPAL_API = process.env.PAYPAL_SANDBOX ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';
const nodemailer = require('nodemailer');
const webpush = require('web-push');

// VAPID keys for push notifications
const vapidPublicKey = process.env.VAPID_PUBLIC_KEY || 'BEquQ_39qIy57pQoO6_YrWns8yRzImWu5WuUi0CkHnZPdvu3Uc0jY2W53wPPFz9bX0eKMz-8a3bDPeOMJS2ExDc';
const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY || 'jGWQq6_iQJNAqYecZEv68WrsYvfoo_8ttHmyIkf7d7E';
webpush.setVapidDetails('mailto:admin@mandarincourse.app', vapidPublicKey, vapidPrivateKey);

// In-memory push subscriptions
const pushSubscriptions = [];

let mailTransporter = null;
function getMailTransporter() {
  if (!mailTransporter && process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    mailTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
  }
  return mailTransporter;
}

app.use(express.json({ limit: '10mb' }));
app.use(express.static(staticDir));

app.get('/app', (req, res) => {
  res.sendFile(path.join(staticDir, 'app.html'));
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
    smtp_configured: !!process.env.SMTP_HOST
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

app.post('/api/send-reminder', async (req, res) => {
  const transporter = getMailTransporter();
  if (!transporter) return res.status(400).json({ error: 'SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS env vars.' });
  const { email } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email required' });
  try {
    await transporter.sendMail({
      from: '"MandarinCourse" <' + (process.env.SMTP_FROM || process.env.SMTP_USER) + '>',
      to: email,
      subject: 'Your Daily Chinese Study Reminder',
      html: '<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#0D0A08;color:#F5EDE6"><div style="text-align:center;margin-bottom:24px"><div style="width:48px;height:48px;border-radius:12px;background:#C83525;color:#fff;font-size:24px;display:flex;align-items:center;justify-content:center;margin:0 auto 8px">汉</div><h2 style="margin:0;font-size:20px">MandarinCourse</h2></div><p style="font-size:14px;line-height:1.6">Time for your daily Chinese practice! Open the app and continue your learning journey.</p><a href="https://mandarincourse.app/app" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#C83525,#E04535);color:#fff;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;margin:16px 0">Start Learning</a><p style="font-size:12px;color:#7A6B5D;margin-top:24px">You received this because you set up study reminders on MandarinCourse.</p></div>'
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Check reminders every 10 minutes and send due emails
if (process.env.SMTP_HOST) {
  setInterval(async () => {
    if (!Array.isArray(global._reminders)) return;
    const transporter = getMailTransporter();
    if (!transporter) return;
    const now = new Date();
    const currentHour = now.getUTCHours().toString().padStart(2,'0');
    const currentMin = now.getUTCMinutes().toString().padStart(2,'0');
    const currentTime = currentHour + ':' + currentMin;
    for (const r of global._reminders) {
      if (r.time && r.time === currentTime) {
        try {
          await transporter.sendMail({
            from: '"MandarinCourse" <' + (process.env.SMTP_FROM || process.env.SMTP_USER) + '>',
            to: r.email,
            subject: 'Your Daily Chinese Study Reminder',
            html: '<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#0D0A08;color:#F5EDE6"><div style="text-align:center;margin-bottom:24px"><div style="width:48px;height:48px;border-radius:12px;background:#C83525;color:#fff;font-size:24px;display:flex;align-items:center;justify-content:center;margin:0 auto 8px">汉</div><h2 style="margin:0;font-size:20px">MandarinCourse</h2></div><p style="font-size:14px;line-height:1.6">Time for your daily Chinese practice! Open the app and continue learning.</p><a href="https://mandarincourse.app/app" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#C83525,#E04535);color:#fff;border-radius:10px;text-decoration:none;font-weight:700;font-size:14px;margin:16px 0">Start Learning</a></div>'
          });
        } catch(e) { console.error('Reminder send failed:', e.message); }
      }
    }
  }, 60000);
}

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

app.listen(PORT, () => {
  console.log(`MandarinCourse running at http://localhost:${PORT}`);
});
