'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/hero-bg3.webp"
          alt=""
          fill
          className="object-cover custom-blur-10"
          priority
        />
      </div>

      {/* Overlay Content with Text Animation */}
      <motion.div
        className="relative text-center px-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Create. Connect. Captivate.
        </motion.h1>

        <motion.p
          className="max-w-xl mx-auto mb-6 text-lg md:text-xl font-medium text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Engage audiences nationwide with amazing DOOH solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="#FeaturesSection"
            className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md text-lg font-semibold transition text-white"
          >
            Discover How
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
