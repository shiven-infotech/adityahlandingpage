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

      <main className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          Corn Homeopathy Treatment
        </h1>

        {/* What is Corn */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What is Corn?</h2>
          <p className="leading-7 mb-2">
            Corns are like tiny tough patches that can pop up on your feet or hands
            when they face a lot of rubbing or pressure. They might feel like a
            small bump or a hardened spot and can sometimes hurt, especially when
            you're walking or using your hands a lot.
          </p>
          <p className="leading-7 mb-2">
            They usually show up in areas that get a lot of action, like your feet
            when you wear tight shoes or your hands when you grip things tightly.
            While they're not usually a big problem, they can be annoying,
            especially if they press on sensitive spots or keep rubbing.
          </p>
          <p className="leading-7">
            To deal with corns, it's good to wear comfy shoes, maybe use some soft
            pads or cushions for protection, and keep your feet clean and cozy.
            Homeopathy has some natural tricks up its sleeve too, which can ease
            the pain, reduce any swelling, and stop corns from coming back by
            taking care of what's causing them in the first place.
          </p>
        </section>

        {/* Benefits of Homeopathy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            How Can Homeopathy Treatment Be a Good Option for Corn?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Holistic Care:</strong> Personalized treatment based on your
              skin sensitivity and habits that cause corns.
            </li>
            <li>
              <strong>Natural Healing:</strong> Gentle remedies using natural
              ingredients with no harsh chemicals.
            </li>
            <li>
              <strong>Pain Soothing:</strong> Targets pain directly, offering relief
              without strong medicines.
            </li>
            <li>
              <strong>Preventive Approach:</strong> Addresses root causes to prevent
              future corn formation.
            </li>
          </ul>
        </section>

        {/* Other vs Homeopathy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Other vs Corn Homeopathy Treatment
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Gentle Approach:</strong> No cutting or surgery—just safe,
              natural healing.
            </li>
            <li>
              <strong>Lasting Comfort:</strong> Focuses on long-term relief, not
              temporary fixes.
            </li>
            <li>
              <strong>Customized Solutions:</strong> Tailored plans for your skin
              and lifestyle needs.
            </li>
            <li>
              <strong>Safe for Everyone:</strong> Ideal for all ages—kids, adults,
              and seniors.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            FAQs about Corn Homeopathy Treatment
          </h2>
          <div className="space-y-4">
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
                Relief may start within a few weeks but full recovery depends on the
                severity and consistency of care.
              </p>
            </div>
            <div>
              <strong>
                Are homeopathic remedies safe for children with corns?
              </strong>
              <p>
                Yes, they are safe and effective for children—gentle and free from
                harsh side effects.
              </p>
            </div>
            <div>
              <strong>Can homeopathy prevent corns from recurring?</strong>
              <p>
                Yes, it works on root causes like pressure and habits, helping to
                avoid future recurrence.
              </p>
            </div>
            <div>
              <strong>
                What lifestyle changes can complement homeopathy in managing corns
                effectively?
              </strong>
              <p>
                Wear comfortable shoes, avoid pressure on feet, use protective
                padding, and maintain good foot hygiene.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-10 bg-green-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Are you tired of dealing with corn discomfort?
          </h3>
          <p className="mb-4">
            Connect with our skilled homeopathic practitioners today for
            personalized treatment plans and effective solutions. Take the first
            step towards corn-free and pain-free feet with homeopathy!
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
