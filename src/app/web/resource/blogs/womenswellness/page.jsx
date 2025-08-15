"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
// React Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

export default function WomensWellnessPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section
        className=" bg-[#e3ffe0]  py-16 px-6 text-center"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Women’s Wellness with Homeopathy
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Homeopathy offers a gentle yet effective approach to women’s health —
          addressing hormonal balance, reproductive health, emotional wellness,
          and overall vitality in all stages of life.
        </p>
      </section>

      {/* Benefits Section */}
      <section className=" py-10 bg-[#e3ffe0] px-6 " data-aos="fade-up">
        <div className="max-w-8xl bg-[#e3ffe0] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-green-700 mb-4">
              Why Choose Homeopathy for Women’s Health?
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Balances hormonal fluctuations naturally</li>
              <li>Helps in menstrual irregularities & PCOS</li>
              <li>Relieves menopausal symptoms without side effects</li>
              <li>Supports emotional and mental well-being</li>
              <li>Boosts immunity and overall vitality</li>
            </ul>
          </div>
          <div>
            <img
              src="/ladies.jpeg"
              alt="Women's Wellness"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-[#e3ffe0] px-6 " data-aos="fade-up">
        <div className="max-w-8xl bg-[#e3ffe0] mx-auto">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">
            Common Conditions Treated
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Menstrual Disorders",
              "PCOS & Hormonal Imbalance",
              "Menopause & Hot Flashes",
              "Thyroid Disorders",
              "Anemia & Fatigue",
              "Stress & Emotional Health",
            ].map((condition, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {condition}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 bg-[#e3ffe0]" data-aos="fade-up">
        <div className="max-w-8xl bg-[#e3ffe0] mx-auto">
          <h2 className="text-3xl bg-[#e3ffe0] font-semibold text-green-700 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is homeopathy safe during pregnancy?",
                a: "Yes, when prescribed by a qualified homeopath, remedies are safe and free from harmful side effects.",
              },
              {
                q: "How long does it take to see results?",
                a: "It varies depending on the condition, but many women report improvements within weeks.",
              },
              {
                q: "Can homeopathy help with infertility?",
                a: "Yes, it can address underlying hormonal or immune-related issues that may affect fertility.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b pb-4">
                <h3 className="text-lg font-medium text-gray-800">{faq.q}</h3>
                <p className="text-gray-600 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us & Reviews */}
      <section className="bg-[#e3ffe0] py-4 px-4 text-center" data-aos="fade-up">
        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6 mb-8">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
            (Icon, idx) => (
              <a
                key={idx}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 transition text-3xl"
              >
                <Icon />
              </a>
            )
          )}
        </div>

        <div className="flex justify-center items-center gap-2 mb-2 text-yellow-500 text-xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="text-gray-700 mb-1">
          4.5 out of 5 based on 1,200+ reviews
        </p>
      </section>

      {/* Comment Section with Star Rating */}
      <section className="bg-[#e3ffe0] py-8 px-6" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-center text-green-700 mb-6">
          Share Your Thoughts
        </h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              `Your comment has been submitted with a ${rating} star rating!`
            );
          }}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-lg p-6"
        >
          {/* First Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              pattern="[0-9]{10}"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Star Rating */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Rating
            </label>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <FaStar
                    key={index}
                    size={28}
                    className={
                      currentRating <= (hover || rating)
                        ? "text-yellow-500 cursor-pointer"
                        : "text-gray-300 cursor-pointer"
                    }
                    onClick={() => setRating(currentRating)}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                );
              })}
            </div>
          </div>

          {/* Comment */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Comment
            </label>
            <textarea
              placeholder="Write your comment..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-green-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-800 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}
