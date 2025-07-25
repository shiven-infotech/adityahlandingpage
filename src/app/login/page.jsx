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

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e3ffe0] via-white to-green-200 px-4 py-12">
        <div
          className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md"
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
        </div>
      </section>

      <Footer />
    </>
  );
}
