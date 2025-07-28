"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function OnlineFormsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    disease: "",
    mobile: "",
    promoCode: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // TODO: Add submission logic
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="py-10 px-4 md:px-16 max-w-5xl mx-auto" data-aos="fade-up">
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border">
          <h2 className="text-xl md:text-2xl text-center font-bold mb-8 text-yellow-600">
            Register now for Free & get a Complimentary Case Evaluation
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {/* Name */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">👤</span>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>

            {/* Address */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">📍</span>
              <input
                type="text"
                name="address"
                placeholder="Address *"
                value={form.address}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">📧</span>
              <input
                type="email"
                name="email"
                placeholder="Email Id *"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>

            {/* City */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">🏙️</span>
              <input
                type="text"
                name="city"
                placeholder="City *"
                value={form.city}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>

            {/* Gender */}
            <div className="flex items-center gap-6 px-3">
              <span className="text-gray-500">⚥</span>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" value="Male" onChange={handleChange} required />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" value="Female" onChange={handleChange} />
                Female
              </label>
            </div>

            {/* Zip Code */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">📨</span>
              <input
                type="text"
                name="zip"
                placeholder="Zip Code *"
                value={form.zip}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>

            {/* Country */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">🌐</span>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full p-2 outline-none bg-transparent"
                required
              >
                <option value="">Select Your Country *</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            {/* Disease */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">🩺</span>
              <select
                name="disease"
                value={form.disease}
                onChange={handleChange}
                className="w-full p-2 outline-none bg-transparent"
                required
              >
                <option value="">Select Your Disease *</option>
                <option value="Eczema">Eczema</option>
                <option value="Psoriasis">Psoriasis</option>
                <option value="Asthma">Asthma</option>
              </select>
            </div>

            {/* Mobile */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">📞</span>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                value={form.mobile}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>

            {/* Promo Code */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">🎁</span>
              <input
                type="text"
                name="promoCode"
                placeholder="Promo Code / Corporate Code"
                value={form.promoCode}
                onChange={handleChange}
                className="w-full p-2 outline-none"
              />
            </div>

            {/* reCAPTCHA mock */}
            <div className="col-span-2 text-center mt-4">
              <div className="inline-block border p-4 rounded-md bg-gray-50">
                <label className="flex items-center justify-center gap-3">
                  <input type="checkbox" required />
                  I'm not a robot
                </label>
                <p className="text-xs text-gray-500 mt-1">reCAPTCHA – Privacy • Terms</p>
              </div>
            </div>

            {/* Register Button */}
            <div className="col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition"
              >
                Register
              </button>
              <p className="text-sm mt-4">
                Already Registered?{" "}
                <a href="/login" className="text-blue-600 underline">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
