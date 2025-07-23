"use client";
import React from "react";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function WartsPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          Warts Homeopathy Treatment
        </h1>

        {/* What is Warts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What is Warts?</h2>
          <p className="leading-7">
            Warts are those tiny bumps or flat spots that pop up on our skin or
            even inside our mouths. They're caused by a virus called HPV, which is
            quite common. Warts can show up anywhere, like on our hands, feet, or
            face, and they come in different shapes and sizes.
          </p>
          <p className="leading-7 mt-2">
            This virus tricks our skin into growing these little bumps, which can
            be a bit annoying or embarrassing, especially if they're in plain
            sight. Warts are contagious, so you can get them from touching someone
            else's wart or from things like towels or surfaces that have the virus
            on them.
          </p>
          <p className="leading-7 mt-2">
            Usually, warts vanish on their own after some time, but sometimes they
            stick around and need a little help to go away. That's where homeopathy
            comes in—it gently nudges our body's defenses to fight off the virus
            and shrink those warts. Homeopathic treatments are safe, don't involve
            surgery or anything scary, and are tailored to your specific needs,
            which makes them a great choice for getting rid of warts.
          </p>
        </section>

        {/* Benefits of Homeopathy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            How Homeopathy Treatment Can Be a Good Option for Warts?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Whole-Person Approach:</strong> Looks at your overall health,
              immune system, and skin condition for a personalized plan.
            </li>
            <li>
              <strong>Natural Healing:</strong> Uses natural ingredients to help
              your body’s defenses without harsh chemicals.
            </li>
            <li>
              <strong>Gentle Treatment:</strong> No painful procedures or surgeries,
              suitable for all ages.
            </li>
            <li>
              <strong>Long-Term Relief:</strong> Targets root causes to prevent
              warts from returning.
            </li>
          </ul>
        </section>

        {/* Homeopathy vs Others */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Other vs Warts Homeopathy Treatment
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Gentle Solutions:</strong> Doesn’t irritate the skin; offers
              comfort.
            </li>
            <li>
              <strong>Lasting Benefits:</strong> Focuses on long-term improvement.
            </li>
            <li>
              <strong>Safe for All Ages:</strong> Suitable for children, seniors,
              and even during pregnancy.
            </li>
            <li>
              <strong>Customized Treatment:</strong> Personalized to your symptoms
              and needs.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            FAQs about Warts Homeopathy Treatment
          </h2>
          <div className="space-y-4">
            <div>
              <strong>Can homeopathy completely cure warts?</strong>
              <p>
                Yes, it aims to eliminate warts by stimulating the body’s natural
                healing. Many people see full results with regular treatment.
              </p>
            </div>
            <div>
              <strong>
                How soon can I expect to see improvements with homeopathy?
              </strong>
              <p>
                It depends on the size and type of wart. Results can appear within
                weeks or take months.
              </p>
            </div>
            <div>
              <strong>
                Are homeopathic remedies safe for children with warts?
              </strong>
              <p>
                Absolutely! They are gentle, natural, and free of harmful side
                effects.
              </p>
            </div>
            <div>
              <strong>
                Can homeopathy help with stubborn or recurring warts?
              </strong>
              <p>
                Yes, by targeting immune weaknesses and root causes, it prevents
                recurrence.
              </p>
            </div>
            <div>
              <strong>
                What lifestyle changes help manage warts with homeopathy?
              </strong>
              <p>
                Good hygiene, not sharing towels, eating healthy, exercising
                regularly, and reducing stress can boost results.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-10 bg-green-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Say goodbye to warts naturally!
          </h3>
          <p className="mb-4">
            Our team of skilled homeopathic practitioners is here to help! Get in
            touch today for personalized treatment plans that work naturally and
            effectively.
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
