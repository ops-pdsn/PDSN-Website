'use client';

import { motion } from 'framer-motion';

export default function TwoColumnMetricsWithVideo() {
  return (
    <section className="py-24 bg-white min-h-[600px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">

        {/* Left Column with YouTube Video */}
        <motion.div
          className="md:w-1/2 bg-blue-50 p-8 flex items-center justify-center min-h-[320px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-0 min-h-[315px]" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/R6fOmnQR8ig"
              title="Metrics Video"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right Column with Heading + Stats */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center p-8 md:p-12"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-lg mb-8">
            <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800 inline-block mb-2">
              Achievements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our Key Highlights
            </h2>
            <p className="text-gray-600">
              A snapshot of the milestones we have proudly achieved over time.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            viewport={{ once: true }}
          >
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '1', label: 'Years in Business' },
              { value: '20+', label: 'Trusted Clients' },
              { value: '100%', label: 'Deliverance' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h3 className="text-3xl md:text-4xl font-semibold text-blue-600">
                  {stat.value}
                </h3>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
