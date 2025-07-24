"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaAppleAlt, FaSpa, FaPrayingHands, FaRecycle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function AlternativeTherapies() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const therapies = [
    {
      title: "Nutrition Therapy",
      icon: <FaAppleAlt className="text-green-700 text-4xl" />,
      description: "Personalized diet plans to heal and balance your body naturally.",
      link: "/therapies/nutrition",
    },
    {
      title: "Acupuncture",
      icon: <FaSpa className="text-green-700 text-4xl" />,
      description: "Stimulate energy points to restore balance and relieve chronic issues.",
      link: "/therapies/acupuncture",
    },
    {
      title: "Yoga & Meditation",
      icon: <FaPrayingHands className="text-green-700 text-4xl" />,
      description: "Mind-body practices to enhance flexibility, focus, and peace.",
      link: "/therapies/yoga",
    },
    {
      title: "Detox Therapy",
      icon: <FaRecycle className="text-green-700 text-4xl" />,
      description: "Remove toxins and rejuvenate your system with gentle cleansing.",
      link: "/therapies/detox",
    },
  ];

  return (
    <section className="px-4 py-12 bg-[#e3ffe0]">

        <div className="col-span-full w-full text-center mb-6">
  <h2 className="text-3xl font-bold text-green-700 mb-6 text-center ">
            Alternative Therapies
          </h2>
            </div>

      <div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        data-aos="fade-up"
      >
        {/* Left Image Section */}
        <div className="w-full h-full order-1 lg:order-none" data-aos="fade-right">
          <Image
            src="/thrapies.jpg"
            alt=" Therapies"
            width={600}
            height={500}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Right Text + Cards Section */}

        <div data-aos="fade-left">
          

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {therapies.map((therapy, index) => (
              <div
                key={therapy.title}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-3 mb-2">
                  {therapy.icon}
                  <h3 className="text-lg font-semibold text-green-800">
                    {therapy.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{therapy.description}</p>
                <Link href={therapy.link}>
                  <span className="inline-block bg-green-700 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-green-800 transition">
                    Learn More
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
