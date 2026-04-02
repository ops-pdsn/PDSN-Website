'use client'

import Link from "next/link"
import { motion } from "framer-motion"

const CtaSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-[#080C14] px-8 py-16 md:px-14 md:py-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Gradient background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#00acd7]/10 blur-[100px]" />
            <div className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-[#341f9b]/15 blur-[80px]" />
          </div>

          {/* Subtle grid texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00acd7] to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">

            {/* Left */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">
                  Ready to Scale?
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Create.{' '}
                <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                  Connect.
                </span>
                <br />
                Captivate.
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              className="flex flex-col gap-6 max-w-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white font-semibold">Ready to scale your brand visibility?</strong>
                <br /><br />
                Our DOOH network delivers your message where it matters most. Tap into a powerful blend of precision targeting and high-visibility placements to create unforgettable brand experiences that resonate with people in real time.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3.5 rounded-lg text-white font-semibold text-sm tracking-wide hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Let&apos;s Talk
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaSection
