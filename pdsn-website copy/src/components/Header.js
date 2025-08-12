"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false)
  const pathname = usePathname()
  const isActive = (path) => pathname === path

  const toggleNavbar = () => setNavIsOpened(!navIsOpened)

  return (
    <>
      {/* mobile backdrop */}
      <div
        onClick={() => setNavIsOpened(false)}
        className={`fixed inset-0 bg-gray-800/40 z-30 ${navIsOpened ? 'lg:hidden' : 'hidden lg:hidden'}`}
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6, ease: 'easeOut' }}
        className="sticky top-0 z-40 h-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg flex items-center"
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-x-5 px-5 sm:px-10 md:px-12">

          {/* logo */}
          <Link href="/" className="flex min-w-max items-center gap-2.5 no-underline">
            <Image
              src="/images/logopdsn.webp"
              alt="PDSN logo"
              width={100}
              height={100}
              className="w-24 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto"
              priority
            />

          </Link>


          {/* nav links */}
          <div
            className={`absolute left-0 top-full w-full bg-white py-8 px-5 transition-all duration-300 lg:static lg:block lg:w-auto lg:bg-transparent lg:p-0
              ${navIsOpened ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-10 opacity-0 lg:visible lg:opacity-100 lg:translate-y-0'}
            `}
          >
            <ul className="flex flex-col gap-6 text-gray-700 lg:flex-row lg:items-center lg:gap-6">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`py-2.5 transition duration-300 ${isActive(href)
                        ? 'bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#00acd7] hover:to-[#341f9b] hover:bg-clip-text hover:text-transparent'
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* dropdown */}
              <li className="relative group select-none">
                <span
                  className={`cursor-pointer py-2.5 transition ${isActive('/programmatic-dooh')
                      ? 'bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent'
                      : 'text-gray-700 group-hover:bg-gradient-to-r group-hover:from-[#00acd7] group-hover:to-[#341f9b] group-hover:bg-clip-text group-hover:text-transparent'
                    }`}
                >
                  Services
                </span>

                <ul className="invisible absolute left-0 top-full mt-2 w-52 overflow-hidden rounded-md bg-white shadow-lg opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 z-50">
                  {[
                    { label: 'DOOH', href: '/programmatic-dooh' },
                    { label: 'Content Creation', href: '/content-creation' },
                    { label: 'Hyperlocal Marketing', href: '/hyperlocal-marketing' }
                  ].map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`block px-4 py-2 text-sm transition ${isActive(href)
                            ? 'bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent'
                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#00acd7] hover:to-[#341f9b] hover:bg-clip-text hover:text-transparent'
                          }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* remaining nav links */}
              {[
                { label: 'Blogs', href: '/blog' },
                { label: 'Contact Us', href: '/contact' }
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`py-2.5 transition duration-300 ${isActive(href)
                        ? 'bg-gradient-to-r from-[#00acd7] to-[#341f9b] bg-clip-text text-transparent'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#00acd7] hover:to-[#341f9b] hover:bg-clip-text hover:text-transparent'
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* CTA */}
              <li>
                <Link
                  href="/vision-visible"
                  className="rounded-md bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-4 py-2.5 font-semibold text-white shadow-md transition hover:opacity-90"
                >
                  Vision Visible
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile hamburger */}
          <button
            onClick={toggleNavbar}
            aria-label="toggle navbar"
            className="relative border-l border-indigo-100 pl-3 lg:hidden"
          >
            <span
              className={`block h-0.5 w-6 rounded bg-gray-800 transition-transform duration-300 ${navIsOpened ? 'translate-y-[7px] rotate-45' : ''
                }`}
            />
            <span
              className={`mt-2 block h-0.5 w-6 rounded bg-gray-800 transition-transform duration-300 ${navIsOpened ? '-translate-y-[7px] -rotate-45' : ''
                }`}
            />
          </button>
        </nav>
      </motion.header>
    </>
  )
}

export default Navbar
