"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function PhysiotherapyPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="px-4 py-10 bg-[#e3ffe0]  max-w-screen mx-auto text-black" data-aos="fade-up">
        <h1 className="text-4xl font-bold  text-green-700 mb-10">
          Physiotherapy – Restore Movement, Reclaim Life
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          At <strong>Aditya Homoeopathic Clinic</strong>, we understand that pain-free movement is essential to living a full and independent life. Our <strong>Physiotherapy</strong> services are designed to help you regain mobility, strength, and confidence after injury, illness, surgery, or chronic conditions. Whether you're recovering from an accident, living with arthritis, healing from a stroke, or dealing with postural imbalances and stiffness, our physiotherapy approach goes beyond temporary relief. We focus on treating the root cause of dysfunction while addressing the pain, inflammation, and movement restrictions that affect your daily quality of life.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Our team of experienced physiotherapists conducts a detailed musculoskeletal and functional assessment to understand your current condition, pain points, posture, gait, muscle strength, joint health, and lifestyle habits. Based on this comprehensive evaluation, a personalized treatment plan is created to meet your recovery goals—whether that’s regaining mobility, improving flexibility, managing neurological conditions, or simply being able to sit, stand, and walk comfortably. Every therapy session is tailored with techniques such as manual therapy, myofascial release, electrotherapy, stretching, joint mobilization, strengthening exercises, and guided rehabilitation.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          At Aditya Homoeopathic Clinic, we integrate physiotherapy into our broader healing philosophy. That means we don’t just treat the physical symptoms—we also consider the emotional and energetic aspects of recovery. In many cases, physiotherapy is combined with homoeopathic remedies that reduce inflammation, speed up tissue repair, or balance the nervous system. This holistic pairing enhances outcomes and ensures that healing is more thorough and sustainable. We also offer ergonomic guidance, lifestyle changes, and simple at-home routines to support long-term well-being and prevent recurrence.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Our therapy spaces are clean, calming, and fully equipped for both basic and advanced physiotherapy interventions. Whether you're a senior needing support for age-related limitations, an athlete working through performance-related injuries, a post-surgery patient regaining strength, or a desk worker with posture and spine issues—our approach is gentle, attentive, and results-focused. We treat each patient with patience, care, and deep respect for their pace of healing. Physiotherapy is not just about exercises; it's about restoring hope and functional independence.
        </p>

        <p className="text-lg leading-relaxed mb-12">
          If you're ready to reduce your pain, move with freedom, and rebuild your strength naturally, our physiotherapy services are here to support you. Let Aditya Homoeopathic Clinic be your partner in recovery—with therapies that are personalized, holistic, and rooted in care. Book your physiotherapy session today and take your first confident step toward a stronger, more mobile you.
        </p>
      </main>

      <Footer />
    </>
  );
}
