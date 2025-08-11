"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function WomensWellnessPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className=" bg-[#e3ffe0]  py-16 px-6 text-center" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Women’s Wellness with Homeopathy
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Homeopathy offers a gentle yet effective approach to women’s health —
          addressing hormonal balance, reproductive health, emotional wellness,
          and overall vitality in all stages of life.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#e3ffe0] px-6 " data-aos="fade-up">
        <div className="max-w-8xl bg-[#e3ffe0] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-green-700 mb-4">
              Why Choose Homeopathy for Women’s Health?
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Balances hormonal fluctuations naturally</li>
              <li>Helps in menstrual irregularities & PCOS</li>
              <li>Relieves menopausal symptoms without side effects</li>
              <li>Supports emotional and mental well-being</li>
              <li>Boosts immunity and overall vitality</li>
            </ul>
          </div>
          <div>
            <img
              src="/ladies.jpeg"
              alt="Women's Wellness"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-[#e3ffe0] px-6 " data-aos="fade-up">
        <div className="max-w-8xl bg-[#e3ffe0] mx-auto">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">
            Common Conditions Treated
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Menstrual Disorders",
              "PCOS & Hormonal Imbalance",
              "Menopause & Hot Flashes",
              "Thyroid Disorders",
              "Anemia & Fatigue",
              "Stress & Emotional Health",
            ].map((condition, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {condition}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 bg-[#e3ffe0]" data-aos="fade-up">
        <div className="max-w-8xl bg-[#e3ffe0] mx-auto">
          <h2 className="text-3xl bg-[#e3ffe0] font-semibold text-green-700 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is homeopathy safe during pregnancy?",
                a: "Yes, when prescribed by a qualified homeopath, remedies are safe and free from harmful side effects.",
              },
              {
                q: "How long does it take to see results?",
                a: "It varies depending on the condition, but many women report improvements within weeks.",
              },
              {
                q: "Can homeopathy help with infertility?",
                a: "Yes, it can address underlying hormonal or immune-related issues that may affect fertility.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border-b pb-4"
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.q}</h3>
                <p className="text-gray-600 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-[#e3ffe0] text-center" data-aos="fade-up">
        <p className="text-lg  mb-6">
          Take the first step towards holistic women’s wellness today.
        </p>
        <div className="flex justify-center">
          <a href="/contactus/requestacallback">
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
              Request a Call Back
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
