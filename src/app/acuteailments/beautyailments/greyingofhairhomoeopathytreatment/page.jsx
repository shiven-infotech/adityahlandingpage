"use client";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Link from "next/link"; 


export default function GreyingHairPage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="px-4 py-4 max-w-screen mx-auto bg-[#e3ffe0] ">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-6">
          Greying of Hair Homoeopathy Treatment
        </h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-green-700">What is Greying of Hair?</h2>
          <p className="text-lg leading-7">
            Premature greying of hair can happen due to various reasons like family traits,
            stress, lifestyle habits, and not getting enough nutrients. Genes are a big part of it—they
            decide when your hair starts losing color. Stress can speed up this process, as can
            things like smoking or not eating well. Some health conditions and treatments can also
            make your hair turn grey sooner. While it's normal as you age, early greying can affect
            how you feel about yourself. Homeopathy offers personalized treatments to tackle these
            causes and promote healthy hair growth, helping you manage premature greying effectively.
          </p>
        </section>

{/* How Homeopathy Section */}
<section className="mb-10 flex flex-col md:flex-row items-center gap-6">
  {/* Left Content */}
  <div className="md:w-2/3">
    <h2 className="text-3xl font-semibold mb-4 text-green-700">
      How Can Homoeopathy Treatment Be a Good Option for Greying of Hair?
    </h2>
    <ul className="space-y-3 text-lg leading-7">
      <li>
        <strong className="text-green-700">Holistic Approach:</strong> Homeopathy looks at the whole picture. It doesn't just focus on the grey hair itself but considers things like stress, diet, and family history to understand why it's happening.
      </li>
      <li>
        <strong className="text-green-700">Individualized Treatment:</strong> Think of it like a tailor-made plan. Homeopathy doesn't treat everyone the same way because what works for one person might not work for another. So, your treatment is unique to your specific reasons for greying hair.
      </li>
      <li>
        <strong className="text-green-700">Safe and Natural:</strong> Homeopathic remedies come from natural sources like plants and minerals. This means they're gentle on your body and don't come with the harsh side effects that some other treatments might have.
      </li>
      <li>
        <strong className="text-green-700">Promotes Hair Health:</strong> Instead of just covering up the grey, homeopathy aims to improve your hair's overall health. By addressing things like nutrition and stress, it helps your hair stay healthy and may even restore some of its natural color over time.
      </li>
    </ul>
  </div>

  {/* Right Image */}
  <div className="md:w-1/3 flex justify-center">
    <img
      src="/grey.jpg"  // 👉 replace with your actual image path
      alt="Homeopathy treatment for greying hair"
      className=" w-full max-w-2xl"
    />
  </div>
</section>

          {/* Causes of Greying of Hair */}
<section className=" mt-8">
  <h2 className="text-3xl font-bold text-green-700 mb-4">
    Causes of Greying of Hair
  </h2>
  <div className="text-lg space-y-4 leading-relaxed">
    <p>
      Greying of hair is a natural part of the aging process and occurs when the
      hair follicles produce less melanin, the pigment responsible for giving
      hair its color. As melanin production slows down, hair gradually turns
      grey or white.
    </p>
    <p>
      Genetics play a major role in determining when a person begins to develop
      grey hair. If early greying runs in the family, it is more likely to occur
      at a younger age. Along with heredity, certain health conditions such as
      vitamin B12 deficiency, thyroid disorders, and autoimmune diseases can
      contribute to premature greying.
    </p>
    <p>
      Lifestyle factors like chronic stress, poor diet, smoking, and exposure to
      environmental pollutants can accelerate the greying process. Free radical
      damage caused by oxidative stress weakens the pigment-producing cells in
      the hair follicles, leading to loss of color.
    </p>
    <p>
      Frequent use of harsh hair dyes, chemical treatments, and heat styling may
      also damage hair and contribute to premature greying. Identifying whether
      the cause is genetic, nutritional, or lifestyle-related is important in
      managing or slowing down the process.
    </p>
  </div>
</section>


  {/* Signs and Symptoms of Greying of Hair */}
