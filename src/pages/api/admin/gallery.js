// Admin CRUD for gallery items
// Reads/writes src/data/galleryItems.json

import fs from 'fs';
import path from 'path';
import { verifyAdmin } from './_verify';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'galleryItems.json');

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
    if (!item.image || !item.title) return res.status(400).json({ error: 'image and title required' });
    const items = readItems();
    item.id = `gi-${Date.now()}`;
    item.createdAt = new Date().toISOString();
    items.unshift(item);
    writeItems(items);
    return res.status(201).json(item);
  }

  if (req.method === 'PUT') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'id required' });
    const items = readItems();
    const idx = items.findIndex(i => i.id === id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    items[idx] = { ...items[idx], ...req.body, updatedAt: new Date().toISOString() };
    writeItems(items);
    return res.status(200).json(items[idx]);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'id required' });
    const items = readItems();
    const filtered = items.filter(i => i.id !== id);
    if (filtered.length === items.length) return res.status(404).json({ error: 'Not found' });
    writeItems(filtered);
    return res.status(200).json({ deleted: id });
  }

  // PATCH for reorder — accepts full ordered array of items
  if (req.method === 'PATCH') {
    const { items } = req.body;
    if (!Array.isArray(items)) return res.status(400).json({ error: 'items array required' });
    writeItems(items);
    return res.status(200).json({ ok: true });
  }

  res.status(405).end();
}
