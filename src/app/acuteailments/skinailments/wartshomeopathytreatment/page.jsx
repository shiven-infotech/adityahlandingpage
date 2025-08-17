"use client";
import React from "react";
import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Link from "next/link";
export default function WartsPage() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="max-w-screen bg-[#e3ffe0] mx-auto px-4 py-4 text-gray-800">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          Warts Homoeopathy Treatment
        </h1>

        {/* What is Warts */}
        <section className="mb-8">
          <h2 className="text-2xl text-green-700 font-semibold mb-3">What is Warts?</h2>
          <p className="leading-7 text-lg">
            Warts are those tiny bumps or flat spots that pop up on our skin or
            even inside our mouths. They're caused by a virus called HPV, which is
            quite common. Warts can show up anywhere, like on our hands, feet, or
            face, and they come in different shapes and sizes.
          </p>
          <p className="leading-7 text-lg mt-2">
            This virus tricks our skin into growing these little bumps, which can
            be a bit annoying or embarrassing, especially if they're in plain
            sight. Warts are contagious, so you can get them from touching someone
            else's wart or from things like towels or surfaces that have the virus
            on them.
          </p>
          <p className="leading-7 text-lg mt-2">
            Usually, warts vanish on their own after some time, but sometimes they
            stick around and need a little help to go away. That's where homeopathy
            comes in—it gently nudges our body's defenses to fight off the virus
            and shrink those warts. Homeopathic treatments are safe, don't involve
            surgery or anything scary, and are tailored to your specific needs,
            which makes them a great choice for getting rid of warts.
          </p>
        </section>

        {/* Benefits of Homeopathy */}
        <section className="mb-12">
  <h2 className="text-2xl text-green-700 font-semibold mb-3">
    How Homoeopathy Treatment Can Be a Good Option for Warts?
  </h2>
  <div className="flex flex-col md:flex-row gap-8 items-center">
    {/* Text on the left */}
    <ul className="list-disc pl-6 text-xl space-y-2 md:w-1/2">
      <li>
        <strong className="text-green-700">Whole-Person Approach:</strong> Homoeopathy looks at your
        overall health, including your immune system and skin condition, to
        create a treatment plan just for you.
      </li>
      <li>
        <strong className="text-green-700">Natural Healing:</strong> Homoeopathic treatments use natural
        ingredients that help your body's natural defenses fight the virus
        causing warts, rather than harsh chemicals.
      </li>
      <li>
        <strong className="text-green-700">Gentle Treatment:</strong> Homoeopathy offers gentle solutions
        that don't involve surgeries or painful procedures, making it
        suitable for everyone, from kids to adults.
      </li>
      <li>
        <strong className="text-green-700">Long-Term Relief:</strong> By getting to the root of the
        issue, homeopathic remedies not only treat warts but also work to
        prevent them from coming back, giving you lasting results.
      </li>
    </ul>
    {/* Image on the right */}
    <div className="md:w-1/2">
      <img
        src="/warts1.jpeg"
        alt="Homeopathy benefits for warts"
        className="w-full "
      />
    </div>
  </div>
</section>

       {/* Causes of Warts */}
<section className="py-8  ">
  <div className="max-w-screen mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-6">
      Causes of Warts
    </h2>
    <p className="text-lg leading-relaxed mb-4">
      Warts are caused by an infection of the skin with the Human Papillomavirus
      (HPV). This virus enters the body through tiny cuts, scratches, or
      abrasions in the skin and leads to the overgrowth of cells, forming
      rough, raised skin lesions known as warts.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      The virus spreads easily through direct skin-to-skin contact with someone
      who has warts, or indirectly through contaminated surfaces such as towels,
      shoes, or floors in public places like swimming pools and locker rooms.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      A weakened immune system increases the risk of developing warts, as the
      body may not be able to fight off the HPV infection effectively. This is
      why children, teenagers, and individuals with reduced immunity are more
      prone to them.
    </p>
    <p className="text-lg leading-relaxed">
      Excessive moisture and frequent trauma to the skin, such as nail biting,
      shaving, or walking barefoot in public areas, can also contribute to the
      spread and recurrence of warts.
    </p>
  </div>