<section className=" mt-8">
  <h2 className="text-3xl font-bold text-green-700 mb-4">
    Signs and Symptoms of Greying of Hair
  </h2>
  <div className="text-lg space-y-4 leading-relaxed mb-8">
    <p>
      The most obvious sign of greying hair is the gradual appearance of strands
      that turn grey, silver, or white. This usually starts at the temples and
      crown before spreading across the scalp over time.
    </p>
    <p>
      In cases of premature greying, younger individuals may notice isolated
      grey hairs appearing earlier than expected, often in their twenties or
      thirties. The process usually begins slowly but may accelerate depending
      on genetics, health, and lifestyle factors.
    </p>
    <p>
      Along with color changes, some people experience changes in hair texture.
      Grey hair often feels coarser, drier, and more brittle compared to natural
      pigmented hair, which can make it prone to breakage.
    </p>
    <p>
      In certain cases, greying may be accompanied by thinning hair or hair
      fall, especially when related to nutritional deficiencies or underlying
      medical conditions. These combined changes can affect both appearance and
      confidence.
    </p>
  </div>
</section>





         {/* FAQ Section */}
<section className="mb-10 flex flex-col md:flex-row items-start gap-6">
  {/* Left Image */}
  <div className="md:w-1/3 flex justify-center">
    <img
      src="/grey1.jpg"  // 👉 replace with your actual image path
      alt="FAQs about Greying of Hair Homeopathy Treatment"
      className="rounded-lg shadow-md w-full max-w-md"
    />
  </div>

  {/* Right Content */}
  <div className="md:w-2/3">
    <h2 className="text-3xl font-semibold mb-4 text-green-700">
      FAQs about Greying of Hair Homoeopathy Treatment
    </h2>
    <ul className="space-y-5 text-lg leading-7">
      <li>
        <strong className="text-green-700">Can homoeopathy reverse grey hair completely?</strong><br />
        Homeopathy aims to address the underlying causes of greying hair, which can lead to improvements in some cases. While it may not reverse grey hair completely, it can help manage and potentially slow down the process.
      </li>
      <li>
        <strong className="text-green-700">How soon can one expect to see improvements with homoeopathic treatment for greying hair?</strong><br />
        The time to see improvements can vary from person to person. Some individuals may notice changes within a few months of consistent homeopathic treatment, while others may take longer. Patience and regular follow-ups with your homeopathic practitioner are key.
      </li>
      <li>
        <strong className="text-green-700">Are homeopathic remedies safe for long-term use in managing grey hair?</strong><br />
        Yes, homoeopathic remedies are generally safe for long-term use as they are derived from natural substances and are gentle on the body. However, it's important to follow the advice of a qualified homeopathic practitioner for proper dosage and monitoring.
      </li>
      <li>
        <strong className="text-green-700">Can homeopathy help prevent premature greying in younger individuals?</strong><br />
        Homeopathy can play a role in managing premature greying by addressing factors like stress, nutritional deficiencies, and genetic predispositions. It focuses on promoting overall hair health, which can help prevent further premature greying.
      </li>
      <li>
        <strong className="text-green-700">What dietary or lifestyle changes can complement homoeopathy in managing grey hair effectively?</strong><br />
        A balanced diet rich in nutrients like vitamins, minerals, and proteins can support hair health. Avoiding excessive stress, getting adequate sleep, staying hydrated, and practicing good hair care habits like using mild shampoos and avoiding heat styling can complement homoeopathy in managing grey hair effectively.
      </li>
    </ul>
  </div>
</section>

        {/* cta section */}
        <section className=" p-6 text-center">
  <h2 className="text-xl font-bold mb-2 text-green-700">
     Are you ready to bring back life to your hair naturally?
  </h2>
  <p className="text-lg mb-4">
    Reach out to our experienced homeopathic practitioners today
    for tailored treatment plans and effective solutions to manage greying hair. Start your journey towards healthier,
    more vibrant hair and renewed confidence!
  </p>
  <Link
    href="/appointment" // 👉 replace with your desired route
    className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
  >
    Book An Appointment
  </Link>
</section>

      </main>
      <Footer />
    </>
  );
}
