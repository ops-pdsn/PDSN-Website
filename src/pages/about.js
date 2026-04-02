"use client";

import Image from 'next/image';
import Head from 'next/head';
import { FaLinkedin } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

/* ─── Icon components (SVG, no emojis) ─── */
const IconBulb = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
);
const IconTarget = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
  </svg>
);
const IconHandshake = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);
const IconRocket = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);
const IconShield = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const IconRefresh = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);
const IconDiamond = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);
const IconTrophy = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
);
const IconLeaf = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643" />
  </svg>
);

/* ─── Data ─── */
const philosophyItems = [
  {
    icon: <IconBulb />,
    title: "Innovation First",
    desc: "Pushing boundaries in DOOH technology and creative solutions.",
  },
  {
    icon: <IconTarget />,
    title: "Precision Targeting",
    desc: "Data-driven strategies for maximum campaign impact.",
  },
  {
    icon: <IconHandshake />,
    title: "Client Partnership",
    desc: "Collaborative approaches for shared success.",
  },
];

const coreValues = [
  { icon: <IconRocket />, title: "Innovation", desc: "Pioneering cutting-edge solutions in digital advertising" },
  { icon: <IconShield />, title: "Integrity", desc: "Ethical practices and transparency in all engagements" },
  { icon: <IconRefresh />, title: "Adaptability", desc: "Evolving with market trends and client needs" },
  { icon: <IconDiamond />, title: "Customer Centric", desc: "Tailored strategies for maximum client impact" },
  { icon: <IconTrophy />, title: "Excellence", desc: "Uncompromising quality in execution and delivery" },
  { icon: <IconHandshake />, title: "Collaboration", desc: "Synergistic partnerships for shared success" },
  { icon: <IconLeaf />, title: "Sustainability", desc: "Environmentally conscious digital practices" },
];

