'use client'

import Link from "next/link"
import { motion } from "framer-motion"

const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <motion.div
          className="bg-gradient-to-br from-blue-200 to-gray-50 rounded-lg p-8 md:p-10 py-14 lg:p-14 flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-start md:items-start gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Left Side Heading */}
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-blue-950 font-display font-bold leading-tight">
              Create. Connect. Captivate.
            </h1>
          </motion.div>

          {/* Right Side Text and Button */}
          <motion.div
            className="flex flex-col md:flex-1 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700">
              <strong>Ready to scale your brand visibility?</strong><br />
              Our DOOH network delivers your message where it matters most.  Our extensive DOOH network is designed to connect you with your audience exactly where and when it matters most. Tap into a powerful blend of precision targeting and high-visibility placements to create unforgettable brand experiences that resonate with people in real time.
            </p>

            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="h-12 px-5 rounded-md flex items-center bg-blue-600 text-white hover:bg-blue-700 transition">
                Let’s talk
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaSection
