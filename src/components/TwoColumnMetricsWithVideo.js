'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '1+', label: 'Years in Business' },
  { value: '20+', label: 'Trusted Clients' },
  { value: '100%', label: 'Deliverance' },
];

export default function TwoColumnMetricsWithVideo() {
  return (
    <section className="bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 min-h-[560px]">

          {/* Left — YouTube Video (full bleed, no padding) */}
          <motion.div
            className="relative overflow-hidden min-h-[280px] md:min-h-[560px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/R6fOmnQR8ig?modestbranding=1&rel=0"
              title="PDSN Media — Key Highlights"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            className="relative bg-gray-50 flex flex-col justify-center px-8 py-14 md:px-14"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Subtle decorative blob */}
            <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-[#00acd7]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#341f9b]/5 blur-2xl pointer-events-none" />

            {/* Label */}
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
              <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">
                Achievements
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 relative z-10">
              Our Key Highlights
            </h2>
            <p className="text-gray-500 text-sm mb-12 relative z-10">
              A snapshot of the milestones we have proudly achieved over time.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="border-l-2 border-[#00acd7]/50 group-hover:border-[#00acd7] transition-colors duration-300 pl-5">
                    <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent leading-none">
                      {stat.value}
                    </div>
                    <p className="text-gray-600 text-sm mt-2 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
