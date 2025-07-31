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

  const [faqs, setFaqs] = useState([
    { question: "Is homeopathy safe for children?", answer: "Yes, homeopathy is safe and effective for all age groups." },
    { question: "How long does treatment take?", answer: "It depends on the condition and individual response." },
    {
      question: "How long does it take to see results with homeopathy?",
      answer: "The time for visible results varies depending on the individual and condition. Acute issues may improve within days, while chronic problems may take weeks to months of consistent treatment.",
    },
    {
      question: "Can I take homeopathic treatment alongside allopathic medicines?",
      answer: "Yes, homeopathy can be taken safely with conventional medicines. Our doctor will guide you on the best approach to integrate both therapies effectively.",
    },
    {
      question: "Does homeopathy treat the root cause of disease?",
      answer: "Yes, homeopathy aims to address the root cause by enhancing the body’s natural healing mechanisms rather than suppressing symptoms.",
    },
    {
      question: "Is online consultation available at Aditya Homeopathic Clinic?",
      answer: "Yes, we offer both in-clinic and online consultations for your convenience. You can request a callback or book an appointment through our website.",
    },
  ]);

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
    // Submit to backend or API here
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="bg-[#e3ffe0] ">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-6">
          {/* Sticky Sidebar Menu */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
           <nav className="p-4 space-y-2 bg-[#e3ffe0]">
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
            {/* Sidebar 2 */}
             <nav className="p-4 space-y-2">
              <h3 className="text-lg font-semibold mb-2">Main</h3>
              <Link href="/contactus/contactus" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Contact Us</Link>
              <Link href="/contactus/requestacallback" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Request a Call Back</Link>
              <Link href="/contactus/didnotfindyourquestions" className="block px-3 py-2 rounded hover:bg-green-100 hover:text-green-900 transition">Did not Find Your Questions</Link>
             
            </nav>


 


            
          </aside>

          {/* Main Content */}
          <section className="flex-1 space-y-10" data-aos="fade-left">
            {/* Form Section */}
            <div className="bg-[#e3ffe0] p-6" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Didn't Find Your Question?</h2>
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

                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Submit</button>
              </form>
            </div>

            {/* FAQs Section */}
            <div className="bg-[#e3ffe0] p-6" data-aos="fade-up">
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
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
