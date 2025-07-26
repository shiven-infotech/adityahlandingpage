"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LoginPage() {
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (!hasMounted) return null;

  return (
    <>
      <Header />
      <Navbar />

      <section className=" bg-[#e3ffe0] px-4 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside
            className="w-full md:w-1/3 bg-[#e3ffe0]   p-6 space-y-4"
            data-aos="fade-right"
          >
           
            <ul className="space-y-2 text-green-700 font-medium">
              <li>
                <a href="/aboutus/aboutus" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/aboutus/visionandmission" className="hover:underline">
                  Vision and mission
                </a>
              </li>
              <li>
                <a href="/appointment" className="hover:underline">
                  Book an Appointment
                </a>
              </li>
              <li>
                <a href="/register" className="hover:underline">
                  Register
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </aside>

          {/* Login Form */}
          <div
            className="bg-[#e3ffe0] w-full md:w-2/3  p-10"
            data-aos="zoom-in"
          >
            <h2
              className="text-3xl font-bold text-center text-green-800 mb-6"
              data-aos="fade-down"
            >
              Login to Your Account
            </h2>

            {submitted && (
              <div
                className="mb-4 p-3 rounded-lg bg-green-100 text-green-800 border border-green-300"
                data-aos="fade-in"
              >
                ✅ Login submitted successfully!
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Role Dropdown */}
              <div data-aos="fade-up" data-aos-delay="100">
                <label className="block text-sm font-medium text-gray-700">
                  Select Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">-- Select your role --</option>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              {/* Password Field */}
              <div data-aos="fade-up" data-aos-delay="200">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Submit Button */}
              <div data-aos="fade-up" data-aos-delay="300">
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  Login
                </button>
              </div>
            </form>

            {/* Register Link */}
            <p
              className="mt-6 text-sm text-center text-gray-600"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-green-700 font-medium hover:underline"
              >
                Register here
              </a>
            </p>

            {/* Terms Note */}
            <p
              className="mt-3 text-xs text-center text-gray-500"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              By registering you agree to our{" "}
              <a href="/terms" className="underline hover:text-green-700">
                Terms and Conditions
              </a>
              ,{" "}
              <a href="/privacy" className="underline hover:text-green-700">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/disclaimer" className="underline hover:text-green-700">
                Legal Disclaimers
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
