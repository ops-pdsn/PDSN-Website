import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { postsData } from "@/lib/allPosts";
import { motion } from "framer-motion";

/* ── Reading time ── */
function readingTime(content = "") {
  const words = content.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function getStaticPaths() {
  return {
    paths: postsData.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = postsData.find((p) => p.slug === params.slug);
  if (!post) return { notFound: true };

  const relatedPosts = postsData
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return { props: { post, relatedPosts } };
}

export default function SinglePost({ post, relatedPosts }) {
  const mins = readingTime(post.content);
  const allPosts = postsData;
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      <Head>
        <title>{post.title} — PDSN Media Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Header />

      <main className="bg-[#080C14] text-white overflow-x-hidden">

        {/* ═══════════════════════════════
            HERO COVER
        ═══════════════════════════════ */}
        <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#080C14]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 pb-14 w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-gray-400 line-clamp-1">{post.title}</span>
            </nav>

            {/* Category pill */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#00acd7]/20 to-[#341f9b]/20 border border-[#00acd7]/30 rounded-full text-[#00acd7] text-[10px] font-bold tracking-[0.15em] uppercase">
                {post.category}
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight"
            >
              {post.title}
            </motion.h1>
          </div>
        </section>

        {/* ═══════════════════════════════
            ARTICLE
        ═══════════════════════════════ */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">

            {/* Meta bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pb-8 mb-10 border-b border-white/[0.07]"
            >
              {/* Author chip */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00acd7] to-[#341f9b] flex items-center justify-center text-white text-xs font-black">
                  P
                </div>
                <div>
                  <div className="text-white text-xs font-bold">{post.author}</div>
                  <div className="text-gray-600 text-[10px]">Author</div>
                </div>
              </div>

              <div className="w-px h-6 bg-white/[0.08]" />

              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {post.published_date.day} {post.published_date.month}
              </div>

              <div className="w-px h-6 bg-white/[0.08]" />

              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {mins} min read
              </div>

              {/* Back link pushed right */}
              <Link
                href="/blog"
                className="ml-auto flex items-center gap-1.5 text-gray-500 text-xs hover:text-gray-200 transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
            </motion.div>

            {/* Article body */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className={`
                prose prose-invert max-w-none
                prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-white
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-7 prose-h3:mb-3
                prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-[15px]
                prose-li:text-gray-400 prose-li:text-[15px]
                prose-strong:text-white
                prose-a:text-[#00acd7] prose-a:no-underline hover:prose-a:underline
                prose-ul:space-y-2 prose-ol:space-y-2
                prose-hr:border-white/[0.08]
                prose-blockquote:border-l-[#00acd7] prose-blockquote:text-gray-400
              `}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Post footer */}
            <div className="mt-14 pt-8 border-t border-white/[0.07]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-600 text-xs">Filed under</span>
                <span className="inline-flex items-center px-2.5 py-0.5 bg-[#0D1420] border border-[#00acd7]/20 rounded-full text-[#00acd7] text-[10px] font-bold tracking-[0.1em] uppercase">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* ═══════════════════════════════
            PREV / NEXT NAV
        ═══════════════════════════════ */}
        {(prevPost || nextPost) && (
          <section className="border-t border-white/[0.05]">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <div className="grid grid-cols-2 divide-x divide-white/[0.05]">
                {/* Prev */}
                <div className="py-8 pr-6">
                  {prevPost ? (
                    <Link href={`/blog/${prevPost.slug}`} className="group block">
                      <div className="text-gray-600 text-[10px] font-bold tracking-[0.15em] uppercase mb-2 flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Previous
                      </div>
                      <div className="text-gray-300 text-sm font-semibold leading-snug group-hover:text-[#00acd7] transition-colors duration-200 line-clamp-2">
                        {prevPost.title}
                      </div>
                    </Link>
                  ) : <div />}
                </div>

                {/* Next */}
                <div className="py-8 pl-6 text-right">
                  {nextPost ? (
                    <Link href={`/blog/${nextPost.slug}`} className="group block">
                      <div className="text-gray-600 text-[10px] font-bold tracking-[0.15em] uppercase mb-2 flex items-center justify-end gap-1.5">
                        Next
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                      <div className="text-gray-300 text-sm font-semibold leading-snug group-hover:text-[#00acd7] transition-colors duration-200 line-clamp-2">
                        {nextPost.title}
                      </div>
                    </Link>
                  ) : <div />}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════
            RELATED POSTS
        ═══════════════════════════════ */}
        {relatedPosts.length > 0 && (
          <section className="py-20 border-t border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">
                  Related Articles
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((rp, i) => {
                  const rpMins = readingTime(rp.content);
                  return (
                    <motion.div
                      key={rp.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                    >
                      <Link href={`/blog/${rp.slug}`} className="block group h-full">
                        <div className="h-full flex flex-col bg-[#0D1420] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#00acd7]/25 transition-colors duration-300">
                          <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
                            <Image
                              src={rp.cover}
                              alt={rp.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1420]/50 to-transparent" />
                          </div>
                          <div className="flex flex-col flex-1 p-5">
                            <div className="flex items-center gap-2 text-gray-600 text-xs mb-2">
                              <span>{rp.published_date.day} {rp.published_date.month}</span>
                              <span className="w-1 h-1 rounded-full bg-gray-700" />
                              <span>{rpMins} min read</span>
                            </div>
                            <h4 className="text-white font-bold text-sm leading-snug mb-2 group-hover:text-[#00acd7] transition-colors duration-200 line-clamp-2">
                              {rp.title}
                            </h4>
                            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 flex-1 mb-3">
                              {rp.excerpt}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-[#00acd7] text-xs font-bold mt-auto group-hover:gap-2.5 transition-all duration-200">
                              Read Article
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════
            CTA
        ═══════════════════════════════ */}
        <section className="py-20 border-t border-white/[0.04] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#00acd7]/6 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Ready to Elevate Your<br />
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Brand Presence?
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-7">
                Let&apos;s talk about how PDSN Media can craft a campaign that puts your brand
                exactly where your audience is.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3.5 rounded-lg text-white font-bold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start a Campaign
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-lg font-bold text-sm tracking-wide hover:border-[#00acd7]/40 hover:bg-white/[0.04] transition-all duration-200"
                >
                  More Articles
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
