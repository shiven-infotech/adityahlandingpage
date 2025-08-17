"use client";

import Image from "next/image";

export default function CorporateWellnessSection() {
  const features = [
    {
      title: "Workplace Stress Management",
      description:
        "We offer meditation, counseling, and homeopathic remedies to reduce workplace anxiety and improve mental health.",
    },
    {
      title: "Employee Health Checkups",
      description:
        "Regular health screenings with personalized guidance from our homeopathic experts to boost immunity and productivity.",
    },
    {
      title: "Nutritional Guidance",
      description:
        "Corporate diet plans tailored for busy professionals to maintain energy levels and long-term wellness.",
    },
    {
      title: "Customized Wellness Plans",
      description:
        "We design programs based on your company’s needs—virtual sessions, workshops, or on-site camps.",
    },
  ];

  return (
    <section className="bg-[#e3ffe0] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Centered Top */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800">
          Corporate Wellness Program
        </h2>
        <p className="text-gray-700 mt-4 text-base sm:text-lg">
          A healthy employee is a productive employee. Our Corporate Wellness Program is designed to enhance physical and emotional well-being in the workplace through holistic homeopathic care and lifestyle support.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center" data-aos="fade-right">
          <Image
            src="/corporate.jpg"
            alt="Corporate Wellness"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-[400px]"
            priority
          />
        </div>

        {/* Right Feature Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-left h-[185px] flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
