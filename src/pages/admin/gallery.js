import { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import AdminLayout from '@/components/admin/AdminLayout';

const CATEGORIES = ['Metro & Transit Branding', 'Corporate Branding', 'Campaign Assets', 'Outdoor Branding', 'Custom Collaterals', 'Office Decor', 'Transit Branding'];

function GalleryForm({ item, token, onSave, onCancel }) {
  const isNew = !item;
  const [form, setForm] = useState(item || { image: '', category: 'Corporate Branding', title: '', description: '', year: new Date().getFullYear().toString(), featured: false });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSave(e) {
    e.preventDefault();
    if (!form.image || !form.title) return setError('Image URL and title required');
    setSaving(true); setError('');
    const method = isNew ? 'POST' : 'PUT';
    const url = isNew ? '/api/admin/gallery' : `/api/admin/gallery?id=${item.id}`;
    try {
      const res = await fetch(url, {
        method, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error || 'Save failed');
      else onSave();
    } catch { setError('Network error'); } finally { setSaving(false); }
  }

  return (
    <form onSubmit={handleSave} className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4 max-w-lg">
      <h3 className="font-bold text-gray-800">{isNew ? 'Add Gallery Item' : 'Edit Gallery Item'}</h3>
      {error && <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-red-600 text-xs">{error}</div>}

      <div>
        <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Image URL *</label>
        <input type="url" value={form.image} onChange={e => setForm(f => ({ ...f, image: e.target.value }))} required placeholder="https://cdn.jsdelivr.net/…"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
        {form.image && <img src={form.image} alt="" className="mt-2 rounded-lg w-full max-h-36 object-cover" />}
      </div>

      <div>
        <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Title *</label>
        <input type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Category</label>
          <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15">
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Year</label>
          <input type="text" value={form.year} onChange={e => setForm(f => ({ ...f, year: e.target.value }))}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15" />
        </div>
      </div>

      <div>
        <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Description</label>
        <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={3}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40" />
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" checked={!!form.featured} onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))} className="w-4 h-4 accent-[#00acd7]" />
        <span className="text-sm text-gray-700 font-medium">Featured (shown as Latest Work)</span>
      </label>

      <div className="flex gap-3 pt-1">
        <button type="submit" disabled={saving}
          className="flex-1 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white font-semibold py-2.5 rounded-xl text-sm hover:shadow-lg transition-all disabled:opacity-50">
          {saving ? 'Saving…' : isNew ? 'Add Item' : 'Save'}
        </button>
        <button type="button" onClick={onCancel} className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition-colors">Cancel</button>
      </div>
    </form>
  );
}

export default function AdminGallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formMode, setFormMode] = useState(null); // null | 'new' | item
  const token = typeof window !== 'undefined' ? sessionStorage.getItem('admin_token') : '';

  const fetchItems = useCallback(() => {
    setLoading(true);
    fetch('/api/admin/gallery', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json()).then(data => { if (Array.isArray(data)) setItems(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [token]);

  useEffect(() => { fetchItems(); }, []);

  async function handleDelete(id) {
    if (!confirm('Delete this gallery item?')) return;
    await fetch(`/api/admin/gallery?id=${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
    fetchItems();
  }

  async function toggleFeatured(item) {
    await fetch(`/api/admin/gallery?id=${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...item, featured: !item.featured }),
    });
    fetchItems();
  }

  const actions = (
    <button onClick={() => setFormMode('new')}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:shadow-lg transition-all">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
      Add Item
    </button>
  );

  return (
    <>
      <Head><title>Gallery — PDSN Admin</title></Head>
      <AdminLayout title="Gallery" actions={actions}>

        {/* Form panel */}
        {formMode && (
          <div className="mb-8">
            <GalleryForm
              item={formMode === 'new' ? null : formMode}
              token={token}
              onSave={() => { setFormMode(null); fetchItems(); }}
              onCancel={() => setFormMode(null)}
            />
          </div>
        )}

        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading…</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map(item => (
              <div key={item.id} className={`bg-white rounded-2xl border overflow-hidden group transition-shadow hover:shadow-md ${item.featured ? 'border-[#00acd7]/30 ring-1 ring-[#00acd7]/15' : 'border-gray-100'}`}>
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  {item.featured && (
                    <span className="absolute top-2 left-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <span className="text-[9px] font-bold text-[#00acd7] uppercase tracking-wide">{item.category}</span>
                  <p className="text-gray-900 font-semibold text-sm mt-0.5 line-clamp-1">{item.title}</p>
                  <p className="text-gray-400 text-xs mt-1 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-gray-50">
                    <button onClick={() => setFormMode(item)} className="text-xs font-semibold text-[#00acd7] hover:underline">Edit</button>
                    <button onClick={() => toggleFeatured(item)} className={`text-xs font-semibold ${item.featured ? 'text-amber-500' : 'text-gray-400'} hover:underline`}>
                      {item.featured ? 'Unfeature' : 'Feature'}
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="text-xs font-semibold text-red-400 hover:underline ml-auto">Delete</button>
                  </div>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400">
                No gallery items yet. Click "Add Item" to get started.
              </div>
            )}
          </div>
        )}
      </AdminLayout>
    </>
  );
}
