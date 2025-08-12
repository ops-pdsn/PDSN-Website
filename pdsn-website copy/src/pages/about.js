"use client";

import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96">
          <Image
            src="/images/about-hero.webp"
            alt="Our Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00acd7]/80 to-[#341f9b]/60">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 h-full flex items-center">
              <motion.div
                className="text-white max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Transforming Vision into Impact
                </h1>
                <p className="text-lg text-gray-200">
                  At PDSN Media, we pioneer innovative media solutions that move brands forward — turning creativity into measurable outcomes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800">
                Our Journey
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                PDSN Media Redefining Digital-Out-Of-Home Possibilities
              </h2>
              <p className="text-gray-600">
                We’re more than just a media agency— we’re passionate innovators driven by a love for creativity and strategy. Our team specializes in crafting compelling brand stories that resonate with audiences while leveraging out-of-the-box thinking to stay ahead of industry trends. We combine creative vision with strategic execution to deliver impactful, measurable solutions for our clients.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-blue-600">50+</h3>
                  <p className="text-gray-600">Successful Campaigns</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-blue-600">100%</h3>
                  <p className="text-gray-600">Deliverance</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative h-96 rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/about-story.webp"
                alt="Our Workplace"
                fill
                className="object-cover object-[100%_0%]"
              />
            </motion.div>
          </div>
        </section>

        {/* Core Philosophy */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800">
                Our Philosophy
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">
                The Pillars of Our Success
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {["💡", "🎯", "🤝"].map((icon, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  viewport={{ once: true }}
                >
                  <span className="text-4xl">{icon}</span>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{["Innovation First", "Precision Targeting", "Client Partnership"][idx]}</h3>
                  <p className="text-gray-600">{["Pushing boundaries in DOOH technology and creative solutions.", "Data-driven strategies for maximum campaign impact.", "Collaborative approaches for shared success."][idx]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <motion.div
            className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Redefining DOOH Excellence
              </h2>
              <p className="text-gray-600">
                To empower businesses through innovative, data-driven dooh solutions that create meaningful connections and measurable impact. We strive to be the catalyst for our client&#39;s success in an increasingly digital world.
              </p>
            </div>

            <div className="space-y-6">
              <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800">
                Our Vision
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Shaping the Future of DOOH Engagement
              </h2>
              <p className="text-gray-600">
                To be the global leader in transformative dooh experiences, pioneering technologies that bridge the gap between brands and their audiences through creativity, innovation, and strategic insight.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800">
                Core Values
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">
                The Foundation of Our Culture
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["🚀", "🔒", "🔄", "💎", "🏆", "🤝", "🌱"].map((icon, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{["Innovation", "Integrity", "Adaptability", "Customer Centric", "Excellence", "Collaboration", "Sustainability"][idx]}</h3>
                      <p className="text-gray-600">{["Pioneering cutting-edge solutions in digital advertising", "Ethical practices and transparency in all engagements", "Evolving with market trends and client needs", "Tailored strategies for maximum client impact", "Uncompromising quality in execution and delivery", "Synergistic partnerships for shared success", "Environmentally conscious digital practices"][idx]}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold tracking-wide text-sky-800">
                Leadership
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">
                Meet Our Visionaries
              </h2>
            </motion.div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-8 justify-items-center">
                {["Sanchit Bhan", "Dheeraj Bhat"].map((name, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow w-80"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-80">
                      <Image
                        src={["/team/ceo-sanchit.webp", "/team/cfo-dheeraj.webp"][idx]}
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                      <p className="text-blue-600 mt-1">{["Founder & CEO", "Co-Founder & CFO"][idx]}</p>
                      <p className="text-gray-600 mt-4">{["Programmatic | DOOH | Content - Combine all three & make an effective reach” - 15+ years of DOOH Media and content industry experience.", "30+ years of rich business industry experience."][idx]}</p>
                      <a
                        href={["https://www.linkedin.com/in/sanchit-bhan-17571431/", "https://www.linkedin.com/in/dheeraj-k-bhat-069864175/"][idx]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium"
                      >
                        <FaLinkedin size={20} />
                        Connect
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
