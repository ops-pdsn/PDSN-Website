'use client'

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Laser Technologies",
    company: "Laser Technologies",
    image: "/logos/LaserT.webp",
    message:
      "PDSN Media Agency provided tailored solutions that were exactly what we needed, bringing fresh ideas that truly elevated the outcome. Their commitment to quality and reliability made a significant impact on our projects, making the entire experience seamless and highly effective.",
  },
  {
    id: 2,
    name: "Diamond Protech",
    company: "Diamond Protech",
    image: "/logos/DP.webp",
    message:
      "PDSN Media Agency's innovative solutions transformed our content, bringing a level of creativity and expertise that made a significant impact. Their collaborative spirit and dedication to quality made the entire process both enjoyable and successful. We highly recommend them for content services.",
  },
  {
    id: 3,
    name: "Borosil",
    company: "Borosil",
    image: "/logos/Borosil.webp",
    message:
      "The creative digi greetings made by PDSN has helped us connect with our customers in a more personalized and meaningful way. The result was exactly what we wanted, so would recommend them for brand-tailored creative solutions.",
  },
  {
    id: 4,
    name: "Ajanta Pharma",
    company: "Ajanta Pharma",
    image: "/logos/Ajanta Pharma.webp",
    message:
      "Working with PDSN was incredibly smooth. They delivered captivating DOOH content that caught everyone’s attention. Absolutely impressed by their professionalism and the final outcome!",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 2
  const total = testimonials.length

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  )

  const handlePrev = () => {
    setCurrentIndex(currentIndex <= 0 ? total - itemsPerPage : currentIndex - itemsPerPage)
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex + itemsPerPage >= total ? 0 : currentIndex + itemsPerPage)
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">

        {/* Title Section */}
        <motion.div
          className="space-y-4 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800">
            Happy Clients
          </span>
          <h1 className="font-bold text-gray-800 text-3xl">
            Client’s Testimonials
          </h1>
        </motion.div>

        {/* Testimonial Cards with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex} // allows re-animation on change
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="border rounded-md p-5 flex flex-col gap-4 bg-white shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-gray-700 text-base md:text-lg italic">
                  “{testimonial.message}”
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <Image
                    src={testimonial.image}
                    width={50}
                    height={50}
                    alt={`${testimonial.name} avatar`}
                    className="w-12 h-12 rounded-full object-contain"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h2>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.div
          className="flex justify-center items-center gap-3 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button
            aria-label="Prev Button"
            onClick={handlePrev}
            className="outline-none p-2.5 rounded-md text-gray-900 transition ease-linear bg-gray-300 hover:bg-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 01-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            aria-label="Next Button"
            onClick={handleNext}
            className="outline-none p-2.5 rounded-md text-gray-900 transition ease-linear bg-gray-300 hover:bg-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M4.5 10c0-.414.336-.75.75-.75h6.638l-2.158-1.96a.75.75 0 011.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 01-1.04-1.08l2.158-1.96H5.25A.75.75 0 014.5 10z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
