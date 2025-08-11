"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function requestacallbackPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobilenumber: "",
    city: "",
    query: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add actual form submission logic here
  };

  const sections = [
    { id: "reversalprogram", label: "Reversal Program" },
    { id: "garbhsanskarclasses", label: "Garbh Sanskar classes" },
    { id: "rightbrainactivationclasses", label: "Right Brain Activation Classes" },
    { id: "prepregnancy", label: "Pre Pregnancy" },
    { id: "Postdelivery", label: "Post Delivery" },
    { id: "corporatewellnessprogram", label: "Corporate Wellness Program" },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <div className="bg-[#e3ffe0] px-4 py-4">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-6">
          {/* Sticky Sidebar Container */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
            <nav className="space-y-1">
              <h3 className="text-xl text-green-700 px-2 font-semibold">
                Health Packages
              </h3>
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex  hover:text-green-700 transition"
                >
                  <span className=" p-1">{sec.icon}</span>
                  {sec.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar 2 */}
            <nav className="p-1  space-y-1">
              <h3 className="text-xl text-green-700 font-semibold">Main</h3>
              <Link
                href="/aboutus/aboutus"
                className="block hover:text-green-700 transition"
              >
                About Us
              </Link>
              <Link
                href="/aboutus/fundamentalsofhomeopathy"
                className="block hover:text-green-700 transition"
              >
                Fundamentals of Homeopathy
              </Link>
              <Link
                href="/aboutus/myths&factsabouthomeopathy"
                className="block hover:text-green-700 transition"
              >
                Myths & Facts About Homeopathy
              </Link>
              <Link
                href="/aboutus/visionandmission"
                className="block hover:text-green-700 transition"
              >
                Vision and Mission
              </Link>
              <Link
                href="/aboutus/ourteam"
                className="block hover:text-green-900 transition"
              >
                Our Team
              </Link>
            </nav>
          </aside>

          {/* Contact Form */}
          <section
            className="flex-1 bg-[#e3ffe0] p-8 space-y-6"
            id="form"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-400 pb-2">
              Request a Call Back
            </h2>
            

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-medium">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobilenumber"
                    value={formData.mobilenumber}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium">Your Query</label>
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full border rounded-md px-3 py-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-600  text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
