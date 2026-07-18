require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/test', (req, res) => {
  res.json({ ok: true, body: req.body });
});

app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Server Gemini key not configured' });

  const { contents, systemInstruction } = req.body;
  const payload = { contents };
  if (systemInstruction) {
    payload.systemInstruction = { parts: [{ text: systemInstruction }] };
  }

  try {
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
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
    const resp = await fetch(
      'https://api-m.paypal.com/v2/checkout/orders',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          intent: 'CAPTURE',
          purchase_units: [{
            description: 'HanMaster Premium - Monthly',
            amount: { currency_code: 'USD', value: '9.99' }
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
  const { orderId } = req.body;
  const accessToken = await getPayPalAccessToken();
  if (!accessToken) return res.status(500).json({ error: 'Failed to get PayPal token' });

  try {
    const resp = await fetch(
      `https://api-m.paypal.com/v2/checkout/orders/${orderId}/capture`,
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
  if (!clientId || !secret) return null;
  try {
    const resp = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      ...(clientId && secret ? {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(clientId + ':' + secret).toString('base64')
        }
      } : {})
    });
    const data = await resp.json();
    return data.access_token;
  } catch {
    return null;
  }
}

app.listen(PORT, () => {
  console.log(`HanMaster running at http://localhost:${PORT}`);
});
