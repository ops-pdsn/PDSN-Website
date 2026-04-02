'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Spec-group icons (replace emojis) ─── */
const specGroupIcon = (title) => {
  if (title.includes('Feature') || title.includes('📊')) {
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    );
  }
  if (title.includes('Media') || title.includes('💾')) {
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
};

/* Strip emoji prefix from title */
const cleanTitle = (t) => t.replace(/^[\u{1F000}-\u{1FFFF}\u2600-\u26FF\u2700-\u27BF]\s*/u, '');

export default function ProductDetailView({ products }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const prod = products[activeIdx];

  return (
    <div className="flex flex-col lg:flex-row min-h-[600px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">

      {/* ── Left sidebar — product nav ── */}
      <nav className="lg:w-72 xl:w-80 bg-gray-50 border-r border-gray-200 flex-shrink-0 flex flex-col">
        <div className="px-6 pt-7 pb-5 border-b border-gray-200">
          <p className="text-[#00acd7] text-xs font-bold tracking-[0.22em] uppercase mb-1">Product Range</p>
          <h3 className="text-gray-900 text-lg font-extrabold leading-tight">DigiMedia Suite</h3>
        </div>

        <div className="flex-1 overflow-y-auto py-3">
          {products.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActiveIdx(i)}
              className={`w-full text-left px-6 py-4 transition-all duration-200 relative group border-b border-gray-100 ${
                i === activeIdx
                  ? 'bg-gradient-to-r from-[#00acd7]/10 to-[#341f9b]/5'
                  : 'hover:bg-gray-100'
              }`}
            >
              {/* Active left border */}
              <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00acd7] to-[#341f9b] transition-opacity duration-200 ${
                i === activeIdx ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
              }`} />

              <span className={`block text-xs font-bold tracking-[0.18em] uppercase mb-1 ${
                i === activeIdx ? 'text-[#00acd7]' : 'text-gray-400'
              }`}>
                {`0${i + 1}`}
              </span>
              <span className={`block text-sm font-semibold leading-snug ${
                i === activeIdx ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'
              }`}>
                {p.title}
              </span>
              <span className="block text-xs text-gray-400 mt-1 leading-snug">{p.brief}</span>
            </button>
          ))}
        </div>

        {/* Sidebar footer */}
        <div className="px-6 py-5 border-t border-gray-200">
          <p className="text-gray-500 text-xs leading-relaxed">
            All products are available with custom branding and sizing. Contact us for a tailored quote.
          </p>
        </div>
      </nav>

      {/* ── Right panel — product detail ── */}
      <div className="flex-1 bg-white overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="h-full"
          >
            {/* Product header */}
            <div className="px-8 pt-8 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b]" />
                <span className="text-[#00acd7] text-xs font-bold tracking-[0.2em] uppercase">
                  Product {`0${activeIdx + 1}`} of {products.length}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {prod.title}
              </h2>
            </div>

            <div className="px-8 py-8">
              {/* Two-col: image + description */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Product image */}
                <div className="relative rounded-xl overflow-hidden bg-gray-50 border border-gray-100" style={{ minHeight: '260px' }}>
                  <Image
                    src={prod.imageSrc}
                    alt={prod.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col justify-center gap-4">
                  <p className="text-gray-600 leading-relaxed text-sm">{prod.longDescription}</p>

                  {/* Use-case quick pills */}
                  {prod.specGroups?.[0]?.specs?.find(s => s.label.includes('Use')) && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {prod.specGroups[0].specs
                        .find(s => s.label.includes('Use'))
                        ?.value.split(',').map((uc, i) => (
                          <span key={i} className="inline-flex items-center text-[10px] font-bold tracking-[0.15em] uppercase text-[#00acd7] bg-[#00acd7]/8 px-2.5 py-1 rounded-full border border-[#00acd7]/15">
                            {uc.trim()}
                          </span>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Spec groups */}
              <div className="space-y-8">
                {(prod.specGroups || [{ title: 'Specifications', specs: prod.specs }]).map((g) => (
                  <div key={g.title}>
                    {/* Group header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00acd7]/15 to-[#341f9b]/15 border border-[#00acd7]/15 flex items-center justify-center text-[#00acd7]">
                        {specGroupIcon(g.title)}
                      </div>
                      <h3 className="text-base font-bold text-gray-900">{cleanTitle(g.title)}</h3>
                      <div className="flex-1 h-px bg-gray-100" />
                    </div>

                    {/* Spec table */}
                    <div className="rounded-xl overflow-hidden border border-gray-100">
                      {g.specs.map((s, si) => (
                        <div
                          key={s.label}
                          className={`grid grid-cols-2 sm:grid-cols-[200px_1fr] text-sm ${
                            si % 2 === 0 ? 'bg-gray-50/60' : 'bg-white'
                          }`}
                        >
                          <span className="px-4 py-3 font-semibold text-gray-700 border-r border-gray-100 text-xs">
                            {s.label}
                          </span>
                          <span className="px-4 py-3 text-gray-500 text-xs font-medium">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Product CTA */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00acd7] to-[#341f9b] px-7 py-3 rounded-lg text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#00acd7]/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Request a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-7 py-3 rounded-lg font-semibold text-sm hover:border-[#00acd7]/40 hover:text-[#00acd7] transition-all duration-200"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
