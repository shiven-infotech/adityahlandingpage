"use client";
import { FaAppleAlt, FaSpa, FaPrayingHands, FaRecycle } from "react-icons/fa";
import Link from "next/link";

export default function AlternativeTherapies() {
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
    <section className="px-4 py-8 bg-[#FFFDD0]">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Alternative Therapies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {therapies.map((therapy) => (
          <div
            key={therapy.title}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                {therapy.icon}
                <h3 className="text-xl font-semibold text-green-800">
                  {therapy.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{therapy.description}</p>
            </div>
            <div className="mt-4">
              <Link href={therapy.link}>
                <span className="inline-block bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
