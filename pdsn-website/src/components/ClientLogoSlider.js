'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  "/logos/Ajanta Pharma.webp",
  "/logos/AmiPoly.webp",
  "/logos/Argen.webp",
  "/logos/Bajaj.webp",
  "/logos/BOI.webp",
  "/logos/Borosil.webp",
  "/logos/Cosmos.webp",
  "/logos/DP.webp",
  "/logos/Goel.webp",
  "/logos/GOG.webp",
  "/logos/LaserT.webp",
  "/logos/nbc.webp",
  "/logos/SolutionOne.webp",
  "/logos/Zuventus.webp",
  "/logos/Ajanta Pharma.webp",
  "/logos/AmiPoly.webp",
  "/logos/Argen.webp",
  "/logos/Bajaj.webp",
  "/logos/BOI.webp",
  "/logos/Borosil.webp",
  "/logos/Cosmos.webp",
  "/logos/DP.webp",
  "/logos/Goel.webp",
  "/logos/GOG.webp",
  "/logos/LaserT.webp",
  "/logos/nbc.webp",
  "/logos/SolutionOne.webp",
  "/logos/Zuventus.webp",
]

export default function ClientLogoSlider() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800 mb-3">
            Trusted Partnerships
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trusted by Top Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Collaborating with industry pioneers and innovative disruptors to deliver cutting-edge digital solutions
          </p>
        </motion.div>

        {/* Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="marquee-track flex items-center gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="w-40 h-24 flex items-center justify-center shrink-0"
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain grayscale opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .marquee-track {
          animation: scrollX 30s linear infinite;
          width: max-content;
        }

        @keyframes scrollX {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
