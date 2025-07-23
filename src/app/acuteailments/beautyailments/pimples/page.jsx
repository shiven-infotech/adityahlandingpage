"use client";

import React from "react";
import Header from "../../../components/header"; // Adjust paths if needed
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function PimplesPage() {
  return (
    <>
        <Header />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
          Pimples Homeopathy Treatment
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What is Pimples?</h2>
          <p className="mb-4">
            Pimples aren't just caused by things like oil and bacteria—they can
            also pop up because of daily habits like what we eat, how we sleep,
            and how stressed we are. Hormonal changes, especially during big
            life events like puberty or pregnancy, can also cause our skin to
            get oilier, leading to more pimples.
          </p>
          <p>
            Taking care of pimples means doing things like washing our face
            regularly with gentle products, avoiding rough treatments, and not
            touching our face too much to keep bacteria away. Homeopathy looks
            at everything that might be causing pimples, like our skin type,
            hormones, and overall health, to give us treatments that are just
            right for us. These treatments help calm down redness, keep oil in
            check, and support our skin's natural health, so we can say bye-bye
            to pimples the natural way!
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            How Can Homeopathy Treatment Be a Good Option for Pimples?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Holistic Care:</strong> Homeopathy looks at your unique
              skin type, hormonal changes, and even your daily habits to figure
              out why you're getting pimples.
            </li>
            <li>
              <strong>Gentle Ingredients:</strong> Made from natural substances,
              homeopathic medicines are gentle on the skin with minimal side
              effects.
            </li>
            <li>
              <strong>Healing from Within:</strong> It balances internal
              imbalances that may be causing breakouts.
            </li>
            <li>
              <strong>Lasting Solutions:</strong> Aims to prevent future
              breakouts by improving overall skin health.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Other vs Pimples Homeopathy Treatment
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Gentle Approach:</strong> No harsh chemicals, just
              natural care.
            </li>
            <li>
              <strong>Customized Solutions:</strong> Personalized treatments
              based on skin type and lifestyle.
            </li>
            <li>
              <strong>Safe for Everyone:</strong> Suitable for all ages and skin
              types.
            </li>
            <li>
              <strong>Getting to the Core:</strong> Focuses on root causes for
              long-term results.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            FAQs about Pimples Homeopathy Treatment
          </h2>
          <ul className="space-y-4">
            <li>
              <strong>Can homeopathy completely cure pimples?</strong>
              <br />
              Homeopathy addresses the root causes and can significantly reduce
              pimples, though complete cure may vary individually.
            </li>
            <li>
              <strong>
                How long does it take to see improvements with homeopathic
                treatment?
              </strong>
              <br />
              Visible changes may take a few weeks to months depending on skin
              condition and consistency.
            </li>
            <li>
              <strong>
                Are homeopathic remedies safe for long-term use?
              </strong>
              <br />
              Yes, they are natural and safe for prolonged use without harmful
              side effects.
            </li>
            <li>
              <strong>
                Can homeopathy help with severe acne causing scarring?
              </strong>
              <br />
              Yes, by managing inflammation and internal imbalances, it can help
              reduce severity and scarring over time.
            </li>
            <li>
              <strong>
                What lifestyle changes can complement homeopathy?
              </strong>
              <br />
              Eat a balanced diet, drink water, manage stress, sleep well, and
              maintain gentle skincare.
            </li>
          </ul>
        </section>

        <section className="bg-green-100 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Ready to Say Goodbye to Pimples?
          </h2>
          <p className="mb-4">
            Connect with our experienced team of homeopathic practitioners today!
            We offer personalized treatment plans and effective solutions tailored
            just for you. Say hello to radiant skin and renewed confidence with
            the power of homeopathy.
          </p>
          <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
            Book Appointment
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
