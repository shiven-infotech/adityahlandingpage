'use client';

import {
  FaChild,
  FaHeart,
  FaSmile,
  FaLeaf,
  FaUserMd,
  FaFemale,
  FaUser,
  FaRegClock,
  FaBrain,
} from "react-icons/fa";
import Link from "next/link";

export default function TreatmentsCard() {
  const treatments = [
    {
      title: "Beauty & Skin",
      icon: <FaSmile className="text-green-700 text-4xl" />,
      subcategories: ["Acne", "Hair Fall", "Pigmentation", "Dark Circles"],
      link: "/treatments/beauty-skin",
    },
    {
      title: "Children’s Health",
      icon: <FaChild className="text-green-700 text-4xl" />,
      subcategories: ["Immunity Boost", "Allergies", "Teething Issues", "Nutrition"],
      link: "/treatments/children",
    },
    {
      title: "Chronic Conditions",
      icon: <FaHeart className="text-green-700 text-4xl" />,
      subcategories: ["Asthma", "Thyroid", "Arthritis", "Diabetes"],
      link: "/treatments/chronic",
    },
    {
      title: "Lifestyle Disorders",
      icon: <FaLeaf className="text-green-700 text-4xl" />,
      subcategories: ["Stress", "Insomnia", "Obesity", "PCOD"],
      link: "/treatments/lifestyle",
    },
    {
      title: "General Wellness",
      icon: <FaUserMd className="text-green-700 text-4xl" />,
      subcategories: ["Detox", "Fatigue", "Seasonal Illnesses", "Immunity"],
      link: "/treatments/wellness",
    },
    {
      title: "Women’s Health",
      icon: <FaFemale className="text-green-700 text-4xl" />,
      subcategories: ["PCOS", "Menstrual Issues", "Menopause", "Infertility"],
      link: "/treatments/women",
    },
    {
      title: "Men’s Health",
      icon: <FaUser className="text-green-700 text-4xl" />,
      subcategories: ["Prostate Care", "Hair Loss", "Sexual Health", "Fitness Support"],
      link: "/treatments/men",
    },
    {
      title: "Geriatric Care",
      icon: <FaRegClock className="text-green-700 text-4xl" />,
      subcategories: ["Joint Pain", "Memory Loss", "Sleep Disorders", "Weak Immunity"],
      link: "/treatments/elderly",
    },
    {
      title: "Mental Health",
      icon: <FaBrain className="text-green-700 text-4xl" />,
      subcategories: ["Anxiety", "Depression", "Phobias", "Behavioral Disorders"],
      link: "/treatments/mental-health",
    },
  ];

  return (
    <section className="px-4 py-12 bg-[#e3ffe0]">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-10">
        Clinical Conditions Acute and Chronic
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {treatments.map((treatment, index) => (
          <div
            key={treatment.title}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                {treatment.icon}
                <h3 className="text-xl font-semibold text-green-800">
                  {treatment.title}
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-2 mb-4">
                {treatment.subcategories.map((sub, idx) => (
                  <li key={idx}>{sub}</li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <Link href={treatment.link}>
                <span className="inline-block mt-4 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition">
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
