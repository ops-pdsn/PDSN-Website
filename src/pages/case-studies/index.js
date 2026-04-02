"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CDN_BASE = 'https://raw.githubusercontent.com/ops-pdsn/cdn-assets/main/data';

/* ─── Data (authoritative — includes accurate image paths & categories) ─── */
const INITIAL_STUDIES = [
  {
    title: "The New India Assurance – Head Office",
    slug: "nia",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/case-studies/nia_case_study.webp",
    summary: "A-Frame digital standees and wall-mounted digital screens transformed a heritage insurance HQ into a modern, branded environment.",
    result: "🎯 Impactful Results",
    category: "Finance",
  },
  {
    title: "Cosmos × IMTEX 2025",
    slug: "cosmos-imtex-2025",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/case-studies/cosmos.webp",
    summary: "L-shaped anamorphic LED screen brought precision engineering to life in stunning 3D at India's largest machine tools exhibition.",
    result: "🚀 Showstopper at IMTEX 2025",
    category: "Technology",
  },
  {
    title: "Ajanta Pharma × Yashobhoomi",
    slug: "ajanta-pharma",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/case-studies/ajanta.webp",
    summary: "Immersive 3D illusion campaign turning heads and capturing premium mindshare at a national pharma summit.",
    result: "✨ Premium brand experience",
    category: "Healthcare",
  },
  {
    title: "NBC Bearings × Multi-Vehicle Showcase",
    slug: "nbc-bearings",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/case-studies/nbc.webp",
    summary: "Cross-industry 3D narrative showcasing ball bearings in motion across automotive, industrial, and rail applications.",
    result: "🏆 Tech + storytelling fusion",
    category: "Automotive",
  },
  {
    title: "Bank of India × Tata Marathon",
    slug: "bank-of-india",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/case-studies/BOI.webp",
    summary: "Emotive corporate film captured during India's biggest marathon — showcasing the bank's commitment to community and endurance.",
    result: "🎥 Powerful internal branding",
    category: "Finance",
  },
  {
    title: "Agrasen × Detroit Airport",
    slug: "agrasen",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/case-studies/agrasen.webp",
    summary: "Strategic DOOH placements at Detroit Airport delivered global brand visibility to a diaspora audience at peak travel moments.",
    result: "🌎 Cross-border brand push",
    category: "Industrial",
  },
  {
    title: "Solution One ERP × Pin-Code Targeting",
    slug: "solution-one-erp",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/case-studies/solutionone.webp",
    summary: "Precision hyperlocal media in Pune's Bhosari industrial belt — delivering software messaging to decision-makers at their workplace.",
    result: "🎯 Laser-targeted impressions",
    category: "Technology",
  },
];

/* ─── Category accent colours ─── */
const CAT_COLORS = {
  Finance:    { pill: "bg-blue-50 text-blue-600",    dot: "bg-blue-500",   bar: "from-blue-500 to-blue-600" },
  Technology: { pill: "bg-[#00acd7]/10 text-[#00acd7]", dot: "bg-[#00acd7]", bar: "from-[#00acd7] to-[#0082a8]" },
  Healthcare: { pill: "bg-emerald-50 text-emerald-600", dot: "bg-emerald-500", bar: "from-emerald-500 to-emerald-600" },
  Automotive: { pill: "bg-orange-50 text-orange-600",  dot: "bg-orange-500",  bar: "from-orange-500 to-orange-600" },
  Industrial: { pill: "bg-[#341f9b]/10 text-[#341f9b]", dot: "bg-[#341f9b]", bar: "from-[#341f9b] to-[#4f35c2]" },
};
const defaultColors = { pill: "bg-gray-100 text-gray-600", dot: "bg-gray-400", bar: "from-gray-400 to-gray-500" };
function catColor(cat) { return CAT_COLORS[cat] || defaultColors; }

// ALL_CATEGORIES is computed inside the component (depends on live state)

/* ─── Icons ─── */
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

