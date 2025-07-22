"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 📌 Required for default styles
import Image from "next/image";

export default function AppointmentForm() {
  const [date, setDate] = useState(new Date());

  return (
    <section className="  bg-[#e3ffe0] py-10 px-4  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Image */}
        <div className="w-full h-full">
          <Image
            src="/appointment.png" // Replace with your own image path
            alt="Appointment Booking"
            width={600}
            height={500}
            className="w-full h-auto object-cover rounded-xl "
          />
        </div>

        {/* Right Form */}
        <div className="bg-[#f6fef6] p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Add Appointment</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Role</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Doctor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Select Doctor</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Dr Shital Khodke</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Patient Contact</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter Contact Number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <Calendar
                onChange={setDate}
                value={date}
                tileDisabled={({ date }) => date.getDay() === 0} // Example: disable Sundays
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Selected Date</label>
              <div className="text-green-800 font-semibold">
                {date.toDateString()}
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
