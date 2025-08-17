"use client";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function FrecklesPage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10 text-gray-800">
        <h1 className="text-3xl font-bold text-green-700 text-center">
          Freckles Homeopathy Treatment
        </h1>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-600">What is Freckles?</h2>
          <p>
            Freckles are those charming little spots that often grace our skin, especially after soaking up some sunshine. They add a touch of whimsy to our faces! These spots are caused by melanin, the pigment that gives our skin its color. When we're exposed to sunlight, our skin produces more melanin to shield itself, resulting in these lovely freckles.
          </p>
          <p>
            They're generally harmless, varying in size and darkness. Some cherish their freckles as a unique part of their appearance, while others may wish to lighten or diminish them. Freckles are most noticeable on fair skin but can appear on any skin tone.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-600">
            How Can Homeopathy Treatment Be a Good Option for Freckles?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Holistic Approach:</strong> Homeopathy looks at your unique skin type and factors that contribute to freckles, such as sun exposure and genetics.
            </li>
            <li>
              <strong>Natural Remedies:</strong> Made from natural substances, homeopathic remedies are gentle and safe for your skin.
            </li>
            <li>
              <strong>Balanced Pigmentation:</strong> Homeopathy helps regulate melanin production, reducing the appearance of freckles.
            </li>
            <li>
              <strong>Long-Term Management:</strong> It addresses root causes for lasting results and clearer, even-toned skin.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-600">
            Other vs Freckles Homeopathy Treatment
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Gentle Approach:</strong> Non-invasive and chemical-free alternative to lasers or peels.
            </li>
            <li>
              <strong>Customized Treatment:</strong> Personalized based on your specific condition and skin type.
            </li>
            <li>
              <strong>Safe for Everyone:</strong> Ideal even for sensitive skin with minimal risk of side effects.
            </li>
            <li>
              <strong>Long-Lasting Results:</strong> Helps reduce recurrence by addressing internal causes.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-600">FAQs</h2>
          <ul className="space-y-2">
            <li>
              <strong>Can homeopathy completely remove freckles?</strong> Homeopathy aims to reduce their appearance based on skin type and conditions.
            </li>
            <li>
              <strong>How long does it take to see improvements?</strong> Weeks to months, depending on consistency and severity.
            </li>
            <li>
              <strong>Are remedies safe for long-term use?</strong> Yes, they are natural and gentle.
            </li>
            <li>
              <strong>Can it help freckles caused by sun exposure?</strong> Yes, by addressing melanin production and skin balance.
            </li>
            <li>
              <strong>What lifestyle changes help?</strong> Use sunscreen, avoid harsh sunlight, and eat a vitamin-rich diet.
            </li>
          </ul>
        </section>

        <section className="space-y-4 text-center">
          <h2 className="text-xl font-semibold text-green-600">Take the First Step</h2>
          <p>
            Ready to say goodbye to freckles naturally? Connect with our experienced homeopathic practitioners today for personalized care. Let’s restore your skin’s natural beauty!
          </p>
          <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
            Book a Consultation
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
