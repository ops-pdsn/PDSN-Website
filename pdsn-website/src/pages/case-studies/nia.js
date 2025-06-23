// pages/case-studies/agrasen.js

import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AgrasenCaseStudy() {
    return (
        <>
            <Head>
                <title>New India Assurance – Head Office Digital Screen Deployment | Case Study | PDSN</title>
                <meta
                    name="description"
                    content="A-Frame Digital Standees and Wall-Mounted Digital Screen"
                />
                <meta property="og:title" content="New India Assurance – Head Office Digital Screen Deployment | Case Study | PDSN" />
                <meta
                    property="og:description"
                    content="New India Assurance – Head Office Digital Screen Deployment | Case Study | PDSN"
                />
                <meta property="og:url" content="https://yourdomain.com/case-studies/agrasen" />
            </Head>

            <Header />

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800">

                {/* Back and Home Buttons */}
                <div className="flex justify-between items-center mb-10">
                    <Link
                        href="/case-studies"
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition text-sm"
                    >
                        ← Back to Case Studies
                    </Link>
                    <Link
                        href="/"
                        className="bg-blue-50 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition text-sm"
                    >
                        Home
                    </Link>
                </div>

                {/* Case Study Title */}
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    New India Assurance – Head Office Digital Screen Deployment
                </h1>

                {/* Embedded YouTube Video */}
                <div className="relative w-full pb-[56.25%] mb-10 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/7gPmqik-oIo?si=MwPO2RVv505azHr3"
                        title="NIA Case Study"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Description Paragraphs */}
                <p className="mb-4">
                    🎯 Objective: To enhance internal branding, streamline communication, and modernize the digital presence within New India Assurance’s head office environment.
                </p>
                <p className="mb-4">
                    🔍 Background & Client Need:-
                    <br></br>
                    The New India Assurance, one of India’s leading public sector general insurance companies, sought to elevate the digital infrastructure within its Mumbai headquarters. With a constant flow of employees, stakeholders, and visitors, the client recognized the need for impactful and modern digital communication tools that could support internal branding and real-time information sharing.
                </p>
                <p className="mb-4">
                    💥 Impact & Results
                    Enhanced engagement with employees and visitors through dynamic visual content Real-time communication of updates and brand messaging Upgraded visual appeal and modernization of the office environment
                </p>
                <p className="mb-4">
                    ✅ Conclusion:- Through this installation, New India Assurance has taken a significant step toward embracing digital transformation within its physical spaces.
                </p>
                <p className="mb-4">
                    PDSN Media is proud to have contributed to this upgrade, offering innovative display solutions that align with the company’s vision of a future-forward workplace.
                </p>
                {/* Solution Summary */}
                <p className="font-semibold">
                    Solution: A-Frame Digital Standees and Wall-Mounted Digital Screen
                </p>
            </main>

            <Footer />
        </>
    );
}
