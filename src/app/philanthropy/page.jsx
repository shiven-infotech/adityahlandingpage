"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PhilanthropyPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formType, setFormType] = useState("donate");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formType === "donate" ? "Donation:" : "Volunteer:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] text-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Hero Section */}
          <section className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">Our Philanthropy</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Healing with heart. Serving those in need through free care, outreach, and wellness.
            </p>
          </section>

          {/* Carousel */}
          <section className="overflow-hidden" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-6">Our Impact in Pictures</h2>
            <div className="flex overflow-x-auto gap-4 p-2 scrollbar-hide">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`/impact.jpeg`} // Replace with real images
                  alt={`Philanthropy ${i}`}
                  className="min-w-[300px] rounded-xl shadow-md object-cover h-60"
                />
              ))}
            </div>
          </section>

          {/* Impact Highlights */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
            {[
              { title: "10,000+ Patients", desc: "Free camps & mobile care" },
              { title: "35+ Villages", desc: "Reached across regions" },
              { title: "Women & Children", desc: "Empowered with education" }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-green-600">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* Mission */}
          <section className="text-center" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-green-700">Our Mission</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-700">
              Providing quality holistic care, especially to those who need it most. Because every life matters.
            </p>
          </section>

          {/* Testimonials */}
          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-6">What People Say</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Anita B.",
                  text: "Thanks to Dr. Shital Khodke, I received free treatment that changed my life.",
                },
                {
                  name: "Ramesh P.",
                  text: "Their team reached our village and treated my entire family with love and care.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-white shadow rounded-xl p-6">
                  <p className="italic text-gray-600">"{t.text}"</p>
                  <p className="mt-3 font-bold text-green-700">– {t.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white rounded-xl shadow-lg p-8 text-center" data-aos="zoom-in">
            <h2 className="text-2xl font-bold text-green-700">
              Ready to Make a Difference?
            </h2>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setFormType("donate")}
                className={`px-6 py-2 rounded-md font-semibold ${
                  formType === "donate"
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Donate
              </button>
              <button
                onClick={() => setFormType("volunteer")}
                className={`px-6 py-2 rounded-md font-semibold ${
                  formType === "volunteer"
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Volunteer
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md mx-auto">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  formType === "donate"
                    ? "Optional message or donation intent"
                    : "Why do you want to volunteer?"
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              >
                {formType === "donate" ? "Send Donation Interest" : "Join as Volunteer"}
              </button>
              {submitted && (
                <p className="text-green-600 text-sm animate-pulse mt-2">
                  ✅ Submitted successfully!
                </p>
              )}
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
