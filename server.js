require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const staticDir = path.join(__dirname, 'public');
const PAYPAL_API = process.env.PAYPAL_SANDBOX ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';

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
