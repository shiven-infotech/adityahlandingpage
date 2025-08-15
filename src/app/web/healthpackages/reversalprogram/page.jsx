"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function ReversalProgramPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <div className=" bg-[#e3ffe0]  py-10 px-4 md:px-20">
        <div className="max-w-screen mx-auto">
          <h1
            className="text-4xl font-bold text-center text-green-700 mb-4"
            data-aos="fade-down"
          >
            Reversal Program
          </h1>
          <p
            className="text-lg  text-center mb-10"
            data-aos="fade-up"
          >
            Empower your body’s innate ability to heal and reverse chronic
            conditions—naturally, safely, and holistically.
          </p>

          <div className="space-y-8">
            <section data-aos="fade-right">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                What is a Reversal Program?
              </h2>
              <p className=" leading-relaxed">
                The Reversal Program at Aditya Homoeopathic Clinic is a
                specialized holistic treatment plan designed to help patients
                **reverse chronic lifestyle disorders** such as diabetes,
                hypertension, thyroid dysfunction, PCOD/PCOS, obesity, and more.
                Unlike conventional approaches that suppress symptoms, our
                program addresses the **root cause** using personalized
                homeopathy, naturopathy principles, detox therapies, and guided
                lifestyle correction.
              </p>
            </section>

            <section data-aos="fade-left">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                Who Can Benefit?
              </h2>
              <ul className="list-disc pl-6  space-y-1">
                <li>Type 2 Diabetes / Pre-Diabetes Patients</li>
                <li>People with High Blood Pressure or Cholesterol</li>
                <li>Women suffering from PCOD/PCOS</li>
                <li>Individuals with Obesity or Metabolic Syndrome</li>
                <li>Patients looking to reduce dependency on long-term medication</li>
              </ul>
            </section>

            <section data-aos="fade-right">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                Our 4-Pillar Approach
              </h2>
              <ul className="list-decimal pl-6  space-y-2">
                <li>
                  <strong>Root Cause Analysis:</strong> Deep case taking and
                  lifestyle review.
                </li>
                <li>
                  <strong>Customized Homoeopathy:</strong> Precision remedies
                  tailored to your body’s constitution.
                </li>
                <li>
                  <strong>Therapeutic Nutrition & Detox:</strong> Personalized
                  meal planning and natural detox support.
                </li>
                <li>
                  <strong>Lifestyle & Mind Coaching:</strong> Stress management,
                  breathing, sleep, and habit transformation.
                </li>
              </ul>
            </section>

            <section data-aos="fade-left">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                Program Duration & Monitoring
              </h2>
              <p className=" leading-relaxed">
                Our Reversal Program runs from **3 to 6 months**, depending on
                the condition and progress. Every patient receives:
              </p>
              <ul className="list-disc pl-6  space-y-1 mt-2">
                <li>Monthly doctor consultations</li>
                <li>Home-delivered medicines</li>
                <li>Dietary guidance and wellness monitoring</li>
                <li>Support through WhatsApp & email</li>
              </ul>
            </section>

            <section data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                Why Choose Aditya Homoeopathic Reversal Program?
              </h2>
              <p className=" leading-relaxed">
                At Aditya Homoeopathic Clinic, we combine scientific
                homoeopathy with time-tested holistic practices. Our
                compassionate team ensures you are **empowered, educated, and
                motivated** throughout the journey. Thousands of patients have
                experienced **dramatic improvements** in their health and
                successfully reduced or stopped allopathic medicines.
              </p>
            </section>

            <section className="text-center pt-6" data-aos="zoom-in">
              <p className="text-lg font-medium text-green-700 mb-4">
                Take your first step towards freedom from chronic illness!
              </p>
              <button className="bg-green-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
                Enroll in Reversal Program
              </button>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
