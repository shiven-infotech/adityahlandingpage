"use client";

import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function SciaticaPage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10 text-gray-800">
        <section>
          <h1 className="text-3xl font-bold text-center mb-6">
            Sciatica Homeopathy Treatment
          </h1>
          <h2 className="text-xl font-semibold mb-2">Understanding Sciatica</h2>
          <p className="mb-4">
            <strong>What is Sciatica?</strong>
          </p>
          <p className="mb-4">
            Sciatica is a pain that shoots down your leg, often starting from
            your lower back or buttocks. It's like a shooting pain or an
            electric shock that can be mild or really painful. This happens
            because of a nerve called the sciatic nerve that runs down your leg.
          </p>
          <p className="mb-4">
            The most common reason for sciatica is when a part of your back's
            cushioning discs sticks out and presses on that nerve. This makes
            the nerve inflamed and irritated, causing the shooting pain you
            feel.
          </p>
          <p className="mb-4">
            When you have sciatica, you might also feel tingling or numbness in
            your leg or foot, and sometimes your leg might feel weak. Certain
            things like sitting for too long or sudden movements can make the
            pain worse.
          </p>
          <p>
            To treat sciatica, you might start with simple things like resting,
            using hot or cold packs on your back, doing gentle stretches, and
            taking over-the-counter pain relievers. Physical therapy can also
            help by making your back and leg muscles stronger and more flexible.
          </p>
          <p className="mt-4">
            If your sciatica is really bad or keeps coming back, it's important
            to talk to a doctor—especially if you have symptoms like loss of
            bladder or bowel control or pain after an injury. A doctor can help
            you find the best treatment before it gets worse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Homeopathy for Sciatica?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Holistic Approach:</strong> Homeopathy looks beyond just
              the pain. It seeks to treat the root cause while improving your
              entire well-being.
            </li>
            <li>
              <strong>Gentle Remedies:</strong> Homeopathic medicines are
              natural and free from harsh side effects, offering safe relief.
            </li>
            <li>
              <strong>Personalized Treatment:</strong> Every person gets a
              tailored treatment based on their symptoms and body responses.
            </li>
            <li>
              <strong>Long-Term Relief:</strong> Homeopathy boosts your body's
              natural healing, aiming to prevent recurring episodes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Comparison: Homeopathy vs. Other Treatments for Sciatica
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Safety Profile:</strong> Homeopathy is chemical-free and
              gentle, reducing the risk of side effects.
            </li>
            <li>
              <strong>Non-Invasive:</strong> No surgeries or injections—just
              natural support that works with your body.
            </li>
            <li>
              <strong>Wholistic Healing:</strong> Focuses on complete body
              healing, not just temporary pain relief.
            </li>
            <li>
              <strong>Individualized Care:</strong> Each treatment is customized
              to your unique needs for optimal effectiveness.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            FAQs about Sciatica Homeopathy Treatment
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">
                What are the common symptoms of sciatica?
              </p>
              <p>
                Sharp, shooting pain from the lower back or buttock down one
                leg. Tingling, numbness, or weakness in the leg or foot may
                occur. Pain often worsens with sitting or sudden movement.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                How does homeopathy approach sciatica treatment differently?
              </p>
              <p>
                Homeopathy focuses on the cause, not just the symptom. It
                tailors remedies to your overall health and personal symptoms to
                encourage lasting relief.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Are homeopathic remedies safe for pregnant women with sciatica?
              </p>
              <p>
                Yes, homeopathy is generally safe for pregnant women. Its
                gentle, non-toxic nature makes it a preferred option—always
                consult a qualified homeopath.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Can homeopathy help manage chronic sciatica pain?
              </p>
              <p>
                Yes, homeopathy can help reduce chronic pain by promoting
                internal healing and reducing inflammation or nerve irritation
                over time.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Is it possible to combine homeopathy with physiotherapy?
              </p>
              <p>
                Yes! Homeopathy and physiotherapy can work well together.
                Homeopathy supports healing internally while physiotherapy
                improves strength and mobility. Consult both professionals for
                coordinated care.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">
            Ready to Find Relief from Sciatica?
          </h2>
          <p className="mb-4">
            If you or someone you care about is struggling with sciatica, try
            homeopathy for gentle and personalized healing. Speak to a qualified
            practitioner who understands your symptoms and can guide you
            effectively.
          </p>
          <p className="mb-4">
            Taking early steps with holistic treatment can change how you live
            each day. Don’t let nerve pain stop you—start your healing journey
            today.
          </p>
          <p className="font-semibold text-yellow-700">
            Don&apos;t wait—take the first step toward a pain-free life!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
