// Admin CRUD for case studies
// Reads/writes src/data/caseStudies.json

import fs from 'fs';
import path from 'path';
import { verifyAdmin } from './_verify';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'caseStudies.json');

function readItems() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function writeItems(items) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), 'utf8');
}

export default function handler(req, res) {
  if (!verifyAdmin(req)) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'GET') {
    return res.status(200).json(readItems());
  }

  if (req.method === 'POST') {
    const item = req.body;
    if (!item.slug || !item.title) return res.status(400).json({ error: 'slug and title required' });
    const items = readItems();
    if (items.find(i => i.slug === item.slug)) return res.status(409).json({ error: 'Slug exists' });
    item.createdAt = new Date().toISOString();
    items.unshift(item);
    writeItems(items);
    return res.status(201).json(item);
  }

  if (req.method === 'PUT') {
    const { slug } = req.query;
    if (!slug) return res.status(400).json({ error: 'slug required' });
    const items = readItems();
    const idx = items.findIndex(i => i.slug === slug);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    items[idx] = { ...items[idx], ...req.body, updatedAt: new Date().toISOString() };
    writeItems(items);
    return res.status(200).json(items[idx]);
  }

  if (req.method === 'DELETE') {
    const { slug } = req.query;
    if (!slug) return res.status(400).json({ error: 'slug required' });
    const items = readItems();
    const filtered = items.filter(i => i.slug !== slug);
    if (filtered.length === items.length) return res.status(404).json({ error: 'Not found' });
    writeItems(filtered);
    return res.status(200).json({ deleted: slug });
  }

  res.status(405).end();
}
