"use client";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function HairLossPage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Hair Loss Homeopathy Treatment</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">What is Hair Loss?</h2>
          <p className="text-gray-700 leading-relaxed">
            Hair loss is when you start noticing less hair on your head or other parts of your body.
            It's pretty common and can happen to anyone, whether you're a man or a woman and no matter your age.
            There are lots of reasons why it might happen, like genetics, hormonal changes, stress, certain medical conditions,
            medications, or nutritional deficiencies.
            Losing a bit of hair each day is normal, but sudden or excessive hair loss can be concerning.
            Homeopathy focuses on identifying the cause and helping hair regrow naturally without harsh treatments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">How Homeopathy Treatment Can Be a Good Option for Hair Loss?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Holistic Approach:</strong> Homeopathy identifies the root cause of hair loss, including genetic, hormonal, or health-related factors.</li>
            <li><strong>Individualized Treatment:</strong> Each treatment is customized for your specific symptoms and needs.</li>
            <li><strong>Safe and Natural:</strong> Remedies are made from plants and minerals, gentle for long-term use.</li>
            <li><strong>Promotes Hair Growth:</strong> Encourages healthy regrowth by improving scalp health and stimulating follicles.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Other vs Hair Loss Homeopathy Treatment</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Non-Invasive:</strong> No surgery or downtime is required.</li>
            <li><strong>Addresses Root Causes:</strong> Tackles underlying issues like stress or nutritional imbalance.</li>
            <li><strong>Suitable for All:</strong> Safe for people of all ages and hair types.</li>
            <li><strong>Long-Term Benefits:</strong> Supports sustained hair health through natural healing.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQs about Hair Loss Homeopathy Treatment</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Can homeopathy cure hair loss completely?</strong>
              <p>It helps reduce symptoms and improve overall hair health, but results vary by individual.</p>
            </div>
            <div>
              <strong>How long does it take to see improvements?</strong>
              <p>Most people notice results in a few months, depending on the cause and consistency of treatment.</p>
            </div>
            <div>
              <strong>Are homeopathic remedies safe for long-term use?</strong>
              <p>Yes, they are gentle, natural, and safe for extended use when taken under guidance.</p>
            </div>
            <div>
              <strong>Can homeopathy help with alopecia areata?</strong>
              <p>Yes, it can be tailored to manage various types of hair loss including alopecia.</p>
            </div>
            <div>
              <strong>What lifestyle changes support treatment?</strong>
              <p>Eating a balanced diet, managing stress, avoiding harsh treatments, and keeping your scalp healthy all help.</p>
            </div>
          </div>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-green-800 mb-2">Call to Action</h2>
          <p className="text-gray-700">
            Are you ready to give your hair the care it deserves? Reach out to our experienced homeopathic practitioners today!
            We offer personalized treatment plans and effective solutions for hair loss, tailored just for you.
            Take the first step towards healthier, vibrant hair and renewed confidence. Let's work together to bring back your natural beauty!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
