'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">

      {/* Background image — no blur, strong gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/hero-bg3.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient: strong left → soft right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        {/* Dark gradient: bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 right-[12%] w-[400px] h-[400px] rounded-full bg-[#00acd7]/8 blur-[80px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[30%] w-[250px] h-[250px] rounded-full bg-[#341f9b]/15 blur-[60px] z-0 pointer-events-none" />

      {/* Content — left-aligned editorial layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-12 w-full pt-10 pb-24">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="h-[2px] w-10 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
            <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">
              India&apos;s Leading DOOH Agency
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] mb-7 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.75, ease: 'easeOut' }}
          >
            Create.{' '}
            <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
              Connect.
            </span>
            <br />
            Captivate.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-lg"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            Engage audiences nationwide with innovative DOOH solutions that make your brand impossible to ignore.
          </motion.p>

          {/* Dual CTA buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.55 }}
          >
            <Link
              href="#FeaturesSection"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Discover How
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2.5 border border-white/25 bg-white/8 backdrop-blur-sm px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white/15 hover:border-white/40"
            >
              View Case Studies
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="flex flex-wrap items-stretch gap-0 mt-16 pt-10 border-t border-white/12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.55 }}
          >
            {[
              { value: '50+', label: 'Campaigns Delivered' },
              { value: '20+', label: 'Trusted Clients' },
              { value: '100%', label: 'Delivery Rate' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col pr-10 ${i !== 0 ? 'pl-10 border-l border-white/15' : ''}`}
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-white leading-none">{stat.value}</span>
                <span className="text-xs text-white/45 tracking-widest uppercase mt-1.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          style={{ transformOrigin: 'top' }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
