// pages/case-studies/ajanta-pharma.js
import Head from "next/head";
import Link from "next/link"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AjantaPharmaCaseStudy() {
  return (
    <>
      <Head>
        <title>Ajanta Pharma × Yashobhoomi | Case Study | PDSN</title>
        <meta name="description" content="Anamorphic video installation for Ajanta Pharma at Yashobhoomi, Delhi—blending science with stunning 3D visuals." />
        <meta property="og:title" content="Ajanta Pharma × Yashobhoomi | Case Study | PDSN" />
        <meta property="og:description" content="An immersive anamorphic campaign that fused pharmaceutical innovation with digital storytelling at a premier Delhi venue." />
        <meta property="og:url" content="https://yourdomain.com/case-studies/ajanta-pharma" />
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
          Ajanta Pharma × Yashobhoomi – Anamorphic Video Installation
        </h1>

        {/* Embedded YouTube Video */}
        <div className="relative w-full pb-[56.25%] mb-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/REPLACE_WITH_REAL_VIDEO_ID"
            title="NBC Bearings Case Study"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="mb-4">
          For pharmaceutical giant Ajanta Pharma, innovation isn&apos;t limited to the lab—it extends to how they communicate their story. At a high-profile event held at Yashobhoomi, Delhi, we conceptualized and delivered an anamorphic video experience that turned heads and sparked conversations.
        </p>
        <p className="mb-4">
          The custom-created content not only highlighted Ajanta&apos;s core values but did so through an immersive 3D illusion that elevated their presence in a space crowded with big names. It was a seamless blend of science, design, and digital magic.
        </p>

        <p className="font-semibold">Solution: Anamorphic 3D storytelling + pharmaceutical brand expression.</p>
      </main>
      <Footer />
    </>
  );
}
