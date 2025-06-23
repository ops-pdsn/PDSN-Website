"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion'

const caseStudiesData = [
  {
    title: "Cosmos × IMTEX 2025",
    slug: "cosmos-imtex-2025",
    image: "/images/case-studies/cosmos.webp",
    summary: "L-shaped anamorphic LED screen brought engineering to life in 3D.",
    result: "🚀 Showstopper at IMTEX 2025",
    category: "Technology"
  },
  {
    title: "Ajanta Pharma × Yashobhoomi",
    slug: "ajanta-pharma",
    image: "/images/case-studies/ajanta.webp",
    summary: "Immersive 3D illusion campaign turning heads at a pharma summit.",
    result: "✨ Premium brand experience",
    category: "Healthcare"
  },
  {
    title: "NBC Bearings × Multi-Vehicle Showcase",
    slug: "nbc-bearings",
    image: "/images/case-studies/nbc.webp",
    summary: "Cross-industry 3D narrative showcasing bearings in motion.",
    result: "🏆 Tech + storytelling fusion",
    category: "Automotive"
  }
];

export default function ProgrammaticDoohPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-black">
        {/* Hero Section with Image + Gradient Overlay */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/about-hero.webp"
            alt="DOOH Hero"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00acd7]/70 to-[#341f9b]/70 z-10"></div>
          <div className="relative z-20 text-white text-center px-6 py-16 w-full">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Power of DOOH, Supercharged by Programmatic
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
                India&apos;s digital streets, powered by smart screens. We specialize in impactful DOOH with the precision of programmatic.
              </p>
              <Link
                href="#core-strengths"
                className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section id="core-strengths" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800 inline-block mb-2">
              Key Drivers
            </span>
            <h2 className="text-3xl font-bold">Our Core Strengths</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Programmatic Efficiency",
                desc: "Programmatic enabled dooh network."
              },
              {
                title: "Pan-India DOOH Reach",
                desc: "Screens across corporates, cafes, outdoor and other premium touch points."
              },
              {
                title: "Creative Brilliance",
                desc: "We combine media with high-impact content for unmatched visibility."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 border rounded-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Where DOOH Comes Alive */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-center mb-12">
              <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800 inline-block mb-2">
                Strategic Visibility
              </span>
              <h2 className="text-3xl font-bold">Where DOOH Comes Alive</h2>
            </div>

            <p className="mb-12 text-gray-600 max-w-3xl mx-auto">
              From high-traffic metro hubs to premium shopping streets, our digital assets are strategically placed to capture attention where it matters most.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "CORPORATE", image: "/images/image (11).webp", objectPosition: "object-top" },
                { label: "CAFES", image: "/images/image (6).webp", objectPosition: "[object-position:70%_30%]" },
                { label: "OUTDOOR", image: "/images/outdoor1.webp", objectPosition: "object-bottom" },
                { label: "TRANSIT", image: "/assets/transit1.webp", objectPosition: "[object-position:70%_30%]" }, // custom
              ].map((item, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={300}
                    height={400}
                    className={`w-full h-full object-cover brightness-75 ${item.objectPosition}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <div className="mb-12">
                <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800 inline-block mb-2">
                  Smarter DOOH
                </span>
                <h2 className="text-3xl font-bold">Why Programmatic + DOOH?</h2>
              </div>

              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Nationwide Reach with Smart Targeting</li>
                <li>Dynamic Scheduling</li>
                <li>Cost Efficiency Decisions</li>
                <li>Dynamic Reporting</li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/programmatic-benefits.webp"
                alt="DOOH Benefits"
                width={500}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/*  Gallery Section  */}

        <section className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-200 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
                Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Real Spaces. Real Visibility.
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Explore some of the high-traffic environments where our startup campaigns truly come alive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                '/images/image (15).webp',
                '/images/image (2).webp',
                '/images/image (3).webp',
                '/images/image (4).webp',
                '/images/image (5).webp',
                '/images/outdoor.webp',
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Image
                    src={src}
                    alt={`Campaign Location ${index + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-[250px] hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Featured Case Studies */}
        <section className="py-20 px-6 bg-gray-100 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Explore Our Impactful Campaigns</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {caseStudiesData.map((item, i) => (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="object-cover"
                  />
                  <div className="p-4 text-left">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.summary}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.result}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/case-studies"
              className="inline-block bg-sky-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              View All Case Studies
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 bg-[#1a1b3a] text-white">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Your Smartest Campaign Through Our DOOH Network</h2>
          <br></br>
          <Link
            href="/contact"
            className="bg-white text-[#341f9b] px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition"
          >
            Plan With Us
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
