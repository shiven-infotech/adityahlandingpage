"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PhilanthropySection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const initiatives = [
    {
      title: "Free Rural Health Camps",
      description:
        "We regularly conduct free homeopathy camps in underprivileged rural areas, providing consultations and medicines.",
    },
    {
      title: "Support for Women & Children",
      description:
        "Special initiatives for women and children’s health—focusing on nutrition, menstrual health, and immunity.",
    },
    {
      title: "Community Education",
      description:
        "Workshops to spread awareness about natural healing, hygiene, and preventive care in underserved communities.",
    },
    {
      title: "Medicine Donations",
      description:
        "We contribute essential homeopathic remedies to NGOs, orphanages, and disaster relief programs.",
    },
  ];

  return (
    <section className="bg-[#e3ffe0] py-12 px-6">
      {/* Centered Header */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Our Philanthropy
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          At Aditya Homoeopathy, we believe in giving back to society.
          Through our philanthropic programs, we extend compassionate care
          to those who need it most — beyond the walls of our clinic.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Left: Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 h-[400px]" data-aos="fade-right">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition h-[190px] flex flex-col justify-between"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div
          className="w-full lg:w-1/2 flex justify-center items-center"
          data-aos="fade-left"
        >
          <Image
            src="/philantropy.jpg"
            alt="Philanthropy at Aditya Homoeopathy"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-[400px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
