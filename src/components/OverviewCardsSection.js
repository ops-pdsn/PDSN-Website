'use client'

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    number: "01",
    title: "Digital Out Of Home — DOOH",
    description: "Dynamic digital displays engage audiences in high-traffic areas with eye-catching creativity. Leverage the power of DOOH to amplify your brand's presence.",
    link: "/programmatic-dooh",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    id: 2,
    number: "02",
    title: "Content Creation",
    description: "From high-impact CGI/ Anamorphic to dynamic animations, we craft immersive visual stories that captivate, engage, and inspire your audience.",
    link: "/content-creation",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-6.375A1.125 1.125 0 013.375 11h-.375m0 8.625V9.375A1.125 1.125 0 014.5 8.25h2.25m-2.625 0V5.625A1.125 1.125 0 015.25 4.5h13.5A1.125 1.125 0 0119.875 5.625V8.25m-16.5 0h16.5m0 0v6.375M21 15V9.375A1.125 1.125 0 0019.875 8.25h-.375" />
      </svg>
    ),
  },
  {
    id: 3,
    number: "03",
    title: "Hyper-Local Marketing",
    description: "Geo-targeted campaigns built for impact—connecting brands with communities at street level.",
    link: "/hyperlocal-marketing",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    number: "04",
    title: "Digi-Media",
    description: "We create impact that converts — turning scrolls into sales.",
    link: "/digimedia",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section id="FeaturesSection" className="scroll-mt-20 py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

        {/* Section header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
              <span className="text-[#00acd7] font-semibold text-xs tracking-[0.22em] uppercase">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Welcome to PDSN Media:{' '}
              <span className="bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent">
                Where Creativity Meets Strategy
              </span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-gray-500 text-sm leading-relaxed md:text-right">
              Concise, action-focused, and highlights all four services while emphasizing modern solutions.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="group relative bg-white border border-gray-200 p-8 flex flex-col gap-5 hover:bg-gray-50 hover:border-[#00acd7]/30 transition-all duration-300 shadow-sm"
            >
              {/* Animated top border accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Large background number */}
              <span className="absolute top-4 right-6 text-6xl font-extrabold text-gray-900/[0.04] select-none group-hover:text-gray-900/[0.07] transition-colors duration-300">
                {feature.number}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00acd7]/10 to-[#341f9b]/10 border border-[#00acd7]/15 flex items-center justify-center text-[#00acd7] group-hover:from-[#00acd7]/20 group-hover:to-[#341f9b]/20 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5 flex-1">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#00acd7]/70 uppercase">{feature.number}</span>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#00acd7] transition-colors duration-300 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>
              </div>

              {/* Link */}
              <Link
                href={feature.link}
                className="inline-flex items-center gap-2 text-[#00acd7] text-xs font-semibold tracking-wide uppercase transition-all duration-300 group-hover:gap-3"
              >
                Know More
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight bar */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-14 pt-10 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-gray-900 text-lg font-semibold">
              Elevate Outcomes:{' '}
              <span className="text-gray-500 font-normal">DOOH, Content, Hyperlocal &amp; DigiMedia Synergy.</span>
            </h4>
            <p className="text-gray-500 text-sm mt-1">
              Amplify Your Impact: Next-Gen DOOH, Creative Content Mastery, Hyperlocal Precision, &amp; Digital Media Innovation.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-6 py-3 rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#00acd7]/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Connect Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
