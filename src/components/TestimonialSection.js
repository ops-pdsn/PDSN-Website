'use client'

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Laser Technologies",
    company: "Laser Technologies",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/LaserT.webp",
    message:
      "PDSN Media Agency provided tailored solutions that were exactly what we needed, bringing fresh ideas that truly elevated the outcome. Their commitment to quality and reliability made a significant impact on our projects, making the entire experience seamless and highly effective.",
  },
  {
    id: 2,
    name: "Diamond Protech",
    company: "Diamond Protech",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/DP.webp",
    message:
      "PDSN Media Agency's innovative solutions transformed our content, bringing a level of creativity and expertise that made a significant impact. Their collaborative spirit and dedication to quality made the entire process both enjoyable and successful. We highly recommend them for content services.",
  },
  {
    id: 3,
    name: "Borosil",
    company: "Borosil",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/Borosil.webp",
    message:
      "The creative digi greetings made by PDSN has helped us connect with our customers in a more personalized and meaningful way. The result was exactly what we wanted, so would recommend them for brand-tailored creative solutions.",
  },
  {
    id: 4,
    name: "Ajanta Pharma",
    company: "Ajanta Pharma",
    image: "https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/logos/Ajanta Pharma.webp",
    message:
      "Working with PDSN was incredibly smooth. They delivered captivating DOOH content that caught everyone's attention. Absolutely impressed by their professionalism and the final outcome!",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 2
  const total = testimonials.length

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  const handlePrev = () => {
    setCurrentIndex(currentIndex <= 0 ? total - itemsPerPage : currentIndex - itemsPerPage)
  }
  const handleNext = () => {
    setCurrentIndex(currentIndex + itemsPerPage >= total ? 0 : currentIndex + itemsPerPage)
  }

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#00acd7]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-[#341f9b]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative z-10">

        {/* Header row */}
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
                Happy Clients
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Client&apos;s{' '}
              <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Next testimonial"
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-[#00acd7]/40 text-[#00acd7] flex items-center justify-center hover:bg-[#00acd7]/10 hover:border-[#00acd7] transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
          >
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="relative bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col gap-5 hover:border-[#00acd7]/30 hover:shadow-md transition-all duration-300 group shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Large quotation mark */}
                <div className="absolute top-6 right-8 text-[80px] leading-none font-serif text-gray-900/[0.05] select-none group-hover:text-[#00acd7]/15 transition-colors duration-300">
                  &ldquo;
                </div>

                {/* Gradient top border on hover */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#00acd7]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed italic flex-1 relative z-10">
                  &ldquo;{testimonial.message}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-gray-200" />

                {/* Client info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 overflow-hidden flex items-center justify-center shrink-0 shadow-sm">
                    <Image
                      src={testimonial.image}
                      width={48}
                      height={48}
                      alt={`${testimonial.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-sm">{testimonial.name}</h3>
                    <p className="text-gray-500 text-xs mt-0.5">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: Math.ceil(total / itemsPerPage) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * itemsPerPage)}
              className={`rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerPage) === i
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
