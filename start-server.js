require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const isProd = process.env.NODE_ENV === 'production';
const PAYPAL_API = process.env.PAYPAL_SANDBOX ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';
const staticDir = path.join(__dirname, isProd ? 'dist' : 'public');

app.use(express.json({ limit: '10mb' }));
app.use(express.static(staticDir));

app.get('/app', (req, res) => {
  res.sendFile(path.join(staticDir, 'app.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.post('/api/test', (req, res) => {
  res.json({ ok: true, body: req.body });
});

app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Server Gemini key not configured' });
  if (!req.body || !Array.isArray(req.body.contents)) {
    return res.status(400).json({ error: 'Missing or invalid contents array' });
  }

  const { contents, systemInstruction } = req.body;
  const payload = { contents };
  if (systemInstruction) {
    payload.systemInstruction = { parts: [{ text: systemInstruction }] };
  }

  try {
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
    );
    const data = await resp.json();
    if (!resp.ok) return res.status(resp.status).json({ error: data });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/paypal/create-order', async (req, res) => {
  const accessToken = await getPayPalAccessToken();
  if (!accessToken) return res.status(500).json({ error: 'Failed to get PayPal token' });
  try {
    const resp = await fetch(PAYPAL_API + '/v2/checkout/orders', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ intent: 'CAPTURE', purchase_units: [{ description: 'MandarinCourse Premium - Monthly', amount: { currency_code: 'USD', value: '9.00' } }] })
    });
    const data = await resp.json();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/paypal/capture-order', async (req, res) => {
  const { orderId } = req.body || {};
  if (!orderId || typeof orderId !== 'string') return res.status(400).json({ error: 'Missing orderId' });
  const accessToken = await getPayPalAccessToken();
  if (!accessToken) return res.status(500).json({ error: 'Failed to get PayPal token' });
  try {
    const resp = await fetch(PAYPAL_API + `/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` }
    });
    const data = await resp.json();
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

async function getPayPalAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !secret || secret === 'YOUR_PAYPAL_SECRET') return null;
  try {
    const resp = await fetch(PAYPAL_API + '/v1/oauth2/token', {
      method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + Buffer.from(clientId + ':' + secret).toString('base64') },
      body: new URLSearchParams({ grant_type: 'client_credentials' })
    });
    const data = await resp.json();
    return data.access_token;
  } catch { return null; }
}

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') return res.redirect('https://' + req.headers.host + req.url);
    next();
  });
}

app.use('/api/*', (req, res) => { res.status(404).json({ error: 'API endpoint not found' }); });
app.use((err, req, res, next) => { console.error(err.stack); res.status(500).json({ error: err.message }); });

app.listen(PORT, () => { console.log(`MandarinCourse running at http://localhost:${PORT}`); });
