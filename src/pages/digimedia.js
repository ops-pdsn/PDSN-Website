// pages/digimedia.js
'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetailView from '../components/ProductDetailView';
import Gallery from '../components/Gallery';
import { motion } from 'framer-motion';

/* ─── Product data (unchanged) ─── */
const products = [
  {
    title: 'SPL / S-Lite Series – A-Frame Digital Standee',
    brief: 'Lightweight, water-resistant frame with quick-swap graphics.',
    longDescription:
      'Our SPL / S-Lite Series A-Frame Digital Standee features anodized aluminum construction, UV-resistant PVC vinyl, and a patented quick-swap insert system. Available in 32″, 43″ and 55″ sizes with commercial-grade panels (350/500 nits) and up to 4K resolution. Ideal for cafes, retail and office environments—landscape or portrait orientation, IP5x-rated, with optional Windows/Android media player and full branding support.',
    imageSrc: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product/AFrameStandee.webp',
    alt: 'SPL / S-Lite Series A-Frame Digital Standee',
    specGroups: [
      {
        title: '📊 Features',
        specs: [
          { label: 'Use-Cases', value: 'Cafes, Retail, Offices' },
          { label: 'Available Sizes', value: '32″, 43″, 55″' },
          { label: 'Models', value: 'S-Lite32, SPL43, SPL55 Pro' },
          { label: 'Panel Type', value: 'Commercial Grade Panels' },
          { label: 'Brightness', value: '350 / 500 nits' },
          { label: 'Resolution', value: '3,840 × 2,160' },
          { label: 'Aspect Ratio', value: '9:16' },
          { label: 'Orientation', value: 'Landscape / Portrait' },
          { label: 'IP Rating', value: 'IP5x' },
          { label: 'Touchscreen', value: 'No' },
          { label: 'Auto On (Display)', value: 'Yes' },
          { label: 'Speakers', value: 'Yes' },
        ],
      },
      {
        title: '💾 Media Player Specs',
        specs: [
          { label: 'OS', value: 'Windows / Android' },
          { label: 'USB Ports', value: '2 Ports' },
          { label: 'HDMI Ports', value: '1 Port' },
          { label: 'Internet Connectivity', value: 'RJ45 LAN Port' },
          { label: 'Wi-Fi', value: 'Yes' },
          { label: 'Auto On (Player)', value: 'Yes' },
        ],
      },
      {
        title: '🔧 Fabrication & Branding',
        specs: [
          { label: 'Fabrication', value: 'MS Fabricated Structure' },
          { label: 'Size', value: '-' },
          { label: 'Weight', value: '-' },
          { label: 'Toughened Glass (Front)', value: 'Yes' },
          { label: 'Colour', value: 'Black / White' },
          { label: 'Logo Branding', value: 'Available below the screen' },
        ],
      },
    ],
  },
  {
    title: 'Pixl Series – Active LED Standee',
    brief: 'High-impact LED standee for outdoor and DOOH deployments.',
    longDescription:
      'Pixl Series Active LED Standee is designed for premium digital-out-of-home branding, events, and rugged outdoor visibility. With pixel pitch options from P1.5 to P4 and compatibility with top-tier LED brands like Unilumin, AET, Absen, and Samsung, it\'s a fully customizable solution tailored to performance, brightness, and modular scale. Controlled via NovaStar and driven by Android/Windows media players, it\'s ideal for high-footfall zones and live event coverage.',
    imageSrc: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product/ActiveLED.webp',
    alt: 'Pixl Series Active LED Standee',
    specGroups: [
      {
        title: '📊 Features',
        specs: [
          { label: 'Use‑Cases', value: 'DOOH, Outdoor Branding, Events' },
          { label: 'Pixel Pitch', value: 'P1.5, P2.5, P3, P4' },
          { label: 'Models', value: 'Pixl1.5, Pixl2.5, Pixl3, Pixl4' },
          { label: 'LED Brands', value: 'Unilumin, AET, Absen, Samsung' },
          { label: 'Brightness / Resolution / Aspect Ratio', value: 'Based on requirement / configuration' },
          { label: 'IP Rating', value: 'Based on configuration' },
          { label: 'Power Consumption', value: 'Based on configuration' },
          { label: 'Cabinet Size / Weight', value: 'Custom / Brand dependent' },
          { label: 'Controller', value: 'NovaStar' },
        ],
      },
      {
        title: '💾 Media Player Specs',
        specs: [
          { label: 'OS', value: 'Windows / Android' },
          { label: 'USB Ports', value: '2 Ports' },
          { label: 'HDMI Ports', value: '1 Port' },
          { label: 'Internet Connectivity', value: 'RJ45 LAN Port' },
          { label: 'Wi‑Fi', value: 'Yes' },
          { label: 'Auto On (Player)', value: 'Yes' },
        ],
      },
      {
        title: '🔧 Fabrication & Branding',
        specs: [
          { label: 'Structure & Design', value: 'Fully fabricated based on site requirements' },
          { label: 'Branding Area', value: 'Custom placement on base or rear panel' },
          { label: 'Size & Mounting', value: 'Configured as per screen and location' },
        ],
      },
    ],
  },
  {
    title: 'VTX / V‑Lite Series – Digital Pod Standee',
    brief: 'Elegant vertical display standee with full HD/4K panel and branding space.',
    longDescription:
      'The VTX / V‑Lite Series Digital Pod Standee is built for high‑footfall public spaces such as malls, hotels, and airports. Available in 43″, 55″, and 65″ sizes, it features commercial-grade 4K-ready panels, a secure metal frame, and front branding below the screen. With optional Android/Windows media player, this is a plug‑and‑play solution ideal for 24x7 deployments.',
    imageSrc: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product/DigitalPod.webp',
    alt: 'VTX / V-Lite Series Digital Pod Standee',
    specGroups: [
      {
        title: '📊 Features',
        specs: [
          { label: 'Use‑Cases', value: 'Malls, Airports, Hotels, Showrooms' },
          { label: 'Available Sizes', value: '43″, 55″, 65″' },
          { label: 'Models', value: 'VTX‑Lite43, VTX55, VTX65 Pro' },
          { label: 'Panel Type', value: 'Commercial Grade Panels' },
          { label: 'Brightness', value: '350 / 500 nits' },
          { label: 'Resolution', value: '3,840 × 2,160' },
          { label: 'Aspect Ratio', value: '9:16' },
          { label: 'Orientation', value: 'Landscape / Portrait' },
          { label: 'IP Rating', value: 'IP5x' },
          { label: 'Touchscreen', value: 'No' },
          { label: 'Auto On (Display)', value: 'Yes' },
          { label: 'Speakers', value: 'Yes' },
          { label: 'Built-in Storage', value: '8GB' },
        ],
      },
      {
        title: '💾 Media Player Specs',
        specs: [
          { label: 'OS', value: 'Windows / Android' },
          { label: 'USB Ports', value: '2 Ports' },
          { label: 'HDMI Ports', value: '1 Port' },
          { label: 'Internet Connectivity', value: 'RJ45 LAN Port' },
          { label: 'Wi‑Fi', value: 'Yes' },
          { label: 'Auto On (Player)', value: 'Yes' },
          { label: 'Player Storage', value: '32GB' },
          { label: 'RAM', value: '4GB' },
        ],
      },
      {
        title: '🔧 Fabrication & Branding',
        specs: [
          { label: 'Fabrication', value: 'MS Fabricated Structure' },
          { label: 'Size', value: '-' },
          { label: 'Weight', value: '-' },
          { label: 'Toughened Glass (Front)', value: 'Yes' },
          { label: 'Colour', value: 'Black / White' },
          { label: 'Logo Branding', value: 'Available below the screen' },
        ],
      },
    ],
  },
];

