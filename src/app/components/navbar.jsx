"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `hover:text-green-700 ${isActive(path) ? "underline text-green-700 font-semibold" : ""}`;

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFDD0] text-black shadow-md px-6 py-3">
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        {/* Desktop Menu */}
        <ul className="flex flex-wrap  item-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
          <li><Link href="/" className={linkClass("/")}>Home</Link></li>
          <li><Link href="/Aboutus" className={linkClass("/Aboutus")}>About Us</Link></li>
          <li><Link href="/AcuteAilments" className={linkClass("/AcuteAilments")}>Acute Ailments</Link></li>
          <li><Link href="/ChronicAilments" className={linkClass("/ChronicAilments")}>Chronic Ailments</Link></li>
          <li><Link href="/AlternativeTherapies" className={linkClass("/AlternativeTherapies")}>Alternative Therapies</Link></li>
          <li><Link href="/HealthPackages" className={linkClass("/HealthPackages")}>Health Packages</Link></li>
          <li><Link href="/Testimonials" className={linkClass("/Testimonials")}>Testimonials</Link></li>
          <li><Link href="/OnlineClinic" className={linkClass("/OnlineClinic")}>Online Clinic</Link></li>
          <li><Link href="/Resource" className={linkClass("/Resource")}>Resource</Link></li>
          <li><Link href="/ContactUS" className={linkClass("/ContactUS")}>Contact Us</Link></li>
          <li><Link href="/login" className={linkClass("/login")}>Login</Link></li>
        </ul>

    
       
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-2 px-2 text-sm font-medium">
          <li><Link href="/" className={linkClass("/")}>Home</Link></li>
          <li><Link href="/Aboutus" className={linkClass("/Aboutus")}>About Us</Link></li>
          <li><Link href="/AcuteAilments" className={linkClass("/AcuteAilments")}>Acute Ailments</Link></li>
          <li><Link href="/ChronicAilments" className={linkClass("/ChronicAilments")}>Chronic Ailments</Link></li>
          <li><Link href="/AlternativeTherapies" className={linkClass("/AlternativeTherapies")}>Alternative Therapies</Link></li>
          <li><Link href="/HealthPackages" className={linkClass("/HealthPackages")}>Health Packages</Link></li>
          <li><Link href="/Testimonials" className={linkClass("/Testimonials")}>Testimonials</Link></li>
          <li><Link href="/OnlineClinic" className={linkClass("/OnlineClinic")}>Online Clinic</Link></li>
          <li><Link href="/Resource" className={linkClass("/Resource")}>Resource</Link></li>
          <li><Link href="/ContactUS" className={linkClass("/ContactUS")}>Contact Us</Link></li>
          <li><Link href="/login" className={linkClass("/login")}>Login</Link></li>
        </ul>
      )}
    </nav>
  );
} 