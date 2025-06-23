'use client'

import Link from "next/link";
import { motion } from "framer-motion";

const FeatureItem = ({ title, description, icon, id, link }) => {
  return (
    <div
      className={`space-y-4 px-0 py-6 border-t border-gray-300 sm:border-0 sm:py-4 ${id === 2 || id === 4 ? 'sm:border-l sm:pl-4' : ''
        } ${id === 3 || id === 4 ? 'sm:border-t sm:pt-4' : ''}`}
    >
      <span className="p-2 rounded-md bg-blue-50 text-blue-700 flex w-max">
        {/* Simplified icon handling */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      </span>
      <h1 className="text-lg font-semibold capitalize text-gray-900">{title}</h1>
      <p className="text-sm font-light text-gray-700">{description}</p>
      <Link href={link} className="text-sky-700 flex items-center gap-x-3 w-max">
        Know More
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
        </svg>
      </Link>
    </div>
  );
};

const features = [
  {
    id: 1,
    title: "Digital Out Of Home - DOOH",
    description: "Dynamic digital displays engage audiences in high-traffic areas with eye-catching creativity. Leverage the power of DOOH to amplify your brand's presence.",
    icon: "stat-ico",
    link: "/programmatic-dooh",
  },
  {
    id: 2,
    title: "Content Creation",
    description: "From high-impact CGI/ Anamorphic to dynamic animations, we craft immersive visual stories that captivate, engage, and inspire your audience.",
    icon: "stat-ico",
    link: "/content-creation",
  },
  {
    id: 3,
    title: "Hyper-Local Marketing",
    description: "Geo-targeted campaigns built for impact—connecting brands with communities at street level.",
    icon: "stat-ico",
    link: "/hyperlocal-marketing",
  },
  {
    id: 4,
    title: "Digi-Media",
    description: "We create impact that converts — turning scrolls into sales.",
    icon: "stat-ico",
    link: "/digimedia",
  },
];

const Features = () => {
  return (
    <section id="FeaturesSection" className="min-h-[750px] scroll-mt-20 py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4 max-w-xl">
            <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800">
              Feature
            </span>
            <h1 className="text-3xl font-semibold text-blue-950 md:text-4xl xl:text-5xl leading-tight">
              Welcome to PDSN Media: Where Creativity Meets Strategy
            </h1>
          </div>
          <p className="text-gray-700">
            Concise, action-focused, and highlights all four services while emphasizing modern solutions.
          </p>
        </motion.div>

        {/* Features Grid + Right Content */}
        <div className="mt-16 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10 xl:gap-14">
          <motion.div
            className="lg:w-[55%] grid sm:grid-cols-2 gap-6 min-h-[400px]"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FeatureItem {...feature} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex-1 py-10 lg:py-8 space-y-8 max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-gray-900">
              Elevate Outcomes: DOOH, Content, Hyperlocal & DigiMedia Synergy.
            </h2>
            <p className="text-gray-700 max-w-md">
              Amplify Your Impact: Next-Gen DOOH, Creative Content Mastery, Hyperlocal Precision, & Digital Media Innovation.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="bg-sky-700 text-white rounded-full px-6 h-12 flex w-max items-center hover:bg-gray-800"
              >
                Connect now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
