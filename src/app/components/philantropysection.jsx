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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-green-800 mb-4 text-center lg:text-left">
            Our Philanthropy
          </h2>
          <p className="text-gray-700 mb-10 text-center lg:text-left max-w-2xl">
            At Aditya Homoeopathy, we believe in giving back to society.
            Through our philanthropic programs, we extend compassionate care
            to those who need it most — beyond the walls of our clinic.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div
          className="flex justify-center"
          data-aos="fade-left"
        >
          <div className="w-full max-w-[600px]">
            <Image
              src="/philantropy.jpg"
              alt="Philanthropy at Aditya Homoeopathy"
              width={600}
              height={500}
              className="rounded-2xl  object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