/* ─── Case study card ─── */
function CaseStudyCard({ study, index }) {
  const c = catColor(study.category);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.09 }}
      viewport={{ once: true }}
    >
      <Link href={`/case-studies/${study.slug}`} className="block group h-full">
        <div className="h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-1.5 transition-all duration-300">

          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Dark gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category badge */}
            <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full ${c.pill}`}>
              {study.category}
            </span>

            {/* Hover CTA */}
            <div className="absolute bottom-3 right-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                View Study <IconArrow />
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Accent bar */}
            <div className={`h-[3px] w-8 rounded-full bg-gradient-to-r ${c.bar} mb-4`} />

            <h3 className="text-gray-900 font-bold text-base leading-snug mb-2 group-hover:text-[#341f9b] transition-colors duration-200">
              {study.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{study.summary}</p>

            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                <span className="text-gray-400 text-xs">{study.result}</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-3.5 h-3.5 text-[#341f9b]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [studies, setStudies] = useState(INITIAL_STUDIES);

  // Fetch live data from CDN on mount (real-time updates without rebuild)
  useEffect(() => {
    fetch(`${CDN_BASE}/caseStudies.json?t=${Date.now()}`)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(live => {
        if (!Array.isArray(live) || live.length === 0) return;
        // Merge: CDN entries first, then any hardcoded ones not in CDN
        const liveSlugs = new Set(live.map(s => s.slug));
        const merged = [...live, ...INITIAL_STUDIES.filter(s => !liveSlugs.has(s.slug))];
        setStudies(merged);
      })
      .catch(() => {}); // silently fall back to initial data
  }, []);

  const ALL_CATEGORIES = ["All", ...Array.from(new Set(studies.map(s => s.category)))];
  const featured = studies[0];
  const restStudies = studies.slice(1);
  const filtered = activeCategory === "All"
    ? restStudies
    : restStudies.filter(s => s.category === activeCategory);

  if (!featured) return null;
  const featuredC = catColor(featured.category);

  return (
    <>
      <Head>
        <title>Case Studies | PDSN Media</title>
        <meta
          name="description"
          content="Explore PDSN Media's portfolio — anamorphic DOOH, hyperlocal targeting, corporate films, and airport advertising. Real brands, measurable results."
        />
      </Head>

      <Header />

      <main className="bg-white overflow-x-hidden">

        {/* ══════════════════════════
            HERO
        ══════════════════════════ */}
        <section className="relative min-h-[76vh] flex items-center overflow-hidden bg-[#080C14]">

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(#00acd7 1px, transparent 1px), linear-gradient(90deg, #00acd7 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />

          {/* Glow blobs */}
          <div className="absolute top-0 left-[5%] w-[520px] h-[520px] rounded-full bg-[#00acd7]/5 blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 right-[10%] w-[420px] h-[420px] rounded-full bg-[#341f9b]/8 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-12 w-full py-28">
            <div className="max-w-3xl">

              {/* Eyebrow */}
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-[2px] w-10 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Our Portfolio</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.04] tracking-tight text-white mb-6"
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
              >
                Work That{" "}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Speaks
                </span>{" "}
                for Itself
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-white/55 font-light leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.65 }}
              >
                From anamorphic exhibition installs to cross-border airport campaigns — every case study is a story of brand ambition meeting media intelligence.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.55 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start Your Campaign <IconArrow />
                </Link>
                <Link
                  href="#all-work"
                  className="inline-flex items-center gap-2.5 border border-white/20 bg-white/5 px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/35 transition-all duration-300"
                >
                  Browse All Work
                </Link>
              </motion.div>
            </div>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-0 mt-16 pt-10 border-t border-white/8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.55 }}
            >
              {[
                { value: `${studies.length}+`, label: "Campaigns Delivered" },
                { value: `${ALL_CATEGORIES.length - 1}`, label: "Industry Sectors" },
                { value: "Global", label: "Coverage Reach" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((s, i) => (
                <div key={i} className={`flex flex-col pr-10 ${i ? "pl-10 border-l border-white/10" : ""}`}>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white leading-none">{s.value}</span>
                  <span className="text-xs text-white/35 tracking-widest uppercase mt-1.5">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 z-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          >
            <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
            <motion.div
              className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
              animate={{ scaleY: [0, 1, 0] }}
              style={{ transformOrigin: "top" }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* ══════════════════════════
            GRADIENT TICKER
        ══════════════════════════ */}
        <div className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] py-3.5 overflow-hidden">
          <div className="ticker-track flex items-center gap-12 whitespace-nowrap">
            {[
              "Anamorphic DOOH Installations",
              "Hyperlocal Pincode Campaigns",
              "Airport Advertising Globally",
              "Corporate Film Production",
              "Exhibition & Event Branding",
              "Real Results — Real Brands",
              "Pan-India Media Coverage",
              "Anamorphic DOOH Installations",
              "Hyperlocal Pincode Campaigns",
              "Airport Advertising Globally",
            ].map((text, i) => (
              <span key={i} className="text-white/90 font-semibold text-sm flex items-center gap-4 shrink-0">
                {text}
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════
            FEATURED CASE STUDY
        ══════════════════════════ */}
        <section className="py-20 px-5 sm:px-10 md:px-12 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto">

            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} viewport={{ once: true }}
            >
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
              <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Spotlight</span>
            </motion.div>

            <Link href={`/case-studies/${featured.slug}`}>
              <motion.div
                className="group grid lg:grid-cols-[3fr_2fr] min-h-[460px] bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200/70 transition-all duration-400 cursor-pointer"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }} viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative min-h-[280px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  {/* Spotlight badge */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                      Spotlight
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-5 left-5">
                    <span className={`text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full ${featuredC.pill}`}>
                      {featured.category}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className={`h-[3px] w-10 rounded-full bg-gradient-to-r ${featuredC.bar} mb-6`} />
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-4 group-hover:text-[#341f9b] transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.summary}</p>

                  <div className="flex items-center gap-2 mb-8 pb-6 border-b border-gray-100">
                    <span className={`w-2 h-2 rounded-full ${featuredC.dot}`} />
                    <span className="text-gray-400 text-sm">{featured.result}</span>
                  </div>

                  <div className="inline-flex items-center gap-2.5 self-start bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-6 py-3 rounded-lg text-white font-semibold text-sm group-hover:shadow-lg group-hover:shadow-[#00acd7]/20 group-hover:-translate-y-0.5 transition-all duration-300">
                    Read Case Study <IconArrow />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>

        {/* ══════════════════════════
            FILTER + ALL CARDS
        ══════════════════════════ */}
        <section id="all-work" className="py-20 px-5 sm:px-10 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Header row */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }} viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">All Work</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
                  Browse by{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Industry
                  </span>
                </h2>
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {ALL_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white border-transparent shadow-md shadow-[#00acd7]/20"
                        : "bg-white text-gray-500 border-gray-200 hover:border-[#00acd7]/40 hover:text-[#00acd7]"
                    }`}
                  >
                    {cat}
                    {cat !== "All" && (
                      <span className="ml-1.5 opacity-60">
                        ({studies.filter(s => s.category === cat).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((study, i) => (
                  <CaseStudyCard key={study.slug} study={study} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="py-20 text-center text-gray-400 text-sm">No case studies in this category yet.</div>
            )}
          </div>
        </section>

        {/* ══════════════════════════
            INDUSTRY BANDS
        ══════════════════════════ */}
        <section className="py-16 px-5 sm:px-10 md:px-12 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }} viewport={{ once: true }}
            >
              {[
                { icon: "💼", label: "Finance", count: studies.filter(s => s.category === "Finance").length },
                { icon: "💻", label: "Technology", count: studies.filter(s => s.category === "Technology").length },
                { icon: "🏥", label: "Healthcare", count: studies.filter(s => s.category === "Healthcare").length },
                { icon: "🚗", label: "Automotive", count: studies.filter(s => s.category === "Automotive").length },
                { icon: "🏭", label: "Industrial", count: studies.filter(s => s.category === "Industrial").length },
              ].map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => setActiveCategory(item.label)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-4 border border-gray-100 hover:border-[#00acd7]/25 hover:shadow-md transition-all duration-200 text-left"
                >
                  <span className="text-xl mb-2 block">{item.icon}</span>
                  <div className="text-gray-900 font-bold text-sm">{item.label}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{item.count} case {item.count === 1 ? "study" : "studies"}</div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════
            CTA
        ══════════════════════════ */}
        <section className="py-24 px-5 sm:px-10 md:px-12 bg-[#080C14] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00acd7]/5 blur-[120px]" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#341f9b]/7 blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }} viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Work With Us</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                  Ready to Be Our{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Next Case Study?
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }} viewport={{ once: true }}
              >
                <p className="text-white/55 text-base leading-relaxed mb-8">
                  Every campaign we deliver becomes a benchmark. Tell us your brand&apos;s challenge — we&apos;ll design a media solution that gets noticed, measured, and remembered.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Start a Project <IconArrow />
                  </Link>
                  <Link
                    href="/programmatic-dooh"
                    className="inline-flex items-center gap-2.5 border border-white/20 px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:bg-white/8 hover:border-white/35 transition-all duration-300"
                  >
                    Explore DOOH
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
