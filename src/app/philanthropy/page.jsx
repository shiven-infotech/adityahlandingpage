"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";
import Image from "next/image";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Sidebar data (Health Packages)
const healthPackages = [
  { id: "/healthpackages/reversalprogram", label: "Reversal Program" },
  { id: "/healthpackages/garbhsanskarprogram", label: "Garbh Sanskar Classes" },
  { id: "/healthpackages/rightbrainactivationclasses", label: "Right Brain Activation Classes" },
  { id: "/healthpackages/prepregnancy", label: "Pre Pregnancy" },
  { id: "/healthpackages/postdelivery", label: "Post Delivery" },
  { id: "/healthpackages/coroporatewellnessprogram", label: "Corporate Wellness Program" },
];

// Sidebar data (Main)
const mainLinks = [
  { id: "/aboutus/aboutus", label: "About Us" },
  { id: "/aboutus/fundamentalsofhomeopathy", label: "Fundamentals of Homeopathy" },
  { id: "/aboutus/myths&factsabouthomeopathy", label: "Myths & Facts About Homeopathy" },
  { id: "/aboutus/visionandmission", label: "Vision and Mission" },
  { id: "/aboutus/ourteam", label: "Our Team" },
];

export default function PhilanthropyPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <div className="bg-[#e3ffe0] px-4 py-4">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-6">
          {/* Sticky Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1: Health Packages */}
            <nav className="space-y-1">
              <h3 className="text-xl text-green-700 px-2 font-semibold">Health Packages</h3>
              {healthPackages.map((sec) => (
                <Link
                  key={sec.id}
                  href={sec.id}
                  className="flex items-center hover:text-green-700 transition"
                >
                  <span className="text-lg p-1">{sec.icon}</span>
                  {sec.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar 2: Main Links */}
            <nav className="p-1 space-y-1">
              <h3 className="text-xl text-green-700 font-semibold">Main</h3>
              {mainLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.id}
                  className="block hover:text-green-700 transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-16">
            {/* Hero Section */}
            <section className="text-center" data-aos="fade-down">
              <h1 className="text-4xl font-bold text-green-700">Philanthropy</h1>
              <p className="mt-4 text-lg text-gray-600">
                Join us in creating a healthier and more compassionate world through your support.
              </p>
            </section>

           {/* Donate, Volunteer, Sponsor */}
<section className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
  {[
    { title: "Donate", desc: "Support our mission by contributing to those in need of homeopathic care.", link: "https://venshitafoundation.org/donate" },
    { title: "Volunteer", desc: "Be a part of our outreach team and bring change to communities.", link: "https://venshitafoundation.org/registration" },
    { title: "Sponsor", desc: "Empower lives by sponsoring health programs or specific patients.", link: "https://venshitafoundation.org/sponsorship" },
  ].map(({ title, desc, link }) => (
    <Link
      key={title}
      href={link}
      className="bg-white p-6 border border-green-200 rounded-xl shadow hover:shadow-lg transition block"
    >
      <h3 className="text-2xl font-semibold text-green-700">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </Link>
  ))}
</section>


            {/* Upcoming Activities and Events */}
            <section data-aos="fade-right">
              <h2 className="text-3xl font-bold border-b-2 border-yellow-400 pb-2 mb-4">
                Upcoming Activities & Events
              </h2>
              <ul className="space-y-4">
                {[
                  { date: "Aug 20, 2025", event: "Free Homeopathic Camp for Rural Children" },
                  { date: "Sep 05, 2025", event: "Blood Donation Drive with Health Check-up" },
                  { date: "Oct 12, 2025", event: "Homeopathy Awareness Marathon" },
                ].map(({ date, event }) => (
                  <li
                    key={date}
                    className="flex justify-between border-l-4 border-green-500 bg-green-50 px-4 py-3 rounded"
                  >
                    <span className="font-semibold text-green-800">{event}</span>
                    <span className="text-sm text-gray-600">{date}</span>
                  </li>
                ))}
              </ul>
            </section>

           {/* Services */}
<section data-aos="fade-left">
  <h2 className="text-3xl font-bold border-b-2 border-yellow-400 pb-2 mb-4">
    Our Services
  </h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      { name: "Health Care", link: "https://venshitafoundation.org/healthcare" },
      { name: "Social Welfare", link: "https://venshitafoundation.org/socialwelfare" },
      { name: "Religious", link: "https://venshitafoundation.org/religious" },
      { name: "Education", link: "https://venshitafoundation.org/education" },
      { name: "Environment", link: "https://venshitafoundation.org/environment" },
    ].map(({ name, link }) => (
      <Link
        key={name}
        href={link}
        className="bg-white border p-5 rounded-xl hover:shadow-md hover:scale-105 transition block"
      >
        <p className="font-bold text-green-700">{name}</p>
      </Link>
    ))}
  </div>
</section>


            {/* Gallery */}
            <section data-aos="zoom-in">
              <h2 className="text-3xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {["/phi1.jpeg", "/phi2.jpeg", "/phi3.jpeg", "/phi4.jpeg","/p.jpeg"].map((src, index) => (
                  <div
                    key={index}
                    className="w-full h-40 relative rounded-xl overflow-hidden shadow hover:scale-105 transition-transform"
                  >
                    <Image src={src} alt={`Gallery image ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
