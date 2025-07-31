"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    zip: "",
    role: "",
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
  };

  return (
    <>
      <Header />
      <Navbar />
      <main className=" bg-[#e3ffe0]">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            <nav className="p-4 space-y-2 bg-[#e3ffe0]" data-aos="fade-right">
              <h3 className="text-lg font-semibold mb-2">Health Packages</h3>
              <ul className="space-y-2 text-gray-800 font-medium">
                <li><a href="/reversalprogram" className="hover:text-green-700">Reversal Program</a></li>
                <li><a href="/garbhsanskarclasses" className="hover:text-green-700">Garbh Sanskar Classes</a></li>
                <li><a href="/rightbrainactivationclasses" className="hover:text-green-700">Right Brain Activation</a></li>
                <li><a href="/prepregnancy" className="hover:text-green-700">Pre Pregnancy</a></li>
                <li><a href="/postdelivery" className="hover:text-green-700">Post Delivery</a></li>
                <li><a href="/corporatewellnessprogram" className="hover:text-green-700">Corporate Wellness Program</a></li>
              </ul>
            </nav>

            <nav className="p-4 space-y-2" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-lg font-semibold mb-2">Main</h3>
              <Link href="/contactus/contactus" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Contact Us</Link>
              <Link href="/contactus/requestacallback" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Request a Call Back</Link>
              <Link href="/contactus/didnotfindyourquestions" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Did not Find Your Questions</Link>
              
            </nav>
          </aside>

          {/* Contact Form */}
          <section className="flex-1 bg-[#e3ffe0] p-8 space-y-6" id="form" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-2">Contact Us</h2>
            <p className="text-gray-600">
              Kindly fill in your contact details to know more about the details of the Welcome Program.
              You can also call us on the following numbers or contact us via email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">First Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-medium">Last name</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-medium">Mobile Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
