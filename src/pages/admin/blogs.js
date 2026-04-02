import { useEffect, useState, useCallback, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/admin/AdminLayout';

/* ─── Slug generator ─── */
function toSlug(str) {
  return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/* ─── Simple HTML toolbar ─── */
function insertAt(textarea, before, after = '') {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const sel = textarea.value.substring(start, end);
  const val = textarea.value.substring(0, start) + before + sel + after + textarea.value.substring(end);
  return { value: val, cursor: start + before.length + sel.length + after.length };
}

function ToolbarButton({ label, onClick, title }) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="px-2.5 py-1.5 rounded-md text-xs font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-100 border border-transparent hover:border-gray-200"
    >
      {label}
    </button>
  );
}

/* ─── Blog List ─── */
function BlogList({ posts, onEdit, onDelete, onNew, loading }) {
  const [search, setSearch] = useState('');
  const filtered = posts.filter(p =>
    p.title?.toLowerCase().includes(search.toLowerCase()) ||
    p.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search posts…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00acd7]/20 focus:border-[#00acd7]/50"
        />
        <button
          onClick={onNew}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-[#00acd7]/20 transition-all duration-200 shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Post
        </button>
      </div>

      {loading ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400">Loading…</div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <p className="text-gray-400 text-sm mb-4">{posts.length === 0 ? 'No blog posts yet.' : 'No posts match your search.'}</p>
          {posts.length === 0 && (
            <button onClick={onNew} className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-sm font-semibold px-5 py-2.5 rounded-xl">
              Create First Post
            </button>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left px-6 py-3.5 text-gray-500 font-semibold text-xs uppercase tracking-wide">Title</th>
                  <th className="text-left px-4 py-3.5 text-gray-500 font-semibold text-xs uppercase tracking-wide hidden sm:table-cell">Category</th>
                  <th className="text-left px-4 py-3.5 text-gray-500 font-semibold text-xs uppercase tracking-wide hidden md:table-cell">Date</th>
                  <th className="px-4 py-3.5 text-gray-500 font-semibold text-xs uppercase tracking-wide text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map(post => (
                  <tr key={post.slug} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 truncate max-w-[280px]">{post.title}</div>
                      <div className="text-gray-400 text-xs mt-0.5 font-mono">{post.slug}</div>
                    </td>
                    <td className="px-4 py-4 hidden sm:table-cell">
                      <span className="inline-block bg-[#00acd7]/10 text-[#00acd7] text-xs font-semibold px-2.5 py-1 rounded-full">
                        {post.category || '—'}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-400 text-xs hidden md:table-cell">
                      {post.published_date?.day} {post.published_date?.month}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onEdit(post.slug)}
                          className="text-xs font-semibold text-[#00acd7] hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => onDelete(post.slug)}
                          className="text-xs font-semibold text-red-400 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <p className="text-gray-400 text-xs mt-3 text-center">
        Note: Legacy posts from <code className="font-mono bg-gray-100 px-1 rounded">src/lib/posts.js</code> are also included on the live site but managed directly in code.
      </p>
    </div>
  );
}

/* ─── Blog Editor ─── */
function BlogEditor({ slug, onSave, onCancel, token }) {
  const isNew = !slug;
  const editorRef = useRef(null);
  const [form, setForm] = useState({
    title: '', slug: '', category: '', author: 'PDSN Media',
    published_date: { day: new Date().getDate().toString(), month: new Date().toLocaleString('default', { month: 'long' }) },
    cover: '', excerpt: '', content: '',
  });
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(false);
  const [slugEdited, setSlugEdited] = useState(false);

  useEffect(() => {
    if (!isNew && slug) {
      fetch(`/api/admin/posts-single?slug=${slug}`, { headers: { Authorization: `Bearer ${token}` } })
        .then(r => r.json())
        .then(data => { setForm(data); setLoading(false); setSlugEdited(true); })
        .catch(() => { setError('Failed to load post'); setLoading(false); });
    }
  }, [slug]);

  function setField(key, val) {
    setForm(f => ({ ...f, [key]: val }));
    if (key === 'title' && !slugEdited) {
      setForm(f => ({ ...f, title: val, slug: toSlug(val) }));
    }
  }

  function insertHTML(before, after = '') {
    const ta = editorRef.current;
    if (!ta) return;
    const result = insertAt(ta, before, after);
    setForm(f => ({ ...f, content: result.value }));
    setTimeout(() => { ta.focus(); ta.setSelectionRange(result.cursor, result.cursor); }, 0);
  }

  async function handleSave(e) {
    e.preventDefault();
    if (!form.title || !form.slug) return setError('Title and slug are required');
    setSaving(true); setError('');
    const method = isNew ? 'POST' : 'PUT';
    const url = isNew ? '/api/admin/posts' : `/api/admin/posts?slug=${slug}`;
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error || 'Save failed');
      else onSave();
    } catch {
      setError('Network error. Is the dev server running?');
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="text-center py-20 text-gray-400">Loading post…</div>;

  return (
    <form onSubmit={handleSave}>
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Main editor — 2/3 */}
        <div className="lg:col-span-2 space-y-4">

          {/* Title */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <input
              type="text"
              placeholder="Post Title"
              value={form.title}
              onChange={e => setField('title', e.target.value)}
              className="w-full text-2xl font-bold text-gray-900 placeholder:text-gray-300 border-none outline-none resize-none"
            />
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 text-xs">Slug:</span>
              <input
                type="text"
                value={form.slug}
                onChange={e => { setForm(f => ({ ...f, slug: toSlug(e.target.value) })); setSlugEdited(true); }}
                className="text-xs font-mono text-[#00acd7] bg-[#00acd7]/5 px-2 py-1 rounded border border-[#00acd7]/20 focus:outline-none focus:border-[#00acd7]/40"
              />
            </div>
          </div>

          {/* Content editor */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
              <ToolbarButton label="H2" title="Heading 2" onClick={() => insertHTML('\n<h2>', '</h2>\n')} />
              <ToolbarButton label="H3" title="Heading 3" onClick={() => insertHTML('\n<h3>', '</h3>\n')} />
              <div className="w-px h-4 bg-gray-200 mx-1" />
              <ToolbarButton label="B" title="Bold" onClick={() => insertHTML('<strong>', '</strong>')} />
              <ToolbarButton label="I" title="Italic" onClick={() => insertHTML('<em>', '</em>')} />
              <div className="w-px h-4 bg-gray-200 mx-1" />
              <ToolbarButton label="¶" title="Paragraph" onClick={() => insertHTML('\n<p>', '</p>\n')} />
              <ToolbarButton label="UL" title="Unordered List" onClick={() => insertHTML('\n<ul>\n  <li>', '</li>\n</ul>\n')} />
              <ToolbarButton label="LI" title="List Item" onClick={() => insertHTML('\n  <li>', '</li>')} />
              <div className="w-px h-4 bg-gray-200 mx-1" />
              <ToolbarButton label="Link" title="Link" onClick={() => insertHTML('<a href="', '">Link text</a>')} />
              <ToolbarButton label="—" title="Horizontal Rule" onClick={() => insertHTML('\n<hr />\n')} />
              <ToolbarButton label="BR" title="Line Break" onClick={() => insertHTML('\n<br />\n')} />
              <div className="w-px h-4 bg-gray-200 mx-1" />
              <button
                type="button"
                onClick={() => setPreview(!preview)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-colors ${preview ? 'bg-[#00acd7]/10 text-[#00acd7] border border-[#00acd7]/20' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                {preview ? 'Edit' : 'Preview'}
              </button>
            </div>

            {preview ? (
              <div
                className="p-6 prose prose-sm max-w-none min-h-[320px] text-gray-700"
                dangerouslySetInnerHTML={{ __html: form.content }}
              />
            ) : (
              <textarea
                ref={editorRef}
                value={form.content}
                onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                placeholder="Write your post content in HTML…"
                className="w-full p-6 text-sm font-mono text-gray-700 placeholder:text-gray-300 border-none outline-none resize-none min-h-[320px] leading-relaxed"
              />
            )}
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Excerpt</label>
            <textarea
              value={form.excerpt}
              onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
              placeholder="Short summary shown in blog listing…"
              rows={3}
              className="w-full text-sm text-gray-700 placeholder:text-gray-300 border-none outline-none resize-none"
            />
          </div>
        </div>

        {/* Sidebar — 1/3 */}
        <div className="space-y-4">

          {/* Publish / actions */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            {error && (
              <div className="mb-4 bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-red-600 text-xs">{error}</div>
            )}
            <button
              type="submit"
              disabled={saving}
              className="w-full bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white font-semibold py-3 rounded-xl text-sm hover:shadow-lg hover:shadow-[#00acd7]/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {saving ? (
                <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Saving…</>
              ) : (
                <>{isNew ? 'Publish Post' : 'Save Changes'}</>
              )}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="w-full mt-2 text-gray-400 text-sm font-medium py-2 hover:text-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>

          {/* Meta */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4">
            <h3 className="font-semibold text-gray-700 text-sm">Post Details</h3>
            <div>
              <label className="block text-gray-500 text-xs font-medium mb-1.5">Category</label>
              <input
                type="text"
                value={form.category}
                onChange={e => setField('category', e.target.value)}
                placeholder="e.g. DOOH & Advertising"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40"
              />
            </div>
            <div>
              <label className="block text-gray-500 text-xs font-medium mb-1.5">Author</label>
              <input
                type="text"
                value={form.author}
                onChange={e => setField('author', e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-gray-500 text-xs font-medium mb-1.5">Day</label>
                <input
                  type="text"
                  value={form.published_date?.day || ''}
                  onChange={e => setForm(f => ({ ...f, published_date: { ...f.published_date, day: e.target.value } }))}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs font-medium mb-1.5">Month</label>
                <input
                  type="text"
                  value={form.published_date?.month || ''}
                  onChange={e => setForm(f => ({ ...f, published_date: { ...f.published_date, month: e.target.value } }))}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Cover image */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-3">Cover Image URL</label>
            <input
              type="url"
              value={form.cover}
              onChange={e => setField('cover', e.target.value)}
              placeholder="https://cdn.jsdelivr.net/…"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40"
            />
            {form.cover && (
              <div className="mt-3 rounded-xl overflow-hidden aspect-video relative bg-gray-100">
                <img src={form.cover} alt="Cover preview" className="w-full h-full object-cover" />
              </div>
            )}
            <p className="text-gray-400 text-xs mt-2">Upload image to CDN first, then paste URL here.</p>
          </div>
        </div>
      </div>
    </form>
  );
}

/* ─── Page ─── */
export default function AdminBlogs() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list'); // 'list' | 'new' | 'edit'
  const [editSlug, setEditSlug] = useState(null);
  const token = typeof window !== 'undefined' ? sessionStorage.getItem('admin_token') : '';

  // Sync view with URL query params
  useEffect(() => {
    if (router.isReady) {
      if (router.query.new) setView('new');
      else if (router.query.edit) { setEditSlug(router.query.edit); setView('edit'); }
    }
  }, [router.isReady, router.query]);

  const fetchPosts = useCallback(() => {
    setLoading(true);
    fetch('/api/admin/posts', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [token]);

  useEffect(() => { if (view === 'list') fetchPosts(); }, [view]);
  useEffect(() => { fetchPosts(); }, []);

  async function handleDelete(slug) {
    if (!confirm(`Delete "${slug}"? This cannot be undone.`)) return;
    await fetch(`/api/admin/posts?slug=${slug}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchPosts();
  }

  function goList() {
    setView('list'); setEditSlug(null);
    router.replace('/admin/blogs', undefined, { shallow: true });
  }

  const pageTitle = view === 'new' ? 'New Blog Post' : view === 'edit' ? 'Edit Post' : 'Blog Posts';
  const actions = view !== 'list' ? (
    <button onClick={goList} className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1.5">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      Back to list
    </button>
  ) : null;

  return (
    <>
      <Head><title>Blog Posts — PDSN Admin</title></Head>
      <AdminLayout title={pageTitle} actions={actions}>
        {view === 'list' && (
          <BlogList
            posts={posts}
            loading={loading}
            onEdit={(slug) => { setEditSlug(slug); setView('edit'); }}
            onDelete={handleDelete}
            onNew={() => setView('new')}
          />
        )}
        {view === 'new' && (
          <BlogEditor slug={null} token={token} onSave={goList} onCancel={goList} />
        )}
        {view === 'edit' && editSlug && (
          <BlogEditor slug={editSlug} token={token} onSave={goList} onCancel={goList} />
        )}
      </AdminLayout>
    </>
  );
}
