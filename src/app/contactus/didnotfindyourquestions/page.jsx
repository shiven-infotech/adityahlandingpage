"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function DidNotFindYourQuestionPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    subject: "",
    question: "",
    date: "",
  });

  const faqs = [
    { question: "Is homeopathy safe for children?", answer: "Yes, homeopathy is safe and effective for all age groups." },
    { question: "How long does treatment take?", answer: "It depends on the condition and individual response." },
    { question: "How long does it take to see results with homeopathy?", answer: "The time for visible results varies depending on the condition. Acute issues may improve in days, chronic cases may take weeks or months." },
    { question: "Can I take homeopathic treatment alongside allopathic medicines?", answer: "Yes, homeopathy can be taken safely with conventional medicines under guidance." },
    { question: "Does homeopathy treat the root cause of disease?", answer: "Yes, it works on the root cause by enhancing the body’s natural healing mechanisms." },
    { question: "Is online consultation available at Aditya Homeopathic Clinic?", answer: "Yes, we offer both in-clinic and online consultations." },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const today = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, date: today }));
  }, []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Question:", formData);
    // API submission logic here
  };

  const sections = [
    { id: "reversalprogram", label: "Reversal Program" },
    { id: "garbhsanskarclasses", label: "Garbh Sanskar Classes" },
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
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            <nav className="space-y-1">
              <h3 className="text-xl text-green-700 px-2 font-semibold">Health Packages</h3>
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex hover:text-green-700 transition"
                >
                 <span className=" p-1">{sec.icon}</span>
                  {sec.label}
                </Link>
              ))}
            </nav>

            <nav className="p-1 space-y-1">
              <h3 className="text-xl text-green-700 font-semibold">Main</h3>
              <Link href="/aboutus/aboutus" className="block hover:text-green-700 transition">About Us</Link>
              <Link href="/aboutus/fundamentalsofhomeopathy" className="block hover:text-green-700 transition">Fundamentals of Homeopathy</Link>
              <Link href="/aboutus/myths&factsabouthomeopathy" className="block hover:text-green-700 transition">Myths & Facts About Homeopathy</Link>
              <Link href="/aboutus/visionandmission" className="block hover:text-green-700 transition">Vision and Mission</Link>
              <Link href="/aboutus/ourteam" className="block hover:text-green-900 transition">Our Team</Link>
            </nav>
          </aside>

         {/* Main Content */}
<section className="flex-1 space-y-10">

  {/* FAQs */}
  <div className="bg-[#e3ffe0] p-6 rounded-lg" data-aos="fade-up">
    <h3 className="text-xl font-semibold mb-4 text-green-700">Frequently Asked Questions</h3>
    <ul className="space-y-3">
      {faqs.map((faq, index) => (
        <li key={index} className="border-b pb-2">
          <strong>{faq.question}</strong>
          <p className="text-gray-700">{faq.answer}</p>
        </li>
      ))}
    </ul>
  </div>

  {/* Form */}
  <div className="bg-[#e3ffe0] p-6 rounded-lg" id="form" data-aos="fade-up">
    <h3 className="text-xl font-semibold mb-4 text-green-700">Ask Your Question</h3>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block font-medium">Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block font-medium">Mobile Number</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block font-medium">Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full p-2 border rounded-md" />
        </div>
      </div>
      <div>
        <label className="block font-medium">Your Question</label>
        <textarea name="question" value={formData.question} onChange={handleInputChange} required rows="4" className="w-full p-2 border rounded-md" />
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Submit
      </button>
    </form>
  </div>


</section>
        </div>  
      </div>

      <Footer />
    </>
  );
}