/* ─── Gallery images (unchanged) ─── */
const galleryImages = [
  { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (2).webp' },
  { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (3).webp' },
  { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (4).webp' },
  { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (5).webp' },
  { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (6).webp' },
  { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (7).webp' },
  { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (8).webp' },
  { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (9).webp' },
];

/* ─── Product suite quick-cards ─── */
const suiteSummary = [
  {
    label: 'A-Frame Standee',
    series: 'SPL / S-Lite Series',
    sizes: '32″ · 43″ · 55″',
    use: 'Cafes, Retail, Offices',
    img: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product/AFrameStandee.webp',
  },
  {
    label: 'Active LED Standee',
    series: 'Pixl Series',
    sizes: 'P1.5 – P4',
    use: 'DOOH, Outdoor, Events',
    img: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product/ActiveLED.webp',
  },
  {
    label: 'Digital Pod Standee',
    series: 'VTX / V-Lite Series',
    sizes: '43″ · 55″ · 65″',
    use: 'Malls, Airports, Hotels',
    img: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product/DigitalPod.webp',
  },
];

export default function DigiMedia() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <Head>
        <title>DigiMedia — Digital Display Solutions | PDSN Media</title>
        <meta name="description" content="PDSN DigiMedia suite — A-Frame standees, Active LED standees and Digital Pod standees engineered for maximum engagement in retail, corporate, events and DOOH environments." />
      </Head>

      <Header />

      <main className="flex-grow">

        {/* ═══════════════════════════════════════
            HERO — Product showcase image
        ═══════════════════════════════════════ */}
        <section className="relative bg-[#080C14] overflow-hidden">
          {/* Full-width product lineup image */}
          <div className="relative w-full">
            <Image
              src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/digimedia1.webp"
              alt="PDSN DigiMedia Product Lineup"
              width={1920}
              height={960}
              className="w-full h-auto object-contain"
              priority
            />
            {/* Gradient overlays for polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-[#080C14]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/60 via-transparent to-[#080C14]/60 pointer-events-none" />
          </div>

          {/* Hero text — overlaid on image */}
          <div className="absolute inset-0 flex items-end pb-12 md:pb-16 pointer-events-none">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="max-w-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">
                    Digital Display Solutions
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  DigiMedia{' '}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Suite
                  </span>
                </h1>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg pointer-events-auto">
                  From portable A-Frames to massive LED walls and premium pod standees — engineered for maximum engagement and ROI across every environment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PRODUCT SUITE OVERVIEW — 3 quick cards
        ═══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Our Products</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Explore Our{' '}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h2>
              </div>
              <p className="text-gray-600 text-sm max-w-xs md:text-right leading-relaxed">
                From portable A-Frames to massive LED walls and interactive kiosks — our DigiMedia suite is engineered for maximum engagement and ROI.
              </p>
            </motion.div>

            {/* 3 product summary cards */}
            <div className="grid sm:grid-cols-3 gap-5 mb-6">
              {suiteSummary.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="group relative bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#00acd7]/20 hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Gradient top line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Product image */}
                  <div className="relative h-52 bg-white border-b border-gray-100 flex items-center justify-center p-4">
                    <Image
                      src={item.img}
                      alt={item.label}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <span className="text-[#00acd7] text-xs font-bold tracking-[0.18em] uppercase block mb-1">{item.series}</span>
                    <h3 className="font-extrabold text-gray-900 text-lg mb-3 group-hover:text-[#341f9b] transition-colors">{item.label}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-[#00acd7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <span>Sizes: <span className="font-semibold text-gray-700">{item.sizes}</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-[#00acd7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Best for: <span className="font-semibold text-gray-700">{item.use}</span></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Scroll down to explore full specifications, variants, and use-case insights for each product.
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PRODUCT DETAIL CATALOG
        ═══════════════════════════════════════ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Full Specifications</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Product{' '}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    Deep Dive
                  </span>
                </h2>
                <p className="text-gray-600 text-sm mt-3 max-w-md leading-relaxed">
                  Select a product from the sidebar to explore complete specs, media player details, and fabrication options.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <ProductDetailView products={products} />
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHY CHOOSE DIGIMEDIA — 4 pillars
        ═══════════════════════════════════════ */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

            <motion.div
              className="text-center max-w-2xl mx-auto mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Why DigiMedia</span>
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#341f9b] to-[#00acd7]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Built for{' '}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Impact
                </span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ),
                  title: '4K Commercial Grade',
                  desc: 'Up to 3,840×2,160 resolution with commercial-grade panels rated for 24/7 operation at 350–500 nits brightness.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                    </svg>
                  ),
                  title: 'Plug & Play Ready',
                  desc: 'Windows or Android media players built-in, with Wi-Fi, LAN, USB and HDMI — deploy instantly, update remotely.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  ),
                  title: 'Full Brand Customisation',
                  desc: 'MS fabricated structures in black or white with logo branding areas, toughened glass fronts and custom colour options.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  ),
                  title: 'Scalable for Any Environment',
                  desc: 'From compact cafe standees to outdoor-rated LED walls for events — one partner, every scale, every venue.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="group p-7 border border-gray-100 rounded-2xl bg-white hover:shadow-xl hover:border-[#00acd7]/20 hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00acd7]/10 to-[#341f9b]/10 border border-[#00acd7]/10 flex items-center justify-center text-[#00acd7] mb-5 group-hover:from-[#00acd7]/20 group-hover:to-[#341f9b]/20 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-[#341f9b] transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            GALLERY — Recent Installations
        ═══════════════════════════════════════ */}
        <section className="py-20 bg-gray-50/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Gallery</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Recent Installations{' '}
                  <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                    & Case Studies
                  </span>
                </h2>
              </div>
              <p className="text-gray-600 text-sm max-w-xs md:text-right leading-relaxed">
                Click any image to enlarge. Our portfolio spans retail, corporate, hospitality, and events.
              </p>
            </motion.div>

            <Gallery images={galleryImages} />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <motion.div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00acd7]/8 via-gray-50 to-[#341f9b]/8 border border-gray-200 px-8 py-14 md:px-14 md:py-18"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Background effects */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#00acd7]/6 blur-[90px]" />
                <div className="absolute -bottom-1/2 -right-1/4 w-[400px] h-[400px] rounded-full bg-[#341f9b]/8 blur-[70px]" />
                <div className="absolute inset-0 opacity-[0.015]" style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00acd7] to-transparent" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                    <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">Elevate Your Space</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    Ready to elevate your{' '}
                    <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                      DOOH presence?
                    </span>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mt-4 max-w-md">
                    Let our team help you choose the right display solution for your space, brand objectives, and budget.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Request a Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 border border-gray-300 bg-white px-7 py-3.5 rounded-lg text-gray-700 font-semibold text-sm tracking-wide hover:border-[#00acd7]/40 hover:text-[#00acd7] transition-all duration-300"
                  >
                    Ask a Question
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
