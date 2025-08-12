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
    pinCode: "",
    country: "",
    consultation: "",
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

      <main className="py-4 px-4 bg-[#e3ffe0] md:px-16 max-w-screen mx-auto" data-aos="fade-up">
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

            {/* postal code */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">📨</span>
              <input
                type="text"
                name="PinCode"
                placeholder="Pin code "
                value={form.pinCode}
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

            {/* consultation */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">🩺</span>
              <select
                name="consultation"
                value={form.consultation}
                onChange={handleChange}
                className="w-full p-2 outline-none bg-transparent"
                required
              >
                <option value="">Select Your Consultation </option>
                <option value="reversalprogram">Reversal Program</option>
                <option value="garbhsanskarclasses">Garbh Sanskar Classes</option>
                <option value="rightbrainactivationclasses">Right Brain Activation Classes</option>
                <option value="prepregnancy">Pre Pregnancy</option>
                <option value="postdelivery">Post Delivery</option>
                <option value="corporatewellnessprogram">Corporate Wellness Program</option>
                <option value="nutrition">Nutrition</option>
                <option value="counselling">Counselling</option>
                <option value="Acupuncturetherapy">Acupunsture Therapy</option>
                <option value="ayurvedictherapy">Ayurvedic Therapy</option>
                <option value="naturopathy">Naturopathy</option>
                <option value="physiotherapy">Physiotherapy</option>
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

           
            {/* Register Button */}
            <div className="col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition"
              >
                Register
              </button>
              
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
