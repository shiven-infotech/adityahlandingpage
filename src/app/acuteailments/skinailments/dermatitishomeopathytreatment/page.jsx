"use client";

import React from "react";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function dermatitispage() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Dermatitis Homeopathy Treatment
        </h1>

        {/* Introduction */}
        <section className="mb-10">
          <p className="mb-4">
            Dermatitis covers various skin inflammations like eczema, contact dermatitis, and seborrheic dermatitis. These can be caused by allergens such as pollen or certain foods, irritants like harsh soaps, infections, and stress. Symptoms vary from mild redness and itching to more severe blistering.
          </p>
          <p className="mb-4">
            Treatment includes finding and avoiding triggers, using gentle skincare products and moisturizers. Sometimes, medical advice or alternative treatments like homeopathy can help manage it effectively for individual needs. It's important to understand your skin's reactions and seek the right care to keep it healthy and comfortable.
          </p>
        </section>

        {/* Why Homeopathy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            How Homeopathy Treatment Can Be a Good Option for Dermatitis?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Holistic Approach:</strong> Looks at your overall well-being and skin triggers.
            </li>
            <li>
              <strong>Natural Remedies:</strong> Made from plants and minerals with minimal side effects.
            </li>
            <li>
              <strong>Addresses Root Causes:</strong> Aims for long-term relief by targeting internal imbalances.
            </li>
            <li>
              <strong>Safe for All Ages:</strong> Gentle and effective for both kids and adults.
            </li>
          </ul>
        </section>

        {/* Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Other vs Dermatitis Homeopathy Treatment</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Non-Invasive:</strong> No surgeries or harsh procedures—just gentle healing.
            </li>
            <li>
              <strong>Individualized Care:</strong> Personalized to your symptoms and lifestyle.
            </li>
            <li>
              <strong>Natural Approach:</strong> Works with your body’s natural healing system.
            </li>
            <li>
              <strong>Minimal Side Effects:</strong> Safer for long-term and chronic conditions.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            FAQs about Dermatitis Homeopathy Treatment
          </h2>
          <div className="space-y-4">
            <div>
              <strong>Can homeopathy completely cure dermatitis?</strong>
              <p>
                Homeopathy aims to manage and reduce symptoms. Many people experience major relief with consistent care.
              </p>
            </div>
            <div>
              <strong>How long does it take to see improvements?</strong>
              <p>
                Some see results in weeks, while others may need months based on severity and response.
              </p>
            </div>
            <div>
              <strong>Are remedies safe for children?</strong>
              <p>
                Yes. Homeopathy is gentle, making it safe for all age groups.
              </p>
            </div>
            <div>
              <strong>Can it help with severe symptoms?</strong>
              <p>
                Yes, it can help reduce itching, inflammation, and redness with the right remedy.
              </p>
            </div>
            <div>
              <strong>What lifestyle changes can help?</strong>
              <p>
                Avoid triggers, use gentle skincare, eat well, manage stress, and follow your homeopath’s advice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-10 bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Are you seeking natural relief for your dermatitis?
          </h3>
          <p className="mb-4">
            Connect with our skilled homeopathic practitioners today and begin your journey to healthier skin!
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg transition">
            Book Appointment
          </button>
        </section>
      </div>

      <Footer />
    </>
  );
}
