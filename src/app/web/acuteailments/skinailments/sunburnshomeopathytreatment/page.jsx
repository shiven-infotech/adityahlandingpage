"use client";
import React from "react";
import Image from "next/image";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function SunBurnsPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="max-w-screen bg-[#e3ffe0] mx-auto px-4 py-10 space-y-10 text-gray-800">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          Sun Burns Homeopathy Treatment
        </h1>

        {/* What is Sun Burns */}
        <section>
          <h2 className="text-xl font-semibold text-green-600 mb-2">What is Sun Burns?</h2>
          <p>
            Sunburns happen when your skin gets too much sun, especially the kind that can hurt you called ultraviolet (UV) rays. This can make your skin turn red, hurt, and sometimes even bubble or peel if it's really bad. It's like getting a burn from the sun, ranging from a little to a lot! Sunburns aren't just about feeling uncomfortable; they can also raise your chances of getting skin cancer later on. To avoid this, it's important to use sunscreen, wear protective clothes, and stay in the shade when the sun is strong. If you do get a sunburn, using things like aloe vera can help calm it down, or you can talk to a doctor if it's serious.
          </p>
        </section>

        {/* How can homeopathy help - with image on right */}
        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-2/3">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              How Can Homeopathy Treatment Be a Good Option for Sun Burns?
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Natural Healing:</strong> Homeopathic remedies are made from natural substances like plants and minerals. These ingredients work gently with your body's own healing processes, helping your skin recover from sunburn without harsh chemicals that may irritate your skin further.
              </li>
              <li>
                <strong>Reduced Inflammation:</strong> When your skin gets sunburned, it becomes inflamed, leading to redness, swelling, and pain. Homeopathy can target this inflammation, calming down the skin and making you feel more comfortable.
              </li>
              <li>
                <strong>Pain Relief:</strong> Sunburns can be really painful, making it hard to move or even wear clothes comfortably. Homeopathic remedies are known for their ability to ease pain and discomfort, allowing you to heal while feeling less miserable.
              </li>
              <li>
                <strong>Prevents Peeling:</strong> After a sunburn, your skin may start peeling, which can prolong the healing process. Some homeopathic remedies are specifically designed to prevent or reduce peeling, helping your skin recover faster and more smoothly.
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

        {/* Comparison with other treatments */}
        <section>
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            Comparison with Other Treatments:
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Conventional Treatments:</strong> These are the usual treatments you might get from a doctor. They're good at relieving symptoms like pain or redness, but sometimes they can also come with side effects that might bother you.
            </li>
            <li>
              <strong>Topical Remedies:</strong> These are things you put directly on your skin, like creams or gels. They can feel nice and can help with the outer part of the sunburn, but they don't go deep inside like homeopathy does to heal from within.
            </li>
            <li>
              <strong>Natural Remedies:</strong> These are treatments made from natural stuff, which is similar to homeopathy. They're gentle on your body, but they might not be as personalized as homeopathy, meaning they don't target your specific needs as closely.
            </li>
            <li>
              <strong>Medications:</strong> These are stronger treatments you might get from a doctor. They can be really helpful for pain, but they can also affect other parts of your body, which is something to keep in mind.
            </li>
          </ul>
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
          <div className="md:w-2/3 order-1 md:order-2">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              FAQs about Sun Burns Homeopathy Treatment:
            </h2>
            <div className="space-y-5">
              <div>
                <strong>How do homeopathic remedies help with sunburns?</strong>
                <p>
                  Homeopathic remedies work by using natural substances to support your body's own healing process. They can reduce inflammation, ease pain, and promote faster healing of sunburned skin.
                </p>
              </div>
              <div>
                <strong>Are homeopathic remedies safe for children with sunburns?</strong>
                <p>
                  Yes, homeopathic remedies are generally safe for children with sunburns. They are gentle and don't have harsh chemicals, making them a good option for soothing sunburned skin in kids.
                </p>
              </div>
              <div>
                <strong>Can homeopathy prevent sunburn-related skin peeling?</strong>
                <p>
                  Some homeopathic remedies are designed to prevent or reduce skin peeling after a sunburn. By supporting skin health and healing, they can help minimize peeling and aid in a smoother recovery.
                </p>
              </div>
              <div>
                <strong>How long does it take to see improvement with homeopathy for sunburns?</strong>
                <p>
                  The time it takes to see improvement with homeopathy for sunburns can vary from person to person. Generally, you may start feeling relief within a few days, but full healing may take a week or more, depending on the severity of the sunburn.
                </p>
              </div>
              <div>
                <strong>Are there any dietary recommendations along with homeopathy for sunburns?</strong>
                <p>
                  While homeopathy focuses on internal healing, maintaining a healthy diet can support overall skin health and recovery. Drinking plenty of water, eating foods rich in antioxidants (like fruits and vegetables), and avoiding excessive sun exposure can complement homeopathic treatment for sunburns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-100 p-6 rounded-lg text-center mt-10">
          <h2 className="text-2xl font-bold text-green-700 mb-3">Take the First Step</h2>
          <p>
            If you've had a sunburn and prefer a gentle, natural way to heal, think about talking to a qualified homeopath. They can offer personalized treatments that your skin will appreciate!
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
