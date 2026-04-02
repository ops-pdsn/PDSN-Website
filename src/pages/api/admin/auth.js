// Admin authentication endpoint
// Only works in development (next dev). Not exported to static build.

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return res.status(500).json({ error: 'ADMIN_PASSWORD not set in .env.local' });
  }

  if (password !== adminPassword) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // Token = Base64(password:secret) — simple, no JWT needed for a local dev tool
  const token = Buffer.from(`${password}:pdsn-admin-cms`).toString('base64');
  return res.status(200).json({ token });
}
