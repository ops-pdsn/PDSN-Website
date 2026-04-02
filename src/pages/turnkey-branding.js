"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── SVG Icons ─── */
const IconBrush = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
);
const IconFactory = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);
const IconWrench = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);
const IconClipboard = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
const IconTrain = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);
const IconBuilding = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);
const IconStar = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);
const IconGift = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);
const IconOffice = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

/* ─── Process steps data ─── */
const processSteps = [
  {
    number: "01",
    title: "Concept & Design",
    desc: "We start by deeply understanding your brand vision and translating it into compelling visual experiences that resonate with your audience and align with your identity.",
    icon: <IconBrush />,
    accent: "from-[#00acd7] to-[#0082a8]",
  },
  {
    number: "02",
    title: "Production & Fabrication",
    desc: "Using high-quality materials and precision finishes, we bring your designs to life — tailored to your environment, budget, and durability requirements.",
    icon: <IconFactory />,
    accent: "from-[#341f9b] to-[#4f35c2]",
  },
  {
    number: "03",
    title: "Installation & Execution",
    desc: "Our experienced on-ground professionals handle every aspect of deployment — ensuring precision installation, zero downtime, and seamless delivery.",
    icon: <IconWrench />,
    accent: "from-[#00acd7] to-[#341f9b]",
  },
  {
    number: "04",
    title: "Project Management",
    desc: "From start to finish, we coordinate all touchpoints for timely delivery — with full transparency, accountability, and zero compromise on quality.",
    icon: <IconClipboard />,
    accent: "from-[#341f9b] to-[#00acd7]",
  },
];

/* ─── Work in action data ─── */
const workInAction = [
  {
    icon: <IconTrain />,
    title: "Metro & Transit Branding",
    body: "Executed branding installations across key Aqua Line metro locations, including digital screens, PSDs, and integrated display units designed to capture high commuter attention.",
    tag: "High-Impact Reach",
    accent: "from-[#00acd7] to-[#0082a8]",
  },
  {
    icon: <IconBuilding />,
    title: "Corporate & Office Branding",
    body: "Designed and installed premium acrylic signage and interior branding elements that enhance workplace identity and professionalism.",
    tag: "Premium Finish",
    accent: "from-[#341f9b] to-[#4f35c2]",
  },
  {
    icon: <IconStar />,
    title: "Campaign & Promotional Assets",
    body: "Created eye-catching mascot cutouts, standees, and engagement-driven visual elements for brand campaigns and on-ground activations.",
    tag: "On-Ground Activation",
    accent: "from-[#00acd7] to-[#341f9b]",
  },
  {
    icon: <IconGift />,
    title: "Custom Brand Collaterals",
    body: "Produced unique, customized mementos and branded materials that align with corporate identity and leave a lasting impression on recipients.",
    tag: "Bespoke Branding",
    accent: "from-[#341f9b] to-[#00acd7]",
  },
  {
    icon: <IconOffice />,
    title: "Office Decor & Environment Branding",
    body: "Delivered aesthetically aligned office decoration solutions that reflect brand ethos while creating inspiring, on-brand workspaces.",
    tag: "Environment Branding",
    accent: "from-[#00acd7] to-[#341f9b]",
  },
];

/* ─── Why choose us ─── */
const whyItems = [
  "End-to-end execution under one roof",
  "Strong focus on quality, durability, and finish",
  "Creative + technical expertise combined",
  "Proven experience across large-scale deployments",
  "Timely delivery with zero compromise",
];

/* ─── Hero stats ─── */
const heroStats = [
  { value: "100%", label: "End-to-End Execution" },
  { value: "5+", label: "Branding Sectors Served" },
  { value: "Zero", label: "Compromise on Quality" },
];

/* ─── Gallery data ─── */
const featuredWork = {
  image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/coporate1.webp",
  category: "Metro & Transit Branding",
  tag: "Latest Work",
  title: "Aqua Line Metro — Full Station Brand Experience",
  brief: "An end-to-end transit branding execution across key Aqua Line metro stations. Integrated digital screens, PSDs, and display units were conceptualised, fabricated, and installed by our team — delivering a cohesive commuter experience that puts the brand front and centre at high-footfall touchpoints.",
  year: "2024",
};

