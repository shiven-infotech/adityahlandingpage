"use client";
import React from "react";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function VitiligoPage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="px-6 md:px-20 py-10 max-w-5xl mx-auto space-y-10 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Vitiligo Homeopathy Treatment
        </h1>

        <section>
          <h2 className="text-2xl font-semibold mb-3">What is Vitiligo?</h2>
          <p className="text-lg leading-relaxed">
            Vitiligo is a skin condition where patches of skin lose their color, turning white or light. This happens because cells called melanocytes, which give skin its color, either stop working or are damaged. While Vitiligo isn't harmful, it can affect how someone feels about their appearance.
          </p>
          <p className="text-lg mt-4">
            It's not something you can catch from someone else, and it can happen to anyone, no matter their skin type or age. We're not entirely sure why it happens, but it seems to involve genetics, the immune system, and environmental factors like stress or sun exposure.
          </p>
          <p className="text-lg mt-4">
            Treatment for Vitiligo focuses on restoring skin color. Homeopathy is a natural approach that considers a person's overall health and uses gentle remedies to support the body's healing process. This can help improve skin pigmentation over time and boost overall well-being.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            How Can Homeopathy Be a Good Option for Vitiligo?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              <strong>Holistic Approach:</strong> Homeopathy looks at more than just the skin patches. It considers your overall health, stress levels, and immune system.
            </li>
            <li>
              <strong>Melanin Restoration:</strong> Homeopathy supports your body in naturally producing melanin to help restore pigmentation.
            </li>
            <li>
              <strong>Safe and Natural:</strong> Remedies are gentle, plant-based or mineral-based, with minimal risk of side effects.
            </li>
            <li>
              <strong>Prevents Recurrence:</strong> Treats the root cause to reduce the chances of Vitiligo coming back.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Other Treatments vs Homeopathy</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              <strong>Gentle Solutions:</strong> No surgery or grafting involved—just natural remedies.
            </li>
            <li>
              <strong>Lasting Results:</strong> Homeopathy works on root causes for more sustainable improvement.
            </li>
            <li>
              <strong>Personalized Approach:</strong> Treatments are tailored to the individual's condition and symptoms.
            </li>
            <li>
              <strong>Emotional Care:</strong> Homeopathy also supports mental and emotional health, which is crucial for visible conditions like Vitiligo.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            FAQs About Vitiligo Homeopathy Treatment
          </h2>
          <div className="space-y-4 text-lg">
            <div>
              <strong>Can homeopathy cure Vitiligo completely?</strong>
              <p>
                Homeopathy aims to manage Vitiligo by stimulating natural melanin production, but complete cure depends on various factors like the extent of Vitiligo and individual response to treatment.
              </p>
            </div>
            <div>
              <strong>How long does it take to see improvements?</strong>
              <p>
                The duration varies. Some see results in a few months; others may take longer. Consistency is key.
              </p>
            </div>
            <div>
              <strong>Are homeopathic remedies safe for children?</strong>
              <p>
                Yes, they are gentle and safe for children with Vitiligo.
              </p>
            </div>
            <div>
              <strong>Can homeopathy treat Vitiligo on sensitive areas?</strong>
              <p>
                Yes, it's suitable for delicate areas like the face and hands.
              </p>
            </div>
            <div>
              <strong>What lifestyle changes can help?</strong>
              <p>
                Avoid excessive sun exposure, reduce stress, eat antioxidant-rich foods, and maintain good skincare habits.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-green-50 p-6 rounded-xl shadow mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-green-800">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg">
            Are you looking to bring back your skin's natural color? Connect with our skilled homeopathic practitioners today for tailored treatment plans and effective solutions. Let's journey towards healthier, beautifully pigmented skin together with homeopathy!
          </p>
          <div className="mt-5">
            <a
              href="/contactform"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
            >
              Book Your Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
