"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function CounsellingPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="px-4 bg-[#e3ffe0] py-10 max-w-screen mx-auto" data-aos="fade-up">
        <h1 className="text-4xl font-bold  text-green-700 mb-6">
          Counselling – A Healing Touch at Aditya Homoeopathic Clinic
        </h1>

        <p className="text-lg leading-relaxed  mb-6">
          At <strong>Aditya Homoeopathic Clinic</strong>, we recognize that true healing begins not only in the body but also in the mind. Our counselling services offer a safe, confidential, and empathetic space for individuals and families to explore their thoughts, emotions, and inner conflicts. Whether you're dealing with stress, anxiety, grief, emotional trauma, or relationship challenges, our trained counsellors work hand-in-hand with our homoeopathic experts to guide you toward clarity, resilience, and peace of mind.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Our unique integrative approach combines the wisdom of classical homoeopathy with therapeutic counselling to address the root causes of emotional and psychological distress. We believe that mental health is just as important as physical health, and every individual deserves support tailored to their personal journey.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Why Choose Our Counselling Services?</h2>
        <ul className="list-disc pl-5  space-y-2">
          <li>Confidential, non-judgmental, and supportive environment</li>
          <li>Sessions tailored to your specific emotional and psychological needs</li>
          <li>Integration with homoeopathic remedies to support holistic healing</li>
          <li>Expert guidance for adults, children, couples, and families</li>
          <li>Therapeutic focus on stress, depression, anxiety, relationship issues, trauma recovery, and more</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">What to Expect</h2>
        <p className="text-lg leading-relaxed  mb-6">
          In your first session, our experienced counsellors will help you identify the core issues affecting your well-being. Together, we will set goals and create a personalized plan that may include talk therapy, lifestyle suggestions, and suitable homoeopathic remedies. Each session is a step forward in your healing journey.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Book a Session</h2>
        <p className="text-lg leading-relaxed  mb-10">
          If you or your loved one is in need of emotional support or psychological clarity, we invite you to book a counselling session at Aditya Homoeopathic Clinic. Our team is here to listen, understand, and guide you with compassion and care.
        </p>
      </main>

      <Footer />
    </>
  );
}
