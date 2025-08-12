import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { postsData } from "@/lib/posts"
import { motion } from "framer-motion"

export default function BlogIndex() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image and Gradient Overlay */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-16">

        <Image
          src="/images/about-hero.webp"
          alt="Blog Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00acd7]/70 to-[#341f9b]/70 z-10"></div>
        <div className="relative z-20 text-white text-center px-6 py-16 w-full">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Blogs & Insights</h1>
            <p className="text-lg max-w-xl mx-auto">
              Explore our in-depth articles, case studies, and industry insights – each crafted to keep you ahead in the ever-evolving DOOH landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">

          {/* Grid of all posts */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {postsData.map((post) => (
              <motion.div
                key={post.slug}
                className="bg-white shadow-lg border border-gray-200 p-4 rounded-md"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* Cover Image */}
                <div className="relative h-52 mb-4">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                {/* Date & Info */}
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span>
                    {post.published_date.day} {post.published_date.month}
                  </span>
                  <span className="mx-3">•</span>
                  <span>By {post.author}</span>
                  <span className="mx-3">•</span>
                  <span>{post.category}</span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 mb-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-blue-600 hover:underline"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}
