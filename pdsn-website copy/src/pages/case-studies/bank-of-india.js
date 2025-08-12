// pages/case-studies/bank-of-india.js
import Head from "next/head";
import Link from "next/link"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BOICaseStudy() {
  return (
    <>
      <Head>
        <title>Bank of India × Tata Mumbai Marathon | Case Study | PDSN</title>
        <meta name="description" content="Corporate storytelling in motion — BOI’s inspiring film at the Tata Mumbai Marathon 2025." />
        <meta property="og:title" content="Bank of India × Tata Mumbai Marathon | Case Study | PDSN" />
        <meta property="og:description" content="A powerful film following BOI employees running for health, unity, and brand pride at India’s biggest marathon." />
        <meta property="og:url" content="https://yourdomain.com/case-studies/bank-of-india" />
      </Head>

      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        {/* Back and Home Buttons */}
        <div className="flex justify-between items-center mb-10">
          <Link
            href="/case-studies"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition text-sm"
          >
            ← Back to Case Studies
          </Link>
          <Link
            href="/"
            className="bg-blue-50 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition text-sm"
          >
            Home
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Bank of India × Tata Mumbai Marathon 2025 – Corporate Film
        </h1>

        {/* Embedded YouTube Video */}
        <div className="relative w-full pb-[56.25%] mb-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/vC9eU3O8wXA"
            title="NBC Bearings Case Study"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="mb-4">
          Bank of India believes in walking the talk—or in this case, running it. At the Tata Mumbai Marathon 2025, we captured the essence of this belief through a powerful corporate film that followed BOI employees as they ran for health, unity, and brand spirit.
        </p>
        <p className="mb-4">
          The result was more than just a shoot—it was a moving, motivational story of resilience and corporate pride. Framed against the backdrop of India&apos;s most celebrated marathon, the film amplified BOI&apos;s values and humanized the brand for internal teams and external audiences alike.
        </p>

        <p className="font-semibold">Solution: Corporate storytelling + brand emotion through live-action film.</p>
      </main>
      <Footer />
    </>
  );
}
