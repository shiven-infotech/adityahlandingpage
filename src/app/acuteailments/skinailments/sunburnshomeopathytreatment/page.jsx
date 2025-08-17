"use client";
import React from "react";
import Image from "next/image";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Link from "next/link";
export default function SunBurnsPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="max-w-screen bg-[#e3ffe0] mx-auto px-4 py-4 space-y-10 text-gray-800">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Sun Burns Homoeopathy Treatment
        </h1>

        {/* What is Sun Burns */}
        <section>
          <h2 className="text-3xl font-semibold text-green-700 mb-2">What is Sun Burns?</h2>
          <p className="text-lg leading-relaxed">
            Sunburns happen when your skin gets too much sun, especially the kind that can hurt you called ultraviolet (UV) rays. This can make your skin turn red, hurt, and sometimes even bubble or peel if it's really bad. It's like getting a burn from the sun, ranging from a little to a lot! Sunburns aren't just about feeling uncomfortable; they can also raise your chances of getting skin cancer later on. To avoid this, it's important to use sunscreen, wear protective clothes, and stay in the shade when the sun is strong. If you do get a sunburn, using things like aloe vera can help calm it down, or you can talk to a doctor if it's serious.
          </p>
        </section>

        {/* How can homeopathy help - with image on right */}
        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold text-green-700 mb-2">
              How Can Homeopathy Treatment Be a Good Option for Sun Burns?
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <strong className="text-green-700">Natural Healing:</strong> Homeopathic remedies are made from natural substances like plants and minerals. These ingredients work gently with your body's own healing processes, helping your skin recover from sunburn without harsh chemicals that may irritate your skin further.
              </li>
              <li>
                <strong className="text-green-700">Reduced Inflammation:</strong> When your skin gets sunburned, it becomes inflamed, leading to redness, swelling, and pain. Homeopathy can target this inflammation, calming down the skin and making you feel more comfortable.
              </li>
              <li>
                <strong className="text-green-700">Pain Relief:</strong> Sunburns can be really painful, making it hard to move or even wear clothes comfortably. Homeopathic remedies are known for their ability to ease pain and discomfort, allowing you to heal while feeling less miserable.
              </li>
              <li>
                <strong className="text-green-700">Prevents Peeling:</strong> After a sunburn, your skin may start peeling, which can prolong the healing process. Some homeopathic remedies are specifically designed to prevent or reduce peeling, helping your skin recover faster and more smoothly.
              </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/sunburn.jpeg"
              alt="Sunburn Homeopathy"
              width={500}
              height={300}
              className=""
            />
          </div>
        </section>

        {/* Causes of Sunburn */}
       <section className="py-8  ">
      <div className="max-w-screen mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Causes of Sunburn
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
          <p>
            Sunburn occurs when the skin is overexposed to ultraviolet (UV) rays
            from the sun or tanning devices. These rays damage skin cells,
            leading to inflammation, redness, and discomfort.
          </p>
          <p>
            Failing to use sunscreen, staying outdoors during peak sunlight
            hours, and wearing inadequate protective clothing significantly
            increase the chances of sunburn. People with fair skin are
            particularly more vulnerable.
          </p>
          <p>
            Reflective surfaces such as water, sand, and snow can intensify UV
            exposure, worsening the damage. Frequent sunburns can also increase
            the long-term risk of premature aging and skin cancer.
          </p>
        </div>
      </div>
    </section>
  

        {/* Signs and Symptoms of Sunburn */}
        <section className="py-8 ">
      <div className="max-w-screen mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6">
          Signs and Symptoms of Sunburn
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
          <p>
            Sunburn usually appears within a few hours of excessive exposure to
            ultraviolet (UV) rays and can range from mild redness to severe skin
            damage. One of the most common signs is skin turning pink or red,
            which often feels warm and tender to touch.
          </p>
          <p>
            In more severe cases, swelling, blistering, and peeling of the skin
            may occur. The affected areas can also become itchy and extremely
            sensitive, making everyday activities uncomfortable.
          </p>
          <p>
            Additional symptoms such as fever, chills, headache, or nausea may
            accompany sunburn, especially when large areas of skin are affected.
            These systemic symptoms suggest a more serious case of sun
            poisoning.
          </p>
        </div>
      </div>
    </section>

        {/* FAQs - with image on left */}
        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-1/3 order-2 md:order-1">
            <Image
              src="/sunburn1.jpeg"
              alt="FAQs on Sunburn"
              width={500}
              height={500}
              className=""
            />
          </div>
          <div className="md:w-2/3 order-2 md:order-2">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">
              FAQs about Sun Burns Homeopathy Treatment:
            </h2>
            <div className=" text-lg space-y-5">
              <div>
                <strong className="text-green-700">How do homeopathic remedies help with sunburns?</strong>
                <p>
                  Homeopathic remedies work by using natural substances to support your body's own healing process. They can reduce inflammation, ease pain, and promote faster healing of sunburned skin.
                </p>
              </div>
              <div>
                <strong className="text-green-700">Are homeopathic remedies safe for children with sunburns?</strong>
                <p>
                  Yes, homeopathic remedies are generally safe for children with sunburns. They are gentle and don't have harsh chemicals, making them a good option for soothing sunburned skin in kids.
                </p>
              </div>
              <div>
                <strong className="text-green-700">Can homeopathy prevent sunburn-related skin peeling?</strong>
                <p>
                  Some homeopathic remedies are designed to prevent or reduce skin peeling after a sunburn. By supporting skin health and healing, they can help minimize peeling and aid in a smoother recovery.
                </p>
              </div>
              <div>
                <strong className="text-green-700">How long does it take to see improvement with homeopathy for sunburns?</strong>
                <p>
                  The time it takes to see improvement with homeopathy for sunburns can vary from person to person. Generally, you may start feeling relief within a few days, but full healing may take a week or more, depending on the severity of the sunburn.
                </p>
              </div>
              <div>
                <strong className="text-green-700">Are there any dietary recommendations along with homeopathy for sunburns?</strong>
                <p>
                  While homeopathy focuses on internal healing, maintaining a healthy diet can support overall skin health and recovery. Drinking plenty of water, eating foods rich in antioxidants (like fruits and vegetables), and avoiding excessive sun exposure can complement homeopathic treatment for sunburns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
<section className=" p-6  text-center mt-10 ">
  <h2 className="text-3xl font-bold text-green-700 mb-3">Take the First Step</h2>
  <p className=" text-lg mb-6">
    If you've had a sunburn and prefer a gentle, natural way to heal, think about talking to a qualified homeopath. 
    They can offer personalized treatments that your skin will appreciate!
  </p>
  <Link
    href="/appointment"
    className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
  >
    Book Your Appointment Now
  </Link>
</section>


      </main>

      <Footer />
    </>
  );
}
