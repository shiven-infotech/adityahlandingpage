"use client";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function RheumatismTreatmentPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Header />
      <Navbar />


      <main className="px-4 md:px-10 py-10 max-w-screen mx-auto text-center bg-[#e3ffe0] space-y-8">
        <h1 className="text-3xl font-bold text-center text-green-800" data-aos="fade-up">
          Rheumatism Homeopathy Treatment
        </h1>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">What is Rheumatism?</h2>
          <p className="text-gray-800">
            Rheumatism refers to a variety of conditions that cause joint and muscle pain, stiffness, and discomfort. It encompasses issues like arthritis and fibromyalgia. People with rheumatism often struggle with joint stiffness, swelling, fatigue, and reduced mobility. The causes vary from autoimmune responses (as in rheumatoid arthritis) to simple wear and tear (as in osteoarthritis). Treatment focuses on symptom relief through pain management, exercise, diet, and, in severe cases, surgery. Seeing a doctor early can help tailor an effective care plan.
          </p>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Why Homeopathy for Rheumatism?</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>
              <strong>Holistic Care:</strong> Homeopathy doesn't just mask pain—it treats the root cause by considering your full health profile and lifestyle.
            </li>
            <li>
              <strong>Gentle Yet Effective:</strong> Remedies are natural, non-toxic, and free from the side effects commonly associated with conventional treatments.
            </li>
            <li>
              <strong>Customized Treatment:</strong> Your symptoms and constitution are unique—so is your remedy. Homeopathy offers truly personalized healing.
            </li>
            <li>
              <strong>Long-Term Relief:</strong> By strengthening your body's own healing response, homeopathy helps reduce relapses and provides lasting comfort.
            </li>
          </ul>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">How Homeopathy Stands Out</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>
              <strong>Safe and Natural:</strong> Homeopathic remedies are derived from nature and work gently with your body.
            </li>
            <li>
              <strong>No Surgery or Procedures:</strong> Homeopathy avoids invasive treatments and focuses on natural healing.
            </li>
            <li>
              <strong>Whole-Body Approach:</strong> It addresses your emotional, physical, and mental well-being.
            </li>
            <li>
              <strong>Tailored Just for You:</strong> Treatments are uniquely matched to your symptoms, lifestyle, and body type.
            </li>
          </ul>
        </section>

        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">FAQs on Rheumatism Homeopathy Treatment</h2>
          <ul className="space-y-4 text-gray-800">
            <li>
              <strong>Q: What are the common types of rheumatism?</strong>
              <br />A: They include osteoarthritis, rheumatoid arthritis, gout, fibromyalgia, and lupus.
            </li>
            <li>
              <strong>Q: How does homeopathy relieve rheumatism pain?</strong>
              <br />A: It stimulates the body’s healing, reducing inflammation and pain naturally.
            </li>
            <li>
              <strong>Q: Are homeopathic remedies safe long-term?</strong>
              <br />A: Yes, they are non-toxic and ideal for extended use without side effects.
            </li>
            <li>
              <strong>Q: Can it help prevent symptom flare-ups?</strong>
              <br />A: Absolutely, by boosting natural resilience and minimizing triggers.
            </li>
            <li>
              <strong>Q: Can I combine homeopathy with other medicines?</strong>
              <br />A: Yes, but always consult your doctor for a coordinated treatment plan.
            </li>
          </ul>
        </section>

        <section data-aos="fade-up" className="bg-green-100 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-green-800 mb-2">Take the First Step</h2>
          <p className="text-gray-700">
            If you or someone you care about is dealing with rheumatism, consider the gentle and personalized approach of homeopathy. Speak to a qualified homeopath, and begin a treatment plan that supports your well-being. Small steps today can lead to a big difference tomorrow.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
