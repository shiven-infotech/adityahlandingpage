"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../components/header";
import Navbar from "@/app/web/components/navbar";
import Footer from "@/app/web/components/footer";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function EczemaPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <main className="bg-[#e3ffe0] text-gray-800 px-4 sm:px-6 lg:px-20 py-12 space-y-16">
        {/* Title Section */}
        <section
          className="text-center space-y-4"
          data-aos="fade-down"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 tracking-wide">
            Eczema Homeopathy Treatment
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover natural relief through personalized homeopathic care for eczema.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-green-700 text-xl">
            <FaInstagram className="hover:text-pink-600 transition" />
            <FaTwitter className="hover:text-blue-500 transition" />
            <FaFacebookF className="hover:text-blue-700 transition" />
          </div>
        </section>

        {/* What is Eczema? */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">What is Eczema?</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Eczema, or atopic dermatitis, is a skin issue causing red, itchy, and inflamed patches
              that can be dry, scaly, or even ooze. It affects people of all ages and tends to flare
              up due to triggers like allergens, climate, stress, or hormonal changes.
            </p>
            <p>
              Homeopathy provides a natural approach tailored to the individual’s health, offering
              gentle and effective support without harsh side effects.
            </p>
          </div>
        </section>

        {/* How Homeopathy Helps */}
        <section data-aos="fade-up" className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">
            How Homeopathy Treatment Can Be a Good Option for Eczema?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
            <li><strong>Holistic Approach:</strong> Personalized plans based on your unique triggers and skin type.</li>
            <li><strong>Natural Remedies:</strong> Gentle solutions with fewer side effects.</li>
            <li><strong>Root Cause Focus:</strong> Heals internal imbalances, not just symptoms.</li>
            <li><strong>Safe for All Ages:</strong> From toddlers to the elderly.</li>
          </ul>
        </section>

        {/* Conventional vs Homeopathy with image */}
<section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
  {/* Image */}
  <div className="w-full">
    <img
      src="/eczema.jpeg" // Change to your image path
      alt="Homeopathy vs Conventional"
      className="rounded-2xl shadow-md w-full object-cover h-80"
    />
  </div>

  {/* Content */}
  <div>
    <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-4">
      Conventional vs Homeopathy Treatment
    </h2>
    <ul className="space-y-4 text-base sm:text-lg text-gray-700 list-disc pl-5">
      <li>
        <strong>Gentle Treatment:</strong> No steroids or harsh chemicals—just soothing,
        natural care.
      </li>
      <li>
        <strong>Customized Solutions:</strong> Tailored remedies for your personal symptoms.
      </li>
      <li>
        <strong>Safe and Gentle:</strong> Minimal side effects, supports natural healing.
      </li>
      <li>
        <strong>Lasting Relief:</strong> Works at the root cause to reduce flare-ups long term.
      </li>
    </ul>
  </div>
</section>


        {/* FAQs with image on the right */}
<section className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
  {/* FAQ Content */}
  <div>
    <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6">
      FAQs About Eczema Homeopathy Treatment
    </h2>
    <div className="space-y-6 text-gray-700">
      <div>
        <h4 className="font-semibold">Can homeopathy cure eczema completely?</h4>
        <p>
          Homeopathy aims to manage eczema by addressing underlying causes. While not always a
          complete cure, it can reduce flare-ups and improve skin health.
        </p>
      </div>
      <div>
        <h4 className="font-semibold">How long does it take to see improvements?</h4>
        <p>
          Results vary by individual, but many patients begin to see improvements within weeks
          to months of consistent treatment.
        </p>
      </div>
      <div>
        <h4 className="font-semibold">Are homeopathic remedies safe for children?</h4>
        <p>
          Yes, they are gentle and natural, making them suitable for all ages including
          toddlers and infants.
        </p>
      </div>
      <div>
        <h4 className="font-semibold">Can homeopathy help with severe eczema itching?</h4>
        <p>
          Yes, homeopathic remedies can ease symptoms like intense itching and inflammation
          without harsh side effects.
        </p>
      </div>
      <div>
        <h4 className="font-semibold">What lifestyle changes can help alongside homeopathy?</h4>
        <ul className="list-disc pl-5 mt-2">
          <li>Regular moisturizing with natural emollients</li>
          <li>Avoiding known triggers and allergens</li>
          <li>Eating a healthy diet rich in fruits and omega-3s</li>
          <li>Managing stress with yoga or meditation</li>
          <li>Drinking enough water daily</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Image */}
  <div className="w-full">
    <img
      src="/eczema1.jpeg" // Replace this path with your actual image path
      alt="FAQs about eczema treatment"
      className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
    />
  </div>
</section>


        {/* CTA Section */}
        <section
          className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12 px-6 sm:px-12 rounded-2xl shadow-xl text-center"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Calm Your Eczema Naturally?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our skilled homeopathic practitioners are here to craft a treatment plan just for you.
          </p>
          <a
            href="/contactform"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-100 hover:scale-105 transition-transform duration-300"
          >
            Book Your Appointment
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
