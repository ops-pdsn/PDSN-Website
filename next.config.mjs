/** @type {import('next').NextConfig} */

// Static export only when building for Hostinger.
// On Vercel (or local dev), run as a full Next.js app so API routes work.
// To build for Hostinger: set env var  STATIC_EXPORT=true  before running npm run build
const isStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig = {
  ...(isStaticExport ? { output: 'export' } : {}),
  trailingSlash: true,

  // Allow external image domains (like jsDelivr CDN)
  images: {
    unoptimized: true,         // Required for static export
    domains: ['cdn.jsdelivr.net'],
  },

  // Performance tweaks for build (optional)
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig; // ✅ Correct for Next.js 13+ with ESM
