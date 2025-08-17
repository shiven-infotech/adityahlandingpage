"use client";

import React from "react";
import Header from "../../../components/header";   // Adjust paths if needed
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function PsoriasisPage() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="max-w-screen bg-[#e3ffe0]  mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Psoriasis Homeopathy Treatment
        </h1>

        {/* What is Psoriasis */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">What is Psoriasis?</h2>
          <p className="mb-4">
            Psoriasis is a chronic autoimmune skin condition where skin cells build up rapidly,
            causing scaling, redness, and inflammation. It often comes and goes in cycles of
            flare-ups and remission.
          </p>
          <p className="mb-4">
            It's not contagious, but it can significantly affect quality of life. While there's
            no permanent cure, many treatments—including homeopathy—help manage symptoms effectively.
          </p>
        </section>

        {/* Homeopathy Benefits */}
        <section className="mb-10 flex flex-col md:flex-row items-center gap-6">
  {/* Text Content */}
  <div className="md:w-1/2">
    <h2 className="text-2xl font-semibold mb-2">
      Why Choose Homeopathy for Psoriasis?
    </h2>
    <ul className="list-disc list-inside space-y-3">
      <li>
        <strong>Individualized Approach:</strong> Homeopathy tailors treatment to your
        unique symptoms and triggers.
      </li>
      <li>
        <strong>Natural Remedies:</strong> Prepared from plant and mineral sources, they
        are gentle and have minimal side effects.
      </li>
      <li>
        <strong>Safe for All Ages:</strong> Ideal for both children and adults.
      </li>
      <li>
        <strong>Root Cause Treatment:</strong> Focuses on immune balance and long-term healing.
      </li>
    </ul>
  </div>

  {/* Image */}
  <div className="md:w-1/2">
    <img
      src="/psoriasis.jpeg"
      alt="Homeopathy Benefits for Psoriasis"
      className="rounded-lg shadow-md w-full object-cover"
    />
  </div>
</section>


        {/* Comparison */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Psoriasis Treatment: Allopathy vs Homeopathy
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Allopathy:</strong> Fast-acting but often uses steroids or immunosuppressants
              which may cause side effects.
            </li>
            <li>
              <strong>Homeopathy:</strong> Slow and steady improvement with a focus on long-term relief
              and immune correction.
            </li>
            <li>
              <strong>Non-Invasive:</strong> No injections or harsh medications.
            </li>
          </ul>
        </section>

        {/* FAQs */}
       <section className="mb-10 flex flex-col-reverse md:flex-row items-center gap-6">
  {/* Image */}
  <div className="md:w-1/2">
    <img
      src="/soriasis.jpeg"
      alt="FAQs about Psoriasis Treatment"
      className="rounded-lg shadow-md w-full object-cover"
    />
  </div>

  {/* Text Content */}
  <div className="md:w-1/2">
    <h2 className="text-2xl font-semibold mb-2">
      FAQs – Homeopathic Psoriasis Care
    </h2>
    <div className="space-y-4">
      <div>
        <strong>Can homeopathy cure psoriasis permanently?</strong>
        <p>
          It helps manage and control symptoms effectively, often reducing flare-ups over time.
        </p>
      </div>
      <div>
        <strong>How soon will I see results?</strong>
        <p>
          Many patients begin seeing improvement in 3–6 weeks with consistent treatment.
        </p>
      </div>
      <div>
        <strong>Can I use homeopathy along with other treatments?</strong>
        <p>
          Yes, but consult your doctor for a proper integrative approach.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* CTA */}
        <section className="text-center mt-10 bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Start Your Natural Psoriasis Healing Journey
          </h3>
          <p className="mb-4">
            Connect with our expert homeopathic doctors today for a personalized treatment plan.
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
