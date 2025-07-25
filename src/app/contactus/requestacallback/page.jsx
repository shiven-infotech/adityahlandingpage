"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function requestacallback() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Call Back Request Submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        preferredTime: "",
      });
    }, 3000);
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] min-h-screen flex items-center justify-center px-4 py-12">
        <div
          className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full space-y-6"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl font-bold text-center text-green-700"
            data-aos="zoom-in"
          >
            Request a Call Back
          </h2>

          {submitted && (
            <div
              className="text-green-700 font-medium text-center animate-bounce"
              data-aos="fade-in"
            >
              ✅ Your request has been submitted!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" data-aos="fade-up">
            <div>
              <label className="block font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                placeholder="DR. Shital Khodke"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 9876543210"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium">Preferred Time</label>
              <input
                type="text"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                placeholder="e.g. Between 4pm to 6pm"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
