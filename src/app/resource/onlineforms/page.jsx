"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function NewPatientForm() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    city: "",
    gender: "",
    phone: "",
    promo: "",
    onlineForm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const sections = [
    { id: "reversalprogram", label: "Reversal Program" },
    { id: "garbhsanskarclasses", label: "Garbh Sanskar classes" },
    { id: "rightbrainactivationclasses", label: "Right Brain Activation Classes" },
    { id: "prepregnancy", label: "Pre Pregnancy" },
    { id: "postdelivery", label: "Post Delivery" },
    { id: "corporatewellnessprogram", label: "Corporate Wellness Program" },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] py-4 px-4">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-6">
          {/* Sticky Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
            <nav className="space-y-1">
              <h3 className="text-xl text-green-700 px-2 font-semibold">Health Packages</h3>
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={`/${sec.id}`}
                  className="block hover:text-green-700 transition px-2"
                >
                  {sec.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar 2 */}
            <nav className="p-1 space-y-1">
              <h3 className="text-xl text-green-700 font-semibold">Main</h3>
              <Link href="/resource/patientstestimonials" className="block hover:text-green-700 transition">
                Patients Testimonials
              </Link>
              <Link href="/resource/casestudies" className="block hover:text-green-700 transition">
                Case Studies
              </Link>
              <Link href="/resource/blogs" className="block hover:text-green-700 transition">
                Blogs
              </Link>
              <Link href="/aboutus/visionandmission" className="block hover:text-green-700 transition">
                Online Forms
              </Link>
            </nav>
          </aside>

          {/* Form Section */}
          <div className="flex-1 flex justify-center" data-aos="fade-up">
            <div className="w-full max-w-4xl p-8  rounded shadow">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
               

                

               

               


               

               

                {/* Online Forms Dropdown */}
                <div className="relative col-span-2">
                  <select
                    name="onlineForm"
                    value={formData.onlineForm}
                    onChange={(e) => {
                      handleChange(e);
                      if (e.target.value === "appointment") {
                        router.push("/appointment");
                      }
                    }}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 pl-10 appearance-none"
                  >
                    <option value="">Select Online Form *</option>
                    <option value="appointment">📅 Appointment Form</option>
                  </select>
                  <span className="absolute left-3 top-2.5">📜</span>
                </div>

               
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
