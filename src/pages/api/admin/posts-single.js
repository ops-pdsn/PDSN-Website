// GET single post by slug for the editor
// /api/admin/posts-single?slug=xxx

import fs from 'fs';
import path from 'path';
import { verifyAdmin } from './_verify';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'posts.json');

export default function handler(req, res) {
  if (!verifyAdmin(req)) return res.status(401).json({ error: 'Unauthorized' });
  if (req.method !== 'GET') return res.status(405).end();

  const { slug } = req.query;
  if (!slug) return res.status(400).json({ error: 'slug required' });

  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const posts = JSON.parse(raw);
    const post = posts.find(p => p.slug === slug);
    if (!post) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json(post);
  } catch {
    return res.status(500).json({ error: 'Failed to read data' });
  }
}
