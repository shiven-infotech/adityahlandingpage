"use client";
import { useEffect } from "react";
import {
  FaUndoAlt,
  FaBaby,
  FaShieldAlt,
  FaHeartbeat,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HealthPackages() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const packages = [
    {
      title: "Reversal Package",
      icon: <FaUndoAlt className="text-green-700 text-4xl" />,
      description:
        "Designed to reverse chronic diseases through personalized homeopathy, nutrition, and lifestyle changes.",
      link: "/packages/reversal",
    },
    {
      title: "Garbh Sanskar Package",
      icon: <FaBaby className="text-green-700 text-4xl" />,
      description:
        "Promotes spiritual, physical, and emotional wellbeing during pregnancy with ancient practices and remedies.",
      link: "/packages/garbh-sanskar",
    },
    {
      title: "Immunity Boost Package",
      icon: <FaShieldAlt className="text-green-700 text-4xl" />,
      description:
        "Strengthen your immunity naturally with targeted therapies, herbs, and homeopathic medicines.",
      link: "/packages/immunity-boost",
    },
    {
      title: "Complete Wellness Package",
      icon: <FaHeartbeat className="text-green-700 text-4xl" />,
      description:
        "A holistic health journey combining detox, nutrition, and mental balance for all ages.",
      link: "/packages/wellness",
    },
  ];

  return (
    <section className="px-4 py-12 bg-[#e3ffe0]">
      <h2
        className="text-3xl font-bold text-center text-green-700 mb-10"
        data-aos="fade-down"
      >
        Health Packages
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left: Packages */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[500px] flex-1"
          data-aos="fade-right"
        >
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between h-[240px]"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {pkg.icon}
                  <h3 className="text-xl font-semibold text-green-800">
                    {pkg.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{pkg.description}</p>
              </div>
              <div className="mt-4">
                <Link href={pkg.link}>
                  <span className="inline-block bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition">
                    View Details
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="flex justify-center items-center flex-1" data-aos="fade-left">
          <Image
            src="/packages.jpg"
            alt="Health Packages"
            width={500}
            height={500}
            className="rounded-xl object-cover h-[500px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
