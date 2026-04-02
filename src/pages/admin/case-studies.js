import { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/admin/AdminLayout';

function toSlug(str) {
  return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

const CATEGORIES = ['DOOH', 'Hyperlocal', 'Content Creation', 'Branding', 'Digi-Media'];

function CaseStudyForm({ slug, token, onSave, onCancel }) {
  const isNew = !slug;
  const [form, setForm] = useState({ title: '', slug: '', image: '', summary: '', excerpt: '', content: '', videoId: '', result: '', category: 'DOOH' });
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [slugEdited, setSlugEdited] = useState(false);

  useEffect(() => {
    if (!isNew) {
      fetch('/api/admin/case-studies', { headers: { Authorization: `Bearer ${token}` } })
        .then(r => r.json()).then(data => {
          const item = data.find(i => i.slug === slug);
          if (item) { setForm(item); setSlugEdited(true); }
          setLoading(false);
        }).catch(() => setLoading(false));
    }
  }, [slug]);

  function setField(key, val) {
    setForm(f => {
      const next = { ...f, [key]: val };
      if (key === 'title' && !slugEdited) next.slug = toSlug(val);
      return next;
    });
  }

  async function handleSave(e) {
    e.preventDefault();
    if (!form.title || !form.slug) return setError('Title and slug required');
    setSaving(true); setError('');
    const method = isNew ? 'POST' : 'PUT';
    const url = isNew ? '/api/admin/case-studies' : `/api/admin/case-studies?slug=${slug}`;
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error || 'Save failed');
      else onSave();
    } catch { setError('Network error'); } finally { setSaving(false); }
  }

  if (loading) return <div className="text-center py-20 text-gray-400">Loading…</div>;

  return (
    <form onSubmit={handleSave} className="max-w-2xl">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
        {error && <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-red-600 text-xs">{error}</div>}

        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Title *</label>
          <input type="text" value={form.title} onChange={e => setField('title', e.target.value)} required
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
        </div>

        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Slug *</label>
          <input type="text" value={form.slug}
            onChange={e => { setForm(f => ({ ...f, slug: toSlug(e.target.value) })); setSlugEdited(true); }}
            required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
        </div>

        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Category</label>
          <select value={form.category} onChange={e => setField('category', e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40">
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Image URL</label>
          <input type="url" value={form.image} onChange={e => setField('image', e.target.value)} placeholder="https://cdn.jsdelivr.net/…"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
          {form.image && <img src={form.image} alt="" className="mt-2 rounded-lg w-full max-h-40 object-cover" />}
        </div>

        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">YouTube Video ID</label>
          <input type="text" value={form.videoId} onChange={e => setField('videoId', e.target.value)} placeholder="e.g. dRH2RBQeJnE (from youtube.com/watch?v=…)"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
          {form.videoId && (
            <a href={`https://www.youtube.com/watch?v=${form.videoId}`} target="_blank" rel="noopener noreferrer" className="text-[#00acd7] text-xs mt-1 inline-block hover:underline">
              Preview on YouTube →
            </a>
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Summary <span className="text-gray-400 normal-case font-normal">(shown on listing card)</span></label>
          <textarea value={form.summary} onChange={e => setField('summary', e.target.value)} rows={2}
            placeholder="One-liner about the campaign…"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
        </div>

        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Brief / Excerpt <span className="text-gray-400 normal-case font-normal">(2–3 sentences, shown in sidebar)</span></label>
          <textarea value={form.excerpt} onChange={e => setField('excerpt', e.target.value)} rows={3}
            placeholder="Short description of the campaign objective and outcome…"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
        </div>

        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Detailed Content <span className="text-gray-400 normal-case font-normal">(full case study body — supports HTML)</span></label>
          <div className="flex gap-2 mb-2">
            {[['<p>', 'P'], ['<strong>', 'B'], ['<h2>', 'H2'], ['<ul>', 'UL'], ['<li>', 'LI']].map(([tag, label]) => (
              <button key={tag} type="button"
                onClick={() => setField('content', (form.content || '') + tag + '</' + tag.replace('<','').replace('>','') + '>')}
                className="px-2 py-1 text-[10px] font-bold bg-gray-100 hover:bg-gray-200 rounded text-gray-600 border border-gray-200 transition-colors">
                {label}
              </button>
            ))}
          </div>
          <textarea value={form.content} onChange={e => setField('content', e.target.value)} rows={10}
            placeholder="<p>Write the detailed case study here. You can use HTML tags like &lt;p&gt;, &lt;strong&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;li&gt;.</p>"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-mono resize-y focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
          <p className="text-gray-400 text-[11px] mt-1">Tip: Paste HTML or type paragraphs. Use &lt;p&gt; for paragraphs, &lt;strong&gt; for bold, &lt;h2&gt; for headings.</p>
        </div>

        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Result / Outcome</label>
          <input type="text" value={form.result} onChange={e => setField('result', e.target.value)} placeholder="e.g. 🎯 Impactful Results"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={saving}
            className="flex-1 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white font-semibold py-3 rounded-xl text-sm hover:shadow-lg transition-all disabled:opacity-50">
            {saving ? 'Saving…' : isNew ? 'Create Case Study' : 'Save Changes'}
          </button>
          <button type="button" onClick={onCancel} className="px-5 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default function AdminCaseStudies() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list');
  const [editSlug, setEditSlug] = useState(null);
  const token = typeof window !== 'undefined' ? sessionStorage.getItem('admin_token') : '';

  useEffect(() => {
    if (router.isReady) {
      if (router.query.new) setView('new');
      else if (router.query.edit) { setEditSlug(router.query.edit); setView('edit'); }
    }
  }, [router.isReady, router.query]);

  const fetchItems = useCallback(() => {
    setLoading(true);
    fetch('/api/admin/case-studies', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json()).then(data => { if (Array.isArray(data)) setItems(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [token]);

  useEffect(() => { fetchItems(); }, []);

  async function handleDelete(slug) {
    if (!confirm(`Delete case study "${slug}"?`)) return;
    await fetch(`/api/admin/case-studies?slug=${slug}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
    fetchItems();
  }

  function goList() { setView('list'); setEditSlug(null); router.replace('/admin/case-studies', undefined, { shallow: true }); }

  const actions = view !== 'list' ? (
    <button onClick={goList} className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1.5">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      Back
    </button>
  ) : null;

  return (
    <>
      <Head><title>Case Studies — PDSN Admin</title></Head>
      <AdminLayout title={view === 'list' ? 'Case Studies' : view === 'new' ? 'New Case Study' : 'Edit Case Study'} actions={actions}>

        {view === 'list' && (
          <div>
            <div className="flex justify-end mb-6">
              <button onClick={() => setView('new')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-[#00acd7]/20 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                New Case Study
              </button>
            </div>

            {loading ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400">Loading…</div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map(item => (
                  <div key={item.slug} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                    {item.image && (
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    )}
                    <div className="p-4">
                      <span className="inline-block bg-[#00acd7]/10 text-[#00acd7] text-xs font-semibold px-2 py-0.5 rounded-full mb-2">{item.category}</span>
                      <h3 className="font-bold text-gray-900 text-sm leading-snug">{item.title}</h3>
                      <p className="text-gray-400 text-xs mt-1 line-clamp-2">{item.summary}</p>
                      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-50">
                        <button onClick={() => { setEditSlug(item.slug); setView('edit'); }} className="text-xs font-semibold text-[#00acd7] hover:underline">Edit</button>
                        <button onClick={() => handleDelete(item.slug)} className="text-xs font-semibold text-red-400 hover:underline">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
                {items.length === 0 && (
                  <div className="sm:col-span-2 lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400">No case studies yet.</div>
                )}
              </div>
            )}
          </div>
        )}

        {(view === 'new' || view === 'edit') && (
          <CaseStudyForm slug={view === 'edit' ? editSlug : null} token={token} onSave={() => { goList(); fetchItems(); }} onCancel={goList} />
        )}
      </AdminLayout>
    </>
  );
}
