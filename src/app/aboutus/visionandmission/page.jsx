"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

// Dummy icons and sections for Health Packages sidebar (replace with real ones)
import { FaHeartbeat, FaLeaf, FaFlask } from "react-icons/fa";
const sections = [
  { id: "#diabetes", label: "Diabetes", icon: <FaHeartbeat /> },
  { id: "#detox", label: "Detox Plans", icon: <FaLeaf /> },
  { id: "#immunity", label: "Immunity Boosters", icon: <FaFlask /> },
];

export default function VisionAndMissionPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] py-16 px-4">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-10">
          {/* Sticky Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
            <nav className="p-4 space-y-2 ">
              <h3 className="text-lg font-semibold mb-2">Health Packages</h3>
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={sec.id}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100 hover:text-green-900 transition"
                >
                  <span className="text-lg">{sec.icon}</span>
                  {sec.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar 2 */}
            <nav className="p-4 space-y-2 ">
              <h3 className="text-lg font-semibold mb-2">Main</h3>
              <Link href="/aboutus/aboutus" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">
                About Us
              </Link>
              <Link href="/aboutus/fundamentalsofhomeopathy" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">
                Fundamentals of Homeopathy
              </Link>
              <Link href="/aboutus/myths&factsabouthomeopathy" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">
                Myths & Facts About Homeopathy
              </Link>
              <Link href="/aboutus/visionandmission" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">
                Vision and Mission
              </Link>
              <Link href="/aboutus/teambalance" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">
                Team Balance
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-16">
            {/* Page Heading */}
            <section className="text-center" data-aos="fade-down">
              <h1 className="text-4xl md:text-5xl font-bold text-green-700">Our Vision & Mission</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Driving healthcare excellence through compassion, innovation, and homeopathy.
              </p>
            </section>

            {/* Vision Section */}
            <section className="flex flex-col md:flex-row items-center gap-10" data-aos="fade-right">
              <div className="flex-1">
                <img
                  src="/vision.jpg"
                  alt="Vision"
                  className="rounded-xl shadow-md w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-green-700 mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become a globally trusted name in holistic and compassionate homeopathic care,
                  reaching every individual with accessible, affordable, and natural healing solutions.
                </p>
              </div>
            </section>

            {/* Mission Section */}
            <section className="flex flex-col md:flex-row-reverse items-center gap-10" data-aos="fade-left">
              <div className="flex-1">
                <img
                  src="/mission.jpeg"
                  alt="Mission"
                  className="rounded-xl shadow-md w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg leading-relaxed">
                  <li>Provide safe, effective, and personalized homeopathic treatment for all age groups.</li>
                  <li>Educate and empower communities about natural healing and preventive care.</li>
                  <li>Continuously innovate through research, patient care, and technology.</li>
                  <li>Foster a caring and inclusive healthcare environment for all.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
