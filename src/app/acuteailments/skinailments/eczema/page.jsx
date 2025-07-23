"use client";
import React from "react";
import Header from "../../../components/header";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function EczemaPage() {
  return (
    <>
      <Header />  
      <Navbar />
    <main className="bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-12 space-y-14">
      {/* Title */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-4">
          Eczema Homeopathy Treatment
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Discover natural relief through personalized homeopathic care for eczema.
        </p>
      </section>

      {/* What is Eczema? */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-4">
          What is Eczema?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Eczema, or atopic dermatitis, is a skin issue causing red, itchy, and inflamed patches
          that can be dry, scaly, or even ooze at times. It affects people of all ages and tends
          to flare up due to triggers like allergens, irritants, climate changes, stress, or
          hormonal shifts. Managing eczema involves regular moisturizing to prevent dryness and
          itchiness, avoiding triggers, using gentle skincare products, and sometimes medications
          like steroids or antihistamines.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
          Homeopathy provides a natural approach to eczema care. It tailors remedies to an
          individual's symptoms and health, aiming not just to relieve symptoms but also to tackle
          the root causes of flare-ups. These treatments are gentle, safe, and can complement
          conventional eczema therapies effectively.
        </p>
      </section>

      {/* How Homeopathy Helps */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-4">
          How Homeopathy Treatment Can Be a Good Option for Eczema?
        </h2>
        <ul className="space-y-4 text-base sm:text-lg text-gray-700 list-disc pl-5">
          <li>
            <strong>Holistic Approach:</strong> Personalized plans based on your unique triggers,
            lifestyle, and skin type.
          </li>
          <li>
            <strong>Natural Remedies:</strong> Made from natural substances, gentle on skin with
            fewer side effects.
          </li>
          <li>
            <strong>Addresses Root Causes:</strong> Aims to heal internal imbalances for lasting
            relief.
          </li>
          <li>
            <strong>Safe for All Ages:</strong> Suitable for children, adults, and elderly alike.
          </li>
        </ul>
      </section>

      {/* Other vs Homeopathy */}
      <section>
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
      </section>

      {/* FAQs */}
      <section>
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
            <h4 className="font-semibold">
              How long does it take to see improvements?
            </h4>
            <p>
              Results vary by individual, but many patients begin to see improvements within weeks
              to months of consistent treatment.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">
              Are homeopathic remedies safe for children?
            </h4>
            <p>
              Yes, they are gentle and natural, making them suitable for all ages including
              toddlers and infants.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">
              Can homeopathy help with severe eczema itching?
            </h4>
            <p>
              Yes, homeopathic remedies can ease symptoms like intense itching and inflammation
              without harsh side effects.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">
              What lifestyle changes can help alongside homeopathy?
            </h4>
            <ul className="list-disc pl-5 mt-2">
              <li>Regular moisturizing with natural emollients</li>
              <li>Avoiding known triggers and allergens</li>
              <li>Eating a healthy diet rich in fruits and omega-3s</li>
              <li>Managing stress with yoga or meditation</li>
              <li>Drinking enough water daily</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-10 px-6 sm:px-12 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Ready to Calm Your Eczema the Natural Way?
        </h2>
        <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
          Reach out to our skilled homeopathic practitioners for a personalized treatment plan and
          long-lasting relief.
        </p>
        <a
          href="/contactform"
          className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-100 transition"
        >
          Book Your Appointment
        </a>
      </section>
    </main>
    <Footer />
    </>
  );
}
