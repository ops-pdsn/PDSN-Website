// pages/case-studies/solution-one-erp.js
import Head from "next/head";
import Link from "next/link"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SolutionOneCaseStudy() {
  return (
    <>
      <Head>
        <title>Solution One ERP × Pin-Code Targeting | Case Study | PDSN</title>
        <meta name="description" content="Pin-code based DOOH targeting for Solution One ERP in Pune's Bhosari industrial belt." />
        <meta property="og:title" content="Solution One ERP × Pin-Code Targeting | Case Study | PDSN" />
        <meta property="og:description" content="Precision campaign execution using hyperlocal DOOH placements for ERP visibility in key Pune industrial zones." />
        <meta property="og:url" content="https://yourdomain.com/case-studies/solution-one-erp" />
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
          Solution One ERP × Pune – Precision Pin-Code Media Execution
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
          When Pune-based ERP company Solution One needed to deepen its footprint in the Bhosari industrial area, they didn’t need noise—they needed nuance. We provided a pin-code targeted media solution, mapping their campaign to specific micro-locations for optimal impact.
        </p>
        <p className="mb-4">
          This data-driven approach ensured that every placement spoke to the right audience—decision-makers, factory owners, and tech partners within a precise geographic belt. The results were hyper-relevant impressions and a campaign that cut through the clutter with surgical precision.
        </p>

        <p className="font-semibold">Solution: Data-driven pin-code targeting + hyperlocal industrial outreach.</p>
      </main>
      <Footer />
    </>
  );
}
