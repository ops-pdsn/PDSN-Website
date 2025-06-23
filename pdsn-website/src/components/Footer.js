"use client";

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaYoutube, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
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
        toast.success('Your inquiry has been sent!');
        reset();
      } else {
        toast.error('Failed to send message. Try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="text-white relative">
      <Toaster position="top-right" />

      <div className="bg-gradient-to-r from-[#00acd7]/95 to-[#341f9b]/95 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-4">PDSN MEDIA PVT. LTD.</h3>
            <p className="text-sm text-white/90">Revolutionizing the DOOH landscape with smart, scalable, and creative media solutions.</p>
            <div className="flex gap-4 mt-4">
              <a href="https://linkedin.com/company/pdsnmedia" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
              <a href="https://instagram.com/pdsnmedia" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
              <a href="https://www.facebook.com/people/PDSN-MEDIA/61564435343645/" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
              <a href="https://www.youtube.com/@PDSNMedia" target="_blank" rel="noopener noreferrer"><FaYoutube size={20} /></a>

            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li className="relative group select-none">
                <span className="cursor-pointer hover:underline">Services</span>
                <ul className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-md bg-white text-gray-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                  {[
                    { label: 'DOOH', href: '/programmatic-dooh' },
                    { label: 'Digi-Media', href: '/digimedia' },
                    { label: 'Content Creation', href: '/content-creation' },
                    { label: 'Hyperlocal Marketing', href: '/hyperlocal-marketing' }

                  ].map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="block px-4 py-2 text-sm transition hover:bg-blue-50 hover:text-[#341f9b]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/vision-visible" className="hover:underline">Vision Visible</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-4 text-white">Contact us</h3>
            <div className="space-y-3 text-sm text-white/90">
              <p className="flex items-start gap-2"><FaEnvelope className="mt-1 text-white/70" /> sales@pdsn.in</p>
              <p className="flex items-start gap-2"><FaPhoneAlt className="mt-1 text-white/70" /> +91-8369891418 / 022-45133548</p>
              <p className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-white/70 text-xl" /> SB-17, 2nd Floor, Highland Corporate Park, High Street Mall, Kapurbawdi Junction, Thane West, Mumbai 400607.</p>
            </div>
          </motion.div>

          {/* Column 4: Inquiry Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-4">Quick Inquiry</h3>
            <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name *"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 rounded-md bg-white text-black text-sm placeholder:text-gray-500"
              />
              {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>}

              {/* Phone */}
              <input
                type="tel"
                placeholder="Your Phone *"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: 'Enter a valid phone number',
                  },
                })}
                className="w-full px-4 py-2 rounded-md bg-white text-black text-sm placeholder:text-gray-500"
              />
              {errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone.message}</p>}

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email *"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Enter a valid email address',
                  },
                })}
                className="w-full px-4 py-2 rounded-md bg-white text-black text-sm placeholder:text-gray-500"
              />
              {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}

              {/* Message */}
              <textarea
                rows="3"
                placeholder="Your Message *"
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-2 rounded-md bg-white text-black text-sm placeholder:text-gray-500"
              />
              {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-white text-[#341f9b] font-semibold rounded-md hover:bg-blue-100 transition"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </motion.form>
          </motion.div>

        </div>
      </div>

      <div className="bg-black text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} PDSN Media. All rights reserved.
      </div>
    </footer>
  );
}
