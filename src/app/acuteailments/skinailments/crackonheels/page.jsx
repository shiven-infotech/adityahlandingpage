"use client";

import React from "react";
import Header from "../../../components/header";   // Adjust paths if needed
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function CracksOnHeelsPage() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Cracks on Heels Homeopathy Treatment
        </h1>

        {/* What is Cracks on Heels */}
        <section className="mb-10">
          <p className="mb-4">
            Cracks on heels, also known as heel fissures, are those pesky splits or openings that form on the skin of our heels. They often pop up because our heels get dry or from standing or walking too much, especially in open-back shoes. These cracks can vary from minor little lines to deep gaps that might hurt or even bleed. 
          </p>
          <p className="mb-4">
            Things like living in a dry area, not keeping our feet moisturized, or certain health issues can make them worse. These cracks aren't just about looks—they can make our heels feel sore, cause pain, and if we don't treat them, they might even lead to infections.
          </p>
        </section>

        {/* Why Homeopathy Works */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            How Can Homeopathy Treatment Be a Good Option for Cracks on Heels?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Personalized Care:</strong> Treatment is tailor-made based on your skin, lifestyle, and health.
            </li>
            <li>
              <strong>Natural Healing:</strong> Uses gentle, plant-based remedies with no harsh chemicals.
            </li>
            <li>
              <strong>Happy Feet:</strong> Restores moisture and heals painful heel cracks.
            </li>
            <li>
              <strong>Keep Cracks Away:</strong> Targets root causes to prevent future problems.
            </li>
          </ul>
        </section>

        {/* Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Other vs Cracks on Heels Homeopathy Treatment
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Soft Touch:</strong> Gentle healing without harsh surgeries or procedures.
            </li>
            <li>
              <strong>Lasting Comfort:</strong> Tackles the root cause for long-term relief.
            </li>
            <li>
              <strong>Safe for Everyone:</strong> Suitable for kids, adults, and the elderly.
            </li>
            <li>
              <strong>Tailored to You:</strong> Personalized to your symptoms and skin condition.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            FAQs about Cracks on Heels Homeopathy Treatment
          </h2>
          <div className="space-y-4">
            <div>
              <strong>Can homeopathy completely cure heel cracks?</strong>
              <p>
                Yes, by addressing dryness, pressure, and internal causes, homeopathy can offer lasting relief.
              </p>
            </div>
            <div>
              <strong>How long does it take to see improvements?</strong>
              <p>
                Most people notice improvement in a few weeks to months depending on severity and consistency.
              </p>
            </div>
            <div>
              <strong>Are remedies safe for children?</strong>
              <p>
                Yes. Homeopathic remedies are gentle and safe for all age groups.
              </p>
            </div>
            <div>
              <strong>Can it help with severe pain?</strong>
              <p>
                Yes, homeopathy reduces inflammation and pain naturally without strong medication.
              </p>
            </div>
            <div>
              <strong>What lifestyle changes can help?</strong>
              <p>
                Moisturize feet, wear proper shoes, avoid prolonged standing, and maintain hygiene.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10 bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Are your cracked heels causing discomfort?
          </h3>
          <p className="mb-4">
            Connect with our experienced homeopathic practitioners today for natural solutions that promote healing and restore smoothness to your heels.
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
