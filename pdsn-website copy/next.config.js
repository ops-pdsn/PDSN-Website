/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // Export as static site
  trailingSlash: true,         // Adds trailing slashes (important for Hostinger, Netlify, etc.)
  images: {
    unoptimized: true,         // Disable next/image optimization (needed for static export)
  },
};

export default nextConfig;      // ✅ Correct for Next.js 13/14 (ESM export)
