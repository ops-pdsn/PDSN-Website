// Combines CMS-managed posts (src/data/posts.json) with legacy hardcoded posts (src/lib/posts.js).
// New posts created via /admin/blogs appear here automatically after the next build.
// Import this instead of '@/lib/posts' in blog pages.

import { postsData as legacyPosts } from './posts';

let newPosts = [];
try {
  // Dynamic require so this file stays compatible with both SSR and static export
  newPosts = require('../data/posts.json');
} catch {
  newPosts = [];
}

// CMS posts first (newest), then legacy posts
export const postsData = [...newPosts, ...legacyPosts];