/* ─── Reusable label ─── */
const SectionLabel = ({ text, light = false }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
    <span className={`font-semibold text-xs tracking-[0.22em] uppercase ${light ? 'text-[#00acd7]' : 'text-[#00acd7]'}`}>
      {text}
    </span>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us | PDSN Media Pvt Ltd</title>
        <meta name="description" content="Learn about PDSN Media — India's pioneering DOOH advertising agency transforming brand visibility through programmatic screens and creative innovation." />
      </Head>

      <Header />

      <main className="flex-1">

        {/* ═══════════════════════════════════════
            HERO — keep dark (image background)
        ═══════════════════════════════════════ */}
        <section className="relative h-[75vh] min-h-[480px] flex items-center overflow-hidden">
          <Image
            src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/about-hero.webp"
            alt="PDSN Media team"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay — same pattern as home hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Ambient glows */}
          <div className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-[#00acd7]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-12 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-10 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">
                  About PDSN Media
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                Transforming{' '}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Vision
                </span>{' '}
                into Impact
              </h1>
              <p className="text-white/65 text-lg font-light leading-relaxed max-w-xl">
                At PDSN Media, we pioneer innovative media solutions that move brands forward — turning creativity into measurable outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            OUR STORY — content section 1 → bg-white
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid md:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <SectionLabel text="Our Journey" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                PDSN Media Redefining{' '}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  DOOH Possibilities
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re more than just a media agency — we&apos;re passionate innovators driven by a love for creativity and strategy. Our team specializes in crafting compelling brand stories that resonate with audiences while leveraging out-of-the-box thinking to stay ahead of industry trends. We combine creative vision with strategic execution to deliver impactful, measurable solutions for our clients.
              </p>

              {/* Stats */}
              <div className="flex gap-12 pt-4">
                {[
                  { value: '50+', label: 'Successful Campaigns' },
                  { value: '100%', label: 'Deliverance' },
                ].map((stat, i) => (
                  <div key={i} className={`${i !== 0 ? 'pl-12 border-l border-gray-200' : ''}`}>
                    <div className="text-4xl font-extrabold bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent leading-none">
                      {stat.value}
                    </div>
                    <p className="text-gray-400 text-sm mt-2 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative h-[420px] rounded-2xl overflow-hidden shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/about-story.webp"
                alt="Our Workplace"
                fill
                className="object-cover object-[100%_0%]"
              />
              {/* Subtle gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* Floating accent border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CORE PHILOSOPHY — content section 2 → bg-gray-50
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-gray-50 overflow-hidden relative">
          {/* Ambient blob */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#00acd7]/5 blur-[80px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">

            {/* Header */}
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <SectionLabel text="Our Philosophy" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mt-2">
                The Pillars of{' '}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Our Success
                </span>
              </h2>
            </motion.div>

            {/* 3 cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-px bg-gray-200"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.12 }}
              viewport={{ once: true }}
            >
              {philosophyItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="group relative bg-white p-10 flex flex-col gap-5 hover:bg-gray-50 transition-all duration-300 shadow-sm"
                >
                  {/* Hover top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-gray-200 flex items-center justify-center text-[#00acd7] group-hover:from-[#00acd7]/25 group-hover:to-[#341f9b]/25 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00acd7] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            MISSION & VISION — content section 3 → bg-white
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Mission */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00acd7]/8 via-gray-50 to-[#341f9b]/8 border border-gray-200 p-10 md:p-12 group shadow-sm">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#00acd7]/8 blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-5">
                  <SectionLabel text="Our Mission" />
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Redefining DOOH Excellence
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To empower businesses through innovative, data-driven DOOH solutions that create meaningful connections and measurable impact. We strive to be the catalyst for our client&apos;s success in an increasingly digital world.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-10 md:p-12 group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#341f9b] to-[#00acd7]" />
                <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#341f9b]/5 blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-[#341f9b] to-[#00acd7]" />
                    <span className="text-[#341f9b] font-semibold text-xs tracking-[0.22em] uppercase">Our Vision</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Shaping the Future of DOOH Engagement
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    To be the global leader in transformative DOOH experiences, pioneering technologies that bridge the gap between brands and their audiences through creativity, innovation, and strategic insight.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CORE VALUES — content section 4 → bg-gray-50
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

            {/* Header */}
            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <SectionLabel text="Core Values" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  The Foundation of{' '}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Our Culture
                  </span>
                </h2>
              </div>
            </motion.div>

            {/* Values grid */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.07 }}
              viewport={{ once: true }}
            >
              {coreValues.map((val, idx) => (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  className="group bg-white border border-gray-100 rounded-xl p-6 flex gap-4 shadow-sm hover:shadow-md hover:border-[#00acd7]/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#00acd7]/10 to-[#341f9b]/10 border border-[#00acd7]/10 flex items-center justify-center text-[#00acd7] group-hover:from-[#00acd7]/20 group-hover:to-[#341f9b]/20 transition-all duration-300">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1.5 group-hover:text-[#341f9b] transition-colors duration-200">
                      {val.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TEAM / LEADERSHIP — content section 5 → bg-white
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-white overflow-hidden relative">
          {/* Ambient blobs */}
          <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#00acd7]/5 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-[#341f9b]/5 blur-[60px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">

            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionLabel text="Leadership" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mt-2">
                Meet Our{' '}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Visionary
                </span>
              </h2>
            </motion.div>

            {/* Centered card */}
            <div className="flex justify-center">
              <motion.div
                className="group relative w-full max-w-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#00acd7]/40 transition-all duration-300 group-hover:shadow-md shadow-sm">

                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />

                  {/* Photo */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/team/ceo-sanchit.webp"
                      alt="Sanchit Bhan — Founder & CEO"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Bottom photo gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-8 text-center relative z-10 -mt-8">
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-1">Sanchit Bhan</h3>
                    <p className="text-[#00acd7] text-sm font-semibold tracking-wide mb-5">Founder &amp; CEO</p>

                    {/* Divider */}
                    <div className="w-12 h-[1px] bg-gradient-to-r from-[#00acd7] to-[#341f9b] mx-auto mb-5" />

                    <p className="text-gray-600 text-sm leading-relaxed mb-7">
                      Programmatic | DOOH | Content — Combine all three &amp; make an effective reach.{' '}
                      <span className="text-gray-700 font-medium">15+ years</span> of DOOH Media and content industry experience.
                    </p>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/sanchit-bhan-17571431/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-6 py-2.5 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#00acd7]/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <FaLinkedin size={16} />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
