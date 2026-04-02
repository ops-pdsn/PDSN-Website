'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const allCaseStudies = [
  {
    title: "New India Assurance – Head Office Digital Screen Deployment",
    videoId: "7gPmqik-oIo?si=tsQBs2ADTRUyP3ju",
    description: "A-Frame Digital Standees and Wall-Mounted Digital Screen",
    tag: "DOOH",
  },
  {
    title: "L-Shaped Anamorphic Screen Installation at IMTEX 2025 – Cosmos Booth",
    videoId: "z-oOZENHFZo",
    description: "Eye-catching anamorphic LED display drawing attention at India's premier manufacturing expo.",
    tag: "Anamorphic",
  },
  {
    title: "Bank of India Corporate Shoot at Tata Marathon 2025 – Mumbai",
    videoId: "vC9eU3O8wXA",
    description: "Inspiring moments from BOI employees running for health and brand presence.",
    tag: "Content Creation",
  },
  {
    title: "Agrasen × Detroit Airport – Hyperlocal Visibility in the U.S. Market",
    videoId: "U1OUQ4MiQEI",
    description: "Taking a proudly Indian brand to global visibility, quite literally.",
    tag: "Hyperlocal",
  },
  {
    title: "NBC Bearings × Multi-Vehicle Anamorphic Showcase",
    videoId: "dRH2RBQeJnE",
    description: "Visual storytelling to show NBC Bearings' versatility across multiple industries.",
    tag: "Anamorphic",
  },
]

export default function FeaturedCaseStudiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(1)
  const [direction, setDirection] = useState(0)

  const totalSlides = Math.ceil(allCaseStudies.length / itemsPerSlide)

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth
      if (width >= 1024) setItemsPerSlide(3)
      else if (width >= 768) setItemsPerSlide(2)
      else setItemsPerSlide(1)
      setCurrentSlide(0)
    }
    updateItemsPerSlide()
    window.addEventListener('resize', updateItemsPerSlide)
    return () => window.removeEventListener('resize', updateItemsPerSlide)
  }, [])

  const handlePrev = () => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(prev => prev - 1)
    }
  }
  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1)
      setCurrentSlide(prev => prev + 1)
    }
  }

  const startIndex = currentSlide * itemsPerSlide
  const visibleStudies = allCaseStudies.slice(startIndex, startIndex + itemsPerSlide)

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">

        {/* Section header */}
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
              <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">
                Case Studies
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Success Stories{' '}
              <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                in Focus
              </span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-md text-sm leading-relaxed">
              A glimpse into our most impactful campaigns, meticulously aligned with brand goals.
            </p>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-sm font-medium">
              {currentSlide + 1} / {totalSlides}
            </span>
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              aria-label="Previous"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                currentSlide === 0
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlide >= totalSlides - 1}
              aria-label="Next"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                currentSlide >= totalSlides - 1
                  ? 'border-white/10 text-white/20 cursor-not-allowed'
                  : 'border-[#00acd7]/50 text-[#00acd7] hover:bg-[#00acd7]/10 hover:border-[#00acd7]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlide}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            >
              {visibleStudies.map((study, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#00acd7]/40 hover:shadow-md transition-all duration-300 flex flex-col shadow-sm"
                >
                  {/* Video */}
                  <div className="aspect-video relative overflow-hidden bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${study.videoId}?modestbranding=1&rel=0`}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={study.title}
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    {/* Tag */}
                    <span className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-[#00acd7] bg-[#00acd7]/10 px-2.5 py-1 rounded-full w-max border border-[#00acd7]/20">
                      {study.tag}
                    </span>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-[#00acd7] transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1">
                      {study.description}
                    </p>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-1.5 text-[#00acd7] text-xs font-semibold tracking-wide uppercase mt-1 group-hover:gap-2.5 transition-all duration-300"
                    >
                      View Full Case Study
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i) }}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? 'w-6 h-1.5 bg-gradient-to-r from-[#00acd7] to-[#341f9b]'
                  : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
