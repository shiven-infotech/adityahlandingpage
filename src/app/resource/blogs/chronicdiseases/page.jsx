"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function ChronicDiseasesPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
          data-aos="fade-up"
        >
          Chronic Diseases: Long-Term Relief Through Homeopathy
        </h1>
        <p
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover how homeopathy provides lasting relief, holistic healing, and
          improved quality of life for chronic conditions.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Intro */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Understanding Chronic Diseases
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Chronic diseases are health conditions that persist for months or
            even years, often impacting daily life and overall well-being.
            Conventional treatments may manage symptoms but rarely address the
            root cause. Homeopathy, however, works holistically—stimulating the
            body’s innate healing power and promoting balance from within.
          </p>
        </div>

        {/* Benefits Section */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Why Choose Homeopathy for Chronic Conditions?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Addresses root causes rather than suppressing symptoms</li>
            <li>Safe for long-term use without harmful side effects</li>
            <li>Personalized remedies tailored to each individual</li>
            <li>Boosts immunity and overall vitality</li>
            <li>Improves emotional, mental, and physical well-being</li>
          </ul>
        </div>

        {/* Common Conditions */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Chronic Conditions Treated with Homeopathy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Homeopathy has shown remarkable results in managing a wide range of
            chronic illnesses:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Asthma & Respiratory Disorders</li>
            <li>Arthritis & Joint Pain</li>
            <li>Chronic Skin Disorders (Psoriasis, Eczema)</li>
            <li>Digestive Issues (IBS, Gastritis)</li>
            <li>Thyroid Disorders</li>
            <li>Migraine & Chronic Headaches</li>
            <li>Hormonal Imbalances</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div
          className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-sm"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Start Your Journey to Lasting Relief
          </h2>
          <p className="text-gray-700 mb-4">
            Don’t let chronic illness control your life. With homeopathy, you
            can take steps toward lasting relief and holistic wellness.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
