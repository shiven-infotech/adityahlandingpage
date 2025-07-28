"use client";

import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function SpinalStenosisPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="px-6 py-10 bg-[#e3ffe0] max-w-screen mx-auto text-center space-y-10 text-gray-800">
        <section>
          <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
            Spinal Stenosis Homeopathy Treatment
          </h1>

          <h2 className="text-2xl font-semibold mb-4">Understanding Spinal Stenosis</h2>

          <h3 className="text-xl font-semibold mb-2">What is Spinal Stenosis?</h3>
          <p className="mb-4">
            Spinal stenosis is when the spaces inside your spine get narrower and squeeze the nerves there. Think of it like a road with too many cars – it blocks the nerves from moving freely.
          </p>
          <p className="mb-4">
            As we get older, our spine can shrink due to things like extra bone growth or thick ligaments. This squeezing can happen in two main areas: the central canal (central stenosis) or where the nerves come out of the spine (foraminal stenosis). When these spaces get tight, they can press on the nerves and cause pain, tingling, weakness, or numbness.
          </p>
          <p className="mb-4">
            The symptoms of spinal stenosis depend on where it happens. For instance, if it's in your lower back (lumbar stenosis), you might feel leg pain or cramps when you walk or stand for too long. If it's in your neck (cervical stenosis), you might have neck pain, weak hands or arms, or trouble balancing.
          </p>
          <p className="mb-4">
            Treating spinal stenosis usually involves different methods. This can include medicines to ease pain, physical therapy to make your muscles stronger, posture improvement exercises, and sometimes injections to reduce swelling.
          </p>
          <p className="mb-4">
            In severe cases, surgery may be needed. But it's important to consult with a doctor early to find the best treatment path and manage the condition effectively.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Homeopathy for Spinal Stenosis?</h2>

          <ul className="space-y-4">
            <li>
              <strong>Holistic Approach:</strong> Homeopathy looks at your overall health, not just symptoms. By treating the root cause, it offers long-term relief.
            </li>
            <li>
              <strong>Gentle Remedies:</strong> These remedies are safe and free from harsh side effects, making them ideal for sensitive individuals.
            </li>
            <li>
              <strong>Personalized Treatment:</strong> Treatments are tailored based on your unique symptoms and body response.
            </li>
            <li>
              <strong>Long-Term Relief:</strong> Homeopathy supports your body’s natural healing, aiming to stop the issue from recurring.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Comparison: Homeopathy vs. Other Treatments</h2>

          <ul className="space-y-4">
            <li>
              <strong>Safety Profile:</strong> Homeopathy is chemical-free and side-effect-free, unlike many conventional medicines.
            </li>
            <li>
              <strong>Non-Invasive:</strong> No surgeries or injections—just gentle remedies that support healing.
            </li>
            <li>
              <strong>Wholistic Healing:</strong> It improves your entire health, not just the symptoms.
            </li>
            <li>
              <strong>Individualized Care:</strong> Every treatment is uniquely designed for your body and symptoms.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">FAQs about Spinal Stenosis Homeopathy Treatment</h2>

          <div className="space-y-4">
            <div>
              <strong>1. What are the common symptoms of spinal stenosis?</strong>
              <p>
                Back pain, numbness, tingling in the legs, difficulty walking, and weakness in arms or legs depending on the stenosis location.
              </p>
            </div>

            <div>
              <strong>2. How does homeopathy approach spinal stenosis treatment differently?</strong>
              <p>
                Homeopathy treats the whole person, addressing underlying causes like inflammation or nerve pressure to support natural healing.
              </p>
            </div>

            <div>
              <strong>3. Are homeopathic remedies safe for elderly patients with spinal stenosis?</strong>
              <p>
                Yes. Homeopathy is gentle and non-toxic, making it safe for elderly patients. Still, always consult a certified practitioner.
              </p>
            </div>

            <div>
              <strong>4. Can homeopathy help manage severe spinal stenosis pain?</strong>
              <p>
                Yes, many patients find relief with homeopathy. It works by reducing nerve inflammation and improving function.
              </p>
            </div>

            <div>
              <strong>5. Is it possible to combine homeopathy with physical therapy?</strong>
              <p>
                Absolutely. Combining homeopathy with physical therapy offers both internal healing and external support for movement and strength.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-xl shadow-md mt-10 text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Take the First Step Toward Relief</h2>
          <p className="text-lg mb-4">
            If you or someone you care about is dealing with spinal stenosis, consider homeopathy for gentle and personalized care.
          </p>
          <p className="text-lg mb-4">
            Speak with a qualified homeopathic practitioner today and discover a treatment plan tailored to your needs. Don’t wait—your journey to better movement and pain relief can start now.
          </p>
          <button className="mt-4 px-6 py-3 bg-green-700 hover:bg-blue-700 text-white text-lg font-medium rounded-lg shadow">
            Book a Consultation
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}
