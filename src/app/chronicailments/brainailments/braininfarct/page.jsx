"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function BrainInfarctPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);



  return (
    <>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section data-aos="fade-up">
        <div className="max-w-screen bg-[#e3ffe0] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-green-800 leading-tight">
                Brain Infarct (Ischemic Stroke)
              </h1>
              <p className="mt-4 text-lg leading-relaxed">
                A brain infarct occurs when an artery supplying the brain becomes
                blocked, usually by a clot. This interrupts oxygen supply and injures
                brain cells. Symptoms typically appear suddenly—time lost is brain lost.
                Immediate hospital care is critical.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/brain.jpg"
                alt="Brain infarct illustration"
                className="w-full  object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Brain Infarct Section */}
<section className="py-10 bg-[#e3ffe0] px-6 ">
  <div className="max-w-screen bg-[#e3ffe0] mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-4">What is Brain Infarct?</h2>
    <p className="text-lg leading-relaxed ">
      A brain infarct, also known as a stroke, occurs when blood flow to a part of the brain is blocked or reduced. 
      This lack of blood supply deprives brain cells of oxygen and nutrients, causing them to become damaged or die. 
    </p>
    <p className="text-lg leading-relaxed  mt-4">
      Strokes can be of two main types: <span className="font-semibold">ischemic strokes</span>, caused by a clot 
      blocking a blood vessel, and <span className="font-semibold">hemorrhagic strokes</span>, caused by a ruptured 
      blood vessel. 
    </p>
    <p className="text-lg leading-relaxed  mt-4">
      Common symptoms include weakness on one side of the body, difficulty speaking, vision problems, and sudden 
      severe headaches. It is crucial to seek medical help immediately, as timely treatment can minimize brain 
      damage and improve recovery outcomes. 
    </p>
  </div>
</section>

    {/* Homeopathy Treatment for Brain Infarct */}
<section className="py-12 px-6 bg-[#e3ffe0]">
  <div className="max-w-screen mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-4">
      How Can Homeopathy Treatment Benefit Brain Infarct?
    </h2>
    <p className="text-lg leading-relaxed ">
      Homeopathy offers a holistic approach to treating brain infarct, considering not only the physical symptoms 
      but also the overall health and well-being of the individual. This approach focuses on healing the person as 
      a whole, including their emotional and mental aspects, which can play a significant role in recovery.
    </p>
    <p className="text-lg leading-relaxed  mt-4">
      One of the key benefits of homeopathy is its <span className="font-semibold">individualized treatment</span>. 
      Homeopaths tailor remedies based on the specific symptoms and underlying causes of brain infarct for each 
      person. This personalized approach ensures that the treatment is targeted and effective for the individual's 
      unique condition.
    </p>
    <p className="text-lg leading-relaxed  mt-4">
      Homeopathic medicines are derived from <span className="font-semibold">natural sources</span> such as plants 
      and minerals. They promote gentle and natural healing without causing harsh side effects often associated 
      with conventional medications. This aspect makes homeopathy a preferred choice for many individuals seeking 
      a more natural and holistic approach to healing.
    </p>
    <p className="text-lg leading-relaxed  mt-4">
      Moreover, homeopathy can <span className="font-semibold">complement conventional treatments</span> for brain 
      infarct. It can work alongside medications or therapies prescribed by medical doctors, enhancing the overall 
      recovery process and potentially preventing recurrence of stroke-related issues.
    </p>
    <p className="text-lg leading-relaxed  mt-4">
      These aspects make homeopathy a beneficial option for individuals looking for comprehensive, personalized, 
      and gentle treatment for brain infarct.
    </p>
  </div>
</section>

{/* Causes of Brain Infarct */}
<section className="py-12 px-6 bg-[#e3ffe0]">
  <div className="max-w-screen mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-6">
      Causes of Brain Infarct
    </h2>
    <p className="text-lg leading-relaxed mb-4">
      A brain infarct, commonly referred to as an ischemic stroke, occurs when
      blood flow to a part of the brain is interrupted, resulting in reduced
      oxygen supply to brain cells. This leads to tissue damage and can cause
      long-term neurological complications if not addressed promptly.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      The most common cause is the blockage of an artery by a blood clot, which
      may originate in the brain itself or travel from another part of the body
      such as the heart. Atherosclerosis, or the buildup of fatty deposits in
      the arteries, significantly increases this risk by narrowing the blood
      vessels and making them prone to clot formation.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      Other contributing factors include high blood pressure, uncontrolled
      diabetes, high cholesterol levels, obesity, and smoking. Cardiac
      conditions such as atrial fibrillation and heart valve disorders also
      raise the likelihood of clots that can lead to brain infarcts. In some
      cases, genetic predispositions or family history of stroke play an
      influential role.
    </p>
    <p className="text-lg leading-relaxed">
      Lifestyle habits like excessive alcohol intake, lack of physical activity,
      and chronic stress can further contribute to the development of a brain
      infarct. By addressing these underlying causes, both prevention and
      recovery outcomes can be significantly improved.
    </p>
  </div>
</section>

{/* Signs and Symptoms of Brain Infarct */}
<section className="py-12 px-6 bg-[#e3ffe0]">
  <div className="max-w-screen mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-6">
      Signs and Symptoms of Brain Infarct
    </h2>
    <p className="text-lg leading-relaxed mb-4">
      The signs and symptoms of a brain infarct often appear suddenly and vary
      depending on the area of the brain affected. Since different parts of the
      brain control various functions of the body, the impact may range from
      mild weakness to severe loss of function.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      One of the most common symptoms is sudden weakness or numbness on one side
      of the body, affecting the face, arm, or leg. Speech difficulties, such as
      slurred words, inability to form sentences, or trouble understanding
      language, are also frequent indicators.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      Vision problems, including blurred or double vision and sudden loss of
      sight in one or both eyes, may also occur. Many patients experience
      difficulty with coordination, balance, or walking, often accompanied by
      dizziness. Severe and sudden headaches, especially when associated with
      nausea or vomiting, can signal a serious complication.
    </p>
    <p className="text-lg leading-relaxed">
      Early recognition of these symptoms is critical. Immediate medical
      attention can reduce the extent of brain damage and improve the chances of
      recovery. Prompt intervention can make the difference between temporary
      impairment and long-term disability.
    </p>
  </div>
</section>



    {/* FAQs on Brain Infarct Homeopathy Treatment */}
<section className="py-12 px-6 bg-[#e3ffe0]">
  <div className="max-w-screen mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-6">
      FAQs on Brain Infarct Homeopathy Treatment
    </h2>

    <div className="space-y-4 bg-[#e3ffe0]">
      {/* FAQ 1 */}
      <details className="group border rounded-lg p-4 bg-[#e3ffe0] shadow-sm">
        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800">
          Can homeopathy cure brain infarct completely?
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <p className="mt-2 text-gray-700">
          Homeopathy focuses on supporting the body's natural healing processes and improving overall health. 
          While it cannot reverse brain damage, it can assist in managing symptoms, enhancing recovery, and 
          improving quality of life.
        </p>
      </details>

      {/* FAQ 2 */}
      <details className="group border rounded-lg p-4 bg-[#e3ffe0] shadow-sm">
        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800">
          Are homeopathic remedies safe for individuals recovering from a brain infarct?
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <p className="mt-2 text-gray-700">
          Yes, homeopathic remedies are generally safe as they are derived from natural sources and are gentle 
          on the body. However, it's crucial to consult with a qualified homeopath to ensure that the remedies 
          are appropriate and compatible with other treatments.
        </p>
      </details>

      {/* FAQ 3 */}
      <details className="group border rounded-lg p-4 bg-[#e3ffe0] shadow-sm">
        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800">
          How long does it take to see improvements with homeopathic treatment for brain infarct?
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <p className="mt-2 text-gray-700">
          The time to see improvements varies depending on the individual's condition, severity of symptoms, 
          overall health, and responsiveness to treatment. Homeopathy aims for gradual and sustained 
          improvement, so patience and consistent follow-up with the homeopath are important.
        </p>
      </details>

      {/* FAQ 4 */}
      <details className="group border rounded-lg p-4 bg-[#e3ffe0] shadow-sm">
        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800">
          What dietary and lifestyle recommendations support homeopathic treatment for brain infarct?
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <p className="mt-2 text-gray-700">
          A balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can support 
          brain health and overall recovery. Lifestyle changes such as regular exercise, adequate rest, stress 
          management, and avoiding smoking and excessive alcohol consumption also play a vital role in recovery 
          and well-being.
        </p>
      </details>

      {/* FAQ 5 */}
      <details className="group border rounded-lg p-4 bg-[#e3ffe0] shadow-sm">
        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800">
          Can homeopathy help prevent future brain infarcts after treatment?
          <span className="transition-transform group-open:rotate-180">▼</span>
        </summary>
        <p className="mt-2 text-gray-700">
          Homeopathy focuses on enhancing overall health and addressing underlying factors that contribute to 
          brain infarcts, which may help in reducing the risk of future occurrences. However, ongoing monitoring, 
          healthy lifestyle choices, and regular medical care are crucial for long-term prevention.
        </p>
      </details>
    </div>
  </div>
</section>


      

     

      {/* CTA */}
      <section className="text-center p-8 sm:p-12 bg-[#e3ffe0]" data-aos="fade-up">
        <h3 className="text-2xl sm:text-3xl font-semibold text-green-700">
          Begin Your Recovery Journey
        </h3>
        <p className="mt-3 text-green-700 max-w-3xl text-lg mx-auto">
          Partner with our experienced homeopathic practitioners to support your
          rehabilitation and quality of life—always alongside your neurologist’s plan.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/appointment"
            className="bg-green-700 text-white hover:bg-yellow-300 hover:text-black px-5 py-2.5 rounded-xl text-sm sm:text-base transition-all"
          >
            Book Appointment
          </Link>
          <Link
            href="/contactus/contactus"
            className="border border-white text-white bg-green-700 hover:bg-white hover:text-green-800 px-5 py-2.5 rounded-xl text-sm sm:text-base transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
