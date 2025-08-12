import { caseStudiesData } from "@/lib/caseStudiesData";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HealthcareCaseStudies() {
  const filteredStudies = caseStudiesData.filter(study => study.category === "DOOH");

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Explore Our Impactful Campaigns</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <Link href={`/case-studies/${study.slug}`} key={study.slug} className="block">
              <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={400}
                  height={250}
                  className="object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{study.title}</h3>
                  <p className="text-gray-600 text-sm">{study.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
