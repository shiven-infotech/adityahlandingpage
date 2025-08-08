"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AppointmentPage() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("online");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Header />
      <Navbar />
      <section className="bg-[#e3ffe0] py-14 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <div
            className="rounded-2xl overflow-hidden h-[540px]"
            data-aos="fade-right"
          >
            <Image
              src="/appointment.png"
              alt="Appointment Booking"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <div
            className="bg-white p-8 rounded-2xl shadow-md flex flex-col justify-between h-[540px] overflow-y-auto"
            data-aos="fade-left"
          >
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                Book an Appointment
              </h2>

              {submitted && (
                <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-800 border border-green-300 animate-fadeIn">
                  ✅ Appointment submitted successfully!
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter first name"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter last name"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                {/* Doctor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Doctor
                  </label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2" required>
                    <option>Dr. Shital Khodke</option>
                  </select>
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Patient Contact
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter Contact Number"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                {/* Appointment Mode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Appointment Mode
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="mode"
                        value="online"
                        checked={mode === "online"}
                        onChange={() => setMode("online")}
                        className="text-green-600"
                      />
                      <span className="ml-2 text-gray-700">Online</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="mode"
                        value="offline"
                        checked={mode === "offline"}
                        onChange={() => setMode("offline")}
                        className="text-green-600"
                      />
                      <span className="ml-2 text-gray-700">Offline</span>
                    </label>
                  </div>
                </div>

                {/* Clinic Address */}
                <div
                  className={`transition-all duration-300 ${
                    mode === "online"
                      ? "opacity-0 pointer-events-none h-0 overflow-hidden"
                      : "opacity-100 h-auto"
                  }`}
                >
                  <label className="block text-sm font-medium text-gray-700">
                    Clinic Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter clinic address"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                {/* Calendar */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Choose a Date
                  </label>
                  <Calendar
                    onChange={setDate}
                    value={date}
                    tileDisabled={({ date }) => date.getDay() === 0}
                    className="rounded-lg border border-gray-200 w-full"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
