"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function NaturopathyPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="px-4 py-10 bg-[#e3ffe0]  max-w-screen mx-auto text-black" data-aos="fade-up">
        <h1 className="text-4xl font-bold  text-green-700 mb-10">
          Naturopathy – Healing in Harmony with Nature
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          At <strong>Aditya Homoeopathic Clinic</strong>, we believe that nature is the greatest healer, and the human body has an innate ability to heal itself when given the right environment and support. <strong>Naturopathy</strong> is a holistic approach that honors this truth. It is based on the philosophy of using natural elements—earth, water, air, sunlight, diet, and lifestyle—to cleanse the body, restore balance, and maintain long-term wellness. Naturopathy doesn’t suppress symptoms with chemicals; instead, it aims to remove the root causes of disease and reawaken the body’s own vitality through gentle, drugless, and time-tested methods.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          In our Naturopathy programs, we begin by understanding your complete physical, emotional, and lifestyle profile. Our trained naturopaths assess the imbalances, deficiencies, or toxic loads affecting your health and create a customized wellness plan that may include therapeutic fasting, hydrotherapy, mud therapy, sunbathing, yogic cleansing techniques, breathing exercises, and personalized diet recommendations. These therapies are carefully selected to match your body’s constitution, energy levels, and current health condition. Unlike conventional treatments that focus on isolated symptoms, Naturopathy at Aditya Homoeopathic Clinic views you as a whole being—interconnected, intelligent, and self-healing.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Our Naturopathy sessions are not just treatments—they are immersive healing experiences. You’ll find yourself reconnecting with the elements: feeling the grounding power of mud, the cooling energy of water, the clarity that comes from deep breathing, and the nourishment from fresh, healing foods. Combined with proper rest and movement, these natural therapies help eliminate toxins, regulate metabolism, balance hormones, and restore mental calmness. We often pair Naturopathy with homoeopathy to enhance internal healing at a vibrational level. Together, they form a beautiful synergy—one working through nature’s physical elements, and the other through subtle energetic balance.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          At Aditya Homoeopathic Clinic, our naturopathic environment is warm, clean, and supportive—free from chemicals, full of compassion. Whether you're dealing with digestive issues, stress, lifestyle disorders like obesity or diabetes, skin conditions, chronic fatigue, or even recovering from medications or burnout, Naturopathy can offer a powerful, drug-free path to wellness. It’s especially effective for those seeking detoxification, disease prevention, and natural rejuvenation without side effects. We don’t just guide you during your therapy; we empower you with tools and education so that you can carry this healing into your daily life.
        </p>

        <p className="text-lg leading-relaxed mb-12">
          If you're longing to reconnect with yourself and nature, and you want to heal in a way that feels natural, empowering, and sustainable, then Naturopathy at Aditya Homoeopathic Clinic is here for you. Let us help you return to balance—not by fighting disease, but by creating health. Book your personalized Naturopathy consultation today and rediscover what it means to live in harmony with the rhythm of life. Simple. Pure. Powerful.
        </p>
      </main>

      <Footer />
    </>
  );
}
