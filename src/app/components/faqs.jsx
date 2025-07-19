"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { useRef, useEffect } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "Is homeopathy safe for children and pregnant women?",
    "Can I take homeopathy with allopathic medicine?",
    "How long does it take to see results?",
    "Are there any side effects?",
    "Do I have to follow food restrictions during treatment?",
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);   

  return (
    <section className=" py-12 bg-[#e3ffe0] px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div
            ref={sectionRef}
            className={`flex flex-wrap justify-center gap-6 transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <div className="relative w-full md:w-[]">
              <Image
                src="/doctors elements.png"
                alt="Healthcare Icons"
                width={500}
                height={500}
                className="rounded-lg  hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>

          {/* Right FAQ Panel */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-md cursor-pointer transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center text-green-800 font-semibold text-lg">
                <span className="flex items-center gap-2">
                  <FaQuestionCircle />
                  {faq}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-green-600" />
                ) : (
                  <FaChevronDown className="text-green-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">
                  This is a placeholder answer for "{faq}". You can customize it as needed.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA Box */}
      <div className="mt-14 text-center bg-white border border-green-300 py-8 px-6 rounded-xl max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Didn't find your question?</h3>
        <p className="text-gray-600 mb-4">We’re happy to help! Reach out to us for personalized answers.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
          📩 Contact Us
        </button>
      </div>
    </section>
  );
}
