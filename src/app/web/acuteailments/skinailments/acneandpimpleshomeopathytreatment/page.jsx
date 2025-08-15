"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function AcnePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#e3ffe0] py-12">
        <div className="container mx-auto px-4 text-center" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Acne/Pimples Homeopathy Treatment</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover a gentle, effective, and natural approach to treating acne and pimples with personalized homeopathic care.
          </p>
        </div>
      </section>

      {/* What is Acne */}
      <section className="py-12 bg-[#e3ffe0] max-w-screen mx-auto px-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-30" data-aos="fade-up">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">What is Acne/Pimples?</h2>
            <p className=" leading-relaxed">
              Acne is a common skin condition caused by a mix of factors like too much oil (sebum) production, pores getting clogged, inflammation, and bacterial growth.
              Things like hormones, stress, what you eat, and your genes can also affect acne. It can range from occasional pimples to severe breakouts or painful cystic acne that can leave marks.
              <br /><br />
              To treat acne well, you need to not only deal with existing pimples but also stop new ones and prevent scarring.
              Homeopathy looks at acne as part of your overall health, considering your skin type, hormones, lifestyle, and emotions.
              Homeopathic remedies are natural and help your body heal itself without causing harsh side effects.
              <br /><br />
              Alongside homeopathy, having a good skincare routine is crucial.
              Clean your face gently to remove dirt and extra oil, use products that don't block pores, avoid picking at pimples, and protect your skin from too much sun.
              Changing your diet, managing stress, and staying active can also support homeopathy in managing acne effectively.
              <br /><br />
              Talking to a qualified homeopathic practitioner can give you personalized advice and treatment plans based on your acne,
              helping you get clearer, healthier skin and feel more confident.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/acne1.jpg"
              alt="What is Acne"
              width={600}
              height={400}
              className=""
            />
          </div>
        </div>
      </section>

      {/* How Can Homeopathy Help - image on left */}
      <section className="py-12 bg-[#e3ffe0]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10" data-aos="fade-up">
          <div className="flex-1 order-2 md:order-1">
            <Image
              src="/acne2.jpeg"
              alt="Homeopathy for Acne"
              width={700}
              height={400}
              className=""
            />
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">How Can Homeopathy Help with Acne?</h2>
            <p className=" leading-relaxed">
              <strong>Holistic Approach:</strong> Homeopathy takes into account your unique skin type, hormonal levels, and lifestyle factors. This personalized approach helps address the root cause of acne/pimples for more effective and lasting results.
              <br /><br />
              <strong>Natural Remedies:</strong> Homeopathic medicines are made from natural substances, making them gentle on the skin.
              <br /><br />
              <strong>Balanced Oil Production:</strong> Homeopathy focuses on balancing oil production in the skin, preventing clogged pores and reducing acne occurrence.
              <br /><br />
              <strong>Safe for All Ages:</strong> Suitable for teenagers, adults, and even pregnant women, homeopathy offers a safe alternative to conventional treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 bg-[#e3ffe0]">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-semibold  mb-6 text-center">Other vs Homeopathy Treatment</h2>
          <div className="grid md:grid-cols-2 gap-8 ">
            <div>
              <h3 className="font-semibold text-lg mb-2">Gentle Approach</h3>
              <p>Homeopathy offers gentle treatments that do not involve harsh medications or procedures, making it ideal for sensitive skin.</p>
              <h3 className="font-semibold text-lg mt-4 mb-2">Long-lasting Results</h3>
              <p>Targets root causes for sustained relief and prevention of future flare-ups.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Personalized Care</h3>
              <p>Customized treatment based on skin type: oily, dry, or combination.</p>
              <h3 className="font-semibold text-lg mt-4 mb-2">Minimal Side Effects</h3>
              <p>Homeopathic remedies are gentle and typically free from harsh side effects like dryness or redness.</p>
            </div>
          </div>
        </div>
      </section>

     {/* FAQs */}
<section className="py-12 bg-[#e3ffe0] w-full">
  <div className="max-w-screen-xl mx-auto px-4" data-aos="fade-up">
    <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">
      FAQs about Acne/Pimples Homeopathy Treatment
    </h2>
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <strong>Can homeopathy completely cure acne?</strong>
        <p>
          Homeopathy aims to provide long-term relief by addressing the root causes of acne. It often leads to significant improvements.
        </p>
      </div>
      <div>
        <strong>How long does it take to see improvements?</strong>
        <p>
          Results vary. Some may improve in weeks, others may need a few months. Consistency is key.
        </p>
      </div>
      <div>
        <strong>Are remedies safe for teenagers?</strong>
        <p>
          Yes, they are gentle, natural, and free from harsh side effects.
        </p>
      </div>
      <div>
        <strong>Can homeopathy help with cystic acne?</strong>
        <p>
          Yes, it addresses internal imbalances and promotes skin healing from within.
        </p>
      </div>
      <div>
        <strong>What diet changes can help?</strong>
        <p>
          Eat more fruits, vegetables, lean proteins; avoid sugar, dairy, and processed foods. Consult a nutritionist for personalized guidance.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="py-12 bg-[#e3ffe0] max-w-screen mx-auto">
        <div className=" px-4 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">Say Goodbye to Acne, Naturally!</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Are you ready to say goodbye to acne and hello to clear, healthy skin naturally? Connect with our skilled homeopathic practitioners today for personalized treatment plans and effective solutions.
          </p>
          <button className="bg-green-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition">
            Book a Consultation Now
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
