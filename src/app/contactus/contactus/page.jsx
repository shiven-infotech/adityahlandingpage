"use client";

import { useState } from "react";
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
      <main className="min-h-screen bg-[#e3ffe0] py-10 px-6">
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Sidebar Menu */}
          <aside className="w-1/4 sticky top-24 bg-[#e3ffe0]  p-4 space-y-4 h-fit">

            <h2 className="text-xl font-semibold text-green-700">Health Packages</h2>
            <ul className="space-y-2 text-gray-700 font-medium">
              <li><a href="reversalprogram" className="hover:text-green-600">Reversal Program</a></li>
              <li><a href="/garbhsanskarclasses" className="hover:text-green-600">Garbh Sanskar Classes</a></li>
              <li><a href="/rightbrainactivationclasses" className="hover:text-green-600">Right Brain Activation Classes</a></li>
              <li><a href="/prepregancy" className="hover:text-green-600">Pre Pregnancy</a></li>
              <li><a href="/postdelivery" className="hover:text-green-600">Post Delivery</a></li>
              <li><a href="/corporatewellnessprogram" className="hover:text-green-600">Corporate Wellness Program</a></li>


            </ul>
          </aside>

          {/* Contact Form */}
          <section className="flex-1 bg-[#e3ffe0]   p-8 space-y-6" id="form">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-2">Contact Us</h2>
            <p className="text-gray-600">
              Kindly fill in your contact details to know more about the details of the Welcome Program. 
              You can also call us on the following numbers or contact us via email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Name <span className="text-red-500">*</span></label>
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
                  <label className="font-medium">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-medium">Mobile Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-medium">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  >
                    <option value="">Select your country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-medium">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                  rows={2}
                />
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
                <div>
                  <label className="font-medium">Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-medium">You are? <span className="text-red-500">*</span></label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  >
                    <option value="">Select</option>
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-medium">Query <span className="text-red-500">*</span></label>
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-3 py-2"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
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
