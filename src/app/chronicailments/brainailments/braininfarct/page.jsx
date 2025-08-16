"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function BrainInfarctPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const faqs = [
    {
      q: "What is a brain infarct?",
      a: "A brain infarct (ischemic stroke) happens when blood flow to part of the brain is blocked, causing that area to be deprived of oxygen and nutrients.",
    },
    {
      q: "Is a brain infarct an emergency?",
      a: "Yes—sudden stroke symptoms are a medical emergency. Call your local emergency number immediately. Early hospital treatment saves brain tissue.",
    },
    {
      q: "How can homeopathy help?",
      a: "Homeopathy can be considered as a complementary approach during recovery—focusing on fatigue, mood, sleep, and individualized constitutional support—alongside your neurologist’s plan and rehabilitation.",
    },
    {
      q: "Can lifestyle changes reduce risk of another stroke?",
      a: "Yes. Managing blood pressure, diabetes, cholesterol, quitting smoking, limiting alcohol, regular activity, balanced diet, and adequate sleep all reduce risk.",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section data-aos="fade-up">
        <div className="max-w-screen mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-green-800 leading-tight">
                Brain Infarct (Ischemic Stroke)
              </h1>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A brain infarct occurs when an artery supplying the brain becomes
                blocked, usually by a clot. This interrupts oxygen supply and injures
                brain cells. Symptoms typically appear suddenly—time lost is brain lost.
                Immediate hospital care is critical.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/images/brain-infarct.jpg"
                alt="Brain infarct illustration"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      

    
    

      

      {/* FAQs */}
      <section className="bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-800">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-3">
            {faqs.map(({ q, a }, idx) => (
              <details key={idx} className="group border rounded-xl p-4">
                <summary className="cursor-pointer font-medium text-gray-900">
                  {q}
                </summary>
                <p className="mt-2 text-gray-700 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-8 sm:p-12 bg-green-700" data-aos="fade-up">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">
          Begin Your Recovery Journey
        </h3>
        <p className="mt-3 text-green-50 max-w-3xl mx-auto">
          Partner with our experienced homeopathic practitioners to support your
          rehabilitation and quality of life—always alongside your neurologist’s plan.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/appointment"
            className="bg-white text-green-800 hover:bg-yellow-300 hover:text-black px-5 py-2.5 rounded-xl text-sm sm:text-base transition-all"
          >
            Book Appointment
          </Link>
          <Link
            href="/contact-us"
            className="border border-white text-white hover:bg-white hover:text-green-800 px-5 py-2.5 rounded-xl text-sm sm:text-base transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
