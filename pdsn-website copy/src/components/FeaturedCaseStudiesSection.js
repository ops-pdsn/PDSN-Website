'use client'

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FeaturedCaseStudiesSection() {
  const allCaseStudies = [
    {
      title: "L-Shaped Anamorphic Screen Installation at IMTEX 2025 – Cosmos Booth",
      videoId: "z-oOZENHFZo",
      description:
        "Showcasing innovation with our eye-catching anamorphic LED display at the Cosmos stall, drawing attention at one of India’s premier manufacturing exhibitions.",
    },
    {
      title: "Bank of India Corporate Shoot at Tata Marathon 2025 – Mumbai",
      videoId: "vC9eU3O8wXA",
      description:
        "Captured inspiring moments as BOI employees ran with purpose—promoting both health and brand presence at India’s biggest marathon event.",
    },
    {
      title: "Agrasen × Detroit Airport – Hyperlocal Visibility in the U.S. Market",
      videoId: "U1OUQ4MiQEI",
      description:
        "When Agrasen, a proudly Indian brand, set its sights on strengthening global visibility, we took the brief across borders—literally.",
    },
    {
      title: "NBC Bearings × Multi-Vehicle Anamorphic Showcase",
      videoId: "dRH2RBQeJnE",
      description:
        "NBC Bearings approached us with a unique challenge: showcase the versatility of their products across multiple industries—all in one visual experience.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const step = 2
  const visibleCaseStudies = allCaseStudies.slice(currentIndex, currentIndex + step)

  const handleNext = () => {
    setCurrentIndex((currentIndex + step) % allCaseStudies.length)
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800 inline-block mb-2">
              Spotlight
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Success Stories in Focus
            </h2>
            <p className="text-gray-600 max-w-2xl mt-2">
              A glimpse into our most impactful campaigns, each meticulously aligned with unique brand goals.
            </p>
          </div>

          {/* Next Button */}
          <motion.div
            className="flex items-center gap-3 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              aria-label="Next Button"
              onClick={handleNext}
              className="outline-none p-2.5 rounded-md text-gray-900 transition ease-linear bg-gray-300 hover:bg-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.64L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.16-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Alternating Case Studies */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {visibleCaseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row items-center ${(currentIndex + idx) % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } gap-4 md:gap-8`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Video */}
              <div
                className={`relative w-full md:w-[45%] aspect-[16/9] overflow-hidden shadow-sm ${(currentIndex + idx) % 2 === 0
                  ? 'rounded-l-[2rem] rounded-r-md'
                  : 'rounded-r-[2rem] rounded-l-md'
                  }`}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${study.videoId}?modestbranding=1&rel=0`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={study.title}
                />
              </div>


              {/* Text */}
              <div className="flex-1 md:w-[55%]">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{study.description}</p>
                <Link
                  href="/case-studies"
                  className="mt-3 inline-block text-orange-500 text-sm font-medium hover:text-orange-600"
                >
                  View Full Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(allCaseStudies.length / step) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * step)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex / step === i ? 'bg-orange-500 scale-110' : 'bg-gray-300'
                }`}
              aria-label={`Go to case study page ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
