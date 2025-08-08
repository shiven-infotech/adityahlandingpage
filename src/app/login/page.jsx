"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";



export default function LoginPage() {
  const [username, setUsername] = useState("");
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

      <div className="flex flex-col md:flex-row max-w-screen bg-[#e3ffe0] mx-auto px-2 py-10 gap-10">
        {/* Sticky Sidebar Container */}
        <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
         
        
          <nav className=" space-y-2 ">
            <h3 className="text-lg text-green-700 font-semibold mb-2">Main</h3>
            <Link
              href="/aboutus/aboutus"
              className="block px-3 py-2  hover:text-green-900 transition"
            >
              About Us
            </Link>
            <Link
              href="/aboutus/fundamentalsofhomeopathy"
              className="block px-3 py-2  hover:text-green-900 transition"
            >
              Fundamentals of Homeopathy
            </Link>
            <Link
              href="/aboutus/myths&factsabouthomeopathy"
              className="block px-3 py-2  hover:text-green-900 transition"
            >
              Myths & Facts About Homeopathy
            </Link>
            <Link
              href="/aboutus/visionandmission"
              className="block px-3 py-2  hover:text-green-900 transition"
            >
              Vision and Mission
            </Link>
            <Link
              href="/aboutus/teambalance"
              className="block px-3 py-2  hover:text-green-900 transition"
            >
              Team Balance
            </Link>
          </nav>
        </aside>

        {/* Login Section */}
        <section className="flex-1  px-4 py-10 rounded">
          <div
            className="max-w-xl mx-auto  p-10 "
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
              {/* Username Field */}
              <div data-aos="fade-up" data-aos-delay="100">
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter your username"
                  className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
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

                <div className="text-right mt-2">
                  <Link
                    href="/forgotpassword"
                    className="text-sm text-green-700 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
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
              <Link
                href="/register"
                className="text-green-700 font-medium hover:underline"
              >
                Register here
              </Link>
            </p>

            {/* Terms Note */}
            <p
              className="mt-3 text-xs text-center text-gray-500"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              By registering you agree to our{" "}
              <Link href="/terms" className="underline hover:text-green-700">
                Terms and Conditions
              </Link>
              ,{" "}
              <Link href="/privacy" className="underline hover:text-green-700">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/disclaimer" className="underline hover:text-green-700">
                Legal Disclaimers
              </Link>
              .
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
