"use client";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Link from "next/link"; 
export default function HairLossPage() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="max-w-screen bg-[#e3ffe0] mx-auto px-4 py-4">
        <h1 className="text-4xl text-center font-bold text-green-700 mb-6">Hair Loss Homoeopathy Treatment</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-green-700 mb-2">What is Hair Loss?</h2>
          <p className="text-lg leading-relaxed">
           Hair loss is when you start noticing less hair on your head or other parts of your body. It's pretty common and can happen to anyone, whether you're a man or a woman and no matter your age. There are lots of reasons why it might happen, like genetics (which means it runs in the family), changes in your hormones, stress, some medical conditions like alopecia, certain medications you might be taking, or even not eating well.
          </p>
          <br />
          <p className="text-lg leading-relaxed">
            Losing a bit of hair each day is normal because our hair grows in cycles. But if you're seeing a lot more hair falling out suddenly, it can be worrying. Things like how old you are, your overall health, and the way you live can also play a role in how your hair behaves. Homeopathy treatments focus on finding out why your hair is falling out and helping it grow back healthy and strong, all without using harsh chemicals or treatments.
          </p>
        </section>

        {/* how homoeopathy */}
       <section className="mb-10 flex flex-col md:flex-row items-center gap-6">
  {/* Left Content */}
  <div className="md:w-2/3">
    <h2 className="text-3xl font-semibold text-green-700 mb-2">
      How Homoeopathy Treatment Can Be a Good Option for Hair Loss?
    </h2>
    <ul className="text-lg space-y-2">
      <li>
        <strong className="text-green-700">Holistic Approach:</strong> Homeopathy looks at the bigger picture when it comes to hair loss. It doesn't just treat the symptom of hair falling out but tries to understand why it's happening in the first place. This can include things like genetics, hormones, or other health issues that might be playing a role.
      </li>

      <li>
        <strong className="text-green-700">Individualized Treatment:</strong> Homeopathy understands that not everyone's hair loss is the same. So, the treatment you get is customized to your specific situation. Whether you're experiencing thinning hair, bald patches, or overall hair loss, homeopathic remedies are tailored to address your unique needs.
      </li>

      <li>
        <strong className="text-green-700">Safe and Natural:</strong> Homeopathic medicines are made from natural substances like plants and minerals. They are gentle on your body and don't come with the harsh side effects that some other treatments might have. This makes them a safe choice, especially for long-term use.
      </li>

      <li>
        <strong className="text-green-700">Promotes Hair Growth:</strong> Homeopathy doesn't just stop hair loss; it also encourages new hair growth. By working on improving the health of your scalp and stimulating hair follicles, homeopathy aims to bring back healthy and strong hair naturally.
      </li>
    </ul>
  </div>

  {/* Right Image */}
  <div className=" flex justify-center">
    <img
      src="/hairloss.jpg"  // 👉 replace with your actual image path
      alt="Homeopathy treatment for hair loss"
      className=" w-full max-w-xl"
    />
  </div>
</section>

   {/* Causes of Hair Loss */}
<section className=" mt-8">
  <h2 className="text-3xl font-bold text-green-700 mb-4">
    Causes of Hair Loss
  </h2>
  <div className="text-lg space-y-4 leading-relaxed">
    <p>
      Hair loss, also known as alopecia, can occur due to a wide variety of
      reasons. One of the most common causes is genetic predisposition, where
      conditions like male-pattern or female-pattern baldness are inherited and
      progress gradually with age.
    </p>
    <p>
      Hormonal imbalances, particularly those related to thyroid disorders,
      pregnancy, menopause, or polycystic ovary syndrome (PCOS), can disrupt the
      normal hair growth cycle. Stress, both physical and emotional, is another
      major factor, often leading to temporary shedding known as telogen effluvium.
    </p>
    <p>
      Poor nutrition, especially deficiencies in iron, protein, zinc, and
      vitamins, can weaken hair and contribute to thinning. Certain medications,
      such as those used for cancer, arthritis, depression, or high blood
      pressure, may also trigger hair loss as a side effect.
    </p>
    <p>
      Other causes include scalp infections, autoimmune conditions like alopecia
      areata, harsh hairstyling practices, and exposure to chemicals or heat.
      Identifying the underlying cause is essential for choosing the right
      treatment approach.
    </p>
  </div>
