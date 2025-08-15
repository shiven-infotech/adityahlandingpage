"use client";

import { useEffect } from "react";
import Image from "next/image";
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
      <main className="py-4 px-4 bg-[#e3ffe0]">
        <section data-aos="fade-up" className="max-w-screen mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-green-700">
            Holistic Nutrition & Homeopathy
          </h1>

          {/* Paragraph + Image Right */}
          <div className="flex flex-col md:flex-row items-center md:items-start mb-10 gap-6">
            <div className="flex-1">
              <p className="text-xl leading-relaxed mb-6">
                At <strong>Aditya Homoeopathic Clinic</strong>, we believe that nutrition is not
                merely about counting calories or following trendy diets — it’s about nourishing
                your entire being. The food you eat influences every cell, organ, and system in your
                body. Our holistic approach integrates homeopathic principles with the science of
                nutrition to create a personalized plan that respects your unique constitution,
                lifestyle, and health goals. This is not a quick fix but a sustainable path toward
                wellness, where every meal becomes a step toward vitality.
              </p>
              <p className="text-xl leading-relaxed">
                Instead of prescribing a generic diet, we analyze your physical tendencies,
                emotional patterns, and even environmental influences to design a food plan that
                aligns with your body’s natural rhythms. By combining seasonal, whole, and
                minimally processed foods with your homeopathic remedies, we help your body
                naturally detoxify, absorb nutrients more efficiently, and regain balance. This
                deeper understanding of nutrition transforms eating into a therapeutic process,
                helping you feel lighter, healthier, and more energetic.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/fruits.jpg"
                alt="Holistic Nutrition"
                width={600}
                height={400}
                className=" "
              />
            </div>
          </div>

          {/* Paragraph + Image Left */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start mb-10 gap-6">
            <div className="flex-1">
              <p className="text-xl leading-relaxed mb-6">
                Nutrition plays a vital role in managing chronic and lifestyle-related illnesses.
                Whether you are struggling with digestive disorders, autoimmune conditions, hormonal
                imbalances, or skin problems, the right diet can significantly enhance the effects
                of your homeopathic treatment. We teach you how to listen to your body’s signals,
                recognize food sensitivities, and make choices that support gut health and immune
                function. With our guidance, eating well is no longer about restrictions — it’s
                about freedom from illness and a renewed sense of vitality.
              </p>
              <p className="text-xl leading-relaxed">
                In addition, we emphasize mindful eating practices that help you develop a healthy
                relationship with food. You’ll learn how to slow down, savor every bite, and connect
                with the healing energy of what you consume. Our ultimate goal is to empower you
                with the knowledge and habits that make healthy living a natural, enjoyable part of
                your everyday life — not a chore.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/fruits2.jpg"
                alt="Healthy Lifestyle"
                width={600}
                height={400}
                className=""
              />
            </div>
          </div>

          {/* List Section */}
          <h2 className="text-3xl font-semibold mt-10 mb-4 text-green-700">
            What We Offer:
          </h2>
          <ul className="list-disc list-inside text-xl space-y-2 mb-8">
            <li>
              <strong>Constitution-based diet planning</strong> to support homeopathic prescriptions
            </li>
            <li>
              <strong>Detoxification & gut healing protocols</strong> to aid chronic disease recovery
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

          <p className="text-xl leading-relaxed">
            Our qualified team, led by experienced homeopaths and holistic nutrition experts,
            collaborates to provide the highest standard of integrative care. With careful attention
            to detail and genuine concern for your well-being, we help you transition to a more
            balanced, energetic, and vibrant life. Every consultation is a step toward not just
            recovery, but a thriving state of physical, mental, and emotional harmony.
          </p>

         
        </section>
      </main>
      <Footer />
    </>
  );
}
