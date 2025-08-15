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
  { id: "/healthpackages/reversalprogram", label: "Reversal Program",  },
  { id: "/healthpackages/garbhsanskarclasses", label: "Garbh Sanskar Classes", },
  { id: "/healthpackages/rightbrainactivationclasses", label: "Right Brain Activation Classes", },
  { id: "/healthpackages/prepregnancy", label: " Pre Pregnancy ",  },
  { id: "/healthpackages/postdelivery", label: "Post Delivery", },
  { id: "/healthpackages/corporatewellnessprogram", label: "Corporate Wellness Program", },
];

export default function VisionAndMissionPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] py-4 px-4">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-10">
          {/* Sticky Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
            <nav className=" space-y-1 ">
              <h3 className="text-xl text-green-700 font-semibold px-2 ">Health Packages</h3>
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={sec.id}
                  className="flex items-center  hover:text-green-700 transition"
                >
                  <span className="text-lg p-1">{sec.icon}</span>
                  {sec.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar 2 */}
            <nav className="p-1 space-y-1 ">
              <h3 className="text-xl text-green-700 font-semibold ">Main</h3>
              <Link href="/aboutus/aboutus" className="block  hover:text-green-900 transition">
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
                <p className=" text-lg leading-relaxed">
                At the heart of our vision lies a steadfast commitment to transforming global healthcare by reestablishing the timeless wisdom of homoeopathy as a trusted, first-line choice for healing. We envision a world where individuals are empowered to choose safe, natural, and holistic treatment options that not only alleviate symptoms but nurture the body, mind, and spirit in unison. Rooted in the principles of "like cures like" and the body's innate capacity to heal, our goal is to make homoeopathy an accessible, affordable, and scientifically respected mode of treatment across all communities, regardless of socio-economic status. We aspire to build a future where every household recognizes the value of individualized care, gentle medicine, and disease prevention—leading to healthier lives and more compassionate societies. Through continuous research, innovation, and education, we aim to uplift the global perception of homoeopathy and position it as a vital pillar of integrative medicine, respected not just as an alternative, but as a powerful primary healthcare system of the 21st century.
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
               <p className="text-lg">
                Our mission is to deliver compassionate, evidence-informed, and deeply personalized homeopathic healthcare that honors each individual's unique constitution, experiences, and healing journey. We are dedicated to restoring health and well-being by offering gentle, non-toxic, and holistic treatments that stimulate the body’s natural healing powers rather than suppress symptoms. Through patient-centered care, we strive to address the root causes of illness—physical, emotional, and environmental—rather than just the outward manifestations. Our goal is to promote a healthcare culture where trust, transparency, and empathy are paramount. We are committed to spreading awareness about the effectiveness of homeopathy through education, outreach, and community engagement, empowering individuals to make informed choices about their health. By integrating traditional principles with modern innovations, research, and clinical excellence, we aim to raise the global standard of homeopathic practice. Ultimately, our mission is to serve as a beacon of hope for those seeking natural healing and to create healthier societies by cultivating preventive, sustainable, and personalized healthcare pathways for all.
               </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
