"use client";

import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function CervicalSpondylosisPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="px-6 py-10 max-w-4xl mx-auto space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-6 text-green-700">
            Cervical Spondylosis Homeopathy Treatment
          </h1>
          <h2 className="text-2xl font-bold mb-4">
            Understanding Cervical Spondylosis and How Homeopathy Helps
          </h2>
          <h3 className="text-xl font-semibold mb-2">What is Cervical Spondylosis?</h3>
          <p className="mb-4">
            Cervical spondylosis, also known as neck arthritis, is a common condition that affects the cervical spine. As we age, the discs and vertebrae in our neck can undergo wear and tear, leading to symptoms like neck pain, stiffness, headaches, and sometimes tingling or numbness in the arms or hands.
          </p>
          <p className="mb-4">
            Causes include poor posture, injuries, or genetic predisposition. Over time, these changes can lead to bone spurs, herniated discs, or narrowing of the spinal canal.
          </p>
          <p>
            Managing cervical spondylosis includes pain relief medications, physical therapy, exercises, ergonomic adjustments, and healthy lifestyle choices.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">
            Why Homeopathy for Cervical Spondylosis?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Holistic Care:</strong> Treats your whole health, not just symptoms, for longer-lasting results.
            </li>
            <li>
              <strong>Gentle Treatment:</strong> Remedies are mild and typically free from side effects.
            </li>
            <li>
              <strong>Personalized Approach:</strong> Tailored to your individual symptoms and health profile.
            </li>
            <li>
              <strong>Long-Term Relief:</strong> Aims to activate your body’s natural healing for sustained wellness.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">
            Comparing Homeopathy to Other Treatments
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Less Side Effects: Safer than conventional medications or surgeries</li>
            <li>Focus on Healing: Supports natural healing rather than suppressing symptoms</li>
            <li>Tailored Care: Customized to your case instead of generic solutions</li>
            <li>Lasting Benefits: Targets the root cause for deeper, long-term relief</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">
                What are the common symptoms of cervical spondylosis?
              </p>
              <p>
                Neck pain, stiffness, radiating pain, numbness in the arms or hands, and balance difficulties.
              </p>
            </div>
            <div>
              <p className="font-medium">
                How does homeopathy approach cervical spondylosis treatment differently?
              </p>
              <p>
                Homeopathy focuses on the individual’s overall health, selecting remedies based on their unique symptoms and lifestyle for long-term relief.
              </p>
            </div>
            <div>
              <p className="font-medium">
                Are homeopathic remedies safe for everyone?
              </p>
              <p>
                Yes, they are gentle and suitable for all age groups, including pregnant women and children. Always consult a qualified homeopath.
              </p>
            </div>
            <div>
              <p className="font-medium">
                How long does it take to see improvements?
              </p>
              <p>
                It varies—some patients feel better in weeks, others may need more time based on severity and overall health.
              </p>
            </div>
            <div>
              <p className="font-medium">
                Can homeopathy be used with other treatments?
              </p>
              <p>
                Yes, homeopathy complements physical therapy and other conventional treatments. Coordination with healthcare providers is advised.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Call to Action</h3>
          <p>
            If you or someone you care about is dealing with cervical spondylosis, consider homeopathy for gentle and personalized care. It's a natural, holistic approach aiming to bring lasting relief. Get in touch with a qualified homeopath to start your healing journey today.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
