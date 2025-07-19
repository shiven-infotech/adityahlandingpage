"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeopathyMythsFacts() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const data = [
    {
      myth: "Homeopathy is just placebo.",
      fact: "Scientific studies and patient outcomes show homeopathy can be effective beyond placebo in many cases.",
    },
    {
      myth: "Homeopathy is too slow to work.",
      fact: "In acute conditions like fever or diarrhea, homeopathic remedies can act quickly. Chronic cases take time, like in any system.",
    },
    {
      myth: "Homeopathy and allopathy can't be taken together.",
      fact: "Homeopathy can often be safely used alongside allopathic treatments with proper guidance.",
    },
    {
      myth: "Homeopathic medicines have steroids.",
      fact: "Authentic homeopathic medicines are plant/mineral based and free from steroids. Lab testing can verify purity.",
    },
    {
      myth: "You need to stop coffee or onion with homeopathy.",
      fact: "Only certain remedies may be affected by strong substances — restrictions vary by case, not for all remedies.",
    },
    {
      myth: "Homeopathy is only for chronic diseases.",
      fact: "It is effective in both acute (cold, fever) and chronic (allergy, skin, hormonal) conditions.",
    },
  ];

  const topItems = data.slice(0, 2);
  const bottomItems = data.slice(2);

  return (
    <div className="bg-[#e3ffe0] py-12 px-4">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-10">
        Myths & Facts About Homeopathy
      </h1>

      {/* Top Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto gap-10">
        {/* Left Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
          {topItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 border border-green-100"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h2 className="text-lg font-semibold text-red-500 mb-2">Myth</h2>
              <p className="text-gray-800 mb-4">{item.myth}</p>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Fact</h3>
              <p className="text-gray-700">{item.fact}</p>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
            <Image
              src="/facts.png"
              alt="Doctors with natural elements"
              width={400}
              height={400}
              priority
              className="rounded-2xl object-contain w-full h-auto max-h-[450px] transition-transform duration-700 ease-in-out hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {bottomItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 border border-green-100"
            data-aos="fade-up"
            data-aos-delay={(index + 2) * 150}
          >
            <h2 className="text-lg font-semibold text-red-500 mb-2">Myth</h2>
            <p className="text-gray-800 mb-4">{item.myth}</p>
            <h3 className="text-lg font-semibold text-green-600 mb-2">Fact</h3>
            <p className="text-gray-700">{item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
