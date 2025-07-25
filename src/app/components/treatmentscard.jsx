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
import Image from "next/image";

export default function TreatmentsCard() {
  const treatments = [
    {
      title: "Beauty & Skin",
      icon: <FaSmile />,
      subcategories: ["Acne", "Hair Fall", "Pigmentation", "Dark Circles"],
      link: "/treatments/beauty-skin",
    },
    {
      title: "Children’s Health",
      icon: <FaChild />,
      subcategories: ["Immunity Boost", "Allergies", "Teething Issues", "Nutrition"],
      link: "/treatments/children",
    },
    {
      title: "Chronic Conditions",
      icon: <FaHeart />,
      subcategories: ["Asthma", "Thyroid", "Arthritis", "Diabetes"],
      link: "/treatments/chronic",
    },
    {
      title: "Lifestyle Disorders",
      icon: <FaLeaf />,
      subcategories: ["Stress", "Insomnia", "Obesity", "PCOD"],
      link: "/treatments/lifestyle",
    },
    {
      title: "General Wellness",
      icon: <FaUserMd />,
      subcategories: ["Detox", "Fatigue", "Seasonal Illnesses", "Immunity"],
      link: "/treatments/wellness",
    },
    {
      title: "Women’s Health",
      icon: <FaFemale />,
      subcategories: ["PCOS", "Menstrual Issues", "Menopause", "Infertility"],
      link: "/treatments/women",
    },
    {
      title: "Men’s Health",
      icon: <FaUser />,
      subcategories: ["Prostate Care", "Hair Loss", "Sexual Health", "Fitness Support"],
      link: "/treatments/men",
    },
    {
      title: "Geriatric Care",
      icon: <FaRegClock />,
      subcategories: ["Joint Pain", "Memory Loss", "Sleep Disorders", "Weak Immunity"],
      link: "/treatments/elderly",
    },
    {
      title: "Mental Health",
      icon: <FaBrain />,
      subcategories: ["Anxiety", "Depression", "Phobias", "Behavioral Disorders"],
      link: "/treatments/mental-health",
    },
  ];

  return (
    <section className="px-4 py-12 bg-[#e3ffe0]">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-8">
        Clinical Conditions For Acute and Chronic Ailments
      </h2>

      {/* Full-Width Image on Top */}
<div className="mb-10 max-w-7xl mx-auto">
  <Image
    src="/c.jpg"
    alt="Homeopathy Treatments"
    width={1920}
    height={600}
    className="w-full h-[600px] rounded-xl  object-cover"
    priority
  />
</div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {treatments.map((treatment, index) => (
          <div
            key={treatment.title}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-sm"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
          >
            <div>
              <div className="flex items-center gap-3 mb-3 text-green-700 text-2xl">
                {treatment.icon}
                <h3 className="text-lg font-semibold text-green-800">
                  {treatment.title}
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-2 mb-3">
                {treatment.subcategories.map((sub, idx) => (
                  <li key={idx}>{sub}</li>
                ))}
              </ul>
            </div>
            <div>
              <Link href={treatment.link}>
                <span className="inline-block bg-green-700 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-green-800 transition">
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
