// pages/vision-visible.js
"use client";

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

/* ── SVG Icons ── */
const IconRocket = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);
const IconScreen = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
  </svg>
);
const IconZap = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const IconTarget = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);
const IconEye = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconStar = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

/* ── Benefits data ── */
const benefits = [
  {
    icon: <IconRocket />,
    title: 'Early-Stage Exposure',
    text: 'Launch your product or service with a bang — directly in front of your target audience at the right place and the right time.',
    highlight: 'Day 1 visibility',
  },
  {
    icon: <IconScreen />,
    title: 'High-Impact Screens',
    text: 'Your brand message shown on premium digital displays in malls, cafes, metros, co-working spaces, and more — where your audience already is.',
    highlight: 'Premium placement',
  },
  {
    icon: <IconZap />,
    title: 'Affordable Campaigns',
    text: "Startup-friendly pricing that doesn't compromise on quality or visibility. Get enterprise-grade DOOH reach at a fraction of the cost.",
    highlight: 'Startup pricing',
  },
];

/* ── What you get ── */
const included = [
  'Custom creative design for your screens',
  'Pincode & landmark targeting options',
  'Multiple screen format outputs (portrait & landscape)',
  'Campaign performance summary',
  'Dedicated account support',
  'Flexible campaign duration — start small, scale fast',
];

/* ── How it works ── */
const steps = [
  { step: '01', title: 'Share Your Vision', desc: 'Tell us about your startup, your target audience, and what you want the world to know about you.' },
  { step: '02', title: 'We Design & Plan', desc: 'Our creative team crafts compelling visuals and maps the ideal screen locations for maximum impact.' },
  { step: '03', title: 'Go Live', desc: 'Your brand goes live across high-footfall digital screens — turning heads and building recall from day one.' },
];

/* ── Social proof numbers ── */
const stats = [
  { value: '50+', label: 'Startups Launched' },
  { value: '200+', label: 'Screens Activated' },
  { value: '10M+', label: 'Impressions Delivered' },
  { value: '100%', label: 'Brand-Safe Placement' },
];

