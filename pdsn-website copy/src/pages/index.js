// pages/index.js

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ClientLogoSlider from '@/components/ClientLogoSlider'
import OverviewCardsSection from '@/components/OverviewCardsSection'
import TwoColumnMetricsWithVideo from '@/components/TwoColumnMetricsWithVideo'
import FeaturedCaseStudiesSection from '@/components/FeaturedCaseStudiesSection'
import TwoRowMarquee from '@/components/TwoRowMarquee'
import TestimonialSection from '@/components/TestimonialSection'
import BlogCard from '@/components/BlogCard'
import CTASection from '@/components/CTASection'
import Head from 'next/head';

export default function Home() {
  return (
    <>

      <Head>
        <title>PDSN Media Pvt Ltd | Smart, Scalable DOOH Solutions</title>
        <meta
          name="description"
          content="Revolutionising India's DOOH landscape with programmatic screens, analytics and nationwide reach."
        />
      </Head>
      <Header />
      <HeroSection />
      <OverviewCardsSection />
      <ClientLogoSlider />
      <TwoColumnMetricsWithVideo />
      <FeaturedCaseStudiesSection />
      <TwoRowMarquee />
      <TestimonialSection />
      <BlogCard />
      <CTASection />
      <Footer />
    </>
  )
}
