'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const topRowImages = [
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (1).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (11).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (2).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (12).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (3).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (13).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (4).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (14).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (5).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (20).webp",
]

const bottomRowImages = [
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (15).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (6).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (16).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (7).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (17).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (8).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (18).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/outdoor.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (19).webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (21).webp",
]

export default function TwoRowMarquee() {
  return (
    <section className="relative overflow-hidden bg-white py-20">

      {/* Section header */}
      <motion.div
        className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
              <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">
                Gallery
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Immersive Works in Action
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs md:text-right leading-relaxed">
            A curated look at our campaigns, spotlighting their impact across varied environments.
          </p>
        </div>
      </motion.div>

      {/* Top Row — left scroll */}
      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 flex min-w-[200%] gallery-marquee-left will-change-transform">
            {[...topRowImages, ...topRowImages].map((src, idx) => (
              <div
                key={idx}
                className="relative h-full flex-shrink-0 p-1.5"
                style={{ width: '12.5%' }}
              >
                <Image
                  src={src}
                  alt={`Campaign work ${idx + 1}`}
                  width={300}
                  height={300}
                  loading="lazy"
                  unoptimized
                  className="object-cover w-full h-full rounded-lg border border-gray-100 hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Row — right scroll */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 flex min-w-[200%] gallery-marquee-right will-change-transform">
            {[...bottomRowImages, ...bottomRowImages].map((src, idx) => (
              <div
                key={idx}
                className="relative h-full flex-shrink-0 p-1.5"
                style={{ width: '12.5%' }}
              >
                <Image
                  src={src}
                  alt={`Campaign work ${idx + 11}`}
                  width={300}
                  height={300}
                  loading="lazy"
                  unoptimized
                  className="object-cover w-full h-full rounded-lg border border-gray-100 hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes galleryLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes galleryRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .gallery-marquee-left {
          animation: galleryLeft 45s linear infinite;
        }
        .gallery-marquee-right {
          animation: galleryRight 45s linear infinite;
        }
        .gallery-marquee-left:hover,
        .gallery-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
