import fs from 'fs';
import path from 'path';
import { verifyAdmin as verify } from './_verify';

/* ────────────────────────────────────────────────
   POST /api/admin/publish
   Pushes all src/data/*.json files to the GitHub
   CDN repo so the live static site can fetch them
   at runtime via jsDelivr — no rebuild needed.
──────────────────────────────────────────────── */
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!verify(req)) return res.status(401).json({ error: 'Unauthorized' });

  const token = process.env.GITHUB_TOKEN;
  const repo  = process.env.GITHUB_REPO  || 'ops-pdsn/cdn-assets';
  const branch = process.env.GITHUB_BRANCH || 'main';

  if (!token) {
    return res.status(400).json({
      error: 'GITHUB_TOKEN is not set in .env.local. See .env.local.example for setup instructions.',
    });
  }

  const dataDir = path.join(process.cwd(), 'src', 'data');
  const files = ['caseStudies.json', 'posts.json', 'siteSettings.json', 'galleryItems.json'];

  const results = [];

  for (const file of files) {
    const localPath = path.join(dataDir, file);
    if (!fs.existsSync(localPath)) { results.push({ file, skipped: true }); continue; }

    const content  = fs.readFileSync(localPath, 'utf8');
    const encoded  = Buffer.from(content).toString('base64');
    const ghPath   = `data/${file}`;
    const apiBase  = `https://api.github.com/repos/${repo}/contents/${ghPath}`;
    const headers  = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'PDSN-Admin-CMS',
    };

    // Get existing file SHA (required for update)
    let sha;
    try {
      const existing = await fetch(`${apiBase}?ref=${branch}`, { headers });
      if (existing.ok) { const j = await existing.json(); sha = j.sha; }
    } catch {}

    // Create or update the file
    const putBody = JSON.stringify({
      message: `CMS publish: ${file} [${new Date().toISOString()}]`,
      content: encoded,
      branch,
      ...(sha ? { sha } : {}),
    });

    const put = await fetch(apiBase, { method: 'PUT', headers: { ...headers, 'Content-Type': 'application/json' }, body: putBody });
    const ok  = put.ok;
    results.push({ file, success: ok, status: put.status });

    if (!ok) {
      const body = await put.text();
      results[results.length - 1].detail = body.slice(0, 200);
    }
  }

  // Purge jsDelivr CDN cache for all pushed files
  try {
    await Promise.all(
      files.map(file =>
        fetch(`https://purge.jsdelivr.net/gh/${repo}@${branch}/data/${file}`).catch(() => {})
      )
    );
  } catch {}

  const allOk = results.every(r => r.success || r.skipped);
  res.status(allOk ? 200 : 207).json({ ok: allOk, results });
}
