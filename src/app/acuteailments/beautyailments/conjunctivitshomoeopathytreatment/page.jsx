"use client";

import Navbar from "../../../components/navbar";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Link from "next/link";

export default function ConjunctivitisPage() {
  return (
    <>
     
      <Header />
        <Navbar />
      <main className="max-w-screen mx-auto px-4 py-4 space-y-8 bg-[#e3ffe0] ">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          Conjunctivitis Homoeopathy Treatment
        </h1>
        <section>
          <h2 className="text-3xl font-bold text-green-700 mb-4">What is Conjunctivitis?</h2>
          <p className="text-lg leading-relaxed">
            Conjunctivitis, also known as pink eye, is a common eye problem that causes
            redness and swelling in the clear tissue covering the white part of your eye and
            lining the inner eyelids (called the conjunctiva). It can happen because of
            infections, allergies, irritants like smoke or chemicals, or viruses like those
            causing the common cold.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            When you have conjunctivitis, your eyes may look red or pink, feel itchy or
            gritty, produce a watery or thick discharge, and sometimes cause blurry vision.
            It can affect one or both eyes and can spread easily, especially if it's due to
            bacteria or viruses.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
           Treating conjunctivitis depends on what caused it. Homoeopathy offers a natural way to deal with this condition using gentle remedies customized to your specific symptoms and overall health. These remedies are designed to ease inflammation, relieve discomfort, and help your eyes heal without causing any harsh side effects. That's why many people find homeopathy a great choice for managing conjunctivitis.

          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            How Can Homoeopathy Treatment Be a Good Option for Conjunctivitis?
          </h2>
          <ul className=" text-lg space-y-2">
            <li>
              <strong className="text-green-700">Holistic Approach:</strong>Homoeopathy looks at each person as unique. By considering your specific symptoms, like redness, itching, or discharge, alongside your overall health, homoeopathy provides treatments tailored just for you. This personalized touch can make a big difference in how well the treatment works for your conjunctivitis.
 </li>

            <li>
              <strong className="text-green-700" >Natural Remedies:</strong>  Homoeopathic medicines are made from natural substances. They are gentle on your eyes, reducing the chances of any harsh side effects that you might get with other treatments. This natural approach can be comforting, especially when dealing with sensitive eye issues like conjunctivitis. </li>

            <li>
              <strong className="text-green-700" >Quick Relief:</strong>One of the goals of homeopathy is to give you relief from your symptoms as soon as possible. Whether it's reducing redness, easing itching, or lessening discharge, homeopathic treatments aim to make you feel better faster. </li>

            <li>
              <strong className="text-green-700">Prevents Recurrence:</strong> Homoeopathy doesn't just stop at treating your current symptoms. It also works to strengthen your body's ability to fight off future bouts of conjunctivitis. This preventive aspect can be really beneficial in managing and reducing the chances of recurrent eye infections. </li>
          </ul>
        </section>

         {/* Causes of Conjunctivitis */}
<section className=" mt-8">
  <h2 className="text-3xl font-bold text-green-700 mb-4">
    Causes of Conjunctivitis
  </h2>
  <div className="text-lg space-y-4 leading-relaxed">
    <p>
      Conjunctivitis, commonly known as “pink eye,” occurs when the conjunctiva
      — the thin, transparent tissue covering the white part of the eye and the
      inner surface of the eyelids — becomes inflamed. This inflammation may be
      caused by infections, allergies, or irritants.
    </p>
    <p>
      Viral infections are the most common cause, often linked to the same
      viruses that cause colds and respiratory illnesses. Bacterial infections,
      such as those caused by staphylococcus or streptococcus, can also trigger
      conjunctivitis and are more likely to produce discharge.
    </p>
    <p>
      Allergic conjunctivitis develops when the eyes react to allergens like
      pollen, dust mites, animal dander, or mold. Chemical irritants such as
      chlorine in swimming pools, smoke, or exposure to pollutants may also
      cause conjunctival inflammation.
    </p>
    <p>
      In some cases, contact lens overuse, poor hygiene, or exposure to foreign
      objects in the eye can lead to conjunctivitis. Newborns may develop it due
      to blocked tear ducts or infections acquired during birth.
    </p>
  </div>
</section>


    {/* Signs and Symptoms of Conjunctivitis */}
<section className=" mt-8">
  <h2 className="text-3xl font-bold text-green-700 mb-4">
    Signs and Symptoms of Conjunctivitis
  </h2>
  <div className="text-lg space-y-4 leading-relaxed">
    <p>
      The hallmark symptom of conjunctivitis is redness in the white part of the
      eye, giving it a “pink” or bloodshot appearance. This is often accompanied
      by irritation, burning, or a gritty sensation, as if something is stuck in
      the eye.
    </p>
    <p>
      Excessive tearing or watery eyes are common, especially in viral and
      allergic conjunctivitis. In bacterial cases, a thick yellow or green
      discharge may be present, sometimes causing the eyelids to stick together
      after sleep.
    </p>
    <p>
      Swelling of the eyelids, sensitivity to light (photophobia), and blurred
      vision can also occur. Itching is a particularly strong feature of
      allergic conjunctivitis.
    </p>
    <p>
      Conjunctivitis often affects both eyes, though it may start in one and
      spread to the other. In children, restlessness, rubbing of the eyes, and
      reluctance to go to bright places are frequent indicators.
    </p>
  </div>
</section>


        
             {/* faqs */}
        <section>
          <h2 className="text-3xl font-bold text-green-700 mb-4">FAQs about Conjunctivitis Homoeopathy Treatment</h2>
          <div className=" text-lg space-y-4">
            <div>
              <h3 className=" text-green-700 font-semibold">Can homoeopathy cure viral conjunctivitis?</h3>
              <p>Homoeopathy can help manage the symptoms of viral conjunctivitis effectively. While it may not cure the viral infection itself, homeopathic remedies can alleviate discomfort and promote faster healing.</p>
            </div>

            <div>
              <h3 className=" text-green-700 font-semibold">How long does it take to see improvements with homoeopathic treatment for conjunctivitis?</h3>
              <p>The time to see improvements can vary based on individual factors and the severity of the condition. Generally, homeopathic treatments work gradually, and you may start noticing improvements within a few days to a week.</p>
            </div>

            <div>
              <h3 className=" text-green-700  font-semibold">
Are homoeopathic eye drops safe for treating conjunctivitis in children?</h3>
              <p>Yes, homoeopathic eye drops are generally safe for children. They are gentle and free from harsh chemicals, making them a suitable option for managing conjunctivitis symptoms in children without causing irritation.</p>
            </div>

            <div>
              <h3 className="  text-green-700 font-semibold">Can homeopathy help with allergic conjunctivitis symptoms like itching and redness?</h3>
              <p>Absolutely! Homeopathy offers remedies specifically designed to address allergic conjunctivitis symptoms such as itching, redness, and watery eyes. These remedies aim to reduce inflammation and provide relief from discomfort.</p>
            </div>

            <div>
              <h3 className=" text-green-700 font-semibold">What are some home remedies that can complement homeopathy in managing conjunctivitis effectively?</h3>
              <p>Alongside homeopathy, warm compresses can help soothe irritated eyes. Avoiding rubbing the eyes and maintaining good hygiene by washing hands and avoiding sharing towels can also complement homeopathic treatments for managing conjunctivitis effectively.</p>
            </div>

          </div>
        </section>


           <section className="bg-green-100 p-6 rounded-xl shadow mt-12 text-center">
  <h2 className="text-3xl font-bold text-green-800 mb-2">Are your eyes feeling irritated and uncomfortable?</h2>
  <p className="mb-4 text-lg leading-relaxed">
     Connect with our experienced
    homeopathic practitioners today! We offer personalized treatment plans and
    effective solutions to soothe your eyes naturally. Take the first step towards
    clear and comfortable eyes with homeopathy!
  </p>
  <Link
    href="/appointment" // 👉 update to your appointment page route
    className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded transition"
  >
    Book an Appointment
  </Link>
</section>

       
      </main>
      <Footer />
    </>
  );
}
