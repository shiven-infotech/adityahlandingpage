"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function DidNotFindYourQuestionPage() {
  const [formData, setFormData] = useState({
    name: "",
    question: "",
    date: "",
  });

  const [faqs, setFaqs] = useState([
    { question: "Is homeopathy safe for children?", answer: "Yes, homeopathy is safe and effective for all age groups." },
    { question: "How long does treatment take?", answer: "It depends on the condition and individual response." },
    { question: "How long does it take to see results with homeopathy?",
  answer: "The time for visible results varies depending on the individual and condition. Acute issues may improve within days, while chronic problems may take weeks to months of consistent treatment."},
   {  question: "Can I take homeopathic treatment alongside allopathic medicines?",
  answer: "Yes, homeopathy can be taken safely with conventional medicines. Our doctor will guide you on the best approach to integrate both therapies effectively."},
  { question: "Does homeopathy treat the root cause of disease?",
  answer: "Yes, homeopathy aims to address the root cause by enhancing the body’s natural healing mechanisms rather than suppressing symptoms."},
  {
  question: "Is online consultation available at Aditya Homeopathic Clinic?",
  answer: "Yes, we offer both in-clinic and online consultations for your convenience. You can request a callback or book an appointment through our website."
}
  ]);

  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" });

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

  const handleFAQChange = (e) => {
    setNewFAQ((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Question:", formData);
  };

  const addFAQ = (e) => {
    e.preventDefault();
    if (newFAQ.question && newFAQ.answer) {
      setFaqs([...faqs, newFAQ]);
      setNewFAQ({ question: "", answer: "" });
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <main className=" bg-[#e3ffe0] py-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto  flex flex-col md:flex-row gap-6">
          {/* Sidebar Menu */}
         <aside
  className="md:w-1/4 w-full h-fit md:sticky md:top-24  p-4 space-y-3 bg-[#e3ffe0] "
  data-aos="fade-right"
>
  <h2 className="text-xl font-bold text-green-700 mb-3">Health Packages</h2>
  <ul className="space-y-2 text-gray-800 cursor-pointer hover:text-green-700  font-medium">
    <li><a href="/reversalprogram">Reversal Program</a></li>
    <li><a href="/garbhsanskarclasses">Garbh Sanskar Classes</a></li>
    <li><a href="/rightbrainactivationclasses">Right Brain Activation</a></li>
    <li><a href="/prepregnancy">Pre Pregnancy</a></li>
    <li><a href="/postdelivery">Post Delivery</a></li>
    <li><a href="/corporatewellnessprogram">Corporate Wellness Program</a></li>
  </ul>
</aside>


          {/* Main Content */}
          <section className="flex-1  space-y-10" data-aos="fade-left">
            {/* Form */}
            <div className="bg-[#e3ffe0] p-6  " data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Didn't Find Your Question?</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-medium">Your Question</label>
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    rows="3"
                    required
                    className="w-full p-2 border rounded-md"
                  ></textarea>
                </div>
                <div>
                  <label className="block font-medium">Date</label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    readOnly
                    className="w-full p-2 bg-gray-100 border rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* FAQs Section */}
            <div className="bg-[#e3ffe0] p-6 " data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Frequently Asked Questions</h3>
              <ul className="space-y-3">
                {faqs.map((faq, index) => (
                  <li key={index} className="border-b pb-2">
                    <strong>{faq.question}</strong>
                    <p className="text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>

              {/* Add New FAQ */}
              <form onSubmit={addFAQ} className="mt-6 space-y-3" data-aos="fade-up">
                <h4 className="font-bold text-green-600">Add a New FAQ</h4>
                <input
                  type="text"
                  name="question"
                  placeholder="New Question"
                  value={newFAQ.question}
                  onChange={handleFAQChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
                <textarea
                  name="answer"
                  placeholder="Answer"
                  value={newFAQ.answer}
                  onChange={handleFAQChange}
                  rows="2"
                  className="w-full p-2 border rounded-md"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Add FAQ
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
