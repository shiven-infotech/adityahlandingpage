"use client";

import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

export default function EarInfectionPage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Ear Infection Homeopathy Treatment</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">What is Ear Infection?</h2>
          <p className="mb-4">
            An ear infection is when your ear gets sore or swollen because of germs,
            which can make it hurt and feel uncomfortable. It can happen in different
            parts of the ear like the outer, middle, or inner parts. Ear infections
            usually come from bacteria or viruses and can make your ear ache, itch,
            leak fluid, or even make it hard to hear for a while.
          </p>
          <p>
            Anyone can get an ear infection, but they happen more to kids because their
            bodies are still growing and their ears are smaller. Things like colds,
            allergies, swimming in dirty water, or putting things in your ear can make
            infections more likely. Most of the time, ear infections get better on
            their own. But if they keep coming back or get really bad, you might need
            special treatment. Homeopathy is one way to treat them gently using natural
            remedies that don't have bad side effects.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            How Homeopathy Treatment Can Be a Good Option for Ear Infection?
          </h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Holistic Approach:</strong> Homeopathy looks at your whole body, not
              just the ear infection.
            </li>
            <li>
              <strong>Natural Remedies:</strong> Made from plants and minerals, these are
              gentle on your body.
            </li>
            <li>
              <strong>Individualized Treatment:</strong> Based on your specific symptoms for
              more effective relief.
            </li>
            <li>
              <strong>Promotes Healing:</strong> Boosts your natural healing processes and
              strengthens your immune system.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Other vs Homeopathy Treatment</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>Non-Invasive:</strong> No surgeries or antibiotics—just gentle care.
            </li>
            <li>
              <strong>Safe for All Ages:</strong> Great for kids and adults alike.
            </li>
            <li>
              <strong>Minimal Side Effects:</strong> Natural ingredients = fewer side effects.
            </li>
            <li>
              <strong>Long-Term Relief:</strong> Strengthens your immune system for the
              future.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            FAQs about Ear Infection Homeopathy Treatment
          </h2>
          <div className="space-y-4">
            <div>
              <strong>Can homeopathy cure chronic ear infections?</strong>
              <p>
                Yes, it can help manage and reduce recurrence by addressing root causes like
                low immunity.
              </p>
            </div>
            <div>
              <strong>
                How long does it take to see improvements with homeopathic treatment?
              </strong>
              <p>
                It varies—some people see relief in days, others may need consistent care over
                weeks or months.
              </p>
            </div>
            <div>
              <strong>Are homeopathic remedies safe for children?</strong>
              <p>
                Absolutely! They're gentle, natural, and free of harsh side effects.
              </p>
            </div>
            <div>
              <strong>Can homeopathy help with hearing loss from infections?</strong>
              <p>
                Yes, it may support ear health and reduce complications like hearing loss.
              </p>
            </div>
            <div>
              <strong>
                What lifestyle changes can help alongside homeopathy?
              </strong>
              <p>
                Keep ears clean, avoid allergens, eat healthily, and practice good hygiene to
                boost results.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center py-8 bg-green-100 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Call to Action
          </h2>
          <p className="mb-4">
            Feeling ready to soothe those ear infections naturally? Connect with our skilled
            homeopathic practitioners today for personalized treatment plans and effective
            solutions.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
            Book Appointment
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