/* ── Page ── */
export default function VisionVisible() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080C14]">
      <Header />

      <main className="text-white overflow-x-hidden flex-1">

        {/* ═══════════════════════════════
            HERO
        ═══════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Hero image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/vision-visible-hero.webp"
              alt="Vision Visible — DOOH for Startups"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#080C14]/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/90 via-[#080C14]/45 to-[#080C14]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-[#080C14]/20" />
          </div>

          {/* Decorative orb */}
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 pointer-events-none z-0 hidden xl:block">
            <div className="relative w-80 h-80 opacity-30">
              {[1, 2, 3, 4].map((n) => (
                <span
                  key={n}
                  className="absolute inset-0 rounded-full border border-[#00acd7]/30"
                  style={{
                    animation: `ping 4s ease-out ${n * 0.7}s infinite`,
                    transform: `scale(${n * 0.25})`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.3em] uppercase">
                  Vision Visible — For Startups
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight max-w-4xl mb-8">
                <span className="block text-white">Make Your</span>
                <span className="block bg-gradient-to-r from-[#00acd7] via-[#6B7FFF] to-[#341f9b] bg-clip-text text-transparent">
                  Startup Vision
                </span>
                <span className="block text-white/90">Visible.</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
                Bold impressions. Real visibility. For the visionaries who are just getting started —
                your brand on premium DOOH screens, right where your audience is.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-8 py-4 rounded-lg text-white font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book a Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="#why"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wide hover:border-[#00acd7]/50 hover:bg-white/[0.04] transition-all duration-200"
                >
                  Why Vision Visible
                </a>
              </div>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-[#080C14] px-6 py-5 text-center">
                  <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-gray-500 text-xs font-semibold tracking-[0.1em] uppercase mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════
            MANIFESTO
        ═══════════════════════════════ */}
        <section className="py-24 border-b border-white/[0.04]">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Our Belief</span>
                <div className="h-[2px] w-6 bg-gradient-to-l from-[#00acd7] to-[#341f9b]" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-8">
                Every Vision Deserves{' '}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Visibility
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Every startup begins with a dream — an idea that deserves to be seen, heard, and remembered.
                Vision Visible helps you break through the noise with DOOH displays that bring your brand
                to life in the places people actually look. Because the best idea in the room means nothing
                if no one in the market knows about it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════
            VIDEO + COPY
        ═══════════════════════════════ */}
        <section className="py-24 border-b border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Video */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div
                  className="relative aspect-square overflow-hidden rounded-2xl border border-white/[0.06] shadow-2xl shadow-black/40 group"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <video
                    src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/vision-visible.webm"
                    autoPlay
                    loop
                    muted
                    controls
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    className="object-cover w-full h-full pointer-events-auto"
                    poster="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/video-poster.webp"
                    preload="none"
                  />
                  {/* Corner accent */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-[#00acd7] animate-pulse" />
                    <span className="text-[#00acd7]/70 text-[10px] font-bold tracking-widest uppercase">Live Preview</span>
                  </div>
                </div>
              </motion.div>

              {/* Copy */}
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">See It in Action</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
                  See Your Vision{' '}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    in Motion
                  </span>
                </h2>

                <p className="text-gray-400 text-base leading-relaxed mb-5">
                  Startups need momentum — and our high-impact DOOH screens are designed to give it to you.
                  Showcase your story with stunning visuals in the spaces where it matters most.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Whether it&apos;s your first launch or a major growth push, Vision Visible ensures your brand
                  captures hearts — and eyeballs. From concept to live screen in days, not months.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {['DOOH Screens', 'Creative Design', 'Geo-Targeting', 'Rapid Launch', 'Startup Pricing'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0D1420] border border-white/[0.08] rounded-full text-gray-300 text-xs font-semibold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            WHY VISION VISIBLE
        ═══════════════════════════════ */}
        <section id="why" className="py-24 border-b border-white/[0.04] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Startup Benefits</span>
                <div className="h-[2px] w-6 bg-gradient-to-l from-[#00acd7] to-[#341f9b]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Why Vision Visible Works{' '}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  for Startups
                </span>
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                Whether you&apos;re launching your first product or scaling your message, our digital screens help
                startups gain visibility, traction, and results — affordably and effectively.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                  className="relative bg-[#0D1420] border border-white/[0.06] rounded-2xl p-7 hover:border-[#00acd7]/25 transition-colors duration-300 group overflow-hidden"
                >
                  {/* Big bg number */}
                  <div className="absolute right-5 top-4 text-[80px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Highlight tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/15 rounded-full mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00acd7]" />
                    <span className="text-[#00acd7] text-[10px] font-bold tracking-[0.12em] uppercase">{b.highlight}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/15 flex items-center justify-center text-[#00acd7] mb-5 group-hover:from-[#00acd7]/25 group-hover:to-[#341f9b]/25 transition-all duration-300">
                    {b.icon}
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            HOW IT WORKS
        ═══════════════════════════════ */}
        <section className="py-24 border-b border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Simple Process</span>
                <div className="h-[2px] w-6 bg-gradient-to-l from-[#00acd7] to-[#341f9b]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                From Idea to{' '}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Live Campaign
                </span>{' '}
                in 3 Steps
              </h2>
            </motion.div>

            <div className="relative grid md:grid-cols-3 gap-6">
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-[#00acd7]/30 via-[#341f9b]/30 to-[#00acd7]/30" />

              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                  className="text-center bg-[#0D1420] border border-white/[0.05] rounded-2xl p-8 hover:border-[#00acd7]/20 transition-colors duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/25 flex items-center justify-center mx-auto mb-5 relative z-10">
                    <span className="text-[#00acd7] font-black text-sm">{s.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            WHAT'S INCLUDED
        ═══════════════════════════════ */}
        <section className="py-24 border-b border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left — included list */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">What&apos;s Included</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-8">
                  Everything Your Startup{' '}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Needs to Shine
                  </span>
                </h2>

                <ul className="space-y-4">
                  {included.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#00acd7]/20 to-[#341f9b]/20 border border-[#00acd7]/25 flex items-center justify-center text-[#00acd7] mt-0.5">
                        <IconCheck />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right — promo card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              >
                <div className="relative bg-gradient-to-br from-[#0D1420] to-[#111827] border border-white/[0.06] rounded-3xl p-8 overflow-hidden">
                  {/* BG glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00acd7]/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#341f9b]/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 rounded-full bg-[#00acd7] animate-pulse" />
                      <span className="text-[#00acd7] text-[10px] font-bold tracking-[0.2em] uppercase">
                        Startup Special
                      </span>
                    </div>

                    <div className="text-white font-black text-4xl mb-2">Get Started</div>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                      Connect with our team and get a custom campaign proposal tailored to your startup&apos;s
                      budget, geography, and growth goals.
                    </p>

                    {/* Quick icons row */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        { icon: <IconEye />, label: 'Mass Reach' },
                        { icon: <IconTarget />, label: 'Precision' },
                        { icon: <IconStar />, label: 'Premium' },
                      ].map((item) => (
                        <div key={item.label} className="text-center">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/15 flex items-center justify-center text-[#00acd7] mx-auto mb-2">
                            {item.icon}
                          </div>
                          <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-6 py-4 rounded-xl text-white font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Book a Free Consultation
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            CTA
        ═══════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00acd7]/5 via-[#080C14] to-[#341f9b]/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#341f9b]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Your Time is Now</span>
                <div className="h-[2px] w-6 bg-gradient-to-l from-[#00acd7] to-[#341f9b]" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Let Your Vision<br />
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Be Visible
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                What&apos;s the point of a powerful vision if no one in the market sees it? Let&apos;s bring your
                startup story to the streets — boldly, beautifully, and memorably.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-10 py-4 rounded-lg text-white font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book a Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/programmatic-dooh"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-10 py-4 rounded-lg font-bold text-sm tracking-wide hover:border-[#00acd7]/40 hover:bg-white/[0.04] transition-all duration-200"
                >
                  Explore DOOH
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
