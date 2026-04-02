"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

/* ─── Case Studies ─── */
const caseStudiesData = [
  {
    title: "Cosmos × IMTEX 2025",
    slug: "cosmos-imtex-2025",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/case-studies/cosmos.webp",
    summary: "L-shaped anamorphic LED screen brought engineering to life in 3D.",
    result: "Showstopper at IMTEX 2025",
    category: "Technology",
    tag: "Anamorphic",
  },
  {
    title: "Ajanta Pharma × Yashobhoomi",
    slug: "ajanta-pharma",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/case-studies/ajanta.webp",
    summary: "Immersive 3D illusion campaign turning heads at a pharma summit.",
    result: "Premium brand experience",
    category: "Healthcare",
    tag: "3D Content",
  },
  {
    title: "NBC Bearings × Multi-Vehicle Showcase",
    slug: "nbc-bearings",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/case-studies/nbc.webp",
    summary: "Cross-industry 3D narrative showcasing bearings in motion.",
    result: "Tech + Storytelling Fusion",
    category: "Automotive",
    tag: "Programmatic",
  },
];

/* ─── Icons ─── */
const IconScreen = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
  </svg>
);
const IconGlobe = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);
const IconSparkle = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);
const IconTarget = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
);
const IconClock = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconChart = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);
const IconWallet = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18-3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3m18-3V6" />
  </svg>
);
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

/* ─── How It Works steps ─── */
const processSteps = [
  {
    number: "01",
    title: "Plan & Target",
    desc: "We map your audience across high-traffic locations — malls, offices, transit hubs and outdoor — using location intelligence and audience data.",
  },
  {
    number: "02",
    title: "Create & Schedule",
    desc: "Our content team crafts dynamic, contextual creatives. We schedule campaigns by time-of-day, audience segment, and environmental triggers.",
  },
  {
    number: "03",
    title: "Deploy & Broadcast",
    desc: "Campaigns go live across our network with real-time deployment. Change content in minutes — no reprinting, no downtime, no delays.",
  },
  {
    number: "04",
    title: "Measure & Optimise",
    desc: "Live dashboards track impressions, proof-of-play, and audience metrics. We optimise mid-flight for maximum brand impact and ROI.",
  },
];

/* ─── Why Programmatic DOOH bullets ─── */
const whyItems = [
  { icon: <IconTarget />, title: "Nationwide Reach with Smart Targeting", desc: "Reach the right audience at the right location — geo-targeted, demographic-filtered, precision-driven." },
  { icon: <IconClock />, title: "Dynamic Scheduling", desc: "Deploy time-sensitive creatives — morning commuters, lunchtime buyers, evening audiences — all on one platform." },
  { icon: <IconWallet />, title: "Cost Efficiency Decisions", desc: "Eliminate printing, installation, and maintenance costs. Buy only the impressions that matter to your brand." },
  { icon: <IconChart />, title: "Dynamic Reporting", desc: "Real-time dashboards with proof-of-play, impression data, and campaign performance — full visibility, zero guesswork." },
];

/* ─── DOOH vs Traditional comparison ─── */
const vsItems = [
  { dooh: "Change creative in 60 seconds", trad: "Fixed for the entire booking period" },
  { dooh: "Real-time impression tracking & proof-of-play", trad: "Estimated footfall — no measurement" },
  { dooh: "Weather, time, event contextual triggers", trad: "Static one-size-fits-all messaging" },
  { dooh: "Hyperlocal audience targeting by demographics", trad: "Broad, untargeted mass reach" },
  { dooh: "A/B test creatives mid-campaign", trad: "No flexibility once printed" },
  { dooh: "Connects outdoor to online — mobile attribution", trad: "No offline-to-online conversion" },
];

