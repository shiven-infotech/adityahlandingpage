"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function TreatingSkinDisordersPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="max-w-screen bg-[#e3ffe0] mx-auto px-4 py-10" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Treating Skin Disorders with Homeopathy
        </h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Skin disorders such as eczema, psoriasis, acne, and fungal infections can affect not only
          a person’s physical health but also their confidence and emotional well-being. These
          conditions often bring discomfort, itching, inflammation, or visible marks, which may
          impact day-to-day life. Homeopathy offers a holistic and highly individualized approach to
          managing these problems — one that focuses on healing the body from within rather than
          simply suppressing the symptoms. Instead of offering temporary relief, homeopathy works to
          correct the underlying imbalance in the body, leading to long-term improvement and
          prevention of recurrence.
        </p>

        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Why Choose Homeopathy for Skin Disorders?
        </h2>
        <p className="mb-8 text-lg leading-relaxed">
          Homeopathy stands out as a gentle, natural, and non-invasive form of treatment. Unlike
          certain conventional medications that may cause side effects such as skin thinning or
          dependency, homeopathic remedies are prepared from natural sources in highly diluted
          forms, making them safe for all ages — including children and the elderly. Treatment is
          always customized, taking into account not only the visible symptoms but also your overall
          health, emotional state, lifestyle, and medical history. By focusing on the root cause,
          homeopathy helps strengthen your immune system so that the body can defend itself against
          future flare-ups, leading to lasting relief and healthier skin.
        </p>

        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Commonly Treated Skin Conditions
        </h2>
        <p className="mb-8 text-lg leading-relaxed">
          Our clinic has successfully treated a wide range of skin conditions through personalized
          homeopathic care. These include chronic issues such as eczema, which causes persistent
          dryness and itching; psoriasis, marked by red, scaly patches that may flare up in cycles;
          and acne, which can affect individuals at any age and often impacts self-esteem. We also
          address stubborn fungal infections that cause discomfort and irritation, as well as
          urticaria (hives), which present as sudden red, itchy welts on the skin. Every case is
          unique, and our approach ensures that each patient receives a remedy tailored specifically
          to their symptoms and body type.
        </p>

        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          The Homeopathic Process
        </h2>
        <p className="mb-8 text-lg leading-relaxed">
          Your journey to healthier skin begins with a detailed consultation. Our experienced
          homeopath will take the time to understand your concerns in depth — asking questions about
          your skin symptoms, triggers, lifestyle, diet, emotional state, and past medical history.
          This holistic evaluation allows us to identify the root cause of your condition rather than
          just its surface manifestations. Based on this understanding, we prescribe a gentle yet
          powerful homeopathic remedy aimed at stimulating your body’s own healing mechanisms. Over
          time, this approach not only brings visible improvements but also enhances your overall
          health and vitality.
        </p>

        <div className=" p-6 ">
          <h3 className="text-xl text-center font-semibold text-green-700 mb-4">
            Book Your Consultation Today
          </h3>
          <p className="mb-4 text-center text-gray-700 leading-relaxed">
            If you are struggling with a skin disorder, don’t wait for it to worsen or keep coming
            back. Homeopathy offers you a safe, holistic, and natural path to clearer, healthier
            skin — without the risks of harsh chemicals or invasive treatments. Take the first step
            toward restoring your skin’s natural glow and your confidence. Contact us today to
            schedule a consultation and start your personalized healing journey.
          </p>

          <div className="flex justify-center">
            <Link href="/contactus/requestacallback">
              <button className="bg-green-700 text-white items-center justify-center px-6 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
                Request a Call Back
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
