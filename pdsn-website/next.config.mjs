/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // Static export
  trailingSlash: true,         // Helps with static hosting (Hostinger, Netlify, etc.)

  // Allow external image domains (like jsDelivr CDN)
  images: {
    unoptimized: true,         // Required for static export
    domains: ['cdn.jsdelivr.net'],  // Enables usage of next/image with CDN
  },

  // (Optional) If using rewrites in the future
  async rewrites() {
    return [];
  },

  // Performance tweaks for build (optional)
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig; // ✅ Correct for Next.js 13+ with ESM
