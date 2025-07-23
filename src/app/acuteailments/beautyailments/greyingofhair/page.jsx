"use client";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function GreyingHairPage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="px-4 py-10 max-w-5xl mx-auto text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Greying of Hair Homeopathy Treatment
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What is Greying of Hair?</h2>
          <p className="text-lg leading-7">
            Premature greying of hair can happen due to various reasons like family traits,
            stress, lifestyle habits, and not getting enough nutrients. Genes are a big part of it—they
            decide when your hair starts losing color. Stress can speed up this process, as can
            things like smoking or not eating well. Some health conditions and treatments can also
            make your hair turn grey sooner. While it's normal as you age, early greying can affect
            how you feel about yourself. Homeopathy offers personalized treatments to tackle these
            causes and promote healthy hair growth, helping you manage premature greying effectively.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            How Can Homeopathy Treatment Be a Good Option for Greying of Hair?
          </h2>
          <ul className="list-disc ml-6 space-y-3 text-lg leading-7">
            <li>
              <strong>Holistic Approach:</strong> Homeopathy looks at the whole picture. It doesn't just
              focus on the grey hair itself but considers things like stress, diet, and family history.
            </li>
            <li>
              <strong>Individualized Treatment:</strong> Homeopathy creates a tailor-made plan for your
              specific reasons for greying hair.
            </li>
            <li>
              <strong>Safe and Natural:</strong> Remedies come from plants and minerals, making them gentle
              and side-effect free.
            </li>
            <li>
              <strong>Promotes Hair Health:</strong> Improves your hair's overall health and may restore
              natural color over time.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Other vs Greying of Hair Homeopathy Treatment
          </h2>
          <ul className="list-disc ml-6 space-y-3 text-lg leading-7">
            <li><strong>Gentle Approach:</strong> No harsh chemicals or surgeries involved.</li>
            <li><strong>Root Cause Treatment:</strong> Focuses on underlying causes, not just surface-level fixes.</li>
            <li><strong>Safe for Everyone:</strong> Suitable for all ages and hair types.</li>
            <li><strong>Long-Term Results:</strong> Promotes lasting hair health instead of temporary solutions.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">FAQs about Greying of Hair Homeopathy Treatment</h2>
          <ul className="space-y-5 text-lg leading-7">
            <li>
              <strong>Can homeopathy reverse grey hair completely?</strong><br />
              While it may not reverse grey hair completely, it can help manage and slow the process by addressing root causes.
            </li>
            <li>
              <strong>How soon can one expect to see improvements?</strong><br />
              It varies per individual. Some may see results in a few months; others may take longer.
            </li>
            <li>
              <strong>Are homeopathic remedies safe for long-term use?</strong><br />
              Yes, they are derived from natural substances and considered safe when used under proper guidance.
            </li>
            <li>
              <strong>Can homeopathy help prevent premature greying?</strong><br />
              Yes, by managing stress, improving nutrition, and addressing genetic factors, homeopathy can help.
            </li>
            <li>
              <strong>What lifestyle changes support treatment?</strong><br />
              Eat a balanced diet, reduce stress, sleep well, hydrate, and avoid harsh hair treatments.
            </li>
          </ul>
        </section>

        <section className="bg-green-100 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-2 text-green-700">
            Call to Action
          </h2>
          <p className="text-lg">
            Are you ready to bring back life to your hair naturally? Reach out to our experienced homeopathic practitioners today
            for tailored treatment plans and effective solutions to manage greying hair. Start your journey towards healthier,
            more vibrant hair and renewed confidence!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
