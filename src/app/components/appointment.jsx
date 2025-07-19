"use client";
import { useState } from "react";
import Image from "next/image";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", form);
    alert("Appointment submitted successfully!");
  };

  return (
    <div className="bg-[#e3ffe0] flex justify-center items-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row overflow-hidden max-w-7xl w-full">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
          <Image
            src="/appointment.png"
            alt="Appointment"
            layout="fill"
            objectFit="cover"
            className="animate-fade-in"
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Book an Appointment
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-green-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-green-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-green-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="+91 9876543210"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border border-green-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
                Health Concern (optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full border border-green-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Describe your condition or symptoms"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
