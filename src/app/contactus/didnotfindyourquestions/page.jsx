"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";

export default function DidNotFindYourQuestionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState("");

  const faqs = [
    "What is homeopathy and how does it work?",
    "Is homeopathy safe for children and elderly?",
    "How long does a treatment take to show results?",
    "Can I take homeopathic and allopathic medicines together?",
    "What conditions can be treated with homeopathy?",
    "Are there any side effects of homeopathy?",
    "How do I book an online consultation?",
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Question:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", question: "" });
    }, 3000);
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Page Heading */}
          <div
            className="text-center space-y-2"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-green-700">
              Didn't Find Your Question?
            </h2>
            <p className="text-gray-600">
              Search below or submit your question directly to our experts.
            </p>
          </div>

          {/* Search Input */}
          <div className="max-w-md mx-auto" data-aos="fade-in">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search common questions..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Related Questions List */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              Related Questions:
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <li key={index}>{faq}</li>
                ))
              ) : (
                <li>No related questions found.</li>
              )}
            </ul>
          </div>

          {/* Continue to FAQs Button */}
          <div className="text-center" data-aos="zoom-in">
            <Link
              href="/faqs"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Continue to FAQs
            </Link>
          </div>

          {/* Submit Custom Question Form */}
          <div
            className="bg-white shadow-2xl rounded-xl p-8 max-w-2xl mx-auto space-y-6"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-center text-green-700">
              Ask Your Own Question
            </h3>

            {submitted && (
              <div
                className="text-green-700 font-medium text-center animate-bounce"
                data-aos="fade-in"
              >
                ✅ Question submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block font-medium">Your Question</label>
                <textarea
                  name="question"
                  required
                  rows="4"
                  value={formData.question}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Type your question here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
              >
                Submit Question
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
