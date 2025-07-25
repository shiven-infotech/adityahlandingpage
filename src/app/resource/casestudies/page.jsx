"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function CaseStudiesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cases = [
    {
      title: "Chronic Psoriasis Recovery",
      summary:
        "A 34-year-old male patient experienced complete relief from chronic psoriasis symptoms within 6 months using homeopathic treatment.",
      image: "/images/casestudy1.jpg",
    },
    {
      title: "Childhood Asthma Controlled Naturally",
      summary:
        "A 7-year-old girl suffering from frequent asthma attacks found long-term relief through constitutional homeopathy.",
      image: "/images/casestudy2.jpg",
    },
    {
      title: "Migraine and Hormonal Imbalance",
      summary:
        "Female patient in her 40s with intense migraines linked to hormonal imbalance was successfully managed using homeopathy.",
      image: "/images/casestudy3.jpg",
    },
    {
      title: "Acne & Hormonal Skin Disorders",
      summary:
        "Teenage patient treated for cystic acne and PCOS-related skin flare-ups with visible results in 3 months.",
      image: "/images/casestudy4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <section className="text-center" data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">Case Studies</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories of healing and transformation through homeopathy and holistic care.
            </p>
          </section>

          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cases.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.summary}</p>
                  <button className="mt-4 text-green-600 font-semibold hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
