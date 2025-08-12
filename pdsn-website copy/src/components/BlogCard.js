'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { postsData } from "@/lib/posts"

function BlogCard({ slug, cover, published_date, category, author, title }) {
  return (
    <motion.div
      className="bg-white shadow-lg shadow-gray-200/50 border border-gray-200/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Image
        src={cover}
        alt={title}
        width={1300}
        height={1400}
        className="w-full aspect-[5/3] object-cover bg-gray-100"
      />
      <div className="relative p-4 pt-10">
        <div className="absolute right-4 -top-8 bg-blue-600 px-4 py-0.5 flex flex-col">
          <p className="font-bold text-2xl text-white">{published_date.day}</p>
          <p className="text-sm text-gray-200">{published_date.month}</p>
        </div>

        <div className="flex items-center text-gray-500 text-sm">
          <span>{author}</span>
          <span className="mx-2">|</span>
          <span>{category}</span>
        </div>

        <h1 className="text-xl my-6 font-semibold text-gray-900">{title}</h1>

        <Link
          href={`/blog/${slug}`}
          className="text-blue-600 transition hover:text-opacity-90 flex items-center gap-x-3 group"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 transition-all ease-linear group-hover:ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default function BlogSection() {
  const latestPosts = postsData.slice(0, 3)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">

        {/* Section Header */}
        <motion.div
          className="text-center space-y-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800">
            Blogs
          </span>
          <h1 className="text-3xl font-bold text-gray-900 capitalize">
            Our Latest Articles
          </h1>
          <p className="text-gray-700">
            Stay up-to-date with industry insights, best practices, and behind-the-scenes stories from our team.
          </p>
        </motion.div>

        {/* Grid of Blog Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/blog"
            className="px-5 py-2.5 border border-blue-900 text-blue-900 flex items-center gap-x-3"
          >
            See More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
