"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function NewPatientForm() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    address: "",
    city: "",
    
   
   
    phone: "",
    reference: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] px-4 py-4 min-h-screen flex flex-col lg:flex-row gap-6">
        {/* Side Menus */}
        <aside className="lg:w-64 w-full flex flex-col gap-6 sticky top-24 self-start h-fit z-10">
          {/* Health Packages */}
          <div className="  ">
            <h3 className="font-bold text-lg text-green-700 mb-2">Health Packages</h3>
            <ul className="space-y-3  ">
              <li><a href="/healthpackages/reversalprogram" className="hover:text-green-700">Reversal Program</a></li>
              <li><a href="/healthpackages/garbhsanskarclasses" className="hover:text-green-700">Garbh Sanskar Classes</a></li>
              <li><a href="/healthpackages/rightbrainactivationclasses" className="hover:text-green-700">Right Brain Activation Classes</a></li>
              <li><a href="/healthpackages/prepregnancy" className="hover:text-green-700">Pre Pregnancy</a></li> 
              <li><a href="/healthpackages/postdelivery" className="hover:text-green-700">Post Delivery</a></li>
              <li><a href="/healthpackages/corporatewellnessprogram" className="hover:text-gren-700">Corporate Wellness Program</a></li>
            </ul>
          </div>

          {/* Main Links */}
          <div className=" ">
            <h3 className="font-bold text-lg text-green-700 mb-2">Main</h3>
            <ul className="space-y-3  ">
              <li><a href="/resource/patientstestimonials" className="hover:text-green-700"> Patients Testimonials</a></li>
              <li><a href="/resource/casestudies" className="hover:text-green-700">Case Studies</a></li>
              <li><a href="/resource/blogs" className="hover:text-green-700">Blogs</a></li>
              <li><a href="/resource/onlineforms" className="hover:text-green-700">Online Forms</a></li>
            </ul>
          </div>
        </aside>

        {/* Form Section */}
        <div className="flex-1 flex justify-center" data-aos="fade-up">
          <div className="w-full max-w-4xl  p-8">
            <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
              Register now for Free & get a Complimentary Case Evaluation
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 pl-10"
                />
                <span className="absolute left-3 top-2.5 text-purple-700">👤</span>
              </div>

              {/* Address */}
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  placeholder="Address *"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 pl-10"
                />
                <span className="absolute left-3 top-2.5">📍</span>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Id *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 pl-10"
                />
                <span className="absolute left-3 top-2.5">📧</span>
              </div>

              {/* City */}
              <div className="relative">
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 pl-10"
                />
                <span className="absolute left-3 top-2.5">🏙️</span>
              </div>

              {/* Gender */}
              <div className="flex items-center gap-4 col-span-2">
                <span className="text-gray-500">⚥</span>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                </label>
              </div>

              

                
              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 pl-10"
                />
                <span className="absolute left-3 top-2.5">📞</span>
              </div>

              {/* Promo */}
              <div className="relative">
                <input
                  type="text"
                  name="promo"
                  placeholder="Refrence code"
                  value={formData.refrence}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 pl-10"
                />
                <span className="absolute left-3 top-2.5">🎁</span>
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="col-span-2 flex justify-center">
                <div className="border rounded p-4 text-center w-fit text-sm">
                  <label>
                    <input type="checkbox" required className="mr-2" /> I'm not a robot
                  </label>
                  <div className="text-xs text-gray-500 mt-1">reCAPTCHA – Privacy • Terms</div>
                </div>
              </div>

              {/* Submit */}
              <div className="col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded"
                >
                  Register
                </button>
              </div>

              <div className="col-span-2 text-center text-sm">
                Already Registered?{" "}
                <a href="#" className="text-blue-600 underline">Login</a>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
