// pages/digimedia.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetailView from '../components/ProductDetailView';
import Gallery from '../components/Gallery';

const products = [
    {
        title: 'SPL / S-Lite Series – A-Frame Digital Standee',
        brief: 'Lightweight, water-resistant frame with quick-swap graphics.',
        longDescription:
            'Our SPL / S-Lite Series A-Frame Digital Standee features anodized aluminum construction, UV-resistant PVC vinyl, and a patented quick-swap insert system. Available in 32″, 43″ and 55″ sizes with commercial-grade panels (350/500 nits) and up to 4K resolution. Ideal for cafes, retail and office environments—landscape or portrait orientation, IP5x-rated, with optional Windows/Android media player and full branding support.',
        imageSrc:
            'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product/AFrameStandee.webp',
        alt: 'SPL / S-Lite Series A-Frame Digital Standee',
        specGroups: [
            {
                title: '📊 Features',
                specs: [
                    { label: 'Use-Cases', value: 'Cafes, Retail, Offices' },
                    { label: 'Available Sizes', value: '32″, 43″, 55″' },
                    { label: 'Models', value: 'S-Lite32, SPL43, SPL55 Pro' },
                    { label: 'Panel Type', value: 'Commercial Grade Panels' },
                    { label: 'Brightness', value: '350 / 500 nits' },
                    { label: 'Resolution', value: '3,840 × 2,160' },
                    { label: 'Aspect Ratio', value: '9:16' },
                    { label: 'Orientation', value: 'Landscape / Portrait' },
                    { label: 'IP Rating', value: 'IP5x' },
                    { label: 'Touchscreen', value: 'No' },
                    { label: 'Auto On (Display)', value: 'Yes' },
                    { label: 'Speakers', value: 'Yes' },
                ],
            },
            {
                title: '💾 Media Player Specs',
                specs: [
                    { label: 'OS', value: 'Windows / Android' },
                    { label: 'USB Ports', value: '2 Ports' },
                    { label: 'HDMI Ports', value: '1 Port' },
                    { label: 'Internet Connectivity', value: 'RJ45 LAN Port' },
                    { label: 'Wi-Fi', value: 'Yes' },
                    { label: 'Auto On (Player)', value: 'Yes' },
                ],
            },
            {
                title: '🔧 Fabrication & Branding',
                specs: [
                    { label: 'Fabrication', value: 'MS Fabricated Structure' },
                    { label: 'Size', value: '-' },
                    { label: 'Weight', value: '-' },
                    { label: 'Toughened Glass (Front)', value: 'Yes' },
                    { label: 'Colour', value: 'Black / White' },
                    { label: 'Logo Branding', value: 'Available below the screen' },
                ],
            },
        ],
    },


    {
        title: 'Pixl Series – Active LED Standee',
        brief: 'High-impact LED standee for outdoor and DOOH deployments.',
        longDescription:
            'Pixl Series Active LED Standee is designed for premium digital-out-of-home branding, events, and rugged outdoor visibility. With pixel pitch options from P1.5 to P4 and compatibility with top-tier LED brands like Unilumin, AET, Absen, and Samsung, it’s a fully customizable solution tailored to performance, brightness, and modular scale. Controlled via NovaStar and driven by Android/Windows media players, it’s ideal for high-footfall zones and live event coverage.',
        imageSrc:
            'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product/ActiveLED.webp',
        alt: 'Pixl Series Active LED Standee',
        specGroups: [
            {
                title: '📊 Features',
                specs: [
                    { label: 'Use‑Cases', value: 'DOOH, Outdoor Branding, Events' },
                    { label: 'Pixel Pitch', value: 'P1.5, P2.5, P3, P4' },
                    { label: 'Models', value: 'Pixl1.5, Pixl2.5, Pixl3, Pixl4' },
                    { label: 'LED Brands', value: 'Unilumin, AET, Absen, Samsung' },
                    {
                        label: 'Brightness / Resolution / Aspect Ratio',
                        value: 'Based on requirement / configuration',
                    },
                    { label: 'IP Rating', value: 'Based on configuration' },
                    { label: 'Power Consumption', value: 'Based on configuration' },
                    { label: 'Cabinet Size / Weight', value: 'Custom / Brand dependent' },
                    { label: 'Controller', value: 'NovaStar' },
                ],
            },
            {
                title: '💾 Media Player Specs',
                specs: [
                    { label: 'OS', value: 'Windows / Android' },
                    { label: 'USB Ports', value: '2 Ports' },
                    { label: 'HDMI Ports', value: '1 Port' },
                    { label: 'Internet Connectivity', value: 'RJ45 LAN Port' },
                    { label: 'Wi‑Fi', value: 'Yes' },
                    { label: 'Auto On (Player)', value: 'Yes' },
                ],
            },
            {
                title: '🔧 Fabrication & Branding',
                specs: [
                    {
                        label: 'Structure & Design',
                        value: 'Fully fabricated based on site requirements',
                    },
                    {
                        label: 'Branding Area',
                        value: 'Custom placement on base or rear panel',
                    },
                    {
                        label: 'Size & Mounting',
                        value: 'Configured as per screen and location',
                    },
                ],
            },
        ],
    },

    {
        title: 'VTX / V‑Lite Series – Digital Pod Standee',
        brief: 'Elegant vertical display standee with full HD/4K panel and branding space.',
        longDescription:
            'The VTX / V‑Lite Series Digital Pod Standee is built for high‑footfall public spaces such as malls, hotels, and airports. Available in 43″, 55″, and 65″ sizes, it features commercial-grade 4K-ready panels, a secure metal frame, and front branding below the screen. With optional Android/Windows media player, this is a plug‑and‑play solution ideal for 24x7 deployments.',
        imageSrc:
            'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/product/DigitalPod.webp',
        alt: 'VTX / V-Lite Series Digital Pod Standee',
        specGroups: [
            {
                title: '📊 Features',
                specs: [
                    { label: 'Use‑Cases', value: 'Malls, Airports, Hotels, Showrooms' },
                    { label: 'Available Sizes', value: '43″, 55″, 65″' },
                    { label: 'Models', value: 'VTX‑Lite43, VTX55, VTX65 Pro' },
                    { label: 'Panel Type', value: 'Commercial Grade Panels' },
                    { label: 'Brightness', value: '350 / 500 nits' },
                    { label: 'Resolution', value: '3,840 × 2,160' },
                    { label: 'Aspect Ratio', value: '9:16' },
                    { label: 'Orientation', value: 'Landscape / Portrait' },
                    { label: 'IP Rating', value: 'IP5x' },
                    { label: 'Touchscreen', value: 'No' },
                    { label: 'Auto On (Display)', value: 'Yes' },
                    { label: 'Speakers', value: 'Yes' },
                    { label: 'Built-in Storage', value: '8GB' },
                ],
            },
            {
                title: '💾 Media Player Specs',
                specs: [
                    { label: 'OS', value: 'Windows / Android' },
                    { label: 'USB Ports', value: '2 Ports' },
                    { label: 'HDMI Ports', value: '1 Port' },
                    { label: 'Internet Connectivity', value: 'RJ45 LAN Port' },
                    { label: 'Wi‑Fi', value: 'Yes' },
                    { label: 'Auto On (Player)', value: 'Yes' },
                    { label: 'Player Storage', value: '32GB' },
                    { label: 'RAM', value: '4GB' },
                ],
            },
            {
                title: '🔧 Fabrication & Branding',
                specs: [
                    { label: 'Fabrication', value: 'MS Fabricated Structure' },
                    { label: 'Size', value: '-' },
                    { label: 'Weight', value: '-' },
                    { label: 'Toughened Glass (Front)', value: 'Yes' },
                    { label: 'Colour', value: 'Black / White' },
                    { label: 'Logo Branding', value: 'Available below the screen' },
                ],
            },
        ],
    },

];

