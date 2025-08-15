"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BenefitsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    {
      title: "Holistic Healing",
      description:
        "Homeopathy treats the root cause, not just symptoms, considering physical, mental, and emotional aspects.",
    },
    {
      title: "No Side Effects",
      description:
        "Homeopathic medicines are natural, non-toxic, and safe for all age groups.",
    },
    {
      title: "Alternative Therapies",
      description:
        "Therapies like Acupressure, Naturopathy, and Nutrition support healing alongside homeopathy.",
    },
    {
      title: "Customized Treatment",
      description:
        "Treatments are personalized for every individual based on their complete health profile.",
    },
    {
      title: "Long-Term Relief",
      description:
        "Chronic issues like allergies, migraines, and hormonal disorders show long-term improvements.",
    },
    {
      title: "Safe for Children & Pregnant Women",
      description:
        "Gentle remedies are ideal even during pregnancy and infancy.",
    },
  ];

  return (
    <section className="px-6 py-12 bg-[#e3ffe0]">
      <h2
        className="text-3xl font-bold text-green-700 text-center mb-10"
        data-aos="fade-down"
      >
        Benefits of Homeopathy & Alternative Therapies
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Left Image */}
        <div className="flex justify-center items-center w-full lg:w-1/2" data-aos="fade-right">
          <Image
            src="/benefits.jpeg"
            alt="Benefits"
            width={600}
            height={600}
            className="rounded-xl w-full h-[600px] object-cover"
          />
        </div>

        {/* Right Benefits Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2"
          data-aos="fade-left"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 h-[180px] flex flex-col justify-between"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
