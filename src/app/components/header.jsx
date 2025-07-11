"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-green-700 text-white px-6 py-4">
      <div className="flex items-center space-x-4 max-w-7xl mx-auto">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <h1 className="text-2xl font-bold">ADITYA HOMOEOPATHY</h1>
      </div>
    </header>
  );
}
