"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function NutritionPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <main className=" py-5 px-2 bg-[#e3ffe0] ">
        <section data-aos="fade-up" className="max-w-screen mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-green-700">
            Holistic Nutrition & Homeopathy
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            At <strong>Aditya Homoeopathic Clinic</strong>, we understand that nutrition plays a
            vital role in achieving and maintaining true health. Our approach to nutrition is deeply
            rooted in the principles of homeopathy and individualized care. We do not believe in
            one-size-fits-all diets — instead, we consider each person's constitution, temperament,
            lifestyle, and health condition to recommend a tailored nutritional plan that supports
            healing and balance.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Homeopathy views the body as a dynamic, self-regulating system that, when given the
            right support, can heal itself. Nutrition is one of the most important tools in this
            support system. The right food choices can complement homeopathic remedies, enhance
            vitality, and remove obstacles to cure. Our nutritional guidance focuses on whole foods,
            seasonal eating, detoxification, and nurturing the gut to improve immunity and overall
            wellness.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Our holistic nutrition programs are especially designed for chronic conditions such as
            autoimmune diseases, skin disorders, digestive troubles, and hormonal imbalances. By
            integrating homeopathic principles with nutritional science, we aim to offer a
            comprehensive and non-invasive alternative that goes beyond symptom management. From
            children to the elderly, we provide age-appropriate nutritional counseling that respects
            individuality and promotes natural healing.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-700">What We Offer:</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Constitution-based diet planning</strong> to support homeopathic prescriptions
            </li>
            <li>
              <strong>Detoxification & gut healing protocols</strong> to aid chronic disease
              recovery
            </li>
            <li>
              <strong>Food sensitivity analysis</strong> and elimination diet assistance
            </li>
            <li>
              <strong>Children’s nutrition</strong> for immunity and development
            </li>
            <li>
              <strong>Women’s wellness programs</strong> (PCOS, thyroid, menopause)
            </li>
            <li>
              <strong>Nutrition for mental health</strong> — anxiety, depression, fatigue
            </li>
            <li>
              <strong>Homeopathic-compatible meal plans</strong> tailored to your remedy profile
            </li>
          </ul>

          <p className="text-lg leading-relaxed mt-8">
            Our qualified team, led by experienced homeopaths and holistic nutrition experts,
            collaborates to provide the highest standard of integrative care. With careful attention
            to detail and genuine concern for your well-being, we help you transition to a more
            balanced, energetic, and vibrant life.
          </p>

          <div className="mt-12 text-center">
            <a
              href="/register"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-700 transition duration-300"
            >
              Book a Nutritional Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
