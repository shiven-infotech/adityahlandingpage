"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function AcupressurePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="px-4 py-10 bg-[#e3ffe0]   max-w-screen mx-auto text-black" data-aos="fade-up">
        <h1 className="text-4xl font-bold  text-green-700 mb-10">
          Acupressure – Healing Through the Power of Touch
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          At <strong>Aditya Homoeopathic Clinic</strong>, we are committed to providing natural, effective therapies that awaken the body’s inner healing intelligence. Among these, <strong>Acupressure Therapy</strong> stands out as a gentle yet powerful technique rooted in ancient Eastern medicine. Unlike acupuncture, acupressure uses the touch of fingers, palms, or special tools instead of needles to apply pressure on specific points along the body's meridian lines. These points are directly linked to internal organs and energy pathways, and by stimulating them, acupressure helps release blocked energy, restore balance, and promote holistic healing. It is a safe and non-invasive method that can offer immense relief from a wide range of physical and emotional ailments.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Our acupressure therapy sessions are thoughtfully integrated with homoeopathic principles to offer a deeper level of care and personalized healing. Whether you are dealing with chronic headaches, back pain, joint stiffness, fatigue, digestive issues, anxiety, or hormonal imbalances, acupressure can help regulate your internal systems without the use of medication or invasive procedures. At Aditya Homoeopathic Clinic, we believe that when the flow of energy within the body is aligned, true health can flourish. Our practitioners are trained to read the body’s subtle cues and apply pressure precisely where it's needed to bring about a sense of balance and renewal.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Each session begins with a comprehensive consultation where we listen deeply to your concerns, assess your physical and emotional state, and design a customized treatment plan. The therapy itself involves applying rhythmic, firm, and sustained pressure on selected acupoints to release tension, increase circulation, and activate the body's self-healing mechanisms. Many clients describe the sensation as both relaxing and invigorating, often experiencing relief within the very first session. Over time, regular acupressure can help the body reset its energy patterns, improve immunity, reduce stress, and maintain better health without dependency on external interventions.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          What makes acupressure especially accessible is its suitability for people of all ages and conditions. It can be safely used for children, the elderly, and even those with chronic health concerns or sensitivities. Our clinic provides a serene and hygienic space where your comfort and trust are our highest priority. The therapy is performed with care, compassion, and respect for your body’s rhythms. For enhanced results, our team may combine acupressure with homoeopathic remedies that complement your energy type, emotional patterns, and physical constitution—creating a comprehensive healing experience tailored just for you.
        </p>

        <p className="text-lg leading-relaxed mb-12">
          If you are seeking a natural, nurturing way to manage pain, reduce stress, or support your overall well-being, acupressure therapy at Aditya Homoeopathic Clinic offers a powerful path forward. You do not need to live with chronic discomfort or imbalanced energy. Let us help you reconnect with the wisdom of your body through the healing power of touch. Book your acupressure session today and take a meaningful step toward harmony, vitality, and inner peace—guided by hands that heal and hearts that care.
        </p>
      </main>

      <Footer />
    </>
  );
}
