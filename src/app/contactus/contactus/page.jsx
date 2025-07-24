"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/header"; // Adjust if path is different

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">
        {/* Top Banner Image */}
        <div className="w-full" data-aos="fade-down">
          <Image
            src="/contactus.jpeg" // Make sure this image exists in your public/ folder
            alt="Contact Us Banner"
            width={1600}
            height={500}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Contact Form Section */}
        <section className="max-w-4xl mx-auto px-4 py-12" data-aos="fade-up">
          <h1
            className="text-3xl font-bold text-green-700 mb-6 text-center"
            data-aos="zoom-in"
          >
            Get in Touch With Us
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-green-50 p-6 rounded-xl shadow-md space-y-4"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                data-aos="fade-right"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                data-aos="fade-left"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                data-aos="fade-right"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                data-aos="fade-left"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              data-aos="fade-up"
            ></textarea>

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
              data-aos="zoom-in"
            >
              Send Message
            </button>

            {submitted && (
              <p
                className="text-green-700 font-semibold mt-2"
                data-aos="fade-in"
              >
                ✅ Your message has been sent!
              </p>
            )}
          </form>
        </section>
      </main>
    </>
  );
}
