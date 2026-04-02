/** @type {import('next').NextConfig} */

// Static export only when building for Hostinger.
// On Vercel, run as a full Next.js app — API routes and admin panel work.
// Hostinger build command: STATIC_EXPORT=true npm run build  (then upload out/ folder)
const isStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig = {
  ...(isStaticExport ? { output: 'export' } : {}),
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
  },

};

export default nextConfig;