const olderWorks = [
  {
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (15).webp",
    category: "Corporate Branding",
    title: "Premium Office Identity Installation",
    desc: "Designed and installed premium acrylic signage, wall murals, and interior brand elements across a corporate campus. Every touchpoint — from lobby to boardroom — was aligned to reinforce workplace identity and professionalism.",
    year: "2024",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (12).webp",
    category: "Campaign Assets",
    title: "Brand Activation — Mascot & Standee Suite",
    desc: "Created a full suite of campaign-ready mascot cutouts, life-size standees, and engagement props for an on-ground brand activation. Each element was crafted to maximise audience interaction and brand recall in high-traffic zones.",
    year: "2024",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/outdoor2.webp",
    category: "Outdoor Branding",
    title: "Large-Format Outdoor Brand Wrap",
    desc: "Executed a large-format outdoor branding project spanning multiple facades. High-durability vinyl wraps with precision-cut finishes ensured maximum visual impact and longevity across all weather conditions.",
    year: "2023",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (2).webp",
    category: "Custom Collaterals",
    title: "Corporate Memento & Gifting Collection",
    desc: "Conceptualised and produced a bespoke range of branded mementos and corporate gifting items. Each piece was aligned to the client's visual identity, making every giveaway a lasting brand impression.",
    year: "2023",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (4).webp",
    category: "Office Decor",
    title: "Workspace Environment Branding",
    desc: "Delivered a full office environment branding project — wall graphics, ceiling installations, and themed zones that reflect the brand's ethos. The result: an inspiring workspace that feels both functional and on-brand.",
    year: "2023",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (5).webp",
    category: "Transit Branding",
    title: "Station Pillar & Concourse Wrap",
    desc: "Wrapped structural pillars and concourse walls with high-resolution brand graphics at a busy transit hub. Durable, UV-resistant materials ensured the installation stayed vibrant through heavy commuter traffic.",
    year: "2023",
  },
];

