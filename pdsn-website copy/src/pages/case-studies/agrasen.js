// pages/case-studies/agrasen.js

import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AgrasenCaseStudy() {
  return (
    <>
      <Head>
        <title>Agrasen × Detroit Airport | Case Study | PDSN</title>
        <meta
          name="description"
          content="Hyperlocal DOOH campaign for Agrasen at Detroit Airport to boost U.S. market visibility."
        />
        <meta property="og:title" content="Agrasen × Detroit Airport | Case Study | PDSN" />
        <meta
          property="og:description"
          content="Strategic digital screen placements at a major U.S. airport to reinforce Agrasen’s global presence."
        />
        <meta property="og:url" content="https://yourdomain.com/case-studies/agrasen" />
      </Head>

      <Header />

      {/* Main Content */}
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

        {/* Case Study Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Agrasen × Detroit Airport – Hyperlocal Visibility in the U.S. Market
        </h1>

        {/* Embedded YouTube Video */}
        <div className="relative w-full pb-[56.25%] mb-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/U1OUQ4MiQEI"
            title="Agrasen Case Study"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Description Paragraphs */}
        <p className="mb-4">
          When Agrasen, a proudly Indian brand, set its sights on strengthening global visibility, we took the brief across borders—literally. Wanting to emphasize their presence in the American market, Agrasen turned to us for an impactful hyperlocal solution.
        </p>
        <p className="mb-4">
          Our team strategically deployed digital screen placements at Detroit Airport, one of the largest and busiest international hubs in the U.S. The campaign was laser-focused and culturally contextual—connecting Agrasen’s global ambitions to a highly relevant, high-footfall location in the U.S. industrial heartland.
        </p>

        {/* Solution Summary */}
        <p className="font-semibold">
          Solution: International hyperlocal targeting + airport DOOH deployment.
        </p>
      </main>

      <Footer />
    </>
  );
}
