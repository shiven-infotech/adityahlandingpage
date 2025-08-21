"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function WhyHomeopathyPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80, easing: "ease-out" });
  }, []);

  const sections = [
    { id: "reversalprogram", label: "Reversal Program" },
    { id: "garbhsanskarclasses", label: "Garbh Sanskar Classes" },
    { id: "rightbrainactivationclasses", label: "Right Brain Activation Classes" },
    { id: "prepregnancy", label: "Pre Pregnancy" },
    { id: "Postdelivery", label: "Post Delivery" },
    { id: "corporatewellnessprogram", label: "Corporate Wellness Program" },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <div className="max-w-screen bg-[#e3ffe0] mx-auto px-4 py-4 flex gap-8 ">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
          {/* Sidebar 1 */}
          <nav className="space-y-1">
            <h3 className="text-xl text-green-700 font-semibold px-2">Health Packages</h3>
            {sections.map((sec) => (
              <Link
                key={sec.id}
                href={`#${sec.id}`}
                className="flex hover:text-green-700 transition"
              >
               <span className="p-1">{sec.icon}</span>
                  {sec.label}
                </Link>
            ))}
          </nav>

          {/* Sidebar 2 */}
          <nav className="p-1 space-y-1">
            <h3 className="text-xl text-green-700 font-semibold">Main</h3>
            <Link href="/aboutus/aboutus" className="block hover:text-green-700 transition">
              About Us
            </Link>
            <Link
              href="/aboutus/fundamentalsofhomeopathy"
              className="block hover:text-green-700 transition"
            >
              Fundamentals of Homeopathy
            </Link>
            <Link
              href="/aboutus/myths&factsabouthomeopathy"
              className="block hover:text-green-700 transition"
            >
              Myths & Facts About Homeopathy
            </Link>
            <Link href="/aboutus/visionandmission" className="block hover:text-green-700 transition">
              Vision and Mission
            </Link>
            <Link href="/aboutus/ourteam" className="block hover:text-green-700 transition">
              Our Team
            </Link>
            <Link href="/aboutus/whyhomoeopathy" className="block hover:text-green-700 transition">
              Why Homoeopathy
            </Link>
            <Link href="/aboutus/benenfitsofhomoeopathy" className="block hover:text-green-700 transition">
                Benefits of Homoeopathy
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Hero */}
          <section className="bg-[#e3ffe0] relative overflow-hidden mt-0 p-0">
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30" />
              <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20" />
            </div>
            <div className="max-w-4xl mx-auto px-4  py-4  text-center">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-5xl font-extrabold text-gray-900"
              >
                Why <span className="text-green-700">Homoeopathy</span>?
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="mt-5 text-base sm:text-lg"
              >
                Gentle, individualized, and aimed at stimulating the body’s natural healing
                response—homeopathy focuses on the person as a whole, not just a diagnosis.
              </p>
             
            </div>
          </section>

          {/* Why Homeopathy - Core Message */}
          <section id="about" className="">
            <div className="max-w-screen mx-auto px-4 sm:px-6 py-4 sm:py-4">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6" data-aos="fade-right">
                  <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
                    A Whole-Person Approach
                  </h2>
                  <p className="mt-4 text-lg leading-7 ">
                    Homeopathy looks beyond a list of symptoms. During consultation, your unique
                    story—triggers, sleep, cravings, stress, and past illnesses—guides the remedy
                    selection. The aim is to support your innate healing capacity so relief isn’t
                    just temporary; it’s foundational. Many patients appreciate that well-chosen
                    remedies are gentle, typically non-toxic, and designed to harmonize rather than
                    suppress.
                  </p>
                  <p className="mt-4 text-lg leading-7 ">
                    For families, this often means options that are suitable across ages, from
                    children to elders, and can sit alongside conventional care when needed. It’s
                    an approach that values prevention, balance, and long-term wellbeing.
                  </p>
                </div>
                <div className="md:col-span-6" data-aos="fade-left">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/herbal.jpg"
                      alt="Gentle, holistic care with homeopathy"
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <div className="max-w-screen mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-green-700"
                data-aos="fade-up"
              >
                How Homeopathy Can Help
              </h2>
              <p
                className="mt-4 text-lg leading-7"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Patients commonly seek homeopathic care for recurring issues like allergies,
                migraines, skin concerns such as acne or eczema, digestive imbalance, hormonal and
                thyroid concerns, stress-linked complaints, and for support during recovery after
                illness. Individualization is key—two people with the same diagnosis may receive
                different remedies based on their overall picture.
              </p>
              <p
                className="mt-4 text-lg leading-7"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Because remedies are selected in minimal doses, they are usually well tolerated.
                Many people describe a sense of improved vitality, steadier sleep, and better stress
                resilience as their system regains balance.
              </p>
            </div>
          </section>

          {/* What to Expect */}
          <section className="">
            <div className="max-w-screen mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div data-aos="fade-right">
                  <h2 className="text-2xl sm:text-3xl font-bold text-green-700">Your First Visit</h2>
                  <p className="mt-4 text-lg leading-7">
                    Expect a detailed, friendly conversation. We’ll discuss your main concerns,
                    overall health, lifestyle, and emotional landscape. This helps identify a remedy
                    that resonates with your unique pattern. You’ll receive clear guidance on how to
                    take the remedy, what changes to observe, and when to follow up.
                  </p>
                </div>
                <div data-aos="fade-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-green-700">
                    Follow-Ups & Progress
                  </h3>
                  <p className="mt-4 text-lg leading-7">
                    Progress is monitored over weeks, not just days. We’ll look for meaningful
                    shifts—frequency and intensity of symptoms, energy, sleep, mood, and resilience.
                    The plan is refined as your system responds, keeping treatment precise and
                    personalized.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Safety & Integration */}
          <section>
            <div className="max-w-screen mx-auto px-4 sm:px-6 py-12 sm:py-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-green-700"
                data-aos="fade-up"
              >
                Safe, Gentle & Team-Friendly
              </h2>
              <p
                className="mt-4 text-lg leading-7"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Homeopathy is generally considered safe when practiced responsibly. We’re happy to
                coordinate with your existing healthcare team, including your physician or
                specialist, so your care remains cohesive. Never stop prescribed medication without
                your doctor’s advice; homeopathy can complement conventional care in many
                situations.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}
