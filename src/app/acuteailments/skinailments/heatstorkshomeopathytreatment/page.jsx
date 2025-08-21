"use client";
import React from "react";
import Image from "next/image";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Link from "next/link";
export default function HeatStorksPage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="max-w-screen mx-auto bg-[#e3ffe0] px-4 py-10 text-gray-800 space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700">
          Heat Storks Homeopathy Treatment?
        </h1>

        {/* What is Heat Storks? */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            What is Heat Storks?
          </h2>
          <p className="text-lg leading-relaxed">
            Heat Storks is when your body feels really hot and causes sweating,
            crankiness, and discomfort. It often happens due to hormonal shifts,
            like during menopause or certain health issues. Imagine feeling like
            your internal temperature dial is stuck on "hot," even on cool days!
            Dealing with Heat Storks means finding ways to cool off and fixing
            any hormone imbalances. Treatments can range from changing your
            lifestyle to trying herbs or homeopathy, which uses natural methods
            to help your body regulate its heat better.
          </p>
        </section>

        {/* Homeopathy Treatment Section with Image on Right */}
        <section className="flex flex-col md:flex-row items-center gap-6">
          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              Homeopathy Treatment for Heat Storks
            </h2>
            <p className="text-lg leading-relaxed">
              Homeopathy for Heat Storks offers a holistic approach, which means it looks at
              your entire health picture, not just the symptoms. This helps in treating the
              root cause of Heat Storks, like hormonal imbalances or other underlying issues
              that may be contributing to the heat sensations in your body.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              One of the great things about homeopathy is that it usually doesn't cause any
              side effects. Unlike some conventional treatments that can have harsh effects,
              homeopathic remedies are natural and gentle, making them a safer option for many people.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              When you visit a homeopath, they'll tailor the treatment specifically for you.
              This personalized approach considers your unique symptoms and overall constitution,
              ensuring that the remedies prescribed are just right for your body's needs. It's
              like getting a treatment plan that's made just for you!
            </p>
            <p className="text-lg leading-relaxed mt-4">
              While homeopathy can provide relief from immediate symptoms like hot flashes
              and irritability, it also aims for long-term benefits. By addressing the underlying
              causes of Heat Storks, homeopathy helps in restoring balance to your body's heat
              regulation system, promoting overall well-being in the long run.
            </p>
          </div>

          {/* Image on Right */}
          <div className="md:w-1/2">
            <Image
              src="/heat.jpeg"
              alt="Homeopathy Treatment"
              width={700}
              height={400}
              className=""
            />
          </div>
        </section>


        {/* Causes of Heat Stroke */}
<section className="py-8 bg-[#e3ffe0]">
  <div className="max-w-screen mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-6">
      Causes of Heat Stroke
    </h2>
    <p className="text-lg leading-relaxed mb-4">
      Heat stroke occurs when the body overheats and is unable to regulate its temperature 
      effectively, leading to a dangerous rise in body temperature. It is a serious medical 
      condition that requires immediate attention. Common causes include:
    </p>
    <ul className="list-disc pl-6 text-lg space-y-2">
      <li>
        **Prolonged Exposure to High Temperatures** – Staying in hot, humid environments for 
        extended periods without cooling measures.
      </li>
      <li>
        **Intense Physical Activity in Heat** – Strenuous exercise or labor in hot weather 
        can overwhelm the body’s ability to cool itself.
      </li>
      <li>
        **Dehydration** – Inadequate fluid intake reduces sweating and impairs the body’s 
        natural cooling system.
      </li>
      <li>
        **Wearing Heavy or Non-Breathable Clothing** – Prevents sweat from evaporating and 
        traps body heat.
      </li>
      <li>
        **Certain Medications or Health Conditions** – Drugs affecting hydration, sweating, 
        or circulation, as well as conditions like heart disease or obesity, increase risk.
      </li>
      <li>
        **Alcohol Consumption** – Alcohol interferes with body temperature regulation and 
        promotes dehydration.
      </li>
    </ul>
    <p className="text-lg leading-relaxed mt-4">
      When these factors combine, the body’s cooling mechanisms fail, leading to a rapid 
      rise in core temperature and the onset of heat stroke.
    </p>
  </div>
</section>


    {/* Signs and Symptoms of Heat Stroke */}
<section className="py-8 bg-[#e3ffe0]">
  <div className="max-w-screen mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-6">
      Signs and Symptoms of Heat Stroke
    </h2>
    <p className="text-lg leading-relaxed mb-4">
      Heat stroke is a medical emergency that can develop quickly and requires 
      immediate attention. Recognizing the signs and symptoms early can help 
      prevent serious complications. Common symptoms include:
    </p>
    <ul className="list-disc pl-6 text-lg space-y-2">
      <li>
        **High Body Temperature** – Core body temperature rising above 104°F (40°C).
      </li>
      <li>
        **Hot, Flushed Skin** – Skin may feel dry or slightly moist due to failed 
        sweating mechanisms.
      </li>
      <li>
        **Altered Mental State** – Confusion, agitation, slurred speech, irritability, 
        seizures, or loss of consciousness.
      </li>
      <li>
        **Rapid Heartbeat and Breathing** – Increased pulse and shallow breathing 
        as the body struggles to cool down.
      </li>
      <li>
        **Headache and Dizziness** – A throbbing headache, lightheadedness, or fainting.
      </li>
      <li>
        **Nausea and Vomiting** – Digestive upset caused by overheating and dehydration.
      </li>
      <li>
        **Weakness and Fatigue** – Extreme tiredness and muscle weakness due to heat stress.
      </li>
    </ul>
    <p className="text-lg leading-relaxed mt-4">
      If any of these symptoms are present, immediate medical care is crucial 
      to prevent life-threatening complications from heat stroke.
    </p>
  </div>
</section>



       
        {/* FAQs Section with Image on Left */}
        <section className="flex flex-col md:flex-row items-center gap-6">
          {/* Image on Left */}
          <div className="md:w-1/2">
            <Image
              src="/heat2.png"
              alt="FAQs about Heat Storks"
              width={700}
              height={400}
              className=""
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              FAQs about Heat Storks Homeopathy Treatment
            </h2>
            <div className="space-y-5 text-lg">
              <div>
                <strong>What are the common symptoms of Heat Storks?</strong>
                <p>
                  Common symptoms of Heat Storks include feeling unusually hot, sweating,
                  irritability, and discomfort. It's like having your internal temperature
                  dial turned up too high, causing you to feel hot even when it's not warm outside.
                </p>
              </div>
              <div>
                <strong>How does homeopathy diagnose Heat Storks?</strong>
                <p>
                  Homeopathy diagnoses Heat Storks by considering your overall health,
                  symptoms, and unique constitution. A homeopath will ask detailed questions
                  about your heat sensations, other symptoms, and any factors that may be
                  contributing to your condition.
                </p>
              </div>
              <div>
                <strong>Are homeopathic remedies safe for everyone, including pregnant women?</strong>
                <p>
                  Homeopathic remedies are generally safe for most people, including pregnant
                  women. They are natural and gentle, and because they work on a subtle energetic
                  level, they typically do not interfere with pregnancy or cause harmful side effects.
                </p>
              </div>
              <div>
                <strong>Can homeopathy cure Heat Storks completely?</strong>
                <p>
                  Homeopathy aims to treat the root cause of Heat Storks, offering relief from
                  symptoms and promoting long-term balance. While individual results may vary,
                  many people experience significant improvements with homeopathic treatment.
                </p>
              </div>
              <div>
                <strong>How long does it take to see improvements with homeopathic treatment?</strong>
                <p>
                  The time it takes to see improvements with homeopathic treatment can vary
                  depending on factors like the severity of your condition, your overall health,
                  and how closely you follow the treatment plan. Some people may experience relief
                  in a few weeks, while others may take longer. Consistency and patience are key
                  with homeopathy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Call to Action Section --- */}
<section className=" p-6   mt-10 text-center">
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
      Book Your Consultation
    </Link>
  </div>
</section>
      </main>
      <Footer />
    </>
  );
}
