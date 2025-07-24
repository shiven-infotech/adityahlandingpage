"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

export default function AppointmentForm() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("online");

  return (
    <section className="bg-[#e3ffe0] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Image */}
        <div className="w-full h-full">
          <Image
            src="/appointment.png"
            alt="Appointment Booking"
            width={600}
            height={500}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Right Form */}
        <div className="bg-[#f6fef6] p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Add Appointment</h2>

          <form className="space-y-4">
            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Role</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Doctor</option>
              </select>
            </div>

            {/* Doctor */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Doctor</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Dr Shital Khodke</option>
              </select>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Patient Contact</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter Contact Number"
              />
            </div>

            {/* Appointment Mode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Mode</label>
              <div className="flex items-center gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="appointmentMode"
                    value="online"
                    checked={mode === "online"}
                    onChange={() => setMode("online")}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-gray-700">Online</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="appointmentMode"
                    value="offline"
                    checked={mode === "offline"}
                    onChange={() => setMode("offline")}
                    className="text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-gray-700">Offline</span>
                </label>
              </div>
            </div>

            {/* Optional Address Field for Offline */}
            {mode === "offline" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Clinic Location / Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter clinic address"
                />
              </div>
            )}

            {/* Calendar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <Calendar
                onChange={setDate}
                value={date}
                tileDisabled={({ date }) => date.getDay() === 0} // Disable Sundays
              />
            </div>

            {/* Selected Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Selected Date</label>
              <div className="text-green-800 font-semibold">{date.toDateString()}</div>
            </div>

            {/* Submit */}
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
