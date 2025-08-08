"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PhilanthropyPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="max-w-screen bg-[#e3ffe0] mx-auto px-4 py-10 space-y-16 text-gray-800">
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
            { title: "Donate", desc: "Support our mission by contributing to those in need of homeopathic care." },
            { title: "Volunteer", desc: "Be a part of our outreach team and bring change to communities." },
            { title: "Sponsor", desc: "Empower lives by sponsoring health programs or specific patients." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white p-6 border border-green-200 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-green-700">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </section>

        {/* Upcoming Activities and Events */}
        <section data-aos="fade-right">
          <h2 className="text-3xl font-bold border-b-2 border-yellow-400 pb-2 mb-4">Upcoming Activities & Events</h2>
          <ul className="space-y-4">
            {[
              { date: "Aug 20, 2025", event: "Free Homeopathic Camp for Rural Children" },
              { date: "Sep 05, 2025", event: "Blood Donation Drive with Health Check-up" },
              { date: "Oct 12, 2025", event: "Homeopathy Awareness Marathon" },
            ].map(({ date, event }) => (
              <li key={date} className="flex justify-between border-l-4 border-green-500 bg-green-50 px-4 py-3 rounded">
                <span className="font-semibold text-green-800">{event}</span>
                <span className="text-sm text-gray-600">{date}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section data-aos="fade-left">
          <h2 className="text-3xl font-bold border-b-2 border-yellow-400 pb-2 mb-4">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Free Homeopathy Camps",
              "Health Awareness Programs",
              "Teleconsultation for Underprivileged",
              "Nutritional Guidance",
              "School Health Checkups",
              "Community Wellness Drives",
            ].map(service => (
              <div key={service} className="bg-white border p-5 rounded-xl hover:shadow-md transition">
                <p className="font-medium text-green-700">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section data-aos="zoom-in">
          <h2 className="text-3xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["/phi1.jpeg", "/phi2.jpeg", "/phi3.jpeg", "/phi4.jpeg"].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="rounded-xl w-100 h-50 shadow hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
