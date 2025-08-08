"use client";
import React from "react";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function CornPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="max-w-screen bg-[#e3ffe0] mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          Corn Homeopathy Treatment
        </h1>

        {/* What is Corn? */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What is Corn?</h2>
          <p className="leading-7 mb-2">
            Corns are like tiny tough patches that can pop up on your feet or hands
            when they face a lot of rubbing or pressure. They might feel like a small
            bump or a hardened spot and can sometimes hurt, especially when you're
            walking or using your hands a lot.
          </p>
          <p className="leading-7 mb-2">
            They usually show up in areas that get a lot of action, like your feet
            when you wear tight shoes or your hands when you grip things tightly.
            While they're not usually a big problem, they can be annoying, especially
            if they press on sensitive spots or keep rubbing.
          </p>
          <p className="leading-7">
            To deal with corns, it's good to wear comfy shoes, maybe use some soft
            pads or cushions for protection, and keep your feet clean and cozy.
            Homeopathy has some natural tricks up its sleeve too, which can ease the
            pain, reduce any swelling, and stop corns from coming back by taking care
            of what's causing them in the first place.
          </p>
        </section>

        {/* How Homeopathy Helps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            How Can Homeopathy Treatment Be a Good Option for Corn?
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <ul className="list-disc pl-6 space-y-2 md:w-1/2">
              <li>
                <strong>Holistic Care:</strong> Homeopathy looks at your unique
                situation, like how sensitive your skin is or what habits might be
                causing the corns, to give you a treatment that's just right for you.
              </li>
              <li>
                <strong>Natural Healing:</strong> Homeopathic remedies use natural
                stuff that's gentle on your skin. No harsh chemicals here!
              </li>
              <li>
                <strong>Pain Soothing:</strong> Corns can be a real pain, literally!
                Homeopathy targets that discomfort directly, giving you relief without
                any strong or harsh medicines.
              </li>
              <li>
                <strong>Preventive Approach:</strong> Besides just fixing the current
                corn, homeopathy also works on stopping them from coming back.
              </li>
            </ul>
            <div className="md:w-1/2">
              <img
                src="/corn1.jpeg"
                alt="Homeopathy for corn treatment"
                className="w-full "
              />
            </div>
          </div>
        </section>

        {/* Other vs Homeopathy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Other vs Corn Homeopathy Treatment
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Gentle Approach:</strong> Homeopathy provides gentle treatments
              that don’t involve any cutting or surgery, unlike procedures for
              removing corns which can be uncomfortable.
            </li>
            <li>
              <strong>Lasting Comfort:</strong> Homeopathy aims for long-lasting
              relief from corns, not just quick fixes that might wear off.
            </li>
            <li>
              <strong>Customized Solutions:</strong> Homeopathy looks at your unique
              skin and lifestyle to create a treatment plan that suits you perfectly.
            </li>
            <li>
              <strong>Safe for Everyone:</strong> Whether you're a kid, an adult, or a
              senior, homeopathy is safe and effective for all ages.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            FAQs about Corn Homeopathy Treatment
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <img
                src="/corn 2.jpeg"
                alt="FAQs about corn treatment"
                className="w-full "
              />
            </div>
            <div className="space-y-4 md:w-1/2">
              <div>
                <strong>Can homeopathy completely cure corns?</strong>
                <p>
                  Homeopathy can effectively treat corns by addressing the underlying
                  causes such as pressure and friction. With consistent treatment and
                  proper foot care, corns can be significantly reduced or eliminated.
                </p>
              </div>
              <div>
                <strong>
                  How soon can I expect relief from corn pain with homeopathic
                  treatment?
                </strong>
                <p>
                  Relief from corn pain with homeopathy can vary from person to
                  person. You may start noticing improvement within a few weeks, but
                  full relief may take longer depending on severity.
                </p>
              </div>
              <div>
                <strong>Are homeopathic remedies safe for children with corns?</strong>
                <p>
                  Yes, homeopathic remedies are gentle, safe, and free from harsh side
                  effects—suitable for children too.
                </p>
              </div>
              <div>
                <strong>Can homeopathy prevent corns from recurring?</strong>
                <p>
                  Yes, by addressing root causes like pressure and foot habits,
                  homeopathy helps avoid recurrence.
                </p>
              </div>
              <div>
                <strong>
                  What lifestyle changes can complement homeopathy in managing corns
                  effectively?
                </strong>
                <p>
                  Wear comfortable shoes, use protective padding, maintain foot
                  hygiene, and avoid activities that stress your feet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-10 bg-green-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Are you tired of dealing with corn discomfort?
          </h3>
          <p className="mb-4">
            Connect with our skilled homeopathic practitioners today for personalized
            treatment plans and effective solutions. Take the first step towards
            corn-free and pain-free feet with homeopathy!
          </p>
          <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition">
            Book a Consultation
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}