</section>


  {/* Signs and Symptoms of Warts */}
<section className="py-8  ">
  <div className="max-w-screen mx-auto">
    <h2 className="text-3xl font-bold text-green-700 mb-6">
      Signs and Symptoms of Warts
    </h2>
    <p className="text-lg leading-relaxed mb-4">
      Warts usually appear as small, rough, raised growths on the skin that may
      vary in size and shape. They are generally painless but can sometimes
      cause discomfort depending on their location.
    </p>
    <p className="text-lg leading-relaxed mb-4">
      Common warts often appear on the hands, fingers, or around the nails, while 
      plantar warts grow on the soles of the feet and may cause pain when walking 
      or standing. Flat warts are smoother and smaller, usually found on the face, 
      neck, or legs.
    </p>
    <p className=" text-lg leading-relaxed mb-4">
      Warts may have a rough surface with black dots inside them, which are tiny, 
      clotted blood vessels. They can appear singly or in clusters, sometimes 
      spreading to other parts of the body.
    </p>
    <p className=" text-lg leading-relaxed">
      In some cases, warts may itch, become irritated, or bleed if scratched or 
      subjected to friction. While they are generally harmless, their appearance 
      can cause cosmetic concern and discomfort.
    </p>
  </div>
</section>



        {/* FAQs */}
       <section className="mb-12">
  <h2 className="text-2xl text-green-700 font-semibold mb-3">
    FAQs about Warts Homeopathy Treatment
  </h2>
  <div className="flex flex-col md:flex-row gap-8 items-start">
    {/* Image on the left */}
    <div className="md:w-1/2">
      <img
        src="/warts2.jpeg"
        alt="FAQs about warts treatment"
        className="w-full "
      />
    </div>
    {/* Text on the right */}
    <div className="space-y-4 text-lg md:w-1/2">
      <div>
        <strong className="text-green-700">Can homeopathy completely cure warts?</strong>
        <p>
          Homeopathy aims to eliminate warts completely by stimulating your
          body's natural healing processes. While results vary for each
          person, many experience complete clearance of warts with consistent
          treatment.
        </p>
      </div>
      <div>
        <strong className="text-green-700">
          How soon can I expect to see improvements with homeopathic
          treatment for warts?
        </strong>
        <p>
          The speed of improvement depends on factors like the size and type
          of warts. Generally, visible changes can be noticed within weeks to
          months of starting homeopathic treatment, but full clearance may
          take longer.
        </p>
      </div>
      <div>
        <strong className="text-green-700">
          Are homeopathic remedies safe for children with warts?
        </strong>
        <p>
          Yes, homeopathic remedies are safe and gentle, making them suitable
          for children with warts. They work in harmony with the body's
          natural mechanisms and do not pose risks of side effects.
        </p>
      </div>
      <div>
        <strong className="text-green-700">Can homeopathy help with stubborn or recurring warts?</strong>
        <p>
          Homeopathy can effectively address stubborn or recurring warts by
          targeting the underlying causes. It helps strengthen your immune
          system, making it more capable of fighting off the virus causing
          warts.
        </p>
      </div>
      <div>
        <strong className="text-green-700">
          What lifestyle changes can complement homeopathy in managing warts
          effectively?
        </strong>
        <p>
          Maintaining good hygiene, avoiding sharing personal items, and
          boosting your immune system through a healthy diet, regular
          exercise, and stress management can complement homeopathy in
          managing and preventing warts effectively.
        </p>
      </div>
    </div>
  </div>
</section>

     {/* Call to Action */}
<section className="mt-10  p-6  text-center">
  <h3 className="text-3xl font-semibold text-green-700 mb-2">
    Are you tired of dealing with warts?
  </h3>
  <p className="mb-4 text-lg text-black">
    Our team of skilled homeopathic practitioners is here to help! Get in touch today for personalized treatment plans that work naturally and effectively. Say goodbye to warts and hello to clear, healthy skin with the power of homeopathy!
  </p>
  <Link
    href="/appointment"
    className="inline-block bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
  >
    Book Your Appointment Now
  </Link>
</section>
      </main>

      <Footer />
    </>
  );
}
