"use client";
import Header from "../../../components/header";   // Adjust paths if needed
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

import Image from "next/image";

export default function LichenPlanusPage() {
  return (
    <>
      <Header />
        <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Lichen Planus Homeopathy Treatment
        </h1>

        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-1/2">
            <Image
              src="/lichenplanus.webp"
              alt="Lichen Planus Homeopathy Treatment"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2 text-lg leading-relaxed text-gray-700">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">What is Lichen Planus?</h2>
            <p className="mb-4">
              Lichen Planus is a skin condition that can also affect mucous membranes and nails. It shows up as itchy,
              flat-topped bumps on the skin, often with a purplish color, or as white patches in the mouth. These bumps
              can be uncomfortable and may cause itching or pain.
            </p>
            <p>
              While the exact cause isn't fully understood, it’s believed to involve an abnormal immune response. Stress,
              medications, or infections might trigger it. Though not contagious or life-threatening, it can be persistent
              and uncomfortable.
            </p>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            How can Homeopathy Help with Lichen Planus?
          </h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-3">
            <li>
              <strong>Holistic Approach:</strong> Treatment is customized to your lifestyle, health, and triggers.
            </li>
            <li>
              <strong>Natural Remedies:</strong> Gentle, plant-based solutions with minimal side effects.
            </li>
            <li>
              <strong>Immune Balance:</strong> Helps regulate abnormal immune responses and reduce inflammation.
            </li>
            <li>
              <strong>Safe for All Ages:</strong> Suitable for children, adults, and the elderly.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Why Choose Homeopathy Over Conventional Methods?
          </h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-3">
            <li><strong>Non-Invasive:</strong> No surgeries or harsh treatments involved.</li>
            <li><strong>Long-Term Relief:</strong> Focuses on the root cause for lasting results.</li>
            <li><strong>Minimal Side Effects:</strong> Gentle on the body, safe for long-term use.</li>
            <li><strong>Personalized Care:</strong> Every treatment is tailored to your symptoms and lifestyle.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            FAQs about Lichen Planus Homeopathy Treatment
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <div>
              <strong>Can homeopathy cure Lichen Planus completely?</strong>
              <p>
                While not a guaranteed cure, homeopathy significantly improves symptoms and quality of life by addressing underlying causes.
              </p>
            </div>
            <div>
              <strong>How long does it take to see improvement?</strong>
              <p>
                Results vary, but most people see positive changes within weeks to a few months of consistent treatment.
              </p>
            </div>
            <div>
              <strong>Is homeopathy safe for children?</strong>
              <p>
                Yes, it's a gentle and safe treatment for children. Always consult a qualified homeopathic doctor.
              </p>
            </div>
            <div>
              <strong>Can it help with severe itching?</strong>
              <p>
                Yes, homeopathic remedies help reduce itching and inflammation naturally.
              </p>
            </div>
            <div>
              <strong>What lifestyle changes help?</strong>
              <p>
                Avoid triggers (stress, allergens), maintain hygiene, moisturize regularly, and practice yoga or meditation.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-green-100 rounded-xl p-6 text-center text-green-900">
          <h3 className="text-2xl font-bold mb-2">Ready to Heal Naturally?</h3>
          <p className="mb-4 text-lg">
            Reach out to our experienced homeopathic practitioners and take the first step toward relief from Lichen Planus.
          </p>
          <a
            href="/contactform"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
          >
            Contact Us Today
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
