"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClassicalHomeopathySection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const features = [
    {
      title: "Individualized Treatment",
      text: "Every patient receives a remedy tailored specifically to their overall condition, not just their disease.",
      animation: "fade-up",
    },
    {
      title: "Root Cause Focus",
      text: "Instead of suppressing symptoms, classical homeopathy aims to address the root cause for long-term relief.",
      animation: "fade-up",
    },
    {
      title: "Gentle & Safe",
      text: "Remedies are natural and non-toxic, making them safe for people of all ages—including infants and the elderly.",
      animation: "fade-up",
    },
  ];

  return (
    <section className="bg-[#e3ffe0] px-6 py-12  text-center">
      <h2
        className="text-3xl font-bold text-green-700 mb-4"
        data-aos="fade-down"
      >
        What is Classical Homeopathy?
      </h2>

      <p
        className="text-gray-700 max-w-4xl mx-auto mb-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Classical Homeopathy is a time-tested system of natural healing based on
        the principle of "like cures like." It focuses on treating the individual
        as a whole—mind, body, and spirit—using minimal doses of natural
        substances to stimulate the body's self-healing abilities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            data-aos={item.animation}
            data-aos-delay={idx * 100}
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
