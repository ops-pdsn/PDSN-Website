'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery({ images }) {
  const [selected, setSelected] = useState(null);

  const goNext = useCallback(() => {
    if (selected === null) return;
    setSelected((selected + 1) % images.length);
  }, [selected, images.length]);

  const goPrev = useCallback(() => {
    if (selected === null) return;
    setSelected((selected - 1 + images.length) % images.length);
  }, [selected, images.length]);

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e) => {
      if (selected === null) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selected, goNext, goPrev]);

  /* Prevent body scroll when lightbox open */
  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <>
      {/* ── Gallery grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="group relative w-full aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05, duration: 0.45 }}
            viewport={{ once: true }}
            onClick={() => setSelected(idx)}
          >
            <Image
              src={img.src}
              alt={img.alt || `Installation ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Zoom icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>

            {/* Index label */}
            <span className="absolute bottom-2 right-3 text-white/60 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {idx + 1} / {images.length}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/92 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm font-medium tracking-widest">
              {selected + 1} / {images.length}
            </div>

            {/* Prev arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                className="relative z-10 w-[90vw] max-w-4xl h-[75vh] rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[selected].src}
                  alt={images[selected].alt || `Installation ${selected + 1}`}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  quality={90}
                />
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 overflow-x-auto max-w-[90vw] pb-1 px-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setSelected(idx); }}
                  className={`relative w-14 h-10 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
                    idx === selected ? 'border-[#00acd7] opacity-100' : 'border-white/20 opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
