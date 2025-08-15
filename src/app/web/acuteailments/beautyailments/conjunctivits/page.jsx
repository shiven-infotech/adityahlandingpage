"use client";

import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function ConjunctivitisPage() {
  return (
    <>
     
      <Header />
        <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12 text-gray-800">
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-4">What is Conjunctivitis?</h2>
          <p>
            Conjunctivitis, also known as pink eye, is a common eye problem that causes
            redness and swelling in the clear tissue covering the white part of your eye and
            lining the inner eyelids (called the conjunctiva). It can happen because of
            infections, allergies, irritants like smoke or chemicals, or viruses like those
            causing the common cold.
          </p>
          <p className="mt-4">
            When you have conjunctivitis, your eyes may look red or pink, feel itchy or
            gritty, produce a watery or thick discharge, and sometimes cause blurry vision.
            It can affect one or both eyes and can spread easily, especially if it's due to
            bacteria or viruses.
          </p>
          <p className="mt-4">
            Treating conjunctivitis depends on what caused it. Homeopathy offers a natural
            way to deal with this condition using gentle remedies customized to your
            specific symptoms and overall health. These remedies are designed to ease
            inflammation, relieve discomfort, and help your eyes heal without causing any
            harsh side effects.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            How Can Homeopathy Treatment Be a Good Option for Conjunctivitis?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Holistic Approach:</strong> Homeopathy looks at each person as unique. It provides personalized treatment based on your specific symptoms and overall health.</li>
            <li><strong>Natural Remedies:</strong> Made from natural substances, homeopathic medicines are gentle on your eyes and reduce chances of side effects.</li>
            <li><strong>Quick Relief:</strong> Homeopathy aims to ease redness, itching, and discharge quickly, bringing fast comfort.</li>
            <li><strong>Prevents Recurrence:</strong> Homeopathy strengthens your immune system to help prevent future infections.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Other vs Conjunctivitis Homeopathy Treatment</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Non-Invasive:</strong> No harsh procedures or antibiotic drops needed—homeopathy offers relief through gentle methods.</li>
            <li><strong>Safe for All Ages:</strong> Suitable for everyone, including young children and seniors.</li>
            <li><strong>Minimal Side Effects:</strong> Uses natural ingredients that reduce the risk of irritation or other side effects.</li>
            <li><strong>Long-Term Benefits:</strong> Strengthens your eye health and immunity for lasting relief.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-4">FAQs about Conjunctivitis Homeopathy Treatment</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Can homeopathy cure viral conjunctivitis?</h3>
              <p>Homeopathy helps manage symptoms and promotes healing, even for viral types.</p>
            </div>
            <div>
              <h3 className="font-semibold">How long does it take to see improvements?</h3>
              <p>Improvement usually begins within a few days to a week, depending on severity and response.</p>
            </div>
            <div>
              <h3 className="font-semibold">Are homeopathic eye drops safe for children?</h3>
              <p>Yes, they are gentle and suitable for children, but dosage should be guided by a practitioner.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can homeopathy help with allergic conjunctivitis?</h3>
              <p>Yes, it helps relieve itching, redness, and inflammation caused by allergies.</p>
            </div>
            <div>
              <h3 className="font-semibold">What lifestyle tips help alongside homeopathy?</h3>
              <p>Use warm compresses, avoid rubbing eyes, wash hands often, and avoid irritants like smoke or pollen.</p>
            </div>
          </div>
        </section>

        <section className="bg-green-100 p-6 rounded-xl shadow mt-12 text-center">
          <h2 className="text-xl font-bold text-green-800 mb-2">Call to Action</h2>
          <p>
            Are your eyes feeling irritated and uncomfortable? Connect with our experienced
            homeopathic practitioners today! We offer personalized treatment plans and
            effective solutions to soothe your eyes naturally. Take the first step towards
            clear and comfortable eyes with homeopathy!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
