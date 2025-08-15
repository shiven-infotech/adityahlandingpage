"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function ReversalProgramPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <div className="bg-[#e3ffe0] py-4 px-4 ">
        <div className="max-w-screen mx-auto">
          <h1
            className="text-5xl font-bold text-center text-green-700 mb-4"
            data-aos="fade-down"
          >
            Reversal Program
          </h1>
          <p
            className="text-xl text-center mb-10"
            data-aos="fade-up"
          >
            Empower your body’s innate ability to heal and reverse chronic
            conditions — naturally, safely, and holistically.
          </p>

          <div className="space-y-12">
            {/* First Section - Image Right */}
            <section
              data-aos="fade-right"
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <h2 className="text-3xl font-semibold text-green-700 mb-4">
                  What is a Reversal Program?
                </h2>
                <p className="leading-relaxed mb-5 text-xl">
                  The Reversal Program at <strong>Aditya Homoeopathic Clinic</strong> is a
                  life-changing approach to wellness, designed to help people naturally overcome
                  chronic lifestyle disorders such as diabetes, hypertension, thyroid imbalances,
                  PCOD/PCOS, obesity, and more. Instead of relying on medications that only suppress
                  symptoms, we focus on understanding the deeper imbalances in your body and gently
                  restoring them to harmony. Our philosophy is simple yet powerful — when the body is
                  given the right support, it has the remarkable ability to heal itself.
                </p>
                <p className="leading-relaxed mb-5 text-xl">
                  Through a blend of personalized homeopathic remedies, targeted nutrition, gentle
                  detoxification methods, and guided lifestyle changes, our program addresses not just
                  the illness but the whole person — body, mind, and emotions. This holistic approach
                  ensures that improvements are not temporary but lasting, allowing you to live
                  medication-free, energetic, and truly healthy.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image
                  src="/reversal.jpg"
                  alt="Reversal Program Healing"
                  width={600}
                  height={400}
                  className=" rounded-xl"
                />
              </div>
            </section>

            {/* Second Section - Image Left */}
            <section
              data-aos="fade-left"
              className="flex flex-col md:flex-row-reverse items-center gap-8"
            >
              <div className="flex-1">
                <h2 className="text-3xl font-semibold text-green-700 mb-4">
                  Who Can Benefit?
                </h2>
                <p className="leading-relaxed mb-5 text-xl">
                  This program is designed for anyone who is ready to take control of their health
                  and break free from the dependency on long-term medications. It is ideal for
                  individuals managing diabetes, high blood pressure, cholesterol issues, hormonal
                  imbalances like PCOS, or those struggling with excess weight and metabolic
                  disorders. Over the years, we have seen patients experience profound improvements —
                  from stable blood sugar levels and healthy weight loss to enhanced energy, sharper
                  mental clarity, and better sleep.
                </p>
                <p className="leading-relaxed mb-5 text-xl">
                  The benefits go far beyond physical health. Many participants share how they feel
                  calmer, more confident, and more in tune with their bodies after joining the
                  program. Our supportive environment and continuous guidance help you stay motivated
                  and committed, making your transformation a sustainable and empowering journey.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image
                  src="/nothing.jpg"
                  alt="Patient Success Story"
                  width={600}
                  height={400}
                  className="rounded-xl "
                />
              </div>
            </section>

            {/* Our Approach */}
            <section data-aos="fade-right">
              <h2 className="text-3xl font-semibold text-green-700 mb-4">
                Our Holistic Approach
              </h2>
              <p className="leading-relaxed text-xl mb-5">
                Every reversal journey begins with a detailed consultation, where we take time to
                truly understand your medical history, lifestyle, habits, and emotional well-being.
                This helps us identify the root causes of your condition and create a personalized
                plan that addresses your unique needs. We combine scientifically backed homeopathic
                remedies with therapeutic nutrition and gentle detox methods to cleanse and
                rejuvenate your system. Alongside physical healing, we work on your mindset, stress
                levels, and lifestyle patterns to ensure that the transformation is complete and
                lasting.
              </p>
              <p className="leading-relaxed mb-5 text-xl">
                Our goal is not only to improve your health metrics but to help you feel vibrant,
                confident, and in control of your life. By addressing the whole person — and not
                just the symptoms — we open the door to a healthier, happier, and medication-free
                future.
              </p>
            </section>

            {/* Duration */}
            <section data-aos="fade-left">
              <h2 className="text-3xl font-semibold text-green-700 mb-4">
                Program Duration & Support
              </h2>
              <p className="leading-relaxed text-xl mb-5">
                The Reversal Program typically runs for three to six months, depending on your
                condition and progress. During this period, you receive regular consultations,
                home-delivered medicines, continuous dietary guidance, and round-the-clock support
                through WhatsApp and email. We monitor your improvements closely, making adjustments
                as needed to ensure that your journey remains smooth, effective, and enjoyable.
                This close partnership between patient and practitioner is what makes our program so
                successful and deeply rewarding.
              </p>
            </section>

            {/* Why Choose */}
            <section data-aos="fade-up">
              <h2 className="text-3xl font-semibold text-green-700 mb-4">
                Why Choose Aditya Homoeopathic Reversal Program?
              </h2>
              <p className="leading-relaxed text-xl mb-5">
                At Aditya Homoeopathic Clinic, we blend the precision of scientific homeopathy with
                the wisdom of natural healing traditions. Every plan we create is fully customized
                for the individual, taking into account not just their medical condition but their
                lifestyle, personality, and aspirations. We believe that true healing happens when
                the mind, body, and emotions work in harmony, and our compassionate team is here to
                guide you every step of the way.
              </p>
              <p className="leading-relaxed text-xl mb-5">
                Over the years, countless patients have transformed their lives through our
                Reversal Program — many reducing or even completely stopping their allopathic
                medicines. If you are ready to embrace a natural, safe, and effective path to
                recovery, our team will stand beside you, supporting you with dedication, expertise,
                and genuine care.
              </p>
            </section>

           
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
