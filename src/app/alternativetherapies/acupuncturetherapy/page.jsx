"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function AcupuncturePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="px-4 bg-[#e3ffe0]  py-10 max-w-screen mx-auto text-black" data-aos="fade-up">
        <h1 className="text-4xl font-bold  text-green-700 mb-10">
          Acupuncture – Restoring Energy and Balance
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          At <strong>Aditya Homoeopathic Clinic</strong>, we deeply understand that health is not just the absence of disease, but a harmonious balance between the mind, body, and spirit. Among the many holistic modalities we offer, acupuncture holds a special place for its ability to unlock the body’s natural healing potential through the ancient wisdom of Traditional Chinese Medicine. Acupuncture works by stimulating specific points on the body, known as meridians, through the insertion of fine, sterile needles. These points correspond to pathways of vital energy, or <em>Qi</em>, that flow throughout the body. When energy flow is disrupted due to stress, trauma, poor lifestyle, or emotional disturbances, the body manifests discomfort or disease. Acupuncture helps to restore the smooth flow of energy, promoting internal balance, pain relief, emotional clarity, and improved physiological function.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Our approach to acupuncture at Aditya Homoeopathic Clinic is unique in that it integrates seamlessly with our homoeopathic philosophy of individualized, non-invasive, and root-cause-based healing. We do not treat symptoms in isolation; instead, we see each patient as a whole human being with a unique health story. Whether you are suffering from chronic back pain, migraines, insomnia, digestive issues, anxiety, hormonal imbalances, or simply feel “off-balance” in life, acupuncture provides a powerful yet gentle path to recovery. Our trained practitioners begin each treatment with a personalized assessment, understanding your emotional and physical state, lifestyle patterns, and health goals. Based on this evaluation, a tailored acupuncture plan is created that not only provides relief but supports long-term healing.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          An acupuncture session with us is designed to be a deeply relaxing and rejuvenating experience. After a warm consultation, our practitioner will gently insert fine needles at carefully selected points on your body. Contrary to common fear, acupuncture is not painful—many patients describe the sensation as a mild tingling or warmth, often followed by a deep sense of calm and groundedness. The session typically lasts 30 to 45 minutes, during which your body begins to regulate its nervous system, release endorphins, improve blood circulation, and reset the energetic balance. Many patients report not just physical improvement, but mental clarity, emotional peace, and enhanced sleep after just a few sessions. When combined with homoeopathic remedies, acupuncture becomes even more effective, as both therapies work at a deep, vibrational level to activate the body's healing intelligence.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          What sets Aditya Homoeopathic Clinic apart is not just our technical expertise, but the compassion, patience, and intention with which we treat each individual. We believe healing is a journey, and we walk with you every step of the way. Our therapy rooms are designed to create a calm, hygienic, and peaceful environment where you can disconnect from the stress of daily life and reconnect with yourself. Acupuncture is not a one-size-fits-all therapy; it is a profound, intuitive dialogue between practitioner and patient. Every session is a sacred opportunity for self-care and restoration. Whether you are recovering from a long-standing ailment, managing stress, or looking to prevent future health issues, our acupuncture therapy can offer a new path of wellness and vitality.
        </p>

        <p className="text-lg leading-relaxed mb-12">
          If you’ve been searching for a therapy that understands your whole being and treats the source of your discomfort—not just the symptoms—acupuncture at Aditya Homoeopathic Clinic may be exactly what you need. We invite you to experience the synergy of ancient healing techniques and modern, compassionate care. Book your session today and step into a space where healing is not rushed, where your story is heard, and where your wellness is our deepest commitment. Let the natural flow of life return to your body and spirit—with balance, energy, and renewed purpose.
        </p>
      </main>

      <Footer />
    </>
  );
}
