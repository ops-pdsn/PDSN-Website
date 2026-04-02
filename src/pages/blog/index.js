import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { postsData as initialPosts } from "@/lib/allPosts";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CDN_BASE = 'https://raw.githubusercontent.com/ops-pdsn/cdn-assets/main/data';

/* ── Reading time ── */
function readingTime(content = "") {
  const words = content.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/* ── Blog Card ── */
function BlogCard({ post, index }) {
  const mins = readingTime(post.content);
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
    >
      <Link href={`/blog/${post.slug}`} className="block group h-full">
        <div className="h-full flex flex-col bg-[#0D1420] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#00acd7]/25 transition-colors duration-300">
          {/* Cover */}
          <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1420]/60 to-transparent" />
            {/* Category pill */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#080C14]/80 backdrop-blur-sm border border-[#00acd7]/20 rounded-full text-[#00acd7] text-[10px] font-bold tracking-[0.12em] uppercase">
                {post.category}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-5">
            {/* Meta */}
            <div className="flex items-center gap-3 text-gray-600 text-xs mb-3">
              <span>{post.published_date.day} {post.published_date.month}</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span>{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span>{mins} min read</span>
            </div>

            {/* Title */}
            <h2 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-[#00acd7] transition-colors duration-200 line-clamp-2">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
              {post.excerpt}
            </p>

            {/* Read link */}
            <div className="flex items-center gap-1.5 text-[#00acd7] text-xs font-bold group-hover:gap-3 transition-all duration-200 mt-auto">
              Read Article
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState(initialPosts);

  // Fetch live posts from CDN on mount (real-time updates without rebuild)
  useEffect(() => {
    fetch(`${CDN_BASE}/posts.json?t=${Date.now()}`)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(livePosts => {
        if (!Array.isArray(livePosts) || livePosts.length === 0) return;
        // Merge: live CMS posts first, then legacy posts not already in CDN
        const liveSlugs = new Set(livePosts.map(p => p.slug));
        const merged = [...livePosts, ...initialPosts.filter(p => !liveSlugs.has(p.slug))];
        setPosts(merged);
      })
      .catch(() => {}); // silently fall back to build-time data
  }, []);

  const allCategories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const featured = posts[0];
  const restPosts = posts.slice(1);

  const filtered = activeCategory === "All"
    ? restPosts
    : restPosts.filter((p) => p.category === activeCategory);

  if (!featured) return null;
  const featuredMins = readingTime(featured.content);

  return (
    <>
      <Head>
        <title>Blog & Insights — PDSN Media</title>
        <meta name="description" content="In-depth articles, industry insights, and creative strategies from PDSN Media — India's leading DOOH advertising agency." />
      </Head>

      <Header />

      <main className="bg-[#080C14] text-white overflow-x-hidden">

        {/* ═══════════════════════════════
            HERO
        ═══════════════════════════════ */}
        <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/[0.04]">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#00acd7]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.3em] uppercase">
                  Insights & Perspectives
                </span>
                <div className="h-[2px] w-6 bg-gradient-to-l from-[#00acd7] to-[#341f9b]" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5">
                Ideas That Move<br />
                <span className="bg-gradient-to-r from-[#00acd7] via-[#6B7FFF] to-[#341f9b] bg-clip-text text-transparent">
                  Brands Forward
                </span>
              </h1>

              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                In-depth articles on DOOH advertising, content creation, hyperlocal marketing,
                and the future of out-of-home media.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════
            FEATURED POST
        ═══════════════════════════════ */}
        <section className="py-16 border-b border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
              <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Featured Article</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <Link href={`/blog/${featured.slug}`} className="block group">
                <div className="grid lg:grid-cols-2 gap-0 bg-[#0D1420] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-[#00acd7]/25 transition-colors duration-300">
                  {/* Cover */}
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <Image
                      src={featured.cover}
                      alt={featured.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D1420]/40" />
                    <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-[#0D1420] to-transparent" />
                    {/* Featured badge */}
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] rounded-full text-white text-[10px] font-black tracking-[0.1em] uppercase shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#080C14] border border-[#00acd7]/20 rounded-full text-[#00acd7] text-[10px] font-bold tracking-[0.12em] uppercase">
                        {featured.category}
                      </span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-snug mb-4 group-hover:text-[#00acd7] transition-colors duration-200">
                      {featured.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {featured.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-600 text-xs">
                        <span>{featured.published_date.day} {featured.published_date.month}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <span>{featured.author}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <span>{featuredMins} min read</span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-[#00acd7] text-sm font-bold group-hover:gap-3 transition-all duration-200">
                        Read Article
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════
            CATEGORY FILTER + GRID
        ═══════════════════════════════ */}
        <section className="py-16 pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* Category filter */}
            <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold tracking-[0.1em] uppercase transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white shadow-lg shadow-[#00acd7]/20"
                      : "bg-[#0D1420] border border-white/[0.07] text-gray-500 hover:text-gray-200 hover:border-white/[0.15]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-600 text-sm">No articles in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════
            NEWSLETTER CTA
        ═══════════════════════════════ */}
        <section className="py-20 border-t border-white/[0.04] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#341f9b]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Stay Informed</span>
                <div className="h-[2px] w-6 bg-gradient-to-l from-[#00acd7] to-[#341f9b]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Want More DOOH Insights?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Connect with our team for the latest in DOOH advertising, content creation,
                and hyperlocal marketing strategies.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-8 py-4 rounded-lg text-white font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
