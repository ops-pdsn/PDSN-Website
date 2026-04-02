'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/* ── SVG Icons ── */
const IconEmail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);
const IconPin = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/* ── Contact info ── */
const contactDetails = [
  {
    icon: <IconPin />,
    label: "Visit Us",
    primary: "Highland Corporate Park",
    secondary: "SB-17, 2nd Floor, High Street Mall, Kapurbawdi Junction, Thane West, Mumbai 400607",
  },
  {
    icon: <IconEmail />,
    label: "Email Us",
    primary: "sales@pdsn.in",
    secondary: "We reply within 24 hours",
    href: "mailto:sales@pdsn.in",
  },
  {
    icon: <IconPhone />,
    label: "Call Us",
    primary: "+91 8369891418",
    secondary: "022-45133548",
    href: "tel:+918369891418",
  },
];

/* ── Services list for inquiry context ── */
const services = [
  "Programmatic DOOH",
  "DigiMedia Screens",
  "Content Creation",
  "Hyperlocal Marketing",
  "Vision Visible",
  "Other",
];

/* ── Input field wrapper ── */
function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="flex items-center gap-1 text-[11px] font-bold text-gray-500 tracking-[0.15em] uppercase mb-2">
        {label}
        {required && <span className="text-[#00acd7]">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-400 text-xs mt-1.5 flex items-center gap-1"
          >
            <span className="inline-block w-1 h-1 rounded-full bg-red-400" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#00acd7]/60 focus:ring-1 focus:ring-[#00acd7]/30 transition-all duration-200";

/* ── Page ── */
export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/movdqdra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setShowSuccess(true);
        reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Please try again.');
    }
  };

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 overflow-x-hidden">

        {/* ═══════════════════════════════
            HERO
        ═══════════════════════════════ */}
        <section className="relative pt-36 pb-20 overflow-hidden border-b border-gray-200">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#00acd7]/7 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#341f9b]/6 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.3em] uppercase">
                  Get in Touch
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.92] tracking-tight max-w-3xl mb-6">
                <span className="block text-gray-900">Let&apos;s Build</span>
                <span className="block bg-gradient-to-r from-[#00acd7] via-[#6B7FFF] to-[#341f9b] bg-clip-text text-transparent">
                  Something Great
                </span>
                <span className="block text-gray-700">Together.</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
                Whether you have a campaign brief, a creative challenge, or just want to explore
                what&apos;s possible — our team is ready to talk.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════
            MAIN — FORM + INFO
        ═══════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-start">

              {/* ── LEFT: FORM ── */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">

                  {/* Form header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-[2px] w-5 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                      <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Send a Message</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                      We&apos;d Love to Hear From You
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {!showSuccess ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                      >
                        {/* Name + Phone row */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <Field label="Full Name" required error={errors.name?.message}>
                            <input
                              type="text"
                              {...register('name', { required: 'Name is required' })}
                              className={inputClass}
                              placeholder="Your full name"
                            />
                          </Field>

                          <Field label="Phone Number" required error={errors.phone?.message}>
                            <input
                              type="tel"
                              {...register('phone', {
                                required: 'Phone number is required',
                                pattern: {
                                  value: /^[0-9]{10,15}$/,
                                  message: 'Enter a valid phone number',
                                },
                              })}
                              className={inputClass}
                              placeholder="+91 XXXXXXXXXX"
                            />
                          </Field>
                        </div>

                        <Field label="Email Address" required error={errors.email?.message}>
                          <input
                            type="email"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Enter a valid email address',
                              },
                            })}
                            className={inputClass}
                            placeholder="you@company.com"
                          />
                        </Field>

                        <Field label="Service of Interest" error={errors.service?.message}>
                          <select
                            {...register('service')}
                            className={`${inputClass} appearance-none cursor-pointer`}
                            defaultValue=""
                          >
                            <option value="" disabled className="bg-white text-gray-400">
                              Select a service…
                            </option>
                            {services.map((s) => (
                              <option key={s} value={s} className="bg-white text-gray-900">
                                {s}
                              </option>
                            ))}
                          </select>
                        </Field>

                        <Field label="Message" required error={errors.message?.message}>
                          <textarea
                            rows={5}
                            {...register('message', { required: 'Message is required' })}
                            className={`${inputClass} resize-none`}
                            placeholder="Tell us about your campaign, goals, or any questions…"
                          />
                        </Field>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full relative overflow-hidden bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white font-bold py-4 rounded-xl text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-[#00acd7]/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending…
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              Send Message
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </span>
                          )}
                        </button>

                        <p className="text-gray-500 text-xs text-center">
                          We respect your privacy. Your details will never be shared.
                        </p>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-12 text-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5 text-green-700">
                          <IconCheck />
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600 text-sm max-w-xs mx-auto leading-relaxed">
                          Thank you for reaching out. Our team will get back to you within 24 hours.
                        </p>
                        <button
                          onClick={() => setShowSuccess(false)}
                          className="mt-6 text-[#00acd7] text-xs font-bold tracking-widest uppercase hover:underline"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* ── RIGHT: INFO + MAP ── */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                className="space-y-5 lg:sticky lg:top-28"
              >
                {/* Contact cards */}
                {contactDetails.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#00acd7]/40 hover:shadow-md transition-all duration-300 group shadow-sm"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/15 flex items-center justify-center text-[#00acd7] group-hover:from-[#00acd7]/25 group-hover:to-[#341f9b]/25 transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase mb-1">{item.label}</div>
                          <div className="text-gray-900 font-semibold text-sm">{item.primary}</div>
                          <div className="text-gray-500 text-xs mt-0.5">{item.secondary}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/15 flex items-center justify-center text-[#00acd7]">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-gray-500 tracking-[0.15em] uppercase mb-1">{item.label}</div>
                          <div className="text-gray-900 font-semibold text-sm">{item.primary}</div>
                          <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.secondary}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                  className="rounded-2xl overflow-hidden border border-gray-200 shadow-md"
                  style={{ height: '280px' }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4911418495426!2d72.97830577374074!3d19.217415447520693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9da794fdeb1%3A0xa3831247f78f1277!2sPDSN%20Media%20Private%20Limited!5e0!3m2!1sen!2sin!4v1744892502501!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PDSN Media office location"
                  />
                </motion.div>

                {/* Office hours */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#00acd7] animate-pulse" />
                    <span className="text-[#00acd7] text-[10px] font-bold tracking-[0.2em] uppercase">Office Hours</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { day: "Monday — Friday", time: "9:00 AM – 7:00 PM" },
                      { day: "Saturday", time: "10:00 AM – 4:00 PM" },
                      { day: "Sunday", time: "Closed" },
                    ].map((h) => (
                      <div key={h.day} className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">{h.day}</span>
                        <span className={h.day === "Sunday" ? "text-gray-400" : "text-gray-900 font-semibold"}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════
            SERVICES QUICK STRIP
        ═══════════════════════════════ */}
        <section className="py-16 border-t border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[2px] w-5 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                  <span className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase">Our Services</span>
                </div>
                <p className="text-gray-500 text-sm">Not sure which service fits you? Explore what we offer.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Programmatic DOOH", href: "/programmatic-dooh" },
                  { label: "DigiMedia", href: "/digimedia" },
                  { label: "Content Creation", href: "/content-creation" },
                  { label: "Hyperlocal", href: "/hyperlocal-marketing" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-xs font-semibold hover:border-[#00acd7]/40 hover:shadow-md hover:text-gray-900 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
