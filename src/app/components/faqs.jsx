"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function HomeopathyFAQs() {
  const faqs = [
    {
      question: "Is homeopathy safe for children and pregnant women?",
      answer:
        "Yes. Homeopathy is gentle and uses highly diluted substances, making it safe for children, pregnant women, and the elderly.",
    },
    {
      question: "Can I take homeopathy with allopathic medicine?",
      answer:
        "Yes, but it's important to consult your doctor or homeopath. Homeopathy often works alongside allopathy without conflict.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Acute cases may improve within hours or days. Chronic conditions may take weeks or months depending on severity and duration.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Generally, no. Some patients may experience a short-term aggravation before healing, which is part of the process.",
    },
    {
      question: "Do I have to follow food restrictions during treatment?",
      answer:
        "Only in specific cases. Avoiding strong-smelling substances (like coffee or mint) may be advised for certain remedies.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100  p-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="text-green-700">Frequently Asked </span>
        <span className="text-red-600">Questions</span>
      </h2>

      <div className="max-w-6xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left font-semibold text-lg"
            >
              <div className="flex items-center gap-2 text-red-600">
                <FaQuestionCircle />
                {faq.question}
              </div>
              {openIndex === index ? (
                <FaChevronUp className="text-green-600" />
              ) : (
                <FaChevronDown className="text-green-600" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-green-700 text-sm font-medium">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

        {/* Contact Us CTA */}
        <div className="bg-red-50 mt-8 p-6 rounded-xl text-center border border-red-200">
          <h3 className="text-xl font-semibold text-red-700 mb-2">
            Didn't find your question?
          </h3>
          <p className="text-gray-700 mb-4">
            We’re happy to help! Reach out to us for personalized answers.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
          >
            <FiMail /> Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
