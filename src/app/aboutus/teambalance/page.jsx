"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function TeamBalancePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const teamMembers = [
    {
      name: "Dr. Aditya Sharma",
      role: "Founder & Chief Homeopath",
      img: "/images/team/aditya.jpg",
      desc: "With over 20 years of experience, Dr. Sharma leads the clinic with a vision to blend traditional homeopathy with modern wellness practices.",
    },
    {
      name: "Dr. Sneha Mehta",
      role: "Pediatric Homeopath",
      img: "/images/team/sneha.jpg",
      desc: "Specialized in treating children and developmental disorders through safe, holistic methods.",
    },
    {
      name: "Dr. Raj Patel",
      role: "Chronic Illness Specialist",
      img: "/images/team/raj.jpg",
      desc: "An expert in handling chronic conditions like asthma, arthritis, and skin issues with precision-based homeopathy.",
    },
    {
      name: "Dr. Meera Nair",
      role: "Wellness & Lifestyle Coach",
      img: "/images/team/meera.jpg",
      desc: "Helps patients achieve long-term wellness through customized lifestyle and nutritional guidance.",
    },
  ];

  // Example sidebar items — customize as needed
  const sections = [
    { id: "/healthpackages/reversalprogram", label: "Reversal Program"  },
    { id: "/healthpackages/garbhsanskarclasses", label: "Garbh Sanskar Classes"  },
    { id: "/healthpackages/rightbrainactivationclasses", label: "Right Brain Activation Classes"  },
     { id: "/healthpackages/prepregnancy", label: "Pre pregnancy "  },
    { id: "/healthpackages/postdelivery", label: "Post Delivery"  },
    { id: "/healthpackages/corporatewellnessprogram", label: " Corporate Wellness Program"  },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <div className="bg-[#e3ffe0] px-4 py-8">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-6">
          {/* Sticky Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
            <nav className="p-4  space-y-2">
              <h3 className="text-lg font-semibold mb-2">Health Packages</h3>
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={sec.id}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100 hover:text-green-900 transition"
                >
                  <span>{sec.icon}</span>
                  {sec.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar 2 */}
            <nav className="p-4  space-y-2">
              <h3 className="text-lg font-semibold mb-2">Main</h3>
              <Link href="/aboutus/aboutus" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">About Us</Link>
              <Link href="/aboutus/fundamentalsofhomeopathy" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Fundamentals of Homeopathy</Link>
              <Link href="/aboutus/myths&factsabouthomeopathy" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Myths & Facts About Homeopathy</Link>
              <Link href="/aboutus/visionandmission" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Vision and Mission</Link>
              <Link href="/aboutus/teambalance" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Team Balance</Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-green-900 text-center mb-4" data-aos="fade-down">
                Meet Our Team
              </h1>
              <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
                At Aditya Homoeopathic Clinic, our strength lies in the collective expertise of our team. From senior homeopaths to wellness coaches, each member brings unique strengths to ensure every patient receives holistic and personalized care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-xl p-6 flex gap-4 items-start"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full border-2 border-green-400"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-green-800">{member.name}</h3>
                      <p className="text-sm text-green-700 mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
