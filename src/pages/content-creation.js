"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── Lazy 3D viewer ── */
const ThreeDViewer = dynamic(() => import("@/components/ThreeDViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-[#0D1420]">
      <div className="flex flex-col items-center gap-3">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#00acd7]" />
        <span className="text-[#00acd7]/60 text-xs tracking-widest uppercase">Loading 3D Model</span>
      </div>
    </div>
  ),
});

/* ── Service data ── */
const serviceBlocks = [
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    tagline: "Kinetic Storytelling",
    icon: "MG",
    description: "High-energy visuals for advertisements, product videos, and DOOH campaigns.",
    brief: "Dynamic animated graphics that communicate your brand's story with energy and flair — from social reels to massive DOOH displays.",
    type: "video",
    media: [
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/motion1.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/motion2.webm"
    ]
  },
  {
    id: "2d-3d-animation",
    title: "2D & 3D Animation",
    tagline: "Dimensional Narratives",
    icon: "3D",
    description: "Storytelling through dimensional visuals for all platforms.",
    brief: "Bring characters, ideas, and concepts to life with captivating animation in two or three dimensions — from explainer videos to immersive brand worlds.",
    type: "video",
    media: [
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/2Danimation.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/3Danimation3.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/3Danimation.webm"
    ],
    has3DModels: true
  },
  {
    id: "cgi-content",
    title: "CGI Content",
    tagline: "Photorealistic Perfection",
    icon: "CGI",
    description: "Photorealistic renders to enhance product appeal and realism.",
    brief: "Use digital artistry to craft ultra-realistic visuals for advertising and storytelling — indistinguishable from real photography.",
    type: "mixed",
    media: [
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/cgi1.webp",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/cgi1.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/cgi2.webp"
    ]
  },
  {
    id: "anamorphic-design",
    title: "Anamorphic Design",
    tagline: "Reality-Defying Illusions",
    icon: "ANA",
    description: "Immersive illusions tailored for large-scale DOOH.",
    brief: "Create mind-bending 3D illusions that mesmerize viewers on large digital screens — turning any billboard into an unmissable spectacle.",
    type: "video",
    media: [
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/anamorphic3.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/anamorphic2.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/anamorphic1.webm"
    ]
  },
  {
    id: "product-application-videos",
    title: "Product Application Videos",
    tagline: "In-Action Excellence",
    icon: "PAV",
    description: "Showcase your product in real-world use cases.",
    brief: "Highlight the value and versatility of your product through engaging demo videos that convert browsers into buyers.",
    type: "video",
    media: [
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/productapp1.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/productapp2.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/productapp3.webm"
    ]
  },
  {
    id: "digi-greetings",
    title: "Digi-Greetings",
    tagline: "Celebrate in Style",
    icon: "DG",
    description: "Festive and brand-specific animated greetings.",
    brief: "Celebrate special moments with beautifully animated greeting messages tailored to your brand — festivals, milestones, and corporate occasions.",
    type: "video",
    isSquare: true,
    media: [
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/digigreeting1.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/digigreeting2.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/digigreeting3.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/digigreeting4.webm"
    ]
  },
  {
    id: "corporate-shoots",
    title: "Corporate Shoots",
    tagline: "Professional Presence",
    icon: "CS",
    description: "Professional shoots for business branding and communication.",
    brief: "Crisp, high-quality visuals that represent your corporate identity with professionalism and authority.",
    type: "video",
    media: [
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/corporate1.webm",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/corporate2.webm"
    ]
  },
  {
    id: "product-shoots",
    title: "Product Shoots",
    tagline: "Studio-Quality Imagery",
    icon: "PS",
    description: "Capture your product from its best angle with studio-quality images.",
    brief: "Visual storytelling that puts your product in the spotlight with stunning photography that sells.",
    type: "image",
    media: [
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product1.webp",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product2.webp",
      "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product3.webp"
    ]
  }
];

/* ── Hero stats ── */
const heroStats = [
  { value: "500+", label: "Creatives Delivered" },
  { value: "8", label: "Content Verticals" },
  { value: "50+", label: "Brand Stories Told" },
  { value: "4K", label: "Max Resolution Output" }
];

/* ── Capability pillars ── */
const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Speed to Market",
    body: "Rapid production pipelines built for DOOH deadlines — from concept to screen in days."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Multi-Format Output",
    body: "Every creative optimised for screens from pocket-sized mobile to 60-foot DOOH billboards."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Brand-First Creativity",
    body: "Every pixel aligned to your brand guidelines — colours, tone, and identity preserved across every frame."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Engagement-Driven",
    body: "Content engineered for attention — scientifically tested to maximise dwell time and brand recall."
  }
];

