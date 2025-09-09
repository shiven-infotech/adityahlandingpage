"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CreateContactUs } from "../../../../Redux/Api/LandingPageFormsApi";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobileNo: "",
    city: "",
    query: "",
  });

  const dispatch = useDispatch()

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //mobileNo should be 10 numbers
    if (formData.mobileNo.length !== 10) {
      toast.error("Mobile number should be 10 digits");
      return;
    }

    console.log("Form submitted:", formData);
    await dispatch(CreateContactUs(formData))
    setFormData({
    firstname: "",
    lastname: "",
    mobileNo: "",
    city: "",
    query: "",
    })
    toast.success("Form submitted successfully");

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
                href="/contactus/contactus"
                className="block hover:text-green-700 transition"
              >
                Contact Us 
              </Link>
              <Link
                href="/contactus/requestacallback"
                className="block hover:text-green-700 transition"
              >
                Request a Call Back
              </Link>
              <Link
                href="/contactus/didnotfindyourquestions"
                className="block hover:text-green-700 transition"
              >
                Did not Find Your Questions
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
              Contact Us
            </h2>
            <p className="text-gray-600">
              Kindly fill in your contact details to know more about the details
              of the Welcome Program. You can also call us on the following
              numbers or contact us via email.
            </p>

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
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
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
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
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