</section>


  {/* Signs and Symptoms of Hair Loss */}
<section className=" mt-8">
  <h2 className="text-3xl font-bold text-green-700 mb-4">
    Signs and Symptoms of Hair Loss
  </h2>
  <div className="text-lg space-y-4 leading-relaxed mb-10">
    <p>
      Hair loss may begin gradually or occur suddenly, depending on its cause.
      One of the earliest signs is increased hair shedding while combing,
      washing, or noticing more strands on pillows and clothing.
    </p>
    <p>
      Thinning of hair on the scalp is a common symptom, often beginning at the
      crown or along the hairline. In men, it usually appears as a receding
      hairline or bald spots, while in women, it presents as overall thinning or
      widening of the part line.
    </p>
    <p>
      Circular or patchy bald spots can occur in conditions like alopecia
      areata, sometimes accompanied by itching or pain before the hair falls
      out. Infections of the scalp may cause redness, scaling, and oozing along
      with hair loss.
    </p>
    <p>
      In more severe cases, complete loss of hair on the scalp (alopecia totalis)
      or the entire body (alopecia universalis) may develop. Brittle, easily
      breakable hair and slowed regrowth are also key indicators of an
      underlying problem.
    </p>
  </div>
</section>



       
      {/* FAQ Section */}
<section className="mb-10 flex flex-col md:flex-row items-start gap-6">
  {/* Left Image */}
  <div className="md:w-1/3 flex justify-center">
    <img
      src="/hairloss1.jpg"  // 👉 replace with your actual image path
      alt="FAQs about Hair Loss Homeopathy Treatment"
      className=" w-full max-w-sm"
    />
  </div>

  {/* Right Content */}
  <div className="md:w-2/3">
    <h2 className="text-3xl font-semibold text-green-700 mb-4">
      FAQs about Hair Loss Homoeopathy Treatment
    </h2>
    <div className="space-y-4 text-lg">
      <div>
        <strong className="text-green-700">Can homeopathy cure hair loss completely?</strong>
        <p>
          Homeopathy aims to address the root causes of hair loss, which can vary from person to person. While it may not guarantee a complete cure in all cases, it can significantly improve hair health and growth over time.
        </p>
      </div>

      <div>
        <strong className="text-green-700">How long does it take to see improvements with homoeopathic treatment for hair loss?</strong>
        <p>
          The timeframe for seeing improvements varies based on individual factors such as the cause of hair loss, overall health, and consistency in treatment. Generally, noticeable improvements may take a few months to become evident.
        </p>
      </div>

      <div>
        <strong className="text-green-700">Are homeopathic remedies safe for long-term use in managing hair loss?</strong>
        <p>
          Yes, homeopathic remedies are derived from natural substances and are considered safe for long-term use when prescribed by a qualified practitioner. They are gentle on the body and do not typically cause harmful side effects.
        </p>
      </div>

      <div>
        <strong className="text-green-700">Can homeopathy help with specific types of hair loss like alopecia areata?</strong>
        <p>
          Yes, homeopathy can be beneficial for various types of hair loss, including alopecia areata. Homeopathic treatments are customized to address specific conditions and promote healthy hair growth.
        </p>
      </div>

      <div>
        <strong className="text-green-700">What lifestyle changes can complement homeopathy in managing hair loss effectively?</strong>
        <p>
          Lifestyle changes such as maintaining a balanced diet rich in nutrients essential for hair health, managing stress levels, avoiding harsh hair treatments, and practicing good scalp hygiene can complement homeopathic treatment for optimal results. Consistency in lifestyle adjustments and treatment can support overall hair health and growth.
        </p>
      </div>
    </div>
  </div>
</section>


<section className=" p-6  text-center">
  <h2 className="text-2xl font-semibold text-green-800 mb-2">Are you ready to give your hair the care it deserves?</h2>
  <p className="text-lg mb-4">
     Reach out to our experienced homeopathic practitioners today!
    We offer personalized treatment plans and effective solutions for hair loss, tailored just for you.
    Take the first step towards healthier, vibrant hair and renewed confidence. Let's work together to bring back your natural beauty!
  </p>
  <Link
    href="/appointment" // 👉 change this to your desired route
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
