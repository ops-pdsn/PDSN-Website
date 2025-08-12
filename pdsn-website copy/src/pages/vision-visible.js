// pages/vision-visible.js

import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function VisionVisible() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/vision-visible-hero.webp"
          alt="Vision Visible Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00acd7]/80 to-[#341f9b]/60" />
        <div className="text-center px-4 z-10 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Make Your Startup Vision Visible
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Bold impressions. Real visibility. For the visionaries who are just getting started.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Every Vision Deserves Visibility
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Every startup begins with a dream — an idea that deserves to be seen, heard, and remembered. Vision Visible helps you break through the noise with DOOH displays that bring your brand to life in the places people actually look.
          </motion.p>
        </div>
      </section>

      {/* Video + Text Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="aspect-square overflow-hidden rounded-xl shadow-md relative group"
              onContextMenu={(e) => e.preventDefault()} // <-- THIS LINE BLOCKS RIGHT CLICK
            >
              <video
                src="/videos/vision-visible.webm"
                autoPlay
                loop
                muted
                controls
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                className="object-cover w-full h-full pointer-events-auto"
                poster="/images/video-poster.webp"
                preload="none"
              />
            </div>
          </motion.div>


          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See Your Vision in Motion
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Startups need momentum — and our high-impact DOOH screens are designed to give it to you.
              Showcase your story with stunning visuals in the spaces where it matters most.
            </p>
            <p className="text-gray-700 text-lg">
              Whether it&apos;s your first launch or a major growth push, Vision Visible ensures your brand captures hearts — and eyeballs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Vision Visible Works */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-200 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
            Startup Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Vision Visible Works for Startups
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Whether you&apos;re launching your first product or scaling your message, our digital screens help startups gain visibility, traction, and results — affordably and effectively.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[{
            title: 'Early-Stage Exposure',
            text: 'Launch your product or service with a bang — directly in front of your target audience.',
            icon: '🚀'
          }, {
            title: 'High-Impact Screens',
            text: 'Your brand message shown on digital displays in malls, cafes, metros, and more.',
            icon: '🖥️'
          }, {
            title: 'Affordable Campaigns',
            text: 'Startup-friendly pricing that doesn’t compromise on quality or visibility.',
            icon: '💡'
          }].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-[#1a1b3a] text-white">
        <h2 className="text-4xl font-bold mb-4">Let Your Vision Be Visible</h2>
        <p className="text-lg mb-6">What&apos;s the point of a powerful vision if no one sees it? Let&apos;s bring your story to the streets.</p>
        <Link
          href="/contact"
          className="bg-white text-[#341f9b] px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition"
        >
          Book a Consultation
        </Link>
      </section>

      <Footer />
    </div>
  )
}
