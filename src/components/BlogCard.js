'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { postsData } from "@/lib/posts"

function BlogCard({ slug, cover, published_date, category, author, title }) {
  return (
    <motion.article
      className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image wrapper */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <Image
          src={cover}
          alt={title}
          width={800}
          height={450}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge overlay */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center text-[10px] font-bold tracking-[0.18em] uppercase text-white bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-3 py-1.5 rounded-full shadow-lg">
            {category}
          </span>
        </div>
        {/* Date badge */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 text-center shadow-lg">
          <p className="font-extrabold text-xl text-gray-900 leading-none">{published_date.day}</p>
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mt-0.5">{published_date.month}</p>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col gap-3">
        {/* Author */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="font-medium text-gray-500">{author}</span>
        </div>

        {/* Title */}
        <h2 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#341f9b] transition-colors duration-200 line-clamp-2">
          {title}
        </h2>

        {/* Divider */}
        <div className="h-px bg-gray-100 my-1" />

        {/* Read more */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-[#00acd7] text-sm font-semibold tracking-wide group-hover:gap-3 transition-all duration-300"
        >
          Read Article
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}

export default function BlogSection() {
  const latestPosts = postsData.slice(0, 3)

  return (
    <section className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

        {/* Section header */}
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
              <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">
                Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Our Latest Articles
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md leading-relaxed">
              Stay up-to-date with industry insights, best practices, and behind-the-scenes stories from our team.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:border-[#00acd7] hover:text-[#00acd7] transition-all duration-200"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Blog grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
