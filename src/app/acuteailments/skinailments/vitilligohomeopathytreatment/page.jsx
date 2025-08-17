"use client";
import React from "react";
import Image from "next/image";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Link from "next/link";
export default function VitiligoPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className=" px-4 bg-[#e3ffe0] py-4 max-w-screen mx-auto space-y-14 ">
        <h1 className="text-3xl md:text-4xl  text-center font-bold text-green-700">
          Vitiligo Homoeopathy Treatment
        </h1>

        {/* --- What is Vitiligo Section with Image on Right --- */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl text-green-700 font-semibold mb-3">What is Vitiligo?</h2>
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
          <h2 className="text-3xl text-green-700 font-semibold mb-3">
            How can homoeopathy treatment be a good option for Vitiligo?
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong className="text-green-700">Holistic Approach:</strong> Homeopathy looks at more than just the skin patches. It considers your overall health, stress levels, and how your immune system is doing. This personalized approach means your treatment is unique to you and not just a one-size-fits-all solution.
            </li>
            <li>
              <strong className="text-green-700">Melanin Restoration:</strong> Homeopathy works on helping your body make more melanin, which is what gives your skin its color. By doing this, it can gradually bring back the natural color to the white patches caused by Vitiligo.
            </li>
            <li>
              <strong className="text-green-700">Safe and Natural:</strong> Homeopathic remedies are made from natural ingredients. This makes them gentle on your body and reduces the chances of side effects that can happen with other treatments.
            </li>
            <li>
              <strong className="text-green-700">Prevents Recurrence:</strong>  Homeopathy doesn't just treat the surface; it goes deeper to find out why Vitiligo happened in the first place. By addressing the root cause, it aims to prevent the patches from coming back in the future.
            </li>
          </ul>
        </section>

       {/* Causes of Vitiligo */}
<section className="py-8">
  <div className="max-w-screen mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-6">
      Causes of Vitiligo
    </h2>
    <p className="text-lg leading-relaxed mb-4">
      Vitiligo is a skin condition in which patches of skin lose their natural color due 
      to the destruction or malfunction of melanocytes, the cells responsible for producing 
      skin pigment (melanin). While the exact cause of vitiligo is not fully understood, 
      several factors are believed to contribute to its development.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      One major factor is **autoimmunity**, where the body’s immune system mistakenly attacks 
      and destroys melanocytes, leading to the loss of skin pigmentation. 
    </p>
    <p className="text-lg leading-relaxed mb-4">
      **Genetic predisposition** also plays a role, as vitiligo often runs in families and is 
      linked to specific inherited genes that increase susceptibility. 
    </p>
    <p className="text-lg leading-relaxed mb-4">
      Other possible triggers include **environmental factors** such as stress, chemical exposure, 
      skin injuries (known as the Koebner phenomenon), and severe sunburn, which may accelerate 
      the appearance of vitiligo patches. 
    </p>
    <p className="text-lg leading-relaxed">
      Additionally, vitiligo is sometimes associated with other autoimmune conditions like 
      thyroid disorders, diabetes, or alopecia areata, indicating a deeper link between 
      immune system imbalance and skin pigmentation loss.
    </p>
  </div>
</section>

 
   {/* Signs and Symptoms of Vitiligo */}
<section className="py-8">
  <div className="max-w-screen mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-6">
      Signs and Symptoms of Vitiligo
    </h2>
    <p className="text-lg leading-relaxed mb-4">
      Vitiligo primarily affects the skin by causing a loss of natural pigmentation. 
      The most noticeable symptom is the development of light or white patches that 
      appear on various parts of the body. These patches may spread slowly or rapidly, 
      depending on the individual case.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      Common areas where vitiligo patches appear include the **face, hands, arms, legs, lips, 
      and areas around body openings such as the eyes, mouth, and genitals**. The patches are 
      often symmetrical, appearing on both sides of the body.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      In addition to skin depigmentation, vitiligo may cause **premature whitening or graying 
      of scalp hair, eyelashes, eyebrows, or beard**. Some individuals may also notice changes 
      in the color of the inner lining of the mouth and nose (mucous membranes).
    </p>
    <p className="text-lg  leading-relaxed">
      Although vitiligo does not cause physical discomfort like pain or itching in most cases, 
      its visible appearance can affect self-confidence and emotional well-being, making early 
      diagnosis and supportive care important.
    </p>
  </div>
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
    <h2 className="text-3xl text-green-700 font-semibold mb-3">
      FAQs About Vitiligo Homeopathy Treatment
    </h2>
    <div className="space-y-5 text-lg">
      <div>
        <strong className="text-green-700">Can homeopathy cure Vitiligo completely?</strong>
        <p>
          Homeopathy aims to manage Vitiligo by stimulating natural melanin production,
          but complete cure depends on various factors like the extent of Vitiligo and
          individual response to treatment.
        </p>
      </div>
      <div>
        <strong className="text-green-700">How long does it take to see improvements with homeopathic treatment for Vitiligo?</strong>
        <p>
         The duration varies for each person. Some may see improvements in a few months, while others may take longer. Consistent treatment and patience are key.
        </p>
      </div>
      <div>
        <strong className="text-green-700">Are homeopathic remedies safe for children with Vitiligo?</strong>
        <p>
         Yes, homeopathic remedies are safe for children. They are gentle and tailored to suit individual needs, including children with Vitiligo.
        </p>
      </div>
      <div>
        <strong className="text-green-700">Can homeopathy help with Vitiligo on sensitive areas like the face or hands?</strong>
        <p>
         Yes, homeopathy can be effective for Vitiligo on sensitive areas. It focuses on gentle treatment methods suitable for all skin types and areas.
        </p>
      </div>
      <div>
        <strong className="text-green-700">What lifestyle changes can complement homeopathy in managing Vitiligo effectively?</strong>
        <p>
        Managing stress, maintaining a balanced diet rich in antioxidants, protecting skin from excessive sun exposure, and following a regular skincare routine can complement homeopathy in managing Vitiligo effectively.
        </p>
      </div>
    </div>
  </div>
</section>

   {/* --- Call to Action Section --- */}
<section className=" p-6  mt-10 text-center">
  <h2 className="text-2xl font-semibold mb-3 text-green-800">
    Ready to Begin Your Healing Journey?
  </h2>
  <p className="text-lg">
    Are you looking to bring back your skin's natural color? Connect with our
    skilled homeopathic practitioners today for tailored treatment plans...
  </p>
  <div className="mt-5">
    <Link
      href="/appointment"
      className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
    >
      Book Your Appointment Now
    </Link>
  </div>
</section>
       
      </main>

      <Footer />
    </>
  );
}
