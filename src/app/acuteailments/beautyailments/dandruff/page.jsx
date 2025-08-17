"use client";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function DandruffPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          Dandruff Homeopathy Treatment
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">What is Dandruff?</h2>
          <p className="mb-4">
            Dandruff is something most of us have dealt with—it's those pesky
            white or yellowish flakes that appear in our hair and on our
            shoulders. These flakes are just dead skin cells from our scalp.
            While dandruff isn't harmful, it can be annoying, itchy, and
            embarrassing.
          </p>
          <p>
            Several factors can cause dandruff, like having dry or oily skin,
            being sensitive to certain hair products, or having a fungus called
            <strong> Malassezia</strong> on our scalp. When these factors are off
            balance, they cause more skin cells to grow, leading to dandruff.
            To manage dandruff, special shampoos and treatments target these
            root causes—like controlling oiliness, keeping your scalp
            moisturized, or fighting fungal growth.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            How can homeopathy treatment be a good option for Dandruff?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Holistic Approach:</strong> Homeopathy considers your
              entire health profile for tailored treatment.
            </li>
            <li>
              <strong>Natural Remedies:</strong> Made from plants and minerals,
              these remedies are gentle and effective.
            </li>
            <li>
              <strong>Balanced Scalp:</strong> Helps your scalp regain its
              natural, healthy state.
            </li>
            <li>
              <strong>Long-Term Results:</strong> Focuses on sustainable
              improvements, not just temporary fixes.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Other vs Dandruff Homeopathy Treatment
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Gentle Solutions:</strong> Free from harmful chemicals.
            </li>
            <li>
              <strong>Root Cause Targeting:</strong> Goes beyond symptoms to fix
              the source.
            </li>
            <li>
              <strong>Personalized Treatment:</strong> Custom solutions for your
              specific scalp condition.
            </li>
            <li>
              <strong>Safe and Consistent:</strong> Suitable for ongoing care
              without side effects.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            FAQs about Dandruff Homeopathy Treatment
          </h2>
          <div className="space-y-4">
            <div>
              <strong>Can homeopathy completely cure dandruff?</strong>
              <p>
                Homeopathy helps manage and significantly reduce symptoms, though
                not always a complete cure.
              </p>
            </div>
            <div>
              <strong>
                How long does it take to see improvements with homeopathy?
              </strong>
              <p>
                Results vary—some see changes in weeks, others may take longer.
              </p>
            </div>
            <div>
              <strong>
                Are homeopathic remedies safe for long-term use?
              </strong>
              <p>
                Yes, they’re natural and safe for ongoing use under proper
                guidance.
              </p>
            </div>
            <div>
              <strong>
                Can homeopathy help with severe dandruff causing hair loss?
              </strong>
              <p>
                Yes, by addressing root causes and improving scalp health, it
                helps reduce related hair loss.
              </p>
            </div>
            <div>
              <strong>
                What lifestyle changes complement homeopathy for dandruff?
              </strong>
              <p>
                Good hygiene, a healthy diet, mild shampoos, and stress
                management all support homeopathic results.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-green-100 rounded-xl p-6 text-center shadow">
          <h3 className="text-xl font-bold mb-4">
            Ready to Go Dandruff-Free the Natural Way?
          </h3>
          <p className="mb-4">
            Connect with our skilled homeopathic practitioners and start your
            personalized treatment today. Let’s restore your scalp and bring
            back your confidence!
          </p>
          <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
            Book Your Appointment Now
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}
