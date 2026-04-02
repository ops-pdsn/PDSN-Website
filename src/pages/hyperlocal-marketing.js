"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudiesData } from "@/lib/caseStudiesData";

/* ── SVG Icons ── */
const IconPin = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
const IconTarget = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
  </svg>
);
const IconZap = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const IconChart = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);
const IconShield = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const IconUsers = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);
const IconMapGrid = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

/* ── Data ── */
const heroStats = [
  { value: "PIN", label: "Pincode Precision" },
  { value: "500m", label: "Radius Targeting" },
  { value: "2×", label: "Higher Recall vs Broad Media" },
  { value: "0%", label: "Wasted Impressions" },
];

const targetingMethods = [
  {
    icon: <IconPin />,
    title: "Pincode Targeting",
    desc: "Map your campaign to specific postal codes — serve ads only to audiences within your exact delivery zone, service area, or retail catchment.",
    tag: "Most Precise",
    accent: "from-[#00acd7] to-[#0082a8]",
  },
  {
    icon: <IconMapGrid />,
    title: "Landmark Targeting",
    desc: "Anchor your media to recognisable local landmarks — shopping malls, hospitals, railway stations, industrial parks, or educational hubs.",
    tag: "Context-Rich",
    accent: "from-[#341f9b] to-[#4f35c2]",
  },
  {
    icon: <IconTarget />,
    title: "Radius Targeting",
    desc: "Draw a custom radius around any point of interest and flood every screen within that zone with your brand message.",
    tag: "Flexible",
    accent: "from-[#00acd7] to-[#341f9b]",
  },
  {
    icon: <IconUsers />,
    title: "Audience Cluster Targeting",
    desc: "Group neighbourhoods by demographic — target by income bracket, industry belt, residential vs commercial, or footfall density.",
    tag: "Demographic-Led",
    accent: "from-[#341f9b] to-[#00acd7]",
  },
];

const benefits = [
  {
    icon: <IconZap />,
    title: "Increased Brand Awareness",
    body: "Show up in your customer's own neighbourhood. Familiarity builds trust, and trust drives action.",
  },
  {
    icon: <IconChart />,
    title: "Higher Conversion Rates",
    body: "Locally relevant ads meet audiences at the right moment — driving footfall, calls, and clicks.",
  },
  {
    icon: <IconShield />,
    title: "Zero Media Waste",
    body: "Every rupee spent reaches your actual target geography. No spillover, no wasted impressions.",
  },
  {
    icon: <IconUsers />,
    title: "Community Presence",
    body: "Build deep loyalty by embedding your brand within local culture, landmarks, and daily routines.",
  },
];

const howItWorks = [
  { step: "01", title: "Define Your Zone", desc: "You tell us the pincode, landmark, or radius. We map it to our active screen network instantly." },
  { step: "02", title: "Map Live Screens", desc: "We identify every digital screen — DOOH panels, LED boards, mall displays — within your zone." },
  { step: "03", title: "Deploy Your Creative", desc: "Your content goes live across all mapped screens with dayparting and frequency controls." },
  { step: "04", title: "Measure & Optimise", desc: "Real-time impression data lets us refine zones, swap creatives, and maximise ROI." },
];

const industries = [
  "Retail & D2C", "Food & Beverage", "Healthcare & Clinics",
  "Real Estate", "Education & Coaching", "Banking & Finance",
  "Automotive", "Industrial & B2B", "Hospitality & Hotels",
];

const filteredStudies = caseStudiesData.filter((s) => s.category === "Hyperlocal");

