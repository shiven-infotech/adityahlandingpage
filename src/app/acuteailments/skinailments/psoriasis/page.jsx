"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function psoriasis() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const fundamentals = [
    {
      principle: "Like Cures Like",
      meaning:
        "A substance causing symptoms in a healthy person can cure similar symptoms in a sick person.",
    },
    {
      principle: "Minimum Dose",
      meaning:
        "Use highly diluted substances to stimulate the body’s natural healing response without toxicity.",
    },
    {
      principle: "Individualized Care",
      meaning:
        "Each patient is treated uniquely, considering physical, emotional, and mental aspects.",
    },
    {
      principle: "Vital Force",
      meaning:
        "Belief in a life energy that maintains health; disease is an imbalance of this force.",
    },
    {
      principle: "Potentization",
      meaning:
        "Process of dilution and shaking (succussion) that enhances the healing power of remedies.",
    },
    {
      principle: "Law of Cure (Hering’s Law)",
      meaning:
        "Healing progresses from within outward, from top to bottom, and in reverse order of symptoms.",
    },
    {
      principle: "Holistic Healing",
      meaning:
        "Homeopathy treats the root cause, not just symptoms — aiming for long-lasting wellness.",
    },
    {
      principle: "Common Potencies",
      meaning:
        "Common potencies used: 6C, 30C, 200C, 1M — chosen based on patient sensitivity and case.",
    },
  ];

  return (
    <>
      <Header />  
      <Navbar />
      

    <div className="bg-[#e3ffe0] py-10 px-4 sm:px-6 lg:px-16 min-h-screen overflow-hidden">

      <h1
        className="text-3xl sm:text-4xl font-bold text-green-700 text-center mb-12"
        data-aos="fade-down"
      >
        Fundamentals of Homeopathy
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
          <img
            src="/fundamentals.jpg"
            alt="Homeopathy Concept"
            className="rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover" />
        </div>

        {/* Right: Table */}
        <div
          className="w-full lg:w-1/2 overflow-x-auto bg-white rounded-2xl shadow-lg"
          data-aos="fade-left"
        >
          <table className="w-full table-auto border border-gray-200">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-4 text-left text-sm font-semibold uppercase border-r border-green-500">
                  Principle
                </th>
                <th className="p-4 text-left text-sm font-semibold uppercase">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {fundamentals.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-green-50" : "bg-[#e3ffe0]"}
                >
                  <td className="p-4 font-medium border-r border-gray-200">
                    {item.principle}
                  </td>
                  <td className="p-4">{item.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <Footer />
    </>
    
  );
}
