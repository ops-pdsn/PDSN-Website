// pages/case-studies/nbc-bearings.js
import Head from "next/head";
import Link from "next/link"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NBCBearingsCaseStudy() {
  return (
    <>

      <Head>
        <title>NBC Bearings × Multi-Vehicle Showcase | Case Study | PDSN</title>
        <meta name="description" content="Anamorphic DOOH campaign for NBC Bearings, highlighting the versatility of their products across vehicle types." />
        <meta property="og:title" content="NBC Bearings × Multi-Vehicle Showcase | Case Study | PDSN" />
        <meta property="og:description" content="Immersive 3D storytelling that revealed how NBC Bearings powers motion across bikes, cars, trucks, and more." />
        <meta property="og:url" content="https://yourdomain.com/case-studies/nbc-bearings" />
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
          NBC Bearings × Multi-Vehicle Anamorphic Showcase
        </h1>

        {/* Embedded YouTube Video */}
        <div className="relative w-full pb-[56.25%] mb-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dRH2RBQeJnE"
            title="NBC Bearings Case Study"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>


        <p className="mb-4">
          NBC Bearings approached us with a unique challenge: showcase the versatility of their products across multiple industries—all in one visual experience. We responded with a custom anamorphic video that placed NBC’s bearings at the heart of motion across cars, bikes, trucks, and more.
        </p>
        <p className="mb-4">
          The visual narrative peeled back the layers of each vehicle to reveal the bearings in action, subtly reinforcing the message: NBC powers movement across sectors. This display didn’t just inform—it impressed, drawing praise from both engineers and brand marketers alike.
        </p>

        <p className="font-semibold">Solution: Multi-industry 3D visualization + engineering storytelling.</p>
      </main>
      <Footer />
    </>
  );
}
