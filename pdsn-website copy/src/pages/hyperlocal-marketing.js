"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudiesData } from "@/lib/caseStudiesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Card = ({ study }) => (
  <Link href={`/case-studies/${study.slug}`} className="block group">
    <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden border border-gray-100 transition">
      <Image
        src={study.image}
        alt={study.title}
        width={600}
        height={300}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold group-hover:text-[#341f9b]">{study.title}</h3>
        <p className="text-sm text-gray-600">{study.summary}</p>
        <p className="text-xs text-gray-400 mt-1">{study.result}</p>
      </div>
    </div>
  </Link>
);

export default function HyperlocalMarketingPage() {
  const filteredStudies = caseStudiesData.filter(study => study.category === "Hyperlocal");

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">

        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/about-hero.webp"
            alt="Hyperlocal Hero"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00acd7]/70 to-[#341f9b]/70 z-10" />
          <div className="relative z-20 text-white text-center px-6 py-16 w-full">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hyper-local Marketing Solutions</h1>
              <p className="text-lg md:text-xl mb-6">
                Drive real-world engagement by reaching your audience exactly where they are — locally, strategically, and effectively.
              </p>
              <Link href="/contact" className="bg-white text-[#341f9b] font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition">
                Start Your Local Campaign
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-4">Why Hyper-local Marketing Works</h2>
              <p className="text-gray-700 mb-4">
                Whether you&apos;re a retail store, food chain, healthcare brand, or a national business trying to go regional — hyper-local targeting boosts relevance and trust.
              </p>
              <ul className="space-y-4 text-gray-800">
                <li>✅ <strong>Increased Brand Awareness:</strong> Show up in your customer’s own neighborhood.</li>
                <li>✅ <strong>Higher Conversion Rates:</strong> Locally relevant ads lead to better engagement.</li>
                <li>✅ <strong>Enhanced Customer Loyalty:</strong> Build trust through community presence.</li>
                <li>✅ <strong>Cost Efficiency:</strong> Spend smart with geo-targeted formats.</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex items-center justify-center">
              <Image
                src="/images/hyperlocalbanner.webp"
                alt="Hyperlocal Marketing Coverage Map"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Successful Hyper-local Campaigns</h2>
            <p className="text-gray-600">Brands that connected deeply with local audiences — one neighborhood at a time.</p>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Swiper spaceBetween={16} pagination={{ clickable: true }} modules={[Pagination]}>
              {filteredStudies.map(study => (
                <SwiperSlide key={study.slug}>
                  <Card study={study} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Grid for Desktop */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map(study => <Card key={study.slug} study={study} />)}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <Link href="/case-studies" className="inline-block bg-sky-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition">
              View All Case Studies
            </Link>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center py-20 bg-[#1a1b3a] text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Dominate Your Local Market?</h2>
            <p className="text-lg mb-6">
              Let us help you plan a powerful location-specific campaign with high impact and low waste.
            </p>
            <Link href="/contact" className="inline-block bg-white text-[#341f9b] font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition">
              Book a Free Consultation
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
