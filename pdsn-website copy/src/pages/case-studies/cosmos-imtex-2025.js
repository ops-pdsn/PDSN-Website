// pages/case-studies/cosmos-imtex-2025.js
import Head from "next/head";
import Link from "next/link"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CosmosCaseStudy() {
  return (
    <>
      <Head>
        <title>Cosmos × IMTEX 2025 | Case Study | PDSN</title>
        <meta name="description" content="Immersive L-shaped anamorphic LED screen installation at IMTEX 2025 for Cosmos." />
        <meta property="og:title" content="Cosmos × IMTEX 2025 | Case Study | PDSN" />
        <meta property="og:description" content="Blending 3D illusions and LED storytelling at India’s largest manufacturing expo—IMTEX 2025." />
        <meta property="og:url" content="https://yourdomain.com/case-studies/cosmos-imtex-2025" />
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
          Cosmos × IMTEX 2025 – L-Shaped Anamorphic Screen Installation
        </h1>

        {/* Embedded YouTube Video */}
        <div className="relative w-full pb-[56.25%] mb-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/z-oOZENHFZo"
            title="NBC Bearings Case Study"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>



        <p className="mb-4">
          At India’s premier manufacturing exhibition, IMTEX 2025, we made a bold statement by executing one of the largest and most visually striking installations at the event. At the Cosmos stall — the biggest of the exhibition — we deployed a custom-designed L-shaped anamorphic LED screen that brought engineering to life in three dimensions.
        </p>
        <p className="mb-4">
          The immersive visuals were designed to spotlight Cosmos’s four newly launched machines, blending high-impact content with illusion-based creativity to grab attention from every corner of the show floor. The result? A nonstop crowd, hundreds of phones recording, and a perfect harmony of technology and storytelling that elevated Cosmos’s brand like never before.
        </p>

        <p className="font-semibold">Solution: L-shaped anamorphic LED experience + product-driven 3D storytelling.</p>
      </main>
      <Footer />
    </>
  );
}
