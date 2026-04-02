"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useSiteSettings } from '@/lib/useSiteSettings'

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isActive = (path) => pathname === path
  const settings = useSiteSettings()

  const toggleNavbar = () => setNavIsOpened(!navIsOpened)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={() => setNavIsOpened(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300 ${navIsOpened ? 'opacity-100 lg:hidden' : 'opacity-0 pointer-events-none lg:hidden'}`}
      />

      {settings.faviconUrl && (
        <Head>
          <link rel="icon" href={settings.faviconUrl} />
        </Head>
      )}

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`sticky top-0 z-40 w-full flex flex-col transition-all duration-500 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]'
            : 'bg-white/95 backdrop-blur-xl shadow-sm'
        }`}
      >
        {/* Top gradient accent line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#00acd7] via-[#341f9b] to-[#00acd7] bg-[length:200%_100%] animate-gradient-x" />

        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between h-[72px] px-5 sm:px-10 md:px-12">

          {/* Logo */}
          <Link href="/" className="flex min-w-max items-center no-underline group">
            <Image
              src={settings.logoUrl || 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/logopdsn.webp'}
              alt="PDSN Media"
              width={130}
              height={60}
              className="w-24 sm:w-24 md:w-28 lg:w-32 h-auto transition-opacity duration-200 group-hover:opacity-85"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div
            className={`absolute left-0 top-full w-full bg-white border-t border-gray-100 shadow-2xl py-6 px-5 transition-all duration-300 lg:static lg:block lg:w-auto lg:bg-transparent lg:border-0 lg:shadow-none lg:p-0
              ${navIsOpened ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0 lg:visible lg:opacity-100 lg:translate-y-0'}
            `}
          >
            <ul className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-7">

              {/* Home & About */}
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`py-2 text-sm font-medium tracking-wide transition-all duration-200 relative group/link ${
                      isActive(href)
                        ? 'bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {label}
                    <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b] transition-all duration-300 ${isActive(href) ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
                  </Link>
                </li>
              ))}

              {/* Services Dropdown */}
              <li className="relative group select-none">
                <button
                  className={`cursor-pointer py-2 text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 relative ${
                    isActive('/programmatic-dooh') || isActive('/digimedia') || isActive('/content-creation') || isActive('/hyperlocal-marketing') || isActive('/turnkey-branding')
                      ? 'bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Services
                  <svg
                    className="w-3.5 h-3.5 text-gray-400 transition-transform duration-300 group-hover:rotate-180"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown panel */}
                <div className="invisible absolute left-0 top-[calc(100%+12px)] w-60 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50">
                  {/* Arrow */}
                  <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45 shadow-sm" />
                  <div className="relative bg-white rounded-xl border border-gray-100 shadow-2xl overflow-hidden">
                    {/* Gradient top strip */}
                    <div className="h-[3px] bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                    <div className="p-2">
                      {[
                        { label: 'DOOH', href: '/programmatic-dooh', desc: 'Digital Out-of-Home Advertising', icon: '📺' },
                        { label: 'Digi-Media', href: '/digimedia', desc: 'Digital Media Solutions', icon: '📱' },
                        { label: 'Content Creation', href: '/content-creation', desc: 'CGI & Anamorphic Production', icon: '🎬' },
                        { label: 'Hyperlocal Marketing', href: '/hyperlocal-marketing', desc: 'Geo-Targeted Campaigns', icon: '📍' },
                        { label: 'Turnkey Branding', href: '/turnkey-branding', desc: 'End-to-End Branding Solutions', icon: '🏷️' }
                      ].map(({ label, href, desc, icon }) => (
                        <Link
                          key={href}
                          href={href}
                          className={`flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group/item ${
                            isActive(href) ? 'bg-gradient-to-r from-[#00acd7]/10 to-[#341f9b]/10' : 'hover:bg-gray-50'
                          }`}
                        >
                          <span className="text-base mt-0.5 shrink-0">{icon}</span>
                          <div>
                            <span className={`font-semibold text-sm block ${
                              isActive(href)
                                ? 'bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent'
                                : 'text-gray-800 group-hover/item:text-[#341f9b]'
                            }`}>{label}</span>
                            <span className="text-xs text-gray-400 mt-0.5 block">{desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {/* Case Studies — standalone link */}
              <li>
                <Link
                  href="/case-studies"
                  className={`py-2 text-sm font-medium tracking-wide transition-all duration-200 relative group/link ${
                    isActive('/case-studies')
                      ? 'bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Case Studies
                  <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b] transition-all duration-300 ${isActive('/case-studies') ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
                </Link>
              </li>

              {/* Blog & Contact */}
              {[
                { label: 'Blogs', href: '/blog' },
                { label: 'Contact Us', href: '/contact' }
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`py-2 text-sm font-medium tracking-wide transition-all duration-200 relative group/link ${
                      isActive(href)
                        ? 'bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {label}
                    <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-[#00acd7] to-[#341f9b] transition-all duration-300 ${isActive(href) ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
                  </Link>
                </li>
              ))}

              {/* CTA Button */}
              <li>
                <Link
                  href="/vision-visible"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-[#00acd7]/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  Vision Visible
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleNavbar}
            aria-label="Toggle navigation menu"
            className="relative flex flex-col justify-center gap-[5px] w-10 h-10 pl-3 border-l border-gray-200 lg:hidden"
          >
            <span className={`block h-[2px] rounded-full bg-gray-800 transition-all duration-300 ${navIsOpened ? 'w-6 translate-y-[7px] rotate-45' : 'w-6'}`} />
            <span className={`block h-[2px] rounded-full bg-gray-800 transition-all duration-300 ${navIsOpened ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`block h-[2px] rounded-full bg-gray-800 transition-all duration-300 ${navIsOpened ? 'w-6 -translate-y-[7px] -rotate-45' : 'w-6'}`} />
          </button>
        </nav>
      </motion.header>
    </>
  )
}

export default Navbar
