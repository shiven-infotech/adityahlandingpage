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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full" data-aos="fade-right">
          <Image
            src="/wellness.png" // ✅ Replace with your actual image
            alt="Corporate Wellness"
            width={600}
            height={500}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>

        {/* Right Text & Features */}
        <div className="text-center lg:text-left" data-aos="fade-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
            Corporate Wellness Program
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg">
            A healthy employee is a productive employee. Our Corporate Wellness
            Program is designed to enhance physical and emotional well-being in the
            workplace through holistic homeopathic care and lifestyle support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-left"
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
      </div>
    </section>
  );
}
