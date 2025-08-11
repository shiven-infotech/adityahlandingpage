"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

export default function AppointmentPage() {
  const [date, setDate] = useState(new Date()); // initialize with Date immediately
  const [mode, setMode] = useState("online");
  const [submitted, setSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  const slots = [
    { time: "10:00 AM", booked: false },
    { time: "11:00 AM", booked: true },
    { time: "12:00 PM", booked: false },
    { time: "02:00 PM", booked: false },
    { time: "03:00 PM", booked: true },
    { time: "04:00 PM", booked: false },
  ];

  useEffect(() => {
    AOS.init({ duration: 800 });
    setHasMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert("Please select an available slot before booking.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Header />
      <Navbar />
      <section className="bg-[#e3ffe0] py-2 px-3 sm:px-4 lg:px-6">
        <form
          className="max-w-screen mx-auto grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6"
          onSubmit={handleSubmit}
        >
          {/* Form Section */}
          <div
            className="bg-white p-3 rounded-2xl shadow-md flex flex-col"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">
              Book an Appointment
            </h2>

            {submitted && (
              <div className="mb-3 p-2 rounded-lg bg-green-100 text-green-800 border border-green-300 animate-fadeIn text-sm">
                ✅ Appointment submitted successfully!
              </div>
            )}

            <div className="space-y-2 flex-1">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                />
              </div>

              {/* Doctor */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Doctor
                </label>
                <select
                  name="doctor"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  required
                >
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
                  name="contact"
                  required
                  placeholder="Enter Contact Number"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                />
              </div>

              {/* Appointment Mode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Appointment Mode
                </label>
                <div className="flex items-center gap-4">
                  <label className="inline-flex items-center text-sm">
                    <input
                      type="radio"
                      name="mode"
                      value="online"
                      checked={mode === "online"}
                      onChange={() => setMode("online")}
                      className="text-green-600"
                    />
                    <span className="ml-1 text-gray-700">Online</span>
                  </label>
                  <label className="inline-flex items-center text-sm">
                    <input
                      type="radio"
                      name="mode"
                      value="offline"
                      checked={mode === "offline"}
                      onChange={() => setMode("offline")}
                      className="text-green-600"
                    />
                    <span className="ml-1 text-gray-700">Offline</span>
                  </label>
                </div>
              </div>

              {/* Clinic Address */}
              {mode === "offline" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Clinic Address
                  </label>
                  <input
                    type="text"
                    name="clinicAddress"
                    placeholder="Enter clinic address"
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  />
                </div>
              )}

              {/* Calendar & Slots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Calendar */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Choose a Date
                  </label>
                  {hasMounted && (
                    <Calendar
                      locale="en-GB"
                      onChange={setDate}
                      value={date}
                      tileDisabled={({ date }) => date.getDay() === 0}
                      className="rounded-lg border border-gray-200 w-full calendar-compact"
                    />
                  )}
                </div>

                {/* Slots */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Available Slots
                  </label>
                  <div className="grid grid-cols-2 gap-1">
                    {slots.map((slot, idx) => (
                      <button
                        type="button"
                        key={idx}
                        disabled={slot.booked}
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`px-1.5 py-0.5 rounded-lg text-xs font-medium border transition ${
                          slot.booked
                            ? "bg-red-100 text-red-500 border-red-300 cursor-not-allowed"
                            : selectedSlot === slot.time
                            ? "bg-green-600 text-white border-green-700"
                            : "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className=" w-full bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition mt-3 text-sm"
            >
              Book Appointment
            </button>
          </div>

          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden" data-aos="fade-left">
            <Image
              src="/appointment.png"
              alt="Appointment Booking"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
