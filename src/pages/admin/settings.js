import { useEffect, useState } from 'react';
import Head from 'next/head';
import AdminLayout from '@/components/admin/AdminLayout';

const SECTIONS = [
  {
    title: 'Branding',
    description: 'Logo and favicon URLs. After saving, click "Publish Live" to apply instantly.',
    fields: [
      { key: 'logoUrl', label: 'Logo Image URL', type: 'url', placeholder: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/logopdsn.webp' },
      { key: 'faviconUrl', label: 'Favicon URL (.ico or .png)', type: 'url', placeholder: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/favicon.ico' },
    ],
  },
  {
    title: 'Contact Information',
    description: 'Click "Publish Live" after saving to update the live site instantly.',
    fields: [
      { key: 'contactEmail', label: 'Email Address', type: 'email', placeholder: 'sales@pdsn.in' },
      { key: 'contactPhone', label: 'Primary Phone', type: 'text', placeholder: '+91-XXXXXXXXXX' },
      { key: 'contactPhone2', label: 'Secondary Phone', type: 'text', placeholder: '022-XXXXXXXX' },
      { key: 'contactAddress', label: 'Office Address', type: 'textarea', placeholder: 'Full address…' },
    ],
  },
  {
    title: 'Social Media Links',
    description: 'Full URLs including https://',
    fields: [
      { key: 'socialLinkedIn', label: 'LinkedIn', type: 'url', placeholder: 'https://linkedin.com/company/…' },
      { key: 'socialInstagram', label: 'Instagram', type: 'url', placeholder: 'https://instagram.com/…' },
      { key: 'socialFacebook', label: 'Facebook', type: 'url', placeholder: 'https://facebook.com/…' },
      { key: 'socialYoutube', label: 'YouTube', type: 'url', placeholder: 'https://youtube.com/@…' },
    ],
  },
  {
    title: 'SEO & Meta',
    description: 'Site-wide SEO settings.',
    fields: [
      { key: 'metaTitle', label: 'Meta Title', type: 'text', placeholder: 'PDSN Media — …' },
      { key: 'metaDescription', label: 'Meta Description', type: 'textarea', placeholder: 'Site description for search engines…' },
      { key: 'companyMission', label: 'Company Mission (Footer)', type: 'textarea', placeholder: 'Short mission statement shown in footer…' },
    ],
  },
];

export default function AdminSettings() {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const token = typeof window !== 'undefined' ? sessionStorage.getItem('admin_token') : '';

  useEffect(() => {
    fetch('/api/admin/settings', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => { if (data && !data.error) setSettings(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true); setError(''); setSaved(false);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error || 'Save failed');
      else { setSettings(data); setSaved(true); setTimeout(() => setSaved(false), 3000); }
    } catch { setError('Network error. Is the dev server running?'); } finally { setSaving(false); }
  }

  function setField(key, val) {
    setSettings(s => ({ ...s, [key]: val }));
  }

  const actions = (
    <button
      onClick={handleSave}
      disabled={saving || loading}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-sm font-semibold px-5 py-2 rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
    >
      {saving ? (
        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Saving…</>
      ) : saved ? (
        <><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> Saved!</>
      ) : 'Save Settings'}
    </button>
  );

  return (
    <>
      <Head><title>Settings — PDSN Admin</title></Head>
      <AdminLayout title="Site Settings" actions={actions}>

        {/* Publish tip */}
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.338-2.32 5.75 5.75 0 011.344 11.095H6.75z" />
          </svg>
          <div>
            <p className="text-blue-800 font-semibold text-sm">Save → then click "Publish Live" to go live instantly</p>
            <p className="text-blue-600 text-xs mt-0.5">
              The <strong>Publish Live</strong> button (top-right of admin) syncs your changes to the CDN. No rebuild or re-upload needed.
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4 text-red-600 text-sm">{error}</div>
        )}

        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading settings…</div>
        ) : (
          <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
            {SECTIONS.map(section => (
              <div key={section.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                  <h2 className="font-bold text-gray-800 text-sm">{section.title}</h2>
                  <p className="text-gray-400 text-xs mt-0.5">{section.description}</p>
                </div>
                <div className="p-6 space-y-4">
                  {section.fields.map(field => (
                    <div key={field.key}>
                      <label className="block text-gray-600 text-xs font-semibold mb-1.5">{field.label}</label>
                      {field.type === 'textarea' ? (
                        <textarea
                          value={settings[field.key] || ''}
                          onChange={e => setField(field.key, e.target.value)}
                          placeholder={field.placeholder}
                          rows={3}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40"
                        />
                      ) : (
                        <>
                          <input
                            type={field.type}
                            value={settings[field.key] || ''}
                            onChange={e => setField(field.key, e.target.value)}
                            placeholder={field.placeholder}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40"
                          />
                          {(field.key === 'logoUrl' || field.key === 'faviconUrl') && settings[field.key] && (
                            <div className="mt-2 p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-3">
                              <img src={settings[field.key]} alt={field.label} className="h-10 w-auto object-contain rounded" onError={e => e.target.style.display='none'} />
                              <span className="text-gray-400 text-xs truncate">{settings[field.key]}</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Formspree ID */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <h2 className="font-bold text-gray-800 text-sm">Inquiry Form</h2>
                <p className="text-gray-400 text-xs mt-0.5">Formspree form ID used in the contact form and footer.</p>
              </div>
              <div className="p-6">
                <label className="block text-gray-600 text-xs font-semibold mb-1.5">Formspree ID</label>
                <input
                  type="text"
                  value={settings.formspreeId || ''}
                  onChange={e => setField('formspreeId', e.target.value)}
                  placeholder="e.g. movdqdra"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#00acd7]/15 focus:border-[#00acd7]/40"
                />
                <p className="text-gray-400 text-xs mt-2">Find this on your <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-[#00acd7] hover:underline">Formspree dashboard</a>.</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white font-semibold py-3 rounded-xl text-sm hover:shadow-lg hover:shadow-[#00acd7]/20 transition-all disabled:opacity-50"
            >
              {saving ? 'Saving…' : saved ? '✓ Saved!' : 'Save All Settings'}
            </button>
          </form>
        )}
      </AdminLayout>
    </>
  );
}