/* ─── Environment cards ─── */
const environments = [
  { label: "Corporate", sublabel: "Offices & Business Parks", image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/coporate1.webp", pos: "object-top" },
  { label: "Cafes & QSR", sublabel: "Lifestyle & F&B Spaces", image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (9).webp", pos: "object-center" },
  { label: "Outdoor", sublabel: "High-Traffic Street Locations", image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/outdoor2.webp", pos: "object-bottom" },
  { label: "Transit", sublabel: "Metro, Stations & Airports", image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (12).webp", pos: "object-center" },
];

/* ─── Gallery images ─── */
const galleryImages = [
  { src: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (15).webp", span: "col-span-1 row-span-2" },
  { src: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (2).webp", span: "col-span-1 row-span-1" },
  { src: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (3).webp", span: "col-span-1 row-span-1" },
  { src: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (4).webp", span: "col-span-1 row-span-1" },
  { src: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (5).webp", span: "col-span-1 row-span-1" },
  { src: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/outdoor.webp", span: "col-span-2 row-span-1" },
];

/* ─── Market stats ─── */
const marketStats = [
  { value: "₹6,500 Cr", label: "India's Total OOH Market" },
  { value: "70%", label: "YoY DOOH Growth Rate" },
  { value: "44%", label: "DOOH Market Share by 2029" },
  { value: "60 Sec", label: "Creative Deployment Speed" },
];

export default function ProgrammaticDoohPage() {
  return (
    <>
      <Head>
        <title>Programmatic DOOH Advertising | PDSN Media</title>
        <meta name="description" content="India's smartest DOOH advertising — programmatic screens, real-time targeting, and measurable outcomes. PDSN Media powers brand visibility at scale." />
      </Head>

      <Header />

      <main className="bg-white text-black overflow-x-hidden">

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden">
          <Image
            src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/about-hero.webp"
            alt="DOOH Network"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Layered dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* Glow blobs */}
          <div className="absolute top-1/4 right-[12%] w-[420px] h-[420px] rounded-full bg-[#00acd7]/8 blur-[90px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-[20%] w-[280px] h-[280px] rounded-full bg-[#341f9b]/12 blur-[70px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-12 w-full pt-8 pb-28">
            <div className="max-w-3xl">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-7"
              >
                <div className="h-[2px] w-10 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">
                  Programmatic DOOH
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-7"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
              >
                The Power of DOOH,{" "}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Supercharged
                </span>{" "}
                by Programmatic
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-base sm:text-lg text-white/65 font-light leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.65 }}
              >
                India&apos;s digital streets, powered by smart screens. We specialize in impactful DOOH with the precision of programmatic — delivering real-time, data-driven brand visibility across the nation.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.55 }}
              >
                <Link
                  href="#core-strengths"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Our Network <IconArrow />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 border border-white/25 bg-white/8 backdrop-blur-sm px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:bg-white/15 hover:border-white/40 transition-all duration-300"
                >
                  Plan With Us
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
                  { value: "50+", label: "Campaigns Delivered" },
                  { value: "20+", label: "Brand Clients" },
                  { value: "100%", label: "Delivery Rate" },
                ].map((s, i) => (
                  <div key={i} className={`flex flex-col pr-10 ${i !== 0 ? "pl-10 border-l border-white/15" : ""}`}>
                    <span className="text-3xl sm:text-4xl font-extrabold text-white leading-none">{s.value}</span>
                    <span className="text-xs text-white/45 tracking-widest uppercase mt-1.5">{s.label}</span>
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
            transition={{ delay: 1.1 }}
          >
            <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
            <motion.div
              className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
              animate={{ scaleY: [0, 1, 0] }}
              style={{ transformOrigin: "top" }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════
            SCROLLING INDUSTRY TICKER
        ═══════════════════════════════════════ */}
        <div className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] py-3.5 overflow-hidden">
          <div className="ticker-track flex items-center gap-12 whitespace-nowrap">
            {[
              "₹6,500 Cr — India's OOH Market",
              "70% YoY DOOH Growth",
              "Programmatic DOOH — The Future of Outdoor",
              "DOOH to reach 44% market share by 2029",
              "Real-time deployment in 60 seconds",
              "Reach media-dark audiences at scale",
              "Dynamic targeting — right audience, right moment",
              "Full-funnel — Awareness to Conversion",
              "₹6,500 Cr — India's OOH Market",
              "70% YoY DOOH Growth",
              "Programmatic DOOH — The Future of Outdoor",
            ].map((text, i) => (
              <span key={i} className="text-white/90 font-semibold text-sm flex items-center gap-4 shrink-0">
                {text}
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
              </span>
            ))}
          </div>
          <style jsx>{`
            .ticker-track { animation: tickerScroll 30s linear infinite; width: max-content; }
            @keyframes tickerScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          `}</style>
        </div>

        {/* ═══════════════════════════════════════
            CORE STRENGTHS
        ═══════════════════════════════════════ */}
        <section id="core-strengths" className="py-24 bg-gray-50 scroll-mt-20 overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#00acd7]/5 blur-[80px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">

            {/* Header */}
            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Key Drivers</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Our Core{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Strengths
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed">
                Three pillars that make PDSN&apos;s DOOH campaigns consistently outperform the competition.
              </p>
            </motion.div>

            {/* 3 cards */}
            <motion.div
              className="grid md:grid-cols-3 gap-px bg-gray-200"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.12 }}
              viewport={{ once: true }}
            >
              {[
                {
                  number: "01",
                  icon: <IconScreen />,
                  title: "Programmatic Efficiency",
                  desc: "Programmatic-enabled DOOH network that automates buying, targeting, and optimisation — eliminating guesswork and waste from every rupee spent.",
                  highlight: "AI-Powered Buying",
                },
                {
                  number: "02",
                  icon: <IconGlobe />,
                  title: "Pan-India DOOH Reach",
                  desc: "Screens across corporates, cafes, outdoor and premium touch points — connecting your brand with the right audience wherever they are.",
                  highlight: "Nationwide Network",
                },
                {
                  number: "03",
                  icon: <IconSparkle />,
                  title: "Creative Brilliance",
                  desc: "We combine powerful media placements with high-impact content — CGI, anamorphic, dynamic and immersive formats — for unmatched visibility.",
                  highlight: "Award-Winning Creative",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="group relative bg-white p-10 flex flex-col gap-5 hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="absolute top-5 right-6 text-6xl font-extrabold text-gray-900/[0.04] select-none">{item.number}</span>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00acd7]/10 to-[#341f9b]/10 border border-[#00acd7]/15 flex items-center justify-center text-[#00acd7]">
                    {item.icon}
                  </div>

                  {/* Highlight tag */}
                  <span className="inline-flex items-center text-[10px] font-bold tracking-[0.18em] uppercase text-[#00acd7] bg-[#00acd7]/10 px-2.5 py-1 rounded-full w-max border border-[#00acd7]/20">
                    {item.highlight}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00acd7] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHERE DOOH COMES ALIVE — ENVIRONMENTS
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

            {/* Header */}
            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Strategic Visibility</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Where DOOH{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Comes Alive
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed">
                From high-traffic metro hubs to premium shopping streets — placed to capture attention where it matters most.
              </p>
            </motion.div>

            {/* Environment cards */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {environments.map((env, idx) => (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer"
                >
                  <Image
                    src={env.image}
                    alt={env.label}
                    fill
                    className={`object-cover ${env.pos} group-hover:scale-110 transition-transform duration-700`}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-[2px] w-5 bg-[#00acd7]" />
                      <span className="text-[#00acd7] text-xs font-bold tracking-[0.18em] uppercase">{env.sublabel}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-white">{env.label}</h3>
                  </div>

                  {/* Hover top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00acd7] to-[#341f9b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            HOW IT WORKS — 4 STEP PROCESS
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#341f9b]/8 blur-[80px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">

            {/* Header */}
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Our Process</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#341f9b] to-[#00acd7]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                How It{" "}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                A streamlined, four-step journey — from strategy to screens to measurable outcomes.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="group relative bg-white p-8 flex flex-col gap-4 hover:bg-gray-50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Connecting line (not on last) */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-px w-px h-8 bg-gradient-to-b from-[#00acd7]/40 to-transparent z-20" />
                  )}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Step number */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-extrabold bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent leading-none">
                      {step.number}
                    </span>
                    {idx < processSteps.length - 1 && (
                      <svg className="w-4 h-4 text-gray-200 hidden lg:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00acd7] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHY PROGRAMMATIC DOOH — BENEFITS + VS TRADITIONAL
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left — Why Programmatic + DOOH */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Smarter DOOH</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-10">
                  Why Programmatic{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    + DOOH?
                  </span>
                </h2>

                <div className="space-y-6">
                  {whyItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="group flex gap-5 p-5 rounded-xl border border-gray-100 hover:border-[#00acd7]/30 hover:shadow-lg hover:shadow-[#00acd7]/5 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#00acd7]/10 to-[#341f9b]/10 border border-[#00acd7]/10 flex items-center justify-center text-[#00acd7]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1.5 group-hover:text-[#341f9b] transition-colors">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right — DOOH vs Traditional */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Digital vs Traditional</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-10">
                  DOOH vs{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Static OOH
                  </span>
                </h2>

                {/* Header row */}
                <div className="grid grid-cols-2 mb-3 px-1">
                  <span className="text-[#00acd7] text-xs font-bold tracking-widest uppercase">Programmatic DOOH</span>
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Traditional OOH</span>
                </div>

                <div className="space-y-2">
                  {vsItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="grid grid-cols-2 overflow-hidden rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.45 }}
                      viewport={{ once: true }}
                    >
                      {/* DOOH side */}
                      <div className="bg-gradient-to-r from-gray-50 to-white p-4 flex items-center gap-3 border border-gray-200">
                        <div className="w-5 h-5 rounded-full bg-[#00acd7]/20 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-[#00acd7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-900 text-xs font-medium leading-snug">{item.dooh}</span>
                      </div>
                      {/* Traditional side */}
                      <div className="bg-gray-50 border-l border-gray-200 p-4 flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <span className="text-gray-500 text-xs leading-snug">{item.trad}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            MARKET IMPACT — INDUSTRY STATS
        ═══════════════════════════════════════ */}
        <section className="py-20 bg-gray-50 overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00acd7]/6 blur-[100px]" />
            <div className="absolute -bottom-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#341f9b]/10 blur-[80px]" />
            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.025]" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
              backgroundSize: "50px 50px"
            }} />
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">India&apos;s DOOH Landscape</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#341f9b] to-[#00acd7]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                The Market is{" "}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Moving Fast
                </span>
              </h2>
              <p className="text-gray-600 mt-4 text-sm max-w-xl mx-auto leading-relaxed">
                India&apos;s DOOH sector is one of the fastest-growing advertising mediums — and brands that invest early gain the most ground.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
              {marketStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="group bg-white p-10 text-center hover:bg-gray-50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent mb-3 leading-none">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-gray-600 text-xs mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Source: Adonmo Industry Report, Mordor Intelligence, OAAA — India OOH Market 2024–2029
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            GALLERY — REAL SPACES
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-gray-50/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Gallery</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Real Spaces.{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Real Visibility.
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed">
                High-traffic environments where our campaigns truly come alive.
              </p>
            </motion.div>

            {/* Masonry-style grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryImages.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`group overflow-hidden rounded-xl relative ${idx === 0 ? "row-span-2" : ""} ${idx === 5 ? "col-span-2 md:col-span-2" : ""}`}
                  style={{ minHeight: idx === 0 ? "500px" : "240px" }}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.src}
                    alt={`Campaign location ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FEATURED CASE STUDIES
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Case Studies</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Explore Our{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Impactful Campaigns
                  </span>
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="shrink-0 inline-flex items-center gap-2 border border-white/15 text-white/70 text-sm font-semibold px-5 py-2.5 rounded-lg hover:border-[#00acd7]/50 hover:text-[#00acd7] transition-all duration-200"
              >
                View All Case Studies <IconArrow />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {caseStudiesData.map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="group block bg-[#0D1420] border border-white/[0.05] rounded-xl overflow-hidden hover:border-[#00acd7]/30 transition-all duration-300 h-full"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {/* Category tag */}
                      <span className="absolute top-4 left-4 inline-flex items-center text-[10px] font-bold tracking-[0.18em] uppercase text-white bg-gradient-to-r from-[#00acd7]/80 to-[#341f9b]/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                        {item.tag}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col gap-3">
                      <h3 className="font-bold text-white text-base leading-snug group-hover:text-[#00acd7] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.summary}</p>
                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                        <span className="text-xs text-gray-500 font-medium">{item.result}</span>
                        <span className="inline-flex items-center gap-1.5 text-[#00acd7] text-xs font-semibold group-hover:gap-2.5 transition-all duration-300">
                          Read More <IconArrow />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-[#080C14] px-8 py-16 md:px-14 md:py-20 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Background effects */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#00acd7]/8 blur-[100px]" />
                <div className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-[#341f9b]/12 blur-[80px]" />
                <div className="absolute inset-0 opacity-[0.025]" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px"
                }} />
              </div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00acd7] to-transparent" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Ready to Go Live?</span>
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#341f9b] to-[#00acd7]" />
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                  Let&apos;s Build Your{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Smartest Campaign
                  </span>{" "}
                  Through Our DOOH Network
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
                  Whether you&apos;re launching a brand, driving footfall, or scaling awareness — our programmatic DOOH network puts you in front of the right audience, at the right time, in the right place.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-8 py-4 rounded-lg text-white font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Plan With Us <IconArrow />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2.5 border border-white/20 bg-white/5 px-8 py-4 rounded-lg text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/35 transition-all duration-300"
                  >
                    See Our Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
