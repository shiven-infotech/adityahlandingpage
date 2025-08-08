"use client";
import React from "react";
import Image from "next/image";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function VitiligoPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className=" px-4 bg-[#e3ffe0] py-10 max-w-screen mx-auto space-y-14 ">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Vitiligo Homeopathy Treatment
        </h1>

        {/* --- What is Vitiligo Section with Image on Right --- */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl text-green-700 font-semibold mb-3">What is Vitiligo?</h2>
            <p className="text-lg leading-relaxed">
              Vitiligo is a skin condition where patches of skin lose their color,
              turning white or light. This happens because cells called melanocytes,
              which give skin its color, either stop working or are damaged. While
              Vitiligo isn't harmful, it can affect how someone feels about their appearance.
            </p>
            <p className="text-lg mt-4">
              It's not something you can catch from someone else, and it can happen
              to anyone, no matter their skin type or age. We're not entirely sure
              why it happens, but it seems to involve genetics, the immune system,
              and environmental factors like stress or sun exposure.
            </p>
            <p className="text-lg mt-4">
              Treatment for Vitiligo focuses on restoring skin color. Homeopathy is
              a natural approach that considers a person's overall health and uses
              gentle remedies to support the body's healing process. This can help
              improve skin pigmentation over time and boost overall well-being.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/vitiligo1.jpeg"
              alt="Vitiligo example"
              width={700}
              height={700}
              className=""
            />
          </div>
        </section>

        {/* --- How Can Homeopathy Help Section --- */}
        <section>
          <h2 className="text-2xl text-green-700 font-semibold mb-3">
            How Can Homeopathy Be a Good Option for Vitiligo?
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong>Holistic Approach:</strong> Homeopathy looks at more than just the skin patches...
            </li>
            <li>
              <strong>Melanin Restoration:</strong> Homeopathy works on helping your body make more melanin...
            </li>
            <li>
              <strong>Safe and Natural:</strong> Homeopathic remedies are made from natural ingredients...
            </li>
            <li>
              <strong>Prevents Recurrence:</strong> Homeopathy doesn't just treat the surface...
            </li>
          </ul>
        </section>

        {/* --- Other Treatments vs Homeopathy --- */}
        <section>
          <h2 className="text-2xl text-green-700 font-semibold mb-3">
            Other Treatments vs Vitiligo Homeopathy Treatment
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong>Gentle Solutions:</strong> Homeopathy offers treatments that don't involve surgery...
            </li>
            <li>
              <strong>Lasting Results:</strong> Homeopathy doesn't just aim for quick fixes...
            </li>
            <li>
              <strong>Personalized Approach:</strong> Homeopathy understands that each person is unique...
            </li>
            <li>
              <strong>Emotional Care:</strong> Dealing with Vitiligo isn't just about physical changes...
            </li>
          </ul>
        </section>

       <section className="flex flex-col md:flex-row items-center gap-10">
  {/* --- Image on Left --- */}
  <div className="flex-1">
    <Image
      src="/vitiligo2.jpeg"
      alt="Vitiligo treatment support"
      width={700}
      height={700}
      className=""
    />
  </div>

  {/* --- FAQs on Right --- */}
  <div className="flex-1">
    <h2 className="text-2xl text-green-700 font-semibold mb-3">
      FAQs About Vitiligo Homeopathy Treatment
    </h2>
    <div className="space-y-5 text-lg">
      <div>
        <strong>Can homeopathy cure Vitiligo completely?</strong>
        <p>
          Homeopathy aims to manage Vitiligo by stimulating natural melanin production,
          but complete cure depends on various factors like the extent of Vitiligo and
          individual response to treatment.
        </p>
      </div>
      <div>
        <strong>How long does it take to see improvements?</strong>
        <p>
          The duration varies. Some see results in a few months; others may take longer.
          Consistency is key.
        </p>
      </div>
      <div>
        <strong>Are homeopathic remedies safe for children?</strong>
        <p>
          Yes, homeopathic remedies are gentle and safe for children with Vitiligo.
        </p>
      </div>
      <div>
        <strong>Can homeopathy help with Vitiligo on sensitive areas?</strong>
        <p>
          Yes, it’s suitable for delicate areas like the face and hands.
        </p>
      </div>
      <div>
        <strong>What lifestyle changes can help?</strong>
        <p>
          Avoid excessive sun exposure, reduce stress, eat antioxidant-rich foods,
          and maintain good skincare habits.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* --- Call to Action Section --- */}
        <section className="bg-green-50 p-6 rounded-xl shadow mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-green-800">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg">
            Are you looking to bring back your skin's natural color? Connect with our
            skilled homeopathic practitioners today for tailored treatment plans...
          </p>
          <div className="mt-5">
            <a
              href="/contactform"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
            >
              Book Your Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
