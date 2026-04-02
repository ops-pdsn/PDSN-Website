import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '@/components/admin/AdminLayout';

function StatCard({ label, value, icon, color, href }) {
  return (
    <Link href={href} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        {icon}
      </div>
      <div>
        <div className="text-3xl font-extrabold text-gray-900 leading-none">{value ?? '—'}</div>
        <div className="text-gray-400 text-sm mt-1">{label}</div>
      </div>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </Link>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({ posts: null, caseStudies: null, gallery: null });
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('admin_token');
    const headers = { Authorization: `Bearer ${token}` };

    Promise.all([
      fetch('/api/admin/posts', { headers }).then(r => r.json()).catch(() => []),
      fetch('/api/admin/case-studies', { headers }).then(r => r.json()).catch(() => []),
      fetch('/api/admin/gallery', { headers }).then(r => r.json()).catch(() => []),
    ]).then(([posts, caseStudies, gallery]) => {
      if (!Array.isArray(posts)) { setApiError(true); setLoading(false); return; }
      setStats({ posts: posts.length, caseStudies: caseStudies.length, gallery: gallery.length });
      setRecentPosts(posts.slice(0, 5));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head><title>Dashboard — PDSN Admin</title></Head>
      <AdminLayout title="Dashboard">

        {/* API unavailable banner */}
        {apiError && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <p className="text-red-700 font-semibold text-sm">Admin panel requires local development server</p>
              <p className="text-red-500 text-xs mt-1">Run <code className="font-mono bg-red-100 px-1.5 py-0.5 rounded">npm run dev</code> on your machine, then open <code className="font-mono bg-red-100 px-1.5 py-0.5 rounded">http://localhost:3000/admin</code> to manage content.</p>
            </div>
          </div>
        )}

        {/* Build workflow banner */}
        <div className="mb-8 bg-gradient-to-r from-[#00acd7]/8 to-[#341f9b]/8 border border-[#00acd7]/15 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00acd7] to-[#341f9b] flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-gray-800 font-semibold text-sm">Publishing Workflow</p>
            <p className="text-gray-500 text-xs mt-0.5">
              Make changes here → Run <code className="font-mono font-bold text-[#00acd7] bg-[#00acd7]/10 px-1 rounded">npm run build</code> → Upload the <code className="font-mono font-bold text-[#341f9b] bg-[#341f9b]/10 px-1 rounded">out/</code> folder to Hostinger.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <StatCard
            label="Blog Posts"
            value={loading ? '…' : stats.posts}
            href="/admin/blogs"
            color="bg-blue-50 text-blue-500"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            }
          />
          <StatCard
            label="Case Studies"
            value={loading ? '…' : stats.caseStudies}
            href="/admin/case-studies"
            color="bg-purple-50 text-purple-500"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            }
          />
          <StatCard
            label="Gallery Items"
            value={loading ? '…' : stats.gallery}
            href="/admin/gallery"
            color="bg-cyan-50 text-cyan-500"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            }
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent posts */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-800">Recent Blog Posts</h2>
              <Link href="/admin/blogs" className="text-[#00acd7] text-xs font-semibold hover:underline">View all →</Link>
            </div>
            {loading ? (
              <div className="px-6 py-8 text-center text-gray-400 text-sm">Loading…</div>
            ) : recentPosts.length === 0 ? (
              <div className="px-6 py-10 text-center">
                <p className="text-gray-400 text-sm mb-3">No blog posts yet</p>
                <Link href="/admin/blogs" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-xs font-semibold px-4 py-2 rounded-lg">
                  Create First Post
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-gray-50">
                {recentPosts.map(post => (
                  <div key={post.slug} className="flex items-center justify-between px-6 py-3.5 hover:bg-gray-50 transition-colors">
                    <div className="min-w-0">
                      <p className="text-gray-800 text-sm font-medium truncate">{post.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{post.category} · {post.published_date?.day} {post.published_date?.month}</p>
                    </div>
                    <Link
                      href={`/admin/blogs?edit=${post.slug}`}
                      className="ml-4 shrink-0 text-xs text-[#00acd7] font-semibold hover:underline"
                    >
                      Edit
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick actions */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-2.5">
              {[
                { label: 'Write New Blog Post', href: '/admin/blogs?new=1', color: 'text-blue-600 bg-blue-50 hover:bg-blue-100' },
                { label: 'Add Case Study', href: '/admin/case-studies?new=1', color: 'text-purple-600 bg-purple-50 hover:bg-purple-100' },
                { label: 'Add Gallery Item', href: '/admin/gallery?new=1', color: 'text-cyan-600 bg-cyan-50 hover:bg-cyan-100' },
                { label: 'Edit Site Settings', href: '/admin/settings', color: 'text-gray-600 bg-gray-50 hover:bg-gray-100' },
              ].map(action => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 ${action.color}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
