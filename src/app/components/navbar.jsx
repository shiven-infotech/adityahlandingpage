"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-700 text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo for Aditya Homoeopathy"
            width={60}
            height={60} 
            className="object-contain"
          />
          <span className="text-xl font-bold">ADITYA HOMOEOPATHY</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Services</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contacts</li>
          <li className="hover:text-yellow-300 cursor-pointer">Doctors</li>
          <li className="hover:text-yellow-300 cursor-pointer">About Us</li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-2 px-2">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Services</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contacts</li>
          <li className="hover:text-yellow-300 cursor-pointer">Doctors</li>
          <li className="hover:text-yellow-300 cursor-pointer">About Us</li>
        </ul>
      )}
    </nav>
  );
}
