// Admin GET/PUT for site settings
// Reads/writes src/data/siteSettings.json

import fs from 'fs';
import path from 'path';
import { verifyAdmin } from './_verify';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'siteSettings.json');

export default function handler(req, res) {
  if (!verifyAdmin(req)) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'GET') {
    try {
      const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      return res.status(200).json(data);
    } catch {
      return res.status(500).json({ error: 'Failed to read settings' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const current = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      const updated = { ...current, ...req.body };
      fs.writeFileSync(DATA_FILE, JSON.stringify(updated, null, 2), 'utf8');
      return res.status(200).json(updated);
    } catch {
      return res.status(500).json({ error: 'Failed to save settings' });
    }
  }

  res.status(405).end();
}
