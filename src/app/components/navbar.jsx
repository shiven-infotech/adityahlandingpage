"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `block px-4 py-2 hover:text-green-700 ${
      isActive(path) ? "text-green-700 font-semibold" : ""
    }`;

  const menu = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      children: [
        { label: "About Us", href: "/aboutus" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Vision and Mission", href: "/visionandmission" },
      ],
    },
    {
      label: "Ailments",
      children: [
        {
          label: "Acute Ailments",
          children: [
            { label: "Fever", href: "/ailments/acute/fever" },
            { label: "Cold & Cough", href: "/ailments/acute/cold-cough" },
          ],
        },
        {
          label: "Chronic Ailments",
          children: [
            { label: "Diabetes", href: "/ailments/chronic/diabetes" },
            { label: "Thyroid", href: "/ailments/chronic/thyroid" },
          ],
        },
      ],
    },
    {
      label: "Healthcare",
      children: [
        { label: "Alternative Therapies", href: "/AlternativeTherapies" },
        { label: "Health Packages", href: "/HealthPackages" },
      ],
    },
    {
      label: "Online Clinic",
      children: [
        { label: "Overview", href: "/OnlineClinic" },
        { label: "Book Appointment", href: "/OnlineClinic/appointment" },
        { label: "Prescriptions", href: "/OnlineClinic/prescriptions" },
      ],
    },
    {
      label: "Contact Us",
      children: [
        { label: "Contact Form", href: "/ContactUS" },
        { label: "Location", href: "/ContactUS/location" },
        { label: "Support", href: "/ContactUS/support" },
      ],
    },
    { label: "Login", href: "/Login" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFDD0] text-black shadow-md px-4 py-3">
      <div className="max-w-screen-2xl mx-auto">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-4 text-sm font-medium text-green-700">
          {menu.map((item, idx) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => {
                setOpenDropdown(idx);
                setOpenSubDropdown(null);
              }}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenSubDropdown(null);
              }}
            >
              {item.children ? (
                <>
                  <span className="cursor-pointer hover:text-green-700">
                    {item.label} ▼
                  </span>

                  {openDropdown === idx && (
                    <ul className="absolute left-0 mt-2 bg-white text-black border border-b-4 border-green-600 rounded shadow-lg z-50 min-w-[180px]">
                      {item.children.map((child) => (
                        <li
                          key={child.label}
                          className="relative group"
                          onMouseEnter={() => setOpenSubDropdown(child.label)}
                          onMouseLeave={() => setOpenSubDropdown(null)}
                        >
                          {child.children ? (
                            <>
                              <span className="block px-4 py-2 cursor-pointer border-b-2 border-transparent hover:border-green-600 transition duration-200">
                                {child.label} ▸
                              </span>
                              {openSubDropdown === child.label && (
                                <ul className="absolute top-0 left-full ml-1 bg-white text-black border-b-4 border-green-600 border rounded shadow-lg z-50 min-w-[180px]">
                                  {child.children.map((grand) => (
                                    <li key={grand.label}>
                                      {grand.href ? (
                                        <Link
                                          href={grand.href}
                                          className={linkClass(grand.href)}
                                        >
                                          {grand.label}
                                        </Link>
                                      ) : (
                                        <span className="block px-4 py-2 text-gray-800">
                                          {grand.label}
                                        </span>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : child.href ? (
                            <Link
                              href={child.href}
                              className={linkClass(child.href)}
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <span className="block px-4 py-2 text-gray-800">
                              {child.label}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="flex justify-end md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdowns */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-2 text-sm font-medium">
            {menu.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <details className="ml-2">
                    <summary className="cursor-pointer">{item.label}</summary>
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          {child.children ? (
                            <details>
                              <summary>{child.label}</summary>
                              <ul className="ml-4 mt-1 space-y-1">
                                {child.children.map((grand) => (
                                  <li key={grand.label}>
                                    {grand.href ? (
                                      <Link
                                        href={grand.href}
                                        className={linkClass(grand.href)}
                                      >
                                        {grand.label}
                                      </Link>
                                    ) : (
                                      <span className="block px-4 py-1">
                                        {grand.label}
                                      </span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </details>
                          ) : child.href ? (
                            <Link
                              href={child.href}
                              className={linkClass(child.href)}
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <span className="block px-4 py-1">
                              {child.label}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className={linkClass(item.href)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
