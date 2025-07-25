"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PatientRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    ailments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        gender: "",
        dob: "",
        phone: "",
        email: "",
        address: "",
        ailments: "",
      });
    }, 3000);
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-green-100 px-4 py-12">
        <div
          className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl w-full space-y-6"
          data-aos="fade-up"
        >
          <h1
            className="text-3xl font-bold text-green-700 text-center"
            data-aos="zoom-in"
          >
            New Patient Registration
          </h1>

          {submitted && (
            <div
              className="text-green-700 text-center font-semibold animate-bounce"
              data-aos="fade-in"
            >
              ✅ Registration Successful!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" data-aos="fade-up">
            {/* Full Name */}
            <div>
              <label className="block font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Gender and DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Phone and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Ailments */}
            <div>
              <label className="block font-medium">Describe Ailments</label>
              <textarea
                name="ailments"
                value={formData.ailments}
                onChange={handleChange}
                rows="3"
                placeholder="Mention any existing conditions..."
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-lg font-semibold transition"
            >
              Register Patient
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
