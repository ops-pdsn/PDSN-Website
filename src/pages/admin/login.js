import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDev, setIsDev] = useState(true);

  useEffect(() => {
    // Already logged in?
    if (sessionStorage.getItem('admin_token')) {
      router.replace('/admin');
    }
    // Check if API is reachable (dev mode detection)
    fetch('/api/admin/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: '' }) })
      .then(r => { if (r.status === 401 || r.status === 500) setIsDev(true); })
      .catch(() => setIsDev(false));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Login failed');
      } else {
        sessionStorage.setItem('admin_token', data.token);
        router.push('/admin');
      }
    } catch {
      setError('Cannot connect to server. Make sure you are running npm run dev.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Admin Login — PDSN Media</title>
      </Head>
      <div className="min-h-screen bg-[#080C14] flex items-center justify-center px-4">
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00acd7]/4 blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-sm">
          {/* Card */}
          <div className="bg-[#0D1117] border border-white/8 rounded-2xl p-8 shadow-2xl">

            {/* Logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00acd7] to-[#341f9b] flex items-center justify-center mb-4 shadow-lg shadow-[#00acd7]/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h1 className="text-white font-extrabold text-xl tracking-tight">PDSN Admin</h1>
              <p className="text-white/35 text-xs mt-1">Content Management System</p>
            </div>

            {/* Dev mode warning */}
            {!isDev && (
              <div className="mb-6 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <p className="text-red-400 text-xs font-semibold">Dev Mode Only</p>
                    <p className="text-red-300/70 text-xs mt-0.5">Run <code className="font-mono bg-red-500/20 px-1 rounded">npm run dev</code> locally to use the admin panel.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide uppercase">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00acd7]/50 focus:ring-2 focus:ring-[#00acd7]/10 transition-all duration-200"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5">
                  <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-red-400 text-xs">{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white font-semibold py-3 rounded-xl text-sm tracking-wide hover:shadow-lg hover:shadow-[#00acd7]/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Authenticating…
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75M3.75 21h16.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5z" />
                    </svg>
                    Sign In
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-white/20 text-xs mt-6">
              Set password in <code className="font-mono text-white/30">.env.local</code> → <code className="font-mono text-white/30">ADMIN_PASSWORD</code>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
