"use client";

import { useEffect, useRef, Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Lazy-loaded heavy components
const ThreeDViewer = dynamic(() => import("@/components/ThreeDViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white" />
    </div>
  ),
});

const serviceBlocks = [
  {
    title: "Motion Graphics",
    icon: "🎞️",
    description: "High‑energy visuals for advertisements, product videos, and DOOH campaigns.",
    brief: "Dynamic animated graphics that communicate your brand's story with energy and flair.",
    type: "video",
    media: ["/videos/motion1.webm", "/videos/motion2.webm"]
  },
  {
    title: "2D & 3D Animation",
    icon: "🧩",
    description: "Storytelling through dimensional visuals for all platforms.",
    brief: "Bring characters, ideas, and concepts to life with captivating animation in two or three dimensions.",
    type: "video",
    media: ["/videos/2Danimation.webm", "/videos/3Danimation3.webm", "/videos/3Danimation.webm"]
  },
  {
    title: "CGI Content",
    icon: "🎨",
    description: "Photorealistic renders to enhance product appeal and realism.",
    brief: "Use digital artistry to craft ultra‑realistic visuals for advertising and storytelling.",
    type: "video",
    media: ["/images/cgi1.webp", "/videos/cgi1.webm", "/images/cgi2.webp"]
  },
  {
    title: "Anamorphic Design",
    icon: "🌀",
    description: "Immersive illusions tailored for large‑scale DOOH.",
    brief: "Create mind‑bending 3‑D illusions that mesmerize viewers on large digital screens.",
    type: "video",
    media: ["/videos/anamorphic3.webm", "/videos/anamorphic2.webm", "/videos/anamorphic1.webm"]
  },
  {
    title: "Product Application Videos",
    icon: "📹",
    description: "Showcase your product in real‑world use cases.",
    brief: "Highlight the value and versatility of your product through engaging demo videos.",
    type: "video",
    media: ["/videos/productapp1.webm", "/videos/productapp2.webm", "/videos/productapp3.webm"]
  },
  {
    title: "Digi-Greetings",
    icon: "🎊",
    description: "Festive and brand‑specific animated greetings.",
    brief: "Celebrate special moments with beautifully animated greeting messages tailored to your brand.",
    type: "video",
    media: ["/videos/digigreeting1.webm", "/videos/digigreeting2.webm", "/videos/digigreeting3.webm", "/videos/digigreeting4.webm"]
  },
  {
    title: "Corporate Shoots",
    icon: "🏢",
    description: "Professional shoots for business branding and communication.",
    brief: "Crisp, high‑quality visuals that represent your corporate identity with professionalism.",
    type: "video",
    media: ["/videos/corporate1.webm", "/videos/corporate2.webm"]
  },
  {
    title: "Product Shoots",
    icon: "📸",
    description: "Capture your product from its best angle with studio‑quality images.",
    brief: "Visual storytelling that puts your product in the spotlight with stunning photography.",
    type: "image",
    media: ["/images/product1.webp", "/images/product2.webp", "/images/product3.webp"]
  }
];

// Optimized Lazy Video Component
const LazyVideo = ({ src, aspect = 'video', poster = "/images/poster-placeholder.webp" }) => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const videoElement = videoRef.current;
    if (inView && videoElement) {
      videoElement.play().catch(() => { });
    }
    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    };
  }, [inView]);

  return (
    <video
      ref={(el) => {
        ref(el);
        videoRef.current = el;
      }}
      src={inView ? src : undefined}
      loop
      muted
      playsInline
      preload={inView ? "auto" : "none"}
      poster={poster}
      role="img"
      aria-label="Visual content preview"
      className={`w-full h-full object-cover ${aspect === 'square' ? 'aspect-square' : 'aspect-video'}`}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

export default function ContentCreationPage() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" as="video" href="/videos/hero-bg.webm" type="video/webm" />
      </Head>

      <Header />
      <main className="bg-white text-black scroll-smooth overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative py-32 px-6 text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <LazyVideo src="/videos/hero-bg.webm" aspect="video" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00acd7]/60 to-[#341f9b]/70" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              We Bring Brands to Life with Stunning Visual Content
            </h1>
            <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto">
              From motion graphics to anamorphic illusions — explore our powerful storytelling in every frame.
            </p>
            <Link
              href="#services"
              className="mt-6 inline-block bg-white text-[#341f9b] font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition"
            >
              See Our Work
            </Link>
          </motion.div>
        </section>

        {/* Why Content Matters Section */}
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Content Creation Matters</h2>
            <p className="text-lg text-gray-600">
              In today&apos;s attention-driven world, impactful visual content is the currency of brand storytelling.
              From social media to out-of-home campaigns, great content captivates, engages, and converts.
              Whether it&apos;s a motion graphic for Instagram or an anamorphic illusion on a billboard, investing in strong visuals empowers your brand to rise above the noise.
            </p>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 space-y-24">
          {serviceBlocks.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
                <span>{service.icon}</span> {service.title}
              </h2>
              <p className="text-lg text-gray-700 mb-4">{service.description}</p>
              <p className="text-base text-gray-500 mb-8">{service.brief}</p>

              <div className={`grid gap-6 ${service.title === "Digi-Greetings"
                  ? "grid-cols-2 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}>
                {service.media.map((src, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden shadow-md">
                    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
                      {src.endsWith('.webm') ? (
                        <LazyVideo src={src} aspect={service.title === "Digi-Greetings" ? "square" : "video"} poster="/images/poster-placeholder.webp" />
                      ) : (
                        <Image
                          src={src}
                          alt={service.title}
                          width={800}
                          height={600}
                          role="img"
                          aria-label="Service preview"
                          className={`w-full h-full object-cover ${service.title === "Digi-Greetings" ? "aspect-square" : "aspect-video"}`}
                          loading="lazy"
                          decoding="async"
                          placeholder="blur"
                          blurDataURL="/images/placeholder.webp"
                        />
                      )}
                    </Suspense>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                      <div className="text-[8vw] font-bold text-white opacity-5 rotate-[45deg] whitespace-nowrap select-none">
                        PDSN MEDIA COPYRIGHT
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {service.title === "2D & 3D Animation" && (
                <div className="py-20">
                  <h3 className="text-3xl font-bold mb-8 text-center">🧩 Interactive 3D Models</h3>
                  <p className="text-lg text-center text-gray-500 mb-12">
                    Experience our product designs in real‑time 3‑D. Rotate, zoom, and explore each creation.
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {['model1.glb', 'model2.glb'].map((model, i) => (
                      <div key={i} className="relative w-full h-[400px] sm:h-[500px] bg-[#181a2a] rounded-xl shadow-md">
                        <Suspense fallback={<div className="flex items-center justify-center h-full">
                          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white" />
                        </div>}>
                          <ThreeDViewer modelUrl={`/assets/models/${model}`} />
                        </Suspense>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center py-20 bg-[#1a1b3a] text-white">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Create Magic Together</h2>
          <p className="text-lg mb-6">Got a vision? We&apos;ll bring it to life with world-class visuals.</p>
          <Link
            href="/contact"
            className="bg-white text-[#341f9b] px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition"
          >
            Start Your Project
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
