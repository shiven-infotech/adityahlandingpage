"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function BoostingImmunityPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-50 py-16 px-6 text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Boosting Immunity the Natural Way
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Discover how homeopathy strengthens your body’s natural defense system
          and keeps you healthier, naturally and safely.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center" data-aos="fade-right">
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">Why Immunity Matters</h2>
          <p className="text-gray-700 mb-4">
            Your immune system is your body’s primary defense against infections and diseases.
            A strong immune system not only protects you from seasonal illnesses but also
            enhances your energy, mood, and overall well-being.
          </p>
          <p className="text-gray-700">
            Homeopathy focuses on balancing and stimulating the body’s innate healing abilities,
            making it a natural choice for boosting immunity without side effects.
          </p>
        </div>
        <div>
          <img
            src="/images/immunity-boost.jpg"
            alt="Boost Immunity Naturally"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-green-100 py-12 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Benefits of Homeopathy for Immunity</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Natural & Safe</h3>
              <p className="text-gray-600">
                Homeopathic remedies are derived from natural sources, making them gentle yet effective.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">No Side Effects</h3>
              <p className="text-gray-600">
                Boost your immunity without worrying about harmful chemical side effects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Personalized Care</h3>
              <p className="text-gray-600">
                Treatments are tailored to your specific health profile and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Homeopathy Helps */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center" data-aos="fade-left">
        <div>
          <img
            src="/images/natural-healing.jpg"
            alt="Natural Healing"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">How Homeopathy Boosts Immunity</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Stimulates the body’s natural defense mechanism</li>
            <li>Addresses underlying causes of weak immunity</li>
            <li>Improves energy and resilience against illnesses</li>
            <li>Supports long-term wellness naturally</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-800 text-white py-12 text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Immunity?</h2>
        <p className="mb-6">Consult our experienced homeopaths and begin your journey to a healthier you.</p>
        <a
          href="/appointment"
          className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Book an Appointment
        </a>
      </section>

      <Footer />
    </>
  );
}
