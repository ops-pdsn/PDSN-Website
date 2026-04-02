'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/nialogo.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/redfmlogonew.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/Ajanta%20Pharma.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/AmiPoly.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/Argen.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/Bajaj.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/BOI.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/Borosil.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/Cosmos.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/DP.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/Goel.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/GOG.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/LaserT.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/nbc.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/SolutionOne.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/Zuventus.webp",
  "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/central_Bank_logo.webp",
]

export default function ClientLogoSlider() {
  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100">

      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
            <span className="text-[#00acd7] font-semibold text-xs tracking-[0.2em] uppercase">
              Trusted Partnerships
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Trusted by Top Brands
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-xs sm:text-right leading-relaxed">
          Collaborating with industry pioneers and innovative disruptors to deliver cutting-edge digital solutions.
        </p>
      </motion.div>

      {/* Marquee wrapper with fade edges */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="logo-marquee-track flex items-center gap-12">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-36 h-20 flex items-center justify-center shrink-0 group"
            >
              <Image
                src={logo}
                alt={`Partner brand ${index + 1}`}
                width={120}
                height={56}
                className="object-contain grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out max-w-[110px] max-h-[52px]"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .logo-marquee-track {
          animation: logoScrollX 32s linear infinite;
          width: max-content;
        }
        .logo-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes logoScrollX {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
