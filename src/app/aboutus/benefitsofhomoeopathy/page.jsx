"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function BenefitsOfHomeopathyPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    {
      title: "Holistic Healing",
      description:
        "Homeopathy treats the individual as a whole, considering physical, emotional, and mental aspects for long-term wellness.",
    },
    {
      title: "Natural and Safe",
      description:
        "Remedies are derived from natural substances, are non-toxic, non-addictive, and safe for all age groups.",
    },
    {
      title: "No Harmful Side Effects",
      description:
        "When prescribed correctly, homeopathic remedies work gently without causing adverse reactions.",
    },
    {
      title: "Personalized Treatment",
      description:
        "Each prescription is tailored to the patient’s unique symptoms, constitution, and overall health history.",
    },
    {
      title: "Prevention and Cure",
      description:
        "Homeopathy not only treats existing conditions but also helps prevent illness by strengthening immunity.",
    },
    {
      title: "Complementary with Other Treatments",
      description:
        "It can be used alongside conventional medicine without interfering with its effectiveness.",
    },
  ];

  const sections = [
    { id: "reversalprogram", label: "Reversal Program" },
    { id: "garbhsanskarclasses", label: "Garbh Sanskar Classes" },
    { id: "rightbrainactivationclasses", label: "Right Brain Activation Classes" },
    { id: "prepregnancy", label: "Pre Pregnancy" },
    { id: "Postdelivery", label: "Post Delivery" },
    { id: "corporatewellnessprogram", label: "Corporate Wellness Program" },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <main className=" py-4 bg-[#e3ffe0]">
        <div className="max-w-screen mx-auto px-4 flex gap-8">
          {/* Sticky Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
            <nav className="space-y-1">
              <h3 className="text-xl text-green-700 font-semibold px-2">Health Packages</h3>
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex hover:text-green-700 transition"
                >
                 <span className="p-1">{sec.icon}</span>
                  {sec.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar 2 */}
            <nav className="p-1 space-y-1">
              <h3 className="text-xl text-green-700 font-semibold">Main</h3>
              <Link href="/aboutus/aboutus" className="block hover:text-green-700 transition">
                About Us
              </Link>
              <Link href="/aboutus/fundamentalsofhomeopathy" className="block hover:text-green-700 transition">
                Fundamentals of Homeopathy
              </Link>
              <Link href="/aboutus/myths&factsabouthomeopathy" className="block hover:text-green-700 transition">
                Myths & Facts About Homeopathy
              </Link>
              <Link href="/aboutus/visionandmission" className="block hover:text-green-700 transition">
                Vision and Mission
              </Link>
              <Link href="/aboutus/ourteam" className="block hover:text-green-700 transition">
                Our Team
              </Link>
              <Link href="/aboutus/whyhomoeopathy" className="block hover:text-green-700 transition">
                Why Homoeopathy
              </Link>
              <Link href="/aboutus/benefitsofhomoeopathy" className="block hover:text-green-700 transition">
                Benefits of Homoeopathy
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1" data-aos="fade-up">
            <h1 className="text-3xl font-bold text-green-700 mb-6">
              Benefits of Homeopathy
            </h1>
            <p className="mb-8 text-gray-700 leading-relaxed">
              Homeopathy offers a range of unique benefits that make it an increasingly popular choice
              for those seeking safe, natural, and effective healthcare solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h2 className="text-xl font-semibold text-green-700 mb-3">
                    {benefit.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