const galleryImages = [

    { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (2).webp' },
    { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (3).webp' },
    { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (4).webp' },
    { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (5).webp' },
    { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (6).webp' },
    { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (7).webp' },
    { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (8).webp' },
    { src: 'https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/image (9).webp' },
];


export default function DigiMedia() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* Section 1 – Hero Full Width Actual Size Responsive */}
            <section className="relative w-full bg-black">
                <Image
                    src="https://cdn.jsdelivr.net/gh/ops-pdsn/cdn-assets@main/images/digimedia1.webp"
                    alt="All Digimedia Products"
                    width={1920}
                    height={960}
                    className="w-full h-auto object-contain"
                    priority
                />

                {/* Optional overlay (if needed) */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </section>



            <main className="flex-grow">
                {/* Section 2 – Intro */}
                <section className="py-12 text-center px-6">
                    <h2 className="text-3xl font-semibold mb-4 relative inline-block">
                        Explore Our Solutions
                        <span className="block h-1 w-16 bg-blue-600 mx-auto mt-2"></span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        From portable A‑Frames to massive LED walls and interactive kiosks, our Digimedia suite is engineered for maximum engagement and ROI. Scroll to dive into specs, variants, and use‑case insights.
                    </p>
                </section>

                {/* Section 3 – Product Accordion */}
                <section className="py-12 bg-gray-50 px-6">
                    <ProductDetailView products={products} />
                </section>
            </main>


            {/* Section – Recent Work Gallery */}
            <section className="py-12 px-6 bg-white">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    Recent Installations & Case Studies
                </h2>
                <Gallery images={galleryImages} />
                <p className="mt-4 text-center text-gray-600">
                    Click any image to enlarge. Our portfolio spans retail, corporate, hospitality, and events.
                </p>
            </section>

            {/* Section 4 – CTA Bar */}
            <div className="bg-blue-600 text-white py-6 px-6 flex flex-col sm:flex-row items-center justify-between">
                <span className="text-lg font-medium mb-4 sm:mb-0">
                    Ready to elevate your DOOH presence?
                </span>
                <div className="space-x-4">
                    <Link
                        href="/contact"
                        className="inline-block px-5 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 transition"
                    >
                        Request a Quote
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
