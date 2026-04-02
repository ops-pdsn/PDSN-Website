import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const categoryConfig = {
  DOOH:       { label: "DOOH",              color: "from-[#00acd7] to-[#341f9b]", badge: "bg-[#00acd7]/20 text-[#00acd7] border border-[#00acd7]/30" },
  Hyperlocal: { label: "Hyperlocal",        color: "from-[#341f9b] to-[#7c3aed]", badge: "bg-[#341f9b]/20 text-purple-300 border border-purple-500/30" },
  Finance:    { label: "Finance",           color: "from-blue-600 to-[#341f9b]",  badge: "bg-blue-900/30 text-blue-300 border border-blue-500/30" },
  Technology: { label: "Technology",        color: "from-[#00acd7] to-teal-500",  badge: "bg-cyan-900/30 text-cyan-300 border border-cyan-500/30" },
  Healthcare: { label: "Healthcare",        color: "from-emerald-500 to-teal-600",badge: "bg-emerald-900/30 text-emerald-300 border border-emerald-500/30" },
  Industrial: { label: "Industrial",        color: "from-orange-500 to-amber-600",badge: "bg-orange-900/30 text-orange-300 border border-orange-500/30" },
};

export default function CaseStudyLayout({
  metaTitle,
  metaDesc,
  metaUrl,
  title,
  category = "DOOH",
  youtubeId,
  solutionText,
  resultText,
  children,
}) {
  const cat = categoryConfig[category] || categoryConfig.DOOH;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        {metaUrl && <meta property="og:url" content={metaUrl} />}
      </Head>

      <Header />

      {/* ── HERO ── */}
      <section className="relative bg-[#080C14] overflow-hidden">
        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* gradient glow */}
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${cat.color} opacity-10`} />

        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20">
          {/* breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-white/50 mb-6"
          >
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-white/80 transition">Case Studies</Link>
            <span>/</span>
            <span className="text-white/70">{title}</span>
          </motion.div>

          {/* category badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${cat.badge}`}
          >
            {cat.label}
          </motion.span>

          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl"
          >
            {title}
          </motion.h1>

          {/* back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="bg-[#080C14] pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/60`}
          >
            {/* gradient border accent */}
            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${cat.color}`} />
            {youtubeId && youtubeId !== "REPLACE_WITH_REAL_VIDEO_ID" ? (
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-56 bg-white/5 text-white/30 text-sm">
                Video coming soon
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bg-[#0D1117] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">

            {/* main content — 2 cols */}
            <motion.div
              className="md:col-span-2 space-y-6 text-white/80 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {children}
            </motion.div>

            {/* sidebar — 1 col */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Solution callout */}
              {solutionText && (
                <div className={`rounded-xl p-5 bg-gradient-to-br ${cat.color} bg-opacity-10 border border-white/10`}>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Solution</p>
                  <p className="text-white text-sm leading-relaxed">{solutionText}</p>
                </div>
              )}

              {/* Result callout */}
              {resultText && (
                <div className="rounded-xl p-5 bg-white/5 border border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Result</p>
                  <p className="text-white text-sm leading-relaxed">{resultText}</p>
                </div>
              )}

              {/* CTA card */}
              <div className="rounded-xl p-5 bg-white/5 border border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Ready to scale?</p>
                <p className="text-white/70 text-sm mb-4">Let&apos;s create a campaign that demands attention.</p>
                <Link
                  href="/contact"
                  className={`block text-center py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${cat.color} hover:opacity-90 transition`}
                >
                  Get in Touch →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#080C14] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-8 py-8"
          >
            <div>
              <p className="text-white font-semibold text-lg mb-1">Explore more case studies</p>
              <p className="text-white/50 text-sm">See how we&apos;ve helped brands across industries grow.</p>
            </div>
            <Link
              href="/case-studies"
              className={`shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${cat.color} shadow-lg hover:opacity-90 transition`}
            >
              View All Case Studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