export default function TurnkeyBrandingPage() {
  const allGalleryItems = [featuredWork, ...olderWorks];
  const [lightbox, setLightbox] = useState(null); // index into allGalleryItems

  return (
    <>
      <Head>
        <title>Turnkey Branding Solutions | PDSN Media</title>
        <meta
          name="description"
          content="PDSN Media offers complete Turnkey Branding Solutions — from concept and design to fabrication, installation, and project management. Metro branding, corporate environments, campaigns, and more."
        />
      </Head>

      <Header />

      <main className="bg-white text-black overflow-x-hidden">

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden">
          <Image
            src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/about-hero.webp"
            alt="Turnkey Branding Solutions"
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
                  Turnkey Branding Solutions
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-7"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
              >
                From Concept to{" "}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Execution
                </span>
                , Seamlessly
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-base sm:text-lg text-white/65 font-light leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.65 }}
              >
                We handle everything — so your brand presence is seamless, impactful, and completely hassle-free. One partner, end-to-end delivery, zero compromise.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.55 }}
              >
                <Link
                  href="#what-we-do"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  See Our Process <IconArrow />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 border border-white/25 bg-white/8 backdrop-blur-sm px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:bg-white/15 hover:border-white/40 transition-all duration-300"
                >
                  Get a Quote
                </Link>
              </motion.div>

              {/* Stats bar */}
              <motion.div
                className="flex flex-wrap items-stretch gap-0 mt-16 pt-10 border-t border-white/12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.55 }}
              >
                {heroStats.map((s, i) => (
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
            SCROLLING TICKER
        ═══════════════════════════════════════ */}
        <div className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] py-3.5 overflow-hidden">
          <div className="ticker-track flex items-center gap-12 whitespace-nowrap">
            {[
              "Concept to Completion — Under One Roof",
              "Metro & Transit Branding",
              "Corporate Environment Branding",
              "Custom Brand Collaterals",
              "Campaign & Promotional Assets",
              "Office Decor & Environment Branding",
              "Premium Fabrication & Flawless Execution",
              "Timely Delivery — Zero Compromise",
              "Concept to Completion — Under One Roof",
              "Metro & Transit Branding",
              "Corporate Environment Branding",
            ].map((text, i) => (
              <span key={i} className="text-white/90 font-semibold text-sm flex items-center gap-4 shrink-0">
                {text}
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            INTRO / OVERVIEW
        ═══════════════════════════════════════ */}
        <section className="py-24 px-5 sm:px-10 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left — text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">About Our Approach</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
                  Branding That{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Transforms Spaces
                  </span>
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-5">
                  At PDSN Media, we specialize in delivering end-to-end branding projects that transform spaces into powerful brand experiences. Whether it&apos;s transit media, corporate environments, or on-ground activations, our team ensures every detail is executed with precision and consistency.
                </p>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  Our turnkey approach means you deal with one partner from the first sketch to the final installation — saving time, ensuring brand consistency, and removing the coordination burden entirely.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start a Project <IconArrow />
                </Link>
              </motion.div>

              {/* Right — image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/outdoor2.webp"
                    alt="Turnkey Branding"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#341f9b]/20 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-white shadow-2xl rounded-xl px-5 py-4 flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00acd7] to-[#341f9b] flex items-center justify-center shrink-0">
                    <IconCheck />
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold text-sm">Single Partner</div>
                    <div className="text-gray-400 text-xs">Concept to Installation</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHAT WE DO — PROCESS
        ═══════════════════════════════════════ */}
        <section id="what-we-do" className="py-24 px-5 sm:px-10 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Our Process</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#341f9b] to-[#00acd7]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4">
                The Complete{" "}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Branding Lifecycle
                </span>
              </h2>
              <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                Our turnkey approach covers every stage — so you never have to juggle multiple vendors or worry about coordination gaps.
              </p>
            </motion.div>

            {/* Process cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:shadow-[#00acd7]/8 hover:border-[#00acd7]/25 transition-all duration-300 overflow-hidden"
                >
                  {/* Number watermark */}
                  <span className="absolute top-4 right-5 text-6xl font-black text-gray-50 select-none leading-none group-hover:text-[#00acd7]/5 transition-colors duration-300">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center text-white mb-5 shadow-md`}>
                    {step.icon}
                  </div>

                  <h3 className="text-gray-900 font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${step.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>
              ))}
            </div>

            {/* Connector hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="hidden lg:flex items-center justify-center mt-8 gap-2 text-gray-400 text-xs tracking-widest uppercase"
            >
              <span>Step 01</span>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 via-[#00acd7]/30 to-gray-200 max-w-sm" />
              <span>Step 04</span>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            OUR WORK IN ACTION
        ═══════════════════════════════════════ */}
        <section className="py-24 px-5 sm:px-10 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Case Highlights</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#341f9b] to-[#00acd7]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4">
                Our Work{" "}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  in Action
                </span>
              </h2>
              <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                We have successfully delivered large-scale branding solutions across multiple sectors — each project a testament to our precision and creativity.
              </p>
            </motion.div>

            {/* Work cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workInAction.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-2xl hover:shadow-[#00acd7]/8 hover:-translate-y-1 transition-all duration-300 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white mb-5 shadow-lg`}>
                    {item.icon}
                  </div>

                  {/* Tag */}
                  <span className={`inline-block text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${item.accent} text-white mb-4`}>
                    {item.tag}
                  </span>

                  <h3 className="text-gray-900 font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>

                  {/* Hover left border */}
                  <div className={`absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            GALLERY — OUR WORK
        ═══════════════════════════════════════ */}
        <section className="py-24 px-5 sm:px-10 md:px-12 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Portfolio</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
                  Work We&apos;re{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Proud Of
                  </span>
                </h2>
                <p className="text-gray-400 text-sm max-w-xs leading-relaxed sm:text-right">
                  A curated look at the branding projects we&apos;ve brought to life — from large transit installations to intimate office environments.
                </p>
              </div>
            </motion.div>

            {/* ── FEATURED / LATEST ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden mb-6 cursor-pointer"
              onClick={() => setLightbox(0)}
            >
              <div className="grid lg:grid-cols-[3fr_2fr] min-h-[420px]">

                {/* Image side */}
                <div className="relative min-h-[280px] lg:min-h-[420px] overflow-hidden">
                  <Image
                    src={featuredWork.image}
                    alt={featuredWork.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  {/* Subtle inner shadow on right */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5 lg:to-white/10 pointer-events-none" />

                  {/* Latest badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                      Latest Work
                    </span>
                  </div>

                  {/* Zoom hint */}
                  <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Text side */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#00acd7] mb-3">
                    {featuredWork.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                    {featuredWork.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {featuredWork.brief}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300 font-medium tracking-widest uppercase">{featuredWork.year}</span>
                    <div className="flex items-center gap-2 text-[#00acd7] text-xs font-bold tracking-wide uppercase group-hover:gap-3 transition-all duration-200">
                      View Project
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── OLDER WORKS GRID ── */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {olderWorks.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                  onClick={() => setLightbox(i + 1)}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category pill on hover */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black/50 backdrop-blur-sm text-white text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>

                    {/* Zoom icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#00acd7]">{item.category}</span>
                      <span className="text-[9px] text-gray-300 font-medium tracking-widest uppercase">{item.year}</span>
                    </div>
                    <h4 className="text-gray-900 font-bold text-base leading-snug mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIGHTBOX ── */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/94 backdrop-blur-sm"
                onClick={() => setLightbox(null)}
              />

              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + allGalleryItems.length) % allGalleryItems.length); }}
                className="absolute left-4 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % allGalleryItems.length); }}
                className="absolute right-4 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Counter */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 text-white/50 text-xs font-medium tracking-[0.2em] uppercase">
                {lightbox + 1} / {allGalleryItems.length}
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightbox}
                  className="relative z-10 w-[92vw] max-w-5xl flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  transition={{ duration: 0.22 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Image */}
                  <div className="relative w-full lg:w-[65%] aspect-[4/3] lg:aspect-auto lg:min-h-[55vh]">
                    <Image
                      src={allGalleryItems[lightbox].image}
                      alt={allGalleryItems[lightbox].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 92vw, 60vw"
                      quality={92}
                    />
                  </div>

                  {/* Info panel */}
                  <div className="bg-[#0D1117] flex flex-col justify-center px-7 py-8 lg:py-10 lg:w-[35%]">
                    <span className="text-[#00acd7] text-[10px] font-bold tracking-[0.22em] uppercase mb-3 block">
                      {allGalleryItems[lightbox].category}
                    </span>
                    <h3 className="text-white font-extrabold text-xl leading-snug mb-4">
                      {allGalleryItems[lightbox].title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-6">
                      {allGalleryItems[lightbox].brief ?? allGalleryItems[lightbox].desc}
                    </p>
                    <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                      <span className="text-xs text-white/30 tracking-widest uppercase">{allGalleryItems[lightbox].year}</span>
                      {lightbox === 0 && (
                        <span className="ml-2 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full">
                          <span className="w-1 h-1 rounded-full bg-white/80 animate-pulse" />
                          Latest
                        </span>
                      )}
                    </div>

                    {/* Thumbnail strip */}
                    <div className="flex gap-2 mt-5 overflow-x-auto pb-1">
                      {allGalleryItems.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => setLightbox(idx)}
                          className={`relative w-12 h-9 rounded-md overflow-hidden shrink-0 border-2 transition-all duration-200 ${
                            idx === lightbox ? "border-[#00acd7] opacity-100" : "border-white/15 opacity-40 hover:opacity-70"
                          }`}
                        >
                          <Image src={item.image} alt="" fill className="object-cover" sizes="48px" />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════════════════════════════
            WHY CHOOSE PDSN MEDIA
        ═══════════════════════════════════════ */}
        <section className="py-24 px-5 sm:px-10 md:px-12 bg-[#080C14] relative overflow-hidden">

          {/* Background blobs */}
          <div className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full bg-[#00acd7]/5 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full bg-[#341f9b]/8 blur-[90px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Why PDSN Media</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
                  Your Brand Deserves{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    the Best
                  </span>
                </h2>
                <p className="text-white/55 text-base leading-relaxed mb-8">
                  Our Turnkey Branding Solutions are designed to help brands stand out in competitive environments while ensuring consistency, impact, and long-term value.
                </p>
                <p className="text-white/55 text-base leading-relaxed">
                  Let us take your brand from idea to execution — effortlessly. One call, one partner, one seamless experience.
                </p>
              </motion.div>

              {/* Right — checklist */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {whyItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-xl px-5 py-4 hover:bg-white/8 hover:border-[#00acd7]/30 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00acd7] to-[#341f9b] flex items-center justify-center text-white shrink-0">
                      <IconCheck />
                    </div>
                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-200">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════ */}
        <section className="py-24 px-5 sm:px-10 md:px-12 bg-[#080C14] border-t border-white/5 relative overflow-hidden">

          {/* Background blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00acd7]/5 blur-[120px]" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#341f9b]/7 blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Get Started</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Brand Your Space?
                  </span>
                </h2>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <p className="text-white/55 text-base leading-relaxed mb-8">
                  Whether you&apos;re looking to brand a metro station, transform a corporate office, or execute a large-scale campaign — our team is ready to make it happen. Tell us about your project and we&apos;ll take it from there.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Let&apos;s Talk <IconArrow />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2.5 border border-white/20 px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:bg-white/8 hover:border-white/35 transition-all duration-300"
                  >
                    About PDSN Media
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