/* ── Page ── */
export default function HyperlocalMarketingPage() {
  return (
    <>
      <Head>
        <title>Hyperlocal Marketing — PDSN Media</title>
        <meta
          name="description"
          content="Pincode-precise advertising that reaches your audience exactly where they live, work, and shop. Hyperlocal DOOH campaigns by PDSN Media."
        />
      </Head>

      <Header />

      <main className="bg-[#080C14] text-white overflow-x-hidden">

        {/* ═══════════════════════════════
            HERO
        ═══════════════════════════════ */}
        <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
          {/* Background image + overlays */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/hyperlocalbanner.webp"
              alt="Hyperlocal coverage map"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#080C14]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/90 via-[#080C14]/50 to-[#080C14]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-[#080C14]/30" />
          </div>

          {/* Radar pulse decorative */}
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 pointer-events-none z-0 hidden lg:block">
            <div className="relative w-72 h-72">
              {[1, 2, 3].map((n) => (
                <span
                  key={n}
                  className="absolute inset-0 rounded-full border border-[#00acd7]/20"
                  style={{ animation: `ping 3s ease-out ${n * 0.8}s infinite`, transform: `scale(${n * 0.33})` }}
                />
              ))}
              <div className="absolute inset-[40%] rounded-full bg-[#00acd7]/20 border border-[#00acd7]/40 flex items-center justify-center">
                <IconPin />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.3em] uppercase">
                  Hyperlocal Marketing
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.92] tracking-tight max-w-4xl">
                <span className="block text-white">Your Ad.</span>
                <span className="block bg-gradient-to-r from-[#00acd7] via-[#6B7FFF] to-[#341f9b] bg-clip-text text-transparent">
                  Their Pincode.
                </span>
                <span className="block text-white/90">Zero Waste.</span>
              </h1>

              <p className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                We place your brand message precisely where your audience lives, shops, and commutes —
                down to the street, the landmark, the pincode.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-8 py-4 rounded-lg text-white font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start Your Local Campaign
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wide hover:border-[#00acd7]/50 hover:bg-white/[0.04] transition-all duration-200"
                >
                  See How It Works
                </a>
              </div>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]"
            >
              {heroStats.map((s) => (
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
            WHAT IS HYPERLOCAL
        ═══════════════════════════════ */}
        <section className="py-24 border-b border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left copy */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">
                    The Concept
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
                  Advertising That Knows<br />
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Where You Are
                  </span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-5">
                  Traditional media broadcasts your message everywhere and hopes the right people see it.
                  Hyperlocal marketing flips that logic — we target the exact geography your business operates in,
                  and only activate screens within that zone.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Whether it&apos;s a single pincode in Pune&apos;s Bhosari industrial belt, a 500-metre radius around
                  your flagship store, or a cluster of landmarks your customers pass daily — your ad appears
                  only where it matters.
                </p>

                {/* Pincode visual pill */}
                <div className="inline-flex items-center gap-3 bg-[#0D1420] border border-[#00acd7]/20 rounded-xl px-5 py-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00acd7]/20 to-[#341f9b]/20 flex items-center justify-center text-[#00acd7]">
                    <IconPin />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">Example: PIN 411026</div>
                    <div className="text-gray-500 text-xs">Bhosari, Pune — Industrial Catchment</div>
                  </div>
                  <div className="ml-2 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#00acd7] animate-pulse" />
                    <span className="text-[#00acd7] text-xs font-bold">Live</span>
                  </div>
                </div>
              </motion.div>

              {/* Right image */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl aspect-[4/3]">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/hyperlocalbanner.webp"
                    alt="Hyperlocal targeting coverage map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/60 via-transparent to-transparent" />
                  {/* Overlay badge */}
                  <div className="absolute bottom-5 left-5 bg-[#080C14]/80 backdrop-blur-sm border border-[#00acd7]/20 rounded-xl px-4 py-2">
                    <div className="text-[#00acd7] text-xs font-bold tracking-widest uppercase">Coverage Map</div>
                    <div className="text-white text-sm font-black mt-0.5">Pan-India Network</div>
                  </div>
                </div>
                {/* Floating stat card */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#00acd7] to-[#341f9b] rounded-2xl px-5 py-4 shadow-xl shadow-[#00acd7]/20">
                  <div className="text-white text-2xl font-black">2×</div>
                  <div className="text-white/80 text-xs font-semibold mt-0.5">Better Recall</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            TARGETING METHODS
        ═══════════════════════════════ */}
        <section className="py-24 border-b border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">
                  Targeting Capabilities
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-2xl">
                Four Ways We<br />
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Find Your Audience
                </span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {targetingMethods.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="group bg-[#0D1420] border border-white/[0.06] rounded-2xl p-6 hover:border-[#00acd7]/25 transition-colors duration-300"
                >
                  {/* Tag */}
                  <div className={`inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r ${m.accent} mb-5`}>
                    <span className="text-white text-[10px] font-black tracking-[0.12em] uppercase">{m.tag}</span>
                  </div>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/15 flex items-center justify-center text-[#00acd7] mb-4 group-hover:from-[#00acd7]/25 group-hover:to-[#341f9b]/25 transition-all duration-300">
                    {m.icon}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            HOW IT WORKS
        ═══════════════════════════════ */}
        <section id="how-it-works" className="py-24 border-b border-white/[0.04] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">The Process</span>
                <div className="h-[2px] w-6 bg-gradient-to-l from-[#00acd7] to-[#341f9b]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                From Pincode to<br />
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Live Campaign in 4 Steps
                </span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connecting line — desktop */}
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#00acd7]/30 via-[#341f9b]/30 to-[#00acd7]/30" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {howItWorks.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                    className="relative text-center bg-[#0D1420] border border-white/[0.05] rounded-2xl p-7 hover:border-[#00acd7]/20 transition-colors duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/20 flex items-center justify-center mx-auto mb-5 relative z-10">
                      <span className="text-[#00acd7] font-black text-sm">{item.step}</span>
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            WHY HYPERLOCAL — BENEFITS
        ═══════════════════════════════ */}
        <section className="py-24 border-b border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left — benefits grid */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Why It Works</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-10">
                  Built for Brands That<br />
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Mean Business Locally
                  </span>
                </h2>

                <div className="grid sm:grid-cols-2 gap-5">
                  {benefits.map((b, i) => (
                    <motion.div
                      key={b.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                      className="bg-[#0D1420] border border-white/[0.06] rounded-2xl p-5 hover:border-[#00acd7]/20 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/15 flex items-center justify-center text-[#00acd7] mb-4 group-hover:from-[#00acd7]/25 group-hover:to-[#341f9b]/25 transition-all duration-300">
                        {b.icon}
                      </div>
                      <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{b.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right — industries */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
              >
                <div className="bg-[#0D1420] border border-white/[0.06] rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#00acd7] animate-pulse" />
                    <span className="text-[#00acd7] text-xs font-bold tracking-[0.2em] uppercase">Industries We Serve</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-7">
                    Hyperlocal works for any brand with a physical or geographic audience.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {industries.map((ind) => (
                      <span
                        key={ind}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#080C14] border border-white/[0.08] rounded-full text-gray-300 text-xs font-semibold hover:border-[#00acd7]/30 hover:text-white transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                        {ind}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/[0.06] my-7" />

                  {/* Mini stat row */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { val: "500m", lbl: "Min. Radius" },
                      { val: "24/7", lbl: "Campaign Live" },
                      { val: "100%", lbl: "Geo-Verified" },
                    ].map((s) => (
                      <div key={s.lbl}>
                        <div className="text-xl font-black bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                          {s.val}
                        </div>
                        <div className="text-gray-600 text-[10px] font-semibold uppercase tracking-wider mt-0.5">
                          {s.lbl}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            CASE STUDIES
        ═══════════════════════════════ */}
        {filteredStudies.length > 0 && (
          <section className="py-24 border-b border-white/[0.04]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                    <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">
                      Success Stories
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                    Hyperlocal Campaigns<br />
                    <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                      That Delivered
                    </span>
                  </h2>
                </div>
                <Link
                  href="/case-studies"
                  className="flex-shrink-0 inline-flex items-center gap-2 border border-white/20 text-white text-sm font-bold px-6 py-3 rounded-lg hover:border-[#00acd7]/40 hover:bg-white/[0.03] transition-all duration-200"
                >
                  All Case Studies
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredStudies.map((study, i) => (
                  <motion.div
                    key={study.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                  >
                    <Link href={`/case-studies/${study.slug}`} className="block group">
                      <div className="bg-[#0D1420] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#00acd7]/25 transition-all duration-300">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1420] via-transparent to-transparent" />
                          {/* Category tag */}
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#00acd7] to-[#341f9b] rounded-full text-white text-[10px] font-black tracking-[0.1em] uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-white" />
                              Hyperlocal
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00acd7] transition-colors duration-200">
                            {study.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-4">{study.summary}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-xs font-semibold">{study.result}</span>
                            <span className="inline-flex items-center gap-1.5 text-[#00acd7] text-xs font-bold group-hover:gap-2.5 transition-all duration-200">
                              View Case Study
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════
            CTA
        ═══════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00acd7]/5 via-[#080C14] to-[#341f9b]/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#341f9b]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Ready to Target?</span>
                <div className="h-[2px] w-6 bg-gradient-to-l from-[#00acd7] to-[#341f9b]" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Dominate Your<br />
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Local Market
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Let us map a precision campaign across your target geography — high impact, zero waste,
                and measurable results from day one.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-10 py-4 rounded-lg text-white font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book a Free Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-10 py-4 rounded-lg font-bold text-sm tracking-wide hover:border-[#00acd7]/40 hover:bg-white/[0.04] transition-all duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
