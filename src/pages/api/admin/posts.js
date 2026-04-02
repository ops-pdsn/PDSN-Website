// Admin CRUD for blog posts
// Reads/writes src/data/posts.json
// Only works in development (next dev). Not exported to static build.

import fs from 'fs';
import path from 'path';
import { verifyAdmin } from './_verify';

const DATA_FILE = path.join(process.cwd(), 'src', 'data', 'posts.json');

function readPosts() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writePosts(posts) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), 'utf8');
}

export default function handler(req, res) {
  if (!verifyAdmin(req)) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'GET') {
    // Return all posts (no content to keep payload small)
    const posts = readPosts();
    const lite = posts.map(({ content, ...rest }) => rest);
    return res.status(200).json(lite);
  }

  if (req.method === 'GET_ONE') {
    // Not a real HTTP method — use GET with ?slug= instead
  }

  // GET single post by slug
  if (req.method === 'GET' && req.query.slug) {
    const posts = readPosts();
    const post = posts.find(p => p.slug === req.query.slug);
    if (!post) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json(post);
  }

  if (req.method === 'POST') {
    // Create new post
    const post = req.body;
    if (!post.slug || !post.title) {
      return res.status(400).json({ error: 'slug and title are required' });
    }
    const posts = readPosts();
    if (posts.find(p => p.slug === post.slug)) {
      return res.status(409).json({ error: 'Slug already exists' });
    }
    post.createdAt = new Date().toISOString();
    posts.unshift(post); // newest first
    writePosts(posts);
    return res.status(201).json(post);
  }

  if (req.method === 'PUT') {
    // Update post by slug
    const { slug } = req.query;
    if (!slug) return res.status(400).json({ error: 'slug query param required' });
    const posts = readPosts();
    const idx = posts.findIndex(p => p.slug === slug);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    posts[idx] = { ...posts[idx], ...req.body, updatedAt: new Date().toISOString() };
    writePosts(posts);
    return res.status(200).json(posts[idx]);
  }

  if (req.method === 'DELETE') {
    // Delete post by slug
    const { slug } = req.query;
    if (!slug) return res.status(400).json({ error: 'slug query param required' });
    const posts = readPosts();
    const filtered = posts.filter(p => p.slug !== slug);
    if (filtered.length === posts.length) return res.status(404).json({ error: 'Not found' });
    writePosts(filtered);
    return res.status(200).json({ deleted: slug });
  }

  res.status(405).end();
}
