"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import { FaHeartbeat, FaCapsules, FaStethoscope } from "react-icons/fa";

export default function HomeopathyFundamentals() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const fundamentals = [
    {
      title: "Like Cures Like",
      content:
        "This foundational principle of homeopathy states that a substance that causes symptoms in a healthy person can, in minute doses, cure similar symptoms in a sick individual. It reflects the idea that the body can be nudged towards healing by introducing a remedy that mimics the illness’s effects, thereby stimulating the body's innate healing ability.",
    },
    {
      title: "Minimum Dose",
      content:
        "Homeopathy relies on the use of highly diluted remedies. The goal is to use the smallest amount necessary to provoke a healing response. The minimum dose ensures safety, avoids toxicity, and allows the body to respond naturally without being overwhelmed.",
    },
    {
      title: "Individualized Care",
      content:
        "Each patient is considered unique in homeopathy. Treatment is tailored not just to the disease, but also to the individual’s physical, mental, and emotional state. Two people with the same condition may receive completely different remedies based on their specific symptoms and constitution.",
    },
    {
      title: "Vital Force",
      content:
        "Homeopathy believes in a 'vital force' — an invisible energy that maintains health and harmony in the body. Illness is seen as an imbalance or disruption of this force. Remedies work to restore its balance, promoting natural healing from within.",
    },
    {
      title: "Potentization",
      content:
        "Potentization is a unique process of preparing homeopathic remedies. It involves serial dilution and succussion (vigorous shaking). Though the original substance may be present in minute or even non-detectable amounts, the process is believed to enhance the remedy’s energetic healing properties.",
    },
    {
      title: "Law of Cure (Hering’s Law)",
      content:
        "Hering’s Law outlines the direction of true healing: from inside out, from more vital to less vital organs, and in reverse order of the appearance of symptoms. This principle helps practitioners assess whether a remedy is genuinely helping or suppressing the disease.",
    },
    {
      title: "Holistic Healing",
      content:
        "Homeopathy does not just aim to remove symptoms. Instead, it looks at the person as a whole and addresses the root cause of the illness. The goal is to bring balance on all levels — physical, emotional, and mental — leading to long-term well-being.",
    },
    {
      title: "Common Potencies",
      content:
        "Homeopathic remedies come in different strengths or 'potencies' such as 6C, 30C, 200C, and 1M. The choice of potency depends on the nature of the condition, depth of symptoms, and patient sensitivity. Lower potencies are used for physical symptoms; higher ones for emotional or long-standing conditions.",
    },
  ];

  const sections = [
    { id: "/healthpackages/reversalprogram", label: "Reversal Program",  },
    { id: "/healthpackages/garbhsanskarclasses", label: "Garbh Sanskar Classes",  },
    { id: "/healthpackages/rightbrainactivationclasses", label: "Right Brain Activation Classes",  },
     { id: "/healthpackages/prepregnancy", label: "Pre Pregnancy",  },
    { id: "/healthpackages/postdelivery", label: "Post Delivery",  },
    { id: "/healthpackages/corporatewellnessprogram", label: "Corporate Wellness Program",  },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <div className="bg-[#e3ffe0] px-4 py-4">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-6">
          {/* Sticky Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
            <nav className=" space-y-1">
              <h3 className="text-xl text-green-700 font-semibold px-2">Health Packages</h3>
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={sec.id}
                  className="flex  hover:text-green-900 transition"
                >
                  <span className="p-1">{sec.icon}</span>
                  {sec.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar 2 */}
            <nav className="p-1 space-y-1">
              <h3 className="text-xl text-green-700 font-semibold ">Main</h3>
              <Link href="/aboutus/aboutus" className="block  hover:text-green-700 transition">
                About Us
              </Link>
              <Link href="/aboutus/fundamentalsofhomeopathy" className="block   hover:text-green-700 transition">
                Fundamentals of Homeopathy
              </Link>
              <Link href="/aboutus/myths&factsabouthomeopathy" className="block   hover:text-green-700 transition">
                Myths & Facts About Homeopathy
              </Link>
              <Link href="/aboutus/visionandmission" className="block   hover:text-green-700 transition">
                Vision and Mission
              </Link>
              <Link href="/aboutus/Ourteam" className="block  hover:text-green-700 transition">
                Our Team
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 bg-[#e3ffe0] py-10 px-4 sm:px-6 lg:px-16 overflow-hidden">
            {/* Top Image */}
            <div className="w-full flex justify-center mb-8" data-aos="zoom-in">
              <img
                src="/fundamentals.jpg"
                alt="Fundamentals of Homeopathy"
                className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg lg:max-w-xl object-cover"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-green-700 text-center mb-10" data-aos="fade-up">
              Fundamentals of Homeopathy
            </h1>

            <div className="space-y-8 text-gray-800 leading-relaxed">
              {fundamentals.map((item, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <h2 className="text-2xl font-semibold text-green-800 mb-2">{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
