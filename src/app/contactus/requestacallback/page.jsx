"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";




export default function RequestACallBackPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    subject: "",
    query: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
    const today = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, date: today }));
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Call Back Request Submitted:", formData);
    // Optionally show success message here
  };


  return (
    <>
      <Header />
      <Navbar />

      <div className="bg-[#e3ffe0] ">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-6">
          
          {/* Sticky Sidebars */}
          <aside className="hidden md:flex flex-col  w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
           <nav className="p-4 space-y-2 bg-[#e3ffe0]">
              <h3 className="text-lg text-green-700 font-semibold mb-2">Health Packages</h3>
              <ul className="space-y-3 text-gray-800 font-medium">
                <li><a href="/reversalprogram" className="hover:text-green-700">Reversal Program</a></li>
                <li><a href="/garbhsanskarclasses" className="hover:text-green-700">Garbh Sanskar Classes</a></li>
                <li><a href="/rightbrainactivationclasses" className="hover:text-green-700">Right Brain Activation</a></li>
                <li><a href="/prepregnancy" className="hover:text-green-700">Pre Pregnancy</a></li>
                <li><a href="/postdelivery" className="hover:text-green-700">Post Delivery</a></li>
                <li><a href="/corporatewellnessprogram" className="hover:text-green-700">Corporate Wellness Program</a></li>
              </ul>
            </nav>
            {/* Sidebar 2 */}
            <nav className="p-4 space-y-2">
              <h3 className="text-lg text-green-700 font-semibold mb-2">Main</h3>
              <Link href="/contactus/contactus" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Contact Us</Link>
              <Link href="/contacus/requestacallback" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Request a Call Back</Link>
              <Link href="/contactus/didnotfindyourquestions" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Did not Find Your Questions</Link>
              
            </nav>
          </aside>

          {/* Main Form Section */}
          <section className="flex-1 w-full rounded-xl p-6 md:p-8 space-y-6" data-aos="fade-left">
  <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-2">
    Request a Call Back
  </h2>

  <form onSubmit={handleSubmit} className="space-y-4" data-aos="zoom-in-up">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div data-aos="fade-up">
        <label className="font-medium">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <label className="font-medium">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-3 py-2"
        />
      </div>
    </div>

    <div data-aos="fade-up" data-aos-delay="150">
      <label className="font-medium">
        Mobile Number <span className="text-red-500">*</span>
      </label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border rounded-md px-3 py-2"
      />
    </div>

    <div data-aos="fade-up" data-aos-delay="200">
      <label className="font-medium">
        Subject <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full border rounded-md px-3 py-2"
      />
    </div>

    {/* ✅ New Query Field */}
    <div data-aos="fade-up" data-aos-delay="250">
      <label className="font-medium">
        Query <span className="text-red-500">*</span>
      </label>
      <textarea
        name="query"
        value={formData.query}
        onChange={handleChange}
        required
        rows="4"
        placeholder="Write your query here..."
        className="w-full border rounded-md px-3 py-2"
      />
    </div>

    {/* Hidden field for date */}
    <input type="hidden" name="date" value={formData.date} />

    <button
      type="submit"
      className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition w-full sm:w-auto"
      data-aos="zoom-in"
      data-aos-delay="300"
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
