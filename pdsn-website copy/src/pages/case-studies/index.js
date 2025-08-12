"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  },
  {
    title: "Bank of India × Tata Marathon",
    slug: "bank-of-india",
    image: "/images/case-studies/BOI.webp",
    summary: "Emotive corporate film captured during India’s biggest marathon.",
    result: "🎥 Powerful internal branding",
    category: "Finance"
  },
  {
    title: "Agrasen × Detroit Airport",
    slug: "agrasen",
    image: "/images/case-studies/agrasen.webp",
    summary: "U.S. airport DOOH placements for global visibility.",
    result: "🌎 Cross-border brand push",
    category: "Industrial"
  },
  {
    title: "Solution One ERP × Pin-Code Targeting",
    slug: "solution-one-erp",
    image: "/images/case-studies/solutionone.webp",
    summary: "Precision media in Pune’s Bhosari industrial belt.",
    result: "🎯 Laser-targeted impressions",
    category: "Technology"
  }
];

export default function CaseStudiesPage() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("impact");

  const filteredStudies = caseStudiesData
    .filter((c) => category === "All" || c.category === category)
    .sort((a, b) => {
      if (sortBy === "impact") return b.result.localeCompare(a.result);
      if (sortBy === "alpha") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        {/* Hero Section with Background Image + Gradient Overlay */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/about-hero.webp"
            alt="Case Studies Hero"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00acd7]/70 to-[#341f9b]/70 z-10"></div>
          <div className="relative z-20 text-white text-center px-6 py-16 w-full">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Explore Our Case Studies</h1>
              <p className="text-lg">
                Real brands, real success — see how our hyper-local strategies drove results.
              </p>
            </div>
          </div>
        </section>

        {/* Filter + Sort */}
        <section className="max-w-6xl mx-auto px-6 pt-12">
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border px-4 py-2 rounded"
            >
              <option value="All">All Categories</option>
              <option value="Retail">Retail</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Finance">Finance</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Automotive">Automotive</option>
              <option value="Industrial">Industrial</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border px-4 py-2 rounded"
            >
              <option value="impact">Sort by Impact</option>
              <option value="alpha">Sort A–Z</option>
            </select>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-16 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <Link href={`/case-studies/${study.slug}`} className="block h-full">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={400}
                    height={250}
                    className="object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-gray-700 mb-2">{study.summary}</p>
                    <p className="text-sm text-gray-500">{study.result}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}