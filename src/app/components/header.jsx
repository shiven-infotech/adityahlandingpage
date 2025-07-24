"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-700 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left: Logo + Clinic Name */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-bold">
            ADITYA HOMOEOPATHY CLINIC
          </h1>
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-3">
          <Link href="/appointment">
            <span className="bg-white text-green-700 font-medium px-4 py-2 rounded-md hover:bg-green-100 transition">
              Book an Appointment
            </span>
          </Link>
          <Link href="/register">
            <span className="bg-white text-green-700 font-medium px-4 py-2 rounded-md hover:bg-green-100 transition">
              New Patient Register
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