/* ── Lazy Video ── */
const LazyVideo = ({ src, aspect = "video", poster = "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/poster-placeholder.webp" }) => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const el = videoRef.current;
    if (inView && el) el.play().catch(() => {});
    return () => { if (el) { el.pause(); el.currentTime = 0; } };
  }, [inView]);

  return (
    <video
      ref={(el) => { ref(el); videoRef.current = el; }}
      src={inView ? src : undefined}
      loop muted playsInline
      preload={inView ? "auto" : "none"}
      poster={poster}
      role="img"
      aria-label="Visual content preview"
      className={`w-full h-full object-cover ${aspect === "square" ? "aspect-square" : "aspect-video"}`}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

/* ── Service Nav ── */
function ServiceNav({ services, activeId }) {
  const navRef = useRef(null);

  /* Scroll active tab into view without fighting page scroll */
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const activeEl = nav.querySelector(`[data-id="${activeId}"]`);
    if (!activeEl) return;
    const navLeft = nav.scrollLeft;
    const navWidth = nav.offsetWidth;
    const elLeft = activeEl.offsetLeft;
    const elWidth = activeEl.offsetWidth;
    const target = elLeft - navWidth / 2 + elWidth / 2;
    nav.scrollTo({ left: target, behavior: "smooth" });
  }, [activeId]);

  return (
    <div className="sticky top-[64px] z-30 bg-white/96 backdrop-blur-lg border-b border-gray-200">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00acd7]/40 to-transparent" />

      {/* Wrapper with fade masks on edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          ref={navRef}
          className="flex items-stretch overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((s, i) => {
            const isActive = s.id === activeId;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-id={s.id}
                className={`relative flex-shrink-0 flex flex-col justify-center px-5 py-4 border-r border-gray-200 last:border-r-0 group transition-colors duration-200 ${
                  isActive ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <span
                  className={`block text-[10px] font-black tracking-[0.2em] mb-1 transition-colors duration-200 ${
                    isActive ? "text-[#00acd7]" : "text-gray-400 group-hover:text-gray-500"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`block text-xs font-bold tracking-[0.08em] uppercase whitespace-nowrap transition-colors duration-200 ${
                    isActive ? "text-gray-900" : "text-gray-500 group-hover:text-gray-700"
                  }`}
                >
                  {s.title}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Service Block ── */
function ServiceBlock({ service, index }) {
  return (
    <section
      id={service.id}
      className="relative py-24 border-b border-gray-100 scroll-mt-28"
    >
      <div className="absolute right-6 top-8 text-[120px] font-black text-gray-900/[0.03] leading-none select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
              <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">
                {String(index + 1).padStart(2, "0")} — {service.tagline}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              {service.title}
            </h2>
            <p className="mt-3 text-gray-600 text-base max-w-xl leading-relaxed">
              {service.brief}
            </p>
          </div>
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00acd7]/20 to-[#341f9b]/20 border border-[#00acd7]/20 flex items-center justify-center">
            <span className="text-[#00acd7] text-xs font-black tracking-widest">{service.icon}</span>
          </div>
        </motion.div>

        {/* Media grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className={`grid gap-4 ${
            service.isSquare
              ? "grid-cols-2 md:grid-cols-4"
              : service.media.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {service.media.map((src, i) => (
            <MediaCard
              key={i}
              src={src}
              title={service.title}
              isSquare={!!service.isSquare}
              priority={index === 0 && i === 0}
            />
          ))}
        </motion.div>

        {/* 3D Models — 2D & 3D Animation only */}
        {service.has3DModels && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-6 bg-gradient-to-r from-[#341f9b] to-[#00acd7]" />
              <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">
                Interactive 3D Models
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-8 max-w-lg">
              Experience our product designs in real-time 3D. Rotate, zoom, and explore each creation.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {["model1.glb", "model2.glb"].map((model, i) => (
                <div
                  key={i}
                  className="relative w-full h-[400px] sm:h-[480px] bg-[#0D1420] rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl"
                >
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00acd7] animate-pulse" />
                    <span className="text-[#00acd7]/70 text-[10px] font-bold tracking-widest uppercase">
                      Model {i + 1}
                    </span>
                  </div>
                  <ThreeDViewer
                    modelUrl={`https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/assets/models/${model}`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ── Media Card ── */
function MediaCard({ src, title, isSquare, priority }) {
  const isVideo = src.endsWith(".webm");

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 group shadow-xl hover:border-[#00acd7]/50 hover:shadow-md transition-colors duration-300 ${
        isSquare ? "aspect-square" : "aspect-video"
      }`}
    >
      {isVideo ? (
        <LazyVideo src={src} aspect={isSquare ? "square" : "video"} />
      ) : (
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading={priority ? "eager" : "lazy"}
          onContextMenu={(e) => e.preventDefault()}
        />
      )}

      {/* Hover glow — CSS only, no JS */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00acd7]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Copyright watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="text-[6vw] lg:text-[3vw] font-black text-white opacity-[0.04] rotate-[35deg] whitespace-nowrap select-none tracking-widest">
          PDSN MEDIA COPYRIGHT
        </div>
      </div>

      {/* Bottom label — CSS only */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white/70 text-[10px] font-bold tracking-[0.15em] uppercase">{title}</span>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function ContentCreationPage() {
  const [activeServiceId, setActiveServiceId] = useState(serviceBlocks[0].id);

  /* Context menu prevention (copyright) */
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  /* Active nav tracking — single passive scroll listener */
  useEffect(() => {
    const onScroll = () => {
      const offset = 140; // header + nav height
      let closest = serviceBlocks[0].id;
      let minDist = Infinity;
      for (const s of serviceBlocks) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const dist = Math.abs(el.getBoundingClientRect().top - offset);
        if (dist < minDist) { minDist = dist; closest = s.id; }
      }
      setActiveServiceId(closest);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Content Creation — PDSN Media</title>
        <meta name="description" content="Premium content creation: motion graphics, 3D animation, CGI, anamorphic design, and more — crafted to make your brand unmissable." />
        <link rel="preload" as="video" href="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/hero-bg.webm" type="video/webm" />
      </Head>

      <Header />

      <main className="bg-white text-gray-900 scroll-smooth overflow-x-hidden">

        {/* ═══════════════════════════════════════
            HERO — full-screen video
        ═══════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          {/* Hero video */}
          <div className="absolute inset-0 z-0">
            <LazyVideo src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/videos/hero-bg.webm" aspect="video" />
            {/* Multi-layer overlay */}
            <div className="absolute inset-0 bg-[#080C14]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/80 via-[#080C14]/30 to-[#080C14]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-[#080C14]/20" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.3em] uppercase">
                  Content Creation Studio
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight max-w-4xl">
                <span className="block text-white">We Don&apos;t</span>
                <span className="block bg-gradient-to-r from-[#00acd7] via-[#6B7FFF] to-[#341f9b] bg-clip-text text-transparent">
                  Make Content.
                </span>
                <span className="block text-white">We Make</span>
                <span className="block text-white/90">Impact.</span>
              </h1>

              <p className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                From motion graphics to anamorphic illusions — every frame crafted to stop thumbs,
                turn heads, and etch your brand into memory.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#motion-graphics"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-8 py-4 rounded-lg text-white font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Our Work
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wide hover:border-[#00acd7]/50 hover:bg-white/[0.04] transition-all duration-200"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
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

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 rounded-full bg-[#00acd7]"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════
            SERVICE NAV — sticky strip
        ═══════════════════════════════════════ */}
        <ServiceNav services={serviceBlocks} activeId={activeServiceId} />

        {/* ═══════════════════════════════════════
            WHY CONTENT CREATION MATTERS
        ═══════════════════════════════════════ */}
        <section className="py-24 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left copy */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">
                    Why It Matters
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                  Content is the<br />
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Currency of Attention
                  </span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  In today&apos;s attention-driven world, impactful visual content is the single most powerful lever
                  for brand growth. From social media to out-of-home campaigns, great content captivates,
                  engages, and converts.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether it&apos;s a motion graphic for Instagram or an anamorphic illusion on a billboard,
                  investing in strong visuals empowers your brand to rise above the noise — and stay there.
                </p>
              </motion.div>

              {/* Right — capability pillars */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#00acd7]/50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/15 flex items-center justify-center text-[#00acd7] mb-4 group-hover:from-[#00acd7]/25 group-hover:to-[#341f9b]/25 transition-all duration-300">
                      {p.icon}
                    </div>
                    <h3 className="text-gray-900 font-bold text-sm mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{p.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SERVICE BLOCKS
        ═══════════════════════════════════════ */}
        <div>
          {serviceBlocks.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* ═══════════════════════════════════════
            PROCESS STRIP
        ═══════════════════════════════════════ */}
        <section className="py-24 border-t border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Our Process</span>
                <div className="h-[2px] w-6 bg-gradient-to-l from-[#00acd7] to-[#341f9b]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">From Idea to Impact</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#00acd7]/40 via-[#341f9b]/40 to-[#00acd7]/40" />

              {[
                { step: "01", title: "Brief & Discovery", desc: "Deep dive into your brand, audience, and campaign goals." },
                { step: "02", title: "Concept & Storyboard", desc: "Creative concepting with visual storyboards and style frames." },
                { step: "03", title: "Production", desc: "Full-scale production with dedicated artists and directors." },
                { step: "04", title: "Delivery & Optimise", desc: "Multi-format delivery optimised for every screen and platform." }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00acd7]/20 to-[#341f9b]/20 border border-[#00acd7]/25 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-[#00acd7] font-black text-sm">{item.step}</span>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed px-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CTA — Let's Create Magic
        ═══════════════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          {/* BG glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00acd7]/5 via-[#080C14] to-[#341f9b]/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#341f9b]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Ready to Create?</span>
                <div className="h-[2px] w-6 bg-gradient-to-l from-[#00acd7] to-[#341f9b]" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Let&apos;s Create<br />
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Magic Together
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Got a vision? We&apos;ll bring it to life with world-class visuals that make your brand
                impossible to ignore.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-10 py-4 rounded-lg text-white font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-10 py-4 rounded-lg font-bold text-sm tracking-wide hover:border-[#00acd7]/40 hover:bg-white/[0.04] transition-all duration-200"
                >
                  Get a Quote
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
