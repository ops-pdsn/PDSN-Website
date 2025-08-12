// pages/blog/[slug].js

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { postsData } from "@/lib/posts"

export async function getStaticPaths() {
  const paths = postsData.map(post => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false, // Show 404 for unknown slugs
  }
}

export async function getStaticProps({ params }) {
  const post = postsData.find(p => p.slug === params.slug)

  if (!post) {
    return { notFound: true }
  }

  const relatedPosts = postsData
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return {
    props: {
      post,
      relatedPosts,
    },
  }
}

export default function SinglePost({ post, relatedPosts }) {
  return (
    <>
      <Header />
      <article className="pb-20 pt-8">
        <div className="max-w-7xl mx-auto px-5 pt-4 flex justify-between items-center">
          <Link
            href="/blog"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition text-sm"
          >
            ← Back to Blog
          </Link>
          <Link
            href="/"
            className="bg-blue-50 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition text-sm"
          >
            Home
          </Link>
        </div>

        <div className="max-w-3xl mx-auto px-5 pt-10">
          <div className="relative w-full h-60 sm:h-80 mb-6 rounded-md overflow-hidden">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-6">
            {post.published_date.day} {post.published_date.month} • {post.author}
          </p>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Full-width related posts section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-10">Related Posts</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((rp) => (
                  <div
                    key={rp.slug}
                    className="bg-white shadow-md border border-gray-100 rounded-lg overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={rp.cover}
                        alt={rp.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-gray-500 text-sm mb-1">
                        {rp.published_date.day} {rp.published_date.month} • {rp.author}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {rp.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {rp.excerpt.slice(0, 100)}...
                      </p>
                      <Link
                        href={`/blog/${rp.slug}`}
                        className="text-blue-600 hover:underline text-sm font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </article>
      <Footer />
    </>
  )
}