'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const allCaseStudies = [
  {
    title: "New India Assurance – Head Office Digital Screen Deployment",
    videoId: "7gPmqik-oIo?si=tsQBs2ADTRUyP3ju",
    description: "A-Frame Digital Standees and Wall-Mounted Digital Screen",
  },
  {
    title: "L-Shaped Anamorphic Screen Installation at IMTEX 2025 – Cosmos Booth",
    videoId: "z-oOZENHFZo",
    description: "Eye-catching anamorphic LED display drawing attention at India’s premier manufacturing expo.",
  },
  {
    title: "Bank of India Corporate Shoot at Tata Marathon 2025 – Mumbai",
    videoId: "vC9eU3O8wXA",
    description: "Inspiring moments from BOI employees running for health and brand presence.",
  },
  {
    title: "Agrasen × Detroit Airport – Hyperlocal Visibility in the U.S. Market",
    videoId: "U1OUQ4MiQEI",
    description: "Taking a proudly Indian brand to global visibility, quite literally.",
  },
  {
    title: "NBC Bearings × Multi-Vehicle Anamorphic Showcase",
    videoId: "dRH2RBQeJnE",
    description: "Visual storytelling to show NBC Bearings’ versatility across multiple industries.",
  },
]

export default function FeaturedCaseStudiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(1)
  const [direction, setDirection] = useState(0) // for animation direction

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories in Focus</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            A glimpse into our most impactful campaigns, meticulously aligned with brand goals.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="w-full h-full">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                className="flex justify-center gap-6 flex-wrap"
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {visibleStudies.map((study, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-[47%] lg:w-[31%] bg-white shadow-md rounded-xl overflow-hidden"
                  >
                    <div className="aspect-video relative">
                      <iframe
                        src={`https://www.youtube.com/embed/${study.videoId}?modestbranding=1&rel=0`}
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={study.title}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{study.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{study.description}</p>
                      <Link
                        href="/case-studies"
                        className="inline-block mt-3 text-orange-500 text-sm font-medium hover:underline"
                      >
                        View Full Case Study
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-6">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className={`px-4 py-2 rounded-md border transition ${currentSlide === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
            >
              ← Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlide >= totalSlides - 1}
              className={`px-4 py-2 rounded-md border transition ${currentSlide >= totalSlides - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
