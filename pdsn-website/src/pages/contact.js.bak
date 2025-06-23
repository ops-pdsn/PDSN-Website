'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

      {/* Hero Section */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/about-hero.webp" // Replace with your actual image path
          alt="Contact Background"
          fill
          className="object-cover object-center z-[-2]"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00acd7] to-[#341f9b] opacity-70 z-[-1]" />

        {/* Heading Text */}
        <h1 className="text-white text-4xl font-bold z-10 relative">Contact Us</h1>
      </section>


      {/* Main Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid md:grid-cols-2 gap-12">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We’d love to hear from you</h2>
            <p className="text-gray-600 mb-8">Fill out the form and our team will get back to you shortly.</p>

            {!showSuccess ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-md bg-gray-50 border text-sm"
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: 'Enter a valid phone number',
                      },
                    })}
                    className="w-full px-4 py-3 rounded-md bg-gray-50 border text-sm"
                    placeholder="Your Phone"
                  />
                  {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'Enter a valid email address',
                      },
                    })}
                    className="w-full px-4 py-3 rounded-md bg-gray-50 border text-sm"
                    placeholder="Your Email"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 rounded-md bg-gray-50 border text-sm"
                    placeholder="Your Message"
                  />
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00acd7] hover:bg-[#008cb1] text-white py-3 rounded-md font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-md text-center">
                <h3 className="text-lg font-semibold mb-2">Thank you for contacting us!</h3>
                <p>We’ve received your message and will get back to you shortly.</p>
              </div>
            )}
          </motion.div>

          {/* Right: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Reach Us Directly</h3>
              <p className="text-sm text-gray-700 flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#00acd7]" />
                SB-17, 2nd Floor, Highland Corporate Park, High Street Mall, Kapurbawdi Junction, Thane West, Mumbai 400607.
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-3">
                <FaEnvelope className="text-[#00acd7]" />
                sales@pdsn.in
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-3">
                <FaPhoneAlt className="text-[#00acd7]" />
                +91-8369891418 / 022-45133548
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border h-72 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4911418495426!2d72.97830577374074!3d19.217415447520693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9da794fdeb1%3A0xa3831247f78f1277!2sPDSN%20Media%20Private%20Limited!5e0!3m2!1sen!2sin!4v1744892502501!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}



