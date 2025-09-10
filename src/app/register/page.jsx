"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from 'react-redux';

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { registerUser } from "../../../Redux/Api/AuthApi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function OnlineFormsPage() {
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    mobile: "",
    location: "",
    city: "",
    state: "",
    country: "",
    gender: "",
    pincode: "",
  });

  const dispatch =  useDispatch();
  const {} = useSelector((state) => state.RegisterAPI);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Submitted:", form);
    
        const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(form.mobile)) {
      toast.error("Mobile number must be exactly 10 digits!");
      return;
    }

    // TODO: Add submission logic
    try{
    await dispatch(registerUser(form))
    toast.success("Form submitted successfully!");
    setForm({    firstName: "",
    surname: "",
    mobile: "",
    location: "",
    city: "",
    state: "",
    country: "",
    gender: "",
    pincode: "",
  })
    } catch (error) {
    toast.error("Something went wrong. Please try again.");
  }
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="py-4 px-4 bg-[#e3ffe0] md:px-16" data-aos="fade-up">
        <div className="bg-white p-2 max-w-6xl mx-auto rounded-xl shadow-lg border">
          <h2 className="text-xl md:text-2xl text-center font-bold mb-8 text-yellow-600">
            Register now for Free & get a Complimentary Case Evaluation
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
          >
            {/* First Name */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">👤</span>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">👤</span>
              <input
                type="text"
                name="surname"
                placeholder="Last Name *"
                value={form.surname}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>

            {/* Mobile Number */}
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

            {/* Address */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">📍</span>
              <input
                type="text"
                name="location"
                placeholder="Address *"
                value={form.location}
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

            {/* State */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">🗺️</span>
              <input
                type="text"
                name="state"
                placeholder="State *"
                value={form.state}
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

            {/* Gender */}
            <div className="flex items-center gap-6 px-3">
              <span className="text-gray-500">⚥</span>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  required
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />
                Female
              </label>
            </div>

            {/* Pin Code */}
            <div className="flex items-center border rounded px-3">
              <span className="text-gray-400 mr-2">📨</span>
              <input
                type="text"
                name="pincode"
                placeholder="Pin code *"
                value={form.pincode}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition"
              >
                Register
              </button>

              <p className="mt-6 text-sm text-center text-gray-600">
                Don’t have an account?{" "}
                <Link
                  href="/register"
                  className="text-green-700 font-medium hover:underline"
                >
                  Register here
                </Link>
              </p>

              <p className="mt-3 text-xs text-center text-gray-500">
                By registering you agree to our{" "}
                <Link href="/terms" className="underline hover:text-green-700">
                  Terms and Conditions
                </Link>
                ,{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-green-700"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/disclaimer"
                  className="underline hover:text-green-700"
                >
                  Legal Disclaimers
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
