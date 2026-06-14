// Vercel Serverless Function — proxies NVIDIA NIM API to avoid CORS
export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Forward the Authorization header sent by the browser
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer nvapi-')) {
    return res.status(401).json({ error: 'Missing or invalid NVIDIA API key' });
  }

  try {
    const nvidiaRes = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(req.body),
    });

    const data = await nvidiaRes.json();
    return res.status(nvidiaRes.status).json(data);
  } catch (err) {
    console.error('NVIDIA proxy error:', err);
    return res.status(500).json({ error: 'Proxy request failed', details: err.message });
  }
}
