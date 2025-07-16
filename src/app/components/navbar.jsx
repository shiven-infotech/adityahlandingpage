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
    `block py-2 px-4 hover:text-green-700 break-words whitespace-normal ${
      isActive(path) ? "text-green-700 font-semibold" : ""
    }`;

  const menu = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      children: [
        { label: "Fundamentals of Homeopathy", href: "/fundamentalsofhomeopathy" },
        { label: "Myths & Facts About Homeopathy", href: "/myths&factsabouthomeopathy" },
      ],
    },
    {
      label: "Acute Ailments",
      children: [
        {
          label: "Skin Ailments",
          href: "/AcuteAilments/skin",
          children: [
            { label: "Eczema", href: "/AcuteAilments/skin/eczema" },
            { label: "Psoriasis", href: "/AcuteAilments/skin/psoriasis" },
            { label: "Dermatitis", href: "/AcuteAilments/skin/dermatitis" },
            { label: "Crack on Heels", href: "/AcuteAilments/skin/crackonheels" },
            { label: "Lichen Planus", href: "/AcuteAilments/skin/lichenplanus" },
            { label: "Dry Skin", href: "/AcuteAilments/skin/dryskin" },
            { label: "Acne And Pimples", href: "/AcuteAilments/skin/acneandpimples" },
            { label: "Black Discoloration on Face", href: "/AcuteAilments/skin/blackdiscolorationonface" },
            { label: "Alopecia Areata", href: "/AcuteAilments/skin/alopeciaareata" },
            { label: "Warts", href: "/AcuteAilments/skin/warts" },
            { label: "Corn", href: "/AcuteAilments/skin/corn" },
            { label: "Vitilligo", href: "/AcuteAilments/skin/vitilligo" },
            { label: "Heat Storks", href: "/AcuteAilments/skin/heatstorks" },
            { label: "Sun Burns", href: "/AcuteAilments/skin/sunburns" },
            { label: "Skin Rashes", href: "/AcuteAilments/skin/skinrashes" },
            { label: "Varicose Veins", href: "/AcuteAilments/skin/varicoseveins" },
          ],
        },
        {
          label: "Beauty",
          href: "/AcuteAilments/beauty",
          children: [
            { label: "Hair Loss", href: "/AcuteAilments/beauty/hairloss" },
            { label: "Greying of Hair", href: "/AcuteAilments/beauty/greyingofhair" },
            { label: "Dandruff", href: "/AcuteAilments/beauty/dandruff" },
            { label: "Freckles", href: "/AcuteAilments/beauty/freckles" },
            { label: "Dark Circles Under Eyes", href: "/AcuteAilments/beauty/darkcirclesundereyes" },
            { label: "Pimples", href: "/AcuteAilments/beauty/pimples" },
            { label: "Ear Infection", href: "/AcuteAilments/beauty/earinfection" },
            { label: "Conjunctivits", href: "/AcuteAilments/beauty/conjunctivits" },
            { label: "Vision Improvement", href: "/AcuteAilments/beauty/visionimprovement" },
          ],
        },
        { label: "Bone Ailments", href: "/AcuteAilments/bone",
          children: [
            { label: "Cervical Spondylitis", href: "/acuteailments/bone/cervicalspondylitis" },
            { label: "Lumbar Spondylitis", href: "/AcuteAilments/bone/lumbarspondylitis" },
            { label: "Gout", href: "/AcuteAilments/bone/gout" },
            { label: "Sciatica", href: "/AcuteAilments/bone/sciatica" },
            { label: "Spinal Stenosis", href: "/AcuteAilments/bone/spinalstenosis" },
            { label: "Degeneratve Changes", href: "/AcuteAilments/bone/degenerativechanges" },
            { label: "Joint pain", href: "/AcuteAilments/bone/jointpain" },
            { label: "Rheumatism", href: "/AcuteAilments/bone/rheumatism" },
            { label: "Joint and Muscular Pain", href: "/AcuteAilments/bone/jointandmuscularpain" },
          ]
         },

        { label: "Children Ailments", href: "/AcuteAilments/children" },
        { label: "Digestive Disorders", href: "/AcuteAilments/digestive" },
        { label: "Female Ailments", href: "/AcuteAilments/female" },
      ],
    },
    {
      label: "Chronic Ailments",
      children: [
        { label: "Diabetes", href: "/ChronicAilments/diabetes" },
        { label: "Arthritis", href: "/ChronicAilments/arthritis" },
        { label: "Thyroid", href: "/ChronicAilments/thyroid" },
      ],
    },
    {
      label: "Alternative Therapies",
      children: [
        { label: "Nutrition", href: "/nutrition" },
        { label: "Counselling", href: "/counselling" },
        { label: "Acupunture Therapy", href: "/acupuncturetherapy" },
        { label: "Acupressure Therapy", href: "/acupressuretherapy" },
        { label: "Ayurvedic Therapy", href: "/ayurvedictherapy" },
        { label: "Naturopathy", href: "/naturopathy" },
        { label: "Physiotherapy", href: "/physiotherapy" },
      ],
    },
    {
      label: "Health Packages",
      children: [
        { label: "Reversal Program", href: "/reversalprogram" },
        { label: "Garbh Sanskar Classes", href: "/garbhsanskarclasses" },
        { label: "Right Brain Activation Classes", href: "/rightbrainactivationclasses" },
        { label: "Pre Pregancy", href: "/prepregancy" },
        { label: "Post Delivery", href: "/postdelivery" },
        { label: "Corporate Wellness Program", href: "/corporatewellnessprogram" },
      ],
    },
    {
      label: "Resource",
      children: [
        { label: "Patients Testimonials", href: "/patientstestimonials" },
        { label: "Case Studies", href: "/casestudies" },
        { label: "Blogs", href: "/blogs" },
        { label: "Online Forms", href: "/onlineforms" },
      ],
    },
    { label: "Philanthropy", href: "/philanthropy" },
    {
      label: "Contact Us",
      children: [
        { label: "Contact Us", href: "/contactus" },
        { label: "Request a Call Back", href: "/requestacallback" },
        { label: "Didn't Find Your Questions?", href: "/didn'tfindyourquestion?" },
      ],
    },
    { label: "Login", href: "/login" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#e3ffe0] text-black shadow-md px-4 py-3 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto">
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap justify-center items-center gap-6 text-[15px] font-bold text-green-700">
          {menu.map((item, idx) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenSubDropdown(null);
              }}
            >
              {item.children ? (
                <>
                  <span className="cursor-pointer hover:text-green-700">{item.label}</span>
                  <ul
                    className={`absolute left-0 top-full mt-2 bg-white text-black font-medium rounded shadow-lg min-w-[200px] z-50 transition-all duration-200 ease-in-out ${
                      openDropdown === idx
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.children.map((child) => (
                      <li
                        key={child.label}
                        className="relative group"
                        onMouseEnter={() => setOpenSubDropdown(child.label)}
                        onMouseLeave={() => setOpenSubDropdown(null)}
                      >
                        {child.children ? (
                          <>
                            <span className="block px-4 py-2 hover:text-green-700 cursor-pointer">
                              {child.label}
                            </span>
                            <ul
                              className={`absolute left-full top-0 ml-1 bg-white text-black font-medium rounded shadow-lg min-w-[220px] max-h-[400px] overflow-y-auto z-50 transition-all duration-200 ease-in-out ${
                                openSubDropdown === child.label
                                  ? "opacity-100 visible"
                                  : "opacity-0 invisible"
                              }`}
                            >
                              {child.children.map((sub) => (
                                <li key={sub.label}>
                                  <Link href={sub.href} className={linkClass(sub.href)}>
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link href={child.href} className={linkClass(child.href)}>
                            {child.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
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
        <div className="md:hidden flex justify-end">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
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

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-3 text-[16px] font-semibold text-green-900 px-2">
            {menu.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <details className="ml-2">
                    <summary className="cursor-pointer py-1 no-arrow">{item.label}</summary>
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          {child.children ? (
                            <details className="ml-2">
                              <summary className="cursor-pointer">{child.label}</summary>
                              <ul className="ml-4 mt-1 space-y-1">
                                {child.children.map((sub) => (
                                  <li key={sub.label}>
                                    <Link href={sub.href} className={linkClass(sub.href)}>
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </details>
                          ) : (
                            <Link href={child.href} className={linkClass(child.href)}>
                              {child.label}
                            </Link>
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

      {/* ✅ Hide summary arrows in mobile */}
      <style jsx global>{`
        summary::marker {
          display: none;
        }
      `}</style>
    </nav>
  );
}
