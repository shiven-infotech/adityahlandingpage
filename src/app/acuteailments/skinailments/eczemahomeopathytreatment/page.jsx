"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../../components/header";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function EczemaPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <main className="bg-[#e3ffe0] text-gray-800 px-4 sm:px-6 lg:px-20 py-12 space-y-16">
        {/* Title Section */}
        <section
          className="text-center space-y-4"
          data-aos="fade-down"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 tracking-wide">
            Eczema Homeopathy Treatment
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover natural relief through personalized homeopathic care for eczema.
          </p>
          <div className="flex justify-center gap-4 mt-4 text-green-700 text-xl">
            <FaInstagram className="hover:text-pink-600 transition" />
            <FaTwitter className="hover:text-blue-500 transition" />
            <FaFacebookF className="hover:text-blue-700 transition" />
          </div>
        </section>

        {/* What is Eczema? */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">What is Eczema?</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Eczema, or atopic dermatitis, is a skin issue causing red, itchy, and inflamed patches that can be dry, scaly, or even ooze at times. It affects people of all ages and tends to flare up due to triggers like allergens, irritants, climate changes, stress, or hormonal shifts. Managing eczema involves regular moisturizing to prevent dryness and itchiness, avoiding triggers, using gentle skincare products, and sometimes medications like steroids or antihistamines.
            </p>
            <p>
              Homeopathy provides a natural approach to eczema care. It tailors remedies to an individual's symptoms and health, aiming not just to relieve symptoms but also to tackle the root causes of flare-ups. These treatments are gentle, safe, and can complement conventional eczema therapies effectively.
            </p>
          </div>
        </section>

        {/* How Homeopathy Helps */}
        <section data-aos="fade-up" className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">
            How Homeopathy Treatment Can Be a Good Option for Eczema?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
            <li><strong>Holistic Approach:</strong>  Homeopathy looks at your unique skin type, what triggers your eczema, and considers your overall health to create a personalized treatment plan just for you. It's like having a skincare routine customized specifically for your needs. </li>
            <li><strong>Natural Remedies:</strong> Homeopathic medicines are made from natural substances, which means they are gentle on your skin and have a lower risk of causing side effects compared to some conventional treatments. Think of it as using ingredients from nature to heal your skin
. </li>
            <li><strong> Adress Root Causes:</strong> Instead of just treating the surface symptoms, homeopathy dives deep to find out what's causing your eczema from within. By targeting these internal imbalances, homeopathy aims to provide lasting relief rather than just temporary solutions.
 </li>
            <li><strong>Safe for All Ages:</strong> Whether you're a child or an adult dealing with eczema, homeopathic remedies are safe for everyone. This means your whole family can benefit from effective eczema treatment without worrying about harmful effects. </li>
          </ul>
        </section>

        {/* Conventional vs Homeopathy with image */}
<section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
  {/* Image */}
  <div className="w-full">
    <img
      src="/eczema.jpeg" // Change to your image path
      alt="Homeopathy vs Conventional"
      className="rounded-2xl shadow-md w-full object-cover h-80"
    />
  </div>

  {/* Content */}
  <div>
    <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-4">
      Others vs Homeopathy Treatment
    </h2>
    <ul className="space-y-4 text-base sm:text-lg text-gray-700 list-disc pl-5">
      <li>
        <strong>Gentle Treatment:</strong> Homeopathy provides gentle options that do not involve invasive procedures or strong medications like steroid creams. It's like giving your skin a soothing, natural hug.
      </li>
      <li>
        <strong>Customized Solutions:</strong> Homeopathy understands that eczema can be different for each person. So, it creates treatments based on your unique symptoms and triggers, almost like a tailor stitching clothes just for you.

      </li>
      <li>
        <strong>Safe and Gentle:</strong> Homeopathic remedies are designed to work with your body naturally, so they typically have fewer side effects compared to strong medications. It's like using gentle waves to calm the storm on your skin.

      </li>
      <li>
        <strong>Lasting Relief:</strong> Homeopathy doesn't just mask the symptoms; it digs deep to find and fix the root cause of your eczema. This can lead to long-lasting improvements, meaning fewer flare-ups and happier skin days ahead.
      </li>
    </ul>
  </div>
</section>


        {/* FAQs with image on the right */}
<section className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
  {/* FAQ Content */}
  <div>
    <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6">
      FAQs About Eczema Homeopathy Treatment
    </h2>
    <div className="space-y-6 text-gray-700">
      <div>
        <h4 className="font-semibold">Can homeopathy cure eczema completely?</h4>
        <p>
          Homeopathy aims to manage eczema effectively by addressing underlying causes and symptoms. While it may not offer a complete cure, it can significantly reduce flare-ups and improve overall skin health, leading to long-term relief.

        </p>
      </div>
      <div>
        <h4 className="font-semibold">How long does it take to see improvements?</h4>
        <p>
         The time to notice improvements can vary based on individual factors such as the severity of eczema, overall health, and response to treatment. Generally, noticeable improvements can be seen within weeks to months of consistent homeopathic treatment.

        </p>
      </div>
      <div>
        <h4 className="font-semibold">Are homeopathic remedies safe for children?</h4>
        <p>
         Yes, homeopathic remedies are safe for children with eczema. They are gentle, natural, and free from harmful chemicals, making them suitable for all ages, including infants and toddlers.
        </p>
      </div>
      <div>
        <h4 className="font-semibold">Can homeopathy help with severe eczema itching?</h4>
        <p>
          Homeopathy can effectively alleviate severe eczema symptoms like intense itching. Homeopathic remedies are tailored to address specific symptoms, including itching, inflammation, and skin dryness, providing relief without harsh side effects.
        </p>
      </div>
      <div>
        <h4 className="font-semibold">What lifestyle changes can help alongside homeopathy?</h4>
        <ul className="list-disc pl-5 mt-2">
          <li>Keeping the skin well-moisturized with suitable emollients.
Identifying and avoiding triggers such as certain foods, allergens, or harsh soaps.</li>
          <li>Maintaining a healthy diet rich in fruits, vegetables, and omega-3 fatty acids.</li>
          <li>Managing stress levels through relaxation techniques like yoga or meditation.</li>
          <li>Ensuring proper hydration and avoiding excessive scratching to prevent skin damage.</li>
          
        </ul>
      </div>
    </div>
  </div>

  {/* Image */}
  <div className="w-full">
    <img
      src="/eczema1.jpeg" // Replace this path with your actual image path
      alt="FAQs about eczema treatment"
      className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
    />
  </div>
</section>


        {/* CTA Section */}
        <section
          className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12 px-6 sm:px-12 rounded-2xl shadow-xl text-center"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Calm Your Eczema Naturally?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
           Reach out to our skilled homeopathic practitioners today! They'll craft personalized treatment plans just for you, bringing relief and comfort to your skin. Get ready to embrace healthier, more comfortable skin with the gentle power of homeopathy!
          </p>
          <a
            href="/contactform"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-100 hover:scale-105 transition-transform duration-300"
          >
            Book Your Appointment
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
