/* Vercel Serverless Function — NVIDIA NIM Proxy
   Env var required: NVIDIA_API_KEY  (set in Vercel dashboard)
   Keeps the API key server-side, never exposed to the browser.
*/
export default async function handler(req, res) {
  /* CORS headers — allow requests from same origin */
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'NVIDIA_API_KEY environment variable is not set in Vercel.' });
    return;
  }

  const { messages, max_tokens = 2048, temperature = 0.7 } = req.body || {};

  if (!messages || !Array.isArray(messages)) {
    res.status(400).json({ error: 'Invalid request body — messages array required.' });
    return;
  }

  try {
    const upstream = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'nvidia/nemotron-3-ultra-550b-a55b',
        messages,
        max_tokens,
        temperature,
      }),
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      res.status(upstream.status).json({ error: data?.detail || data?.message || 'NVIDIA API error', details: data });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Proxy error: ' + err.message });
  }
}
