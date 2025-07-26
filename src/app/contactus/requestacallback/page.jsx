"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function requestacallbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    date: "",
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
  };

  return (
    <>
      <Header />
      <Navbar />
      <main className=" bg-[#e3ffe0]  px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          {/* Sidebar Menu */}
           <aside
  className="md:w-1/4 w-full md:sticky md:top-28 bg-[#e3ffe0]   p-4 space-y-3 h-fit"
  data-aos="fade-right"
>

            <h2 className="text-xl font-bold text-green-700 mb-3">
              Health Packages
            </h2>
            <ul className="space-y-2 text-gray-700 font-medium">
              <li><a href="/reversalprogram" className="hover:text-green-600">Reversal Program</a></li>
              <li><a href="/garbhsanskarclasses" className="hover:text-green-600">Garbh Sanskar Classes</a></li>
              <li><a href="/rightbrainactivationclasses" className="hover:text-green-600">Right Brain Activation</a></li>
              <li><a href="/prepregnancy" className="hover:text-green-600">Pre Pregnancy</a></li>
              <li><a href="/postdelivery" className="hover:text-green-600">Post Delivery</a></li>
              <li><a href="/corporatewellnessprogram" className="hover:text-green-600">Corporate Wellness Program</a></li>
            </ul>
          </aside>

          {/* Request Call Back Form */}
          <section
            className="flex-1 w-full   rounded-xl p-6 md:p-8 space-y-6"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-2">
              Request a Call Back
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4" data-aos="zoom-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div data-aos="fade-up">
                  <label className="font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <label className="font-medium">
                    Phone <span className="text-red-500">*</span>
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
              </div>

              <div data-aos="fade-up" data-aos-delay="150">
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

              <div data-aos="fade-up" data-aos-delay="200">
                <label className="font-medium">Date</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  readOnly
                  className="w-full border rounded-md px-3 py-2 bg-gray-100"
                />
              </div>

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
      </main>
      <Footer />
    </>
  );
}
