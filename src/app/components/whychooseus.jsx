"use client";

import {
  FaLightbulb,
  FaHandsHelping,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100, // Ensures animations trigger earlier
    });
  }, []);

  const features = [
    {
      icon: <FaLightbulb className="text-green-600 text-3xl" />,
      title: "Expert Knowledge",
      description: "Led by highly trained homoeopaths",
    },
    {
      icon: <FaHandsHelping className="text-green-600 text-3xl" />,
      title: "Personalized Care",
      description: "Treatments tailored to your needs",
    },
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      title: "Holistic Approach",
      description: "Focus on overall well-being",
    },
    {
      icon: <FaCheckCircle className="text-green-600 text-3xl" />,
      title: "Proven Results",
      description: "Long track record of patient improvement",
    },
  ];

  return (
    <section className="py-12 px-4 bg-[#e3ffe0] text-gray-800 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        WHY CHOOSE US
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Features Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex gap-4 items-start"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 flex justify-center items-center"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <img
            src="/whychooseus.png"
            alt="Why Choose Us"
            className="rounded-2xl shadow-md w-[90%] max-w-xs sm:max-w-sm md:max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
