import path from 'path';
import fs from 'fs';

// Public endpoint — no auth required (settings are already visible on the website)
export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  try {
    const file = path.join(process.cwd(), 'src', 'data', 'siteSettings.json');
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    res.setHeader('Cache-Control', 'no-store');
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Could not read settings' });
  }
}
