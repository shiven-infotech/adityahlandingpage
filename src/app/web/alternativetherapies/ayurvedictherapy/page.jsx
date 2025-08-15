"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function AyurvedicPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="px-4 bg-[#e3ffe0]  py-10 max-w-screen mx-auto text-black" data-aos="fade-up">
        <h1 className="text-4xl font-bold  text-green-700 mb-10">
          Ayurvedic Therapy – Reconnecting with the Wisdom of Nature
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          At <strong>Aditya Homoeopathic Clinic</strong>, we honor the timeless traditions of healing that have nurtured humanity for centuries. Among these, <strong>Ayurveda</strong> holds a sacred place as one of the oldest and most comprehensive systems of natural medicine. Rooted in the Sanskrit words “Ayur” (life) and “Veda” (knowledge), Ayurveda is not just a therapy—it is a way of life. It emphasizes balance in all areas: diet, lifestyle, sleep, mental health, and connection to nature. Our Ayurvedic therapy sessions are designed to bring harmony to your body, mind, and spirit through personalized treatments based on your unique constitution or “Prakriti.”
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Every person is born with a specific combination of three fundamental energies or “Doshas” — Vata (air and space), Pitta (fire and water), and Kapha (earth and water). When these doshas are out of balance due to stress, poor habits, or environmental factors, disease and discomfort arise. Our expert Ayurvedic practitioners begin by assessing your dosha profile, current imbalances, and the root causes of your symptoms. Based on this holistic understanding, we create a personalized therapy plan that may include herbal remedies, detox programs, oil therapies, body massages, Panchakarma cleansing, and dietary/lifestyle corrections—all aimed at restoring your natural balance and strengthening your immunity.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          One of the most unique aspects of Ayurvedic therapy at Aditya Homoeopathic Clinic is its integration with our homoeopathic and holistic care philosophy. While Ayurveda works on physical and energetic purification, homoeopathy subtly tunes the body’s healing vibration. Together, they create a deeper, more sustainable healing process. Whether you are experiencing chronic joint pain, skin conditions, digestive issues, hormonal imbalance, emotional stress, or simply want to rejuvenate your energy, our Ayurvedic therapies offer a gentle yet profound way to return to your natural rhythm. Treatments like Abhyanga (herbal oil massage), Shirodhara (warm oil pouring), and Basti (herbal enema) are tailored to your current health state and doshic needs.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Our therapy environment is designed to support total relaxation and purification. From the aroma of herbs to the warmth of natural oils, every aspect of your session is intended to awaken the body’s self-healing power. We use only authentic Ayurvedic formulations, high-quality herbs, and traditional techniques—guided by modern understanding and compassionate care. At Aditya Homoeopathic Clinic, we don’t offer one-size-fits-all programs. Each therapy is customized with precision and love, keeping your body’s wisdom and your healing journey at the heart of everything we do.
        </p>

        <p className="text-lg leading-relaxed mb-12">
          If you are seeking a deeper connection with your health, tired of chemical-based treatments, or simply longing for a therapy that respects your individuality, Ayurvedic Therapy at Aditya Homoeopathic Clinic is here for you. Let us help you cleanse, rejuvenate, and restore balance using the ancient wisdom of Ayurveda, supported by the safety and subtlety of natural medicine. Book your Ayurvedic consultation today and begin a journey toward harmony, vitality, and lasting wellness—naturally and authentically.
        </p>
      </main>

      <Footer />
    </>
  );
}
