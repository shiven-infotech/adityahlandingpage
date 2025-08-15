"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
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

export default function TreatingSkinDisordersPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main
        className="max-w-screen bg-[#e3ffe0] mx-auto px-4 py-10"
        data-aos="fade-up"
      >
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Treating Skin Disorders with Homeopathy
        </h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Skin disorders such as eczema, psoriasis, acne, and fungal infections
          can affect not only a person’s physical health but also their
          confidence and emotional well-being. These conditions often bring
          discomfort, itching, inflammation, or visible marks, which may impact
          day-to-day life. Homeopathy offers a holistic and highly individualized
          approach to managing these problems — one that focuses on healing the
          body from within rather than simply suppressing the symptoms.
        </p>

        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Why Choose Homeopathy for Skin Disorders?
        </h2>
        <p className="mb-8 text-lg leading-relaxed">
          Homeopathy stands out as a gentle, natural, and non-invasive form of
          treatment. Unlike certain conventional medications that may cause side
          effects such as skin thinning or dependency, homeopathic remedies are
          prepared from natural sources in highly diluted forms, making them safe
          for all ages. Treatment is always customized, taking into account your
          overall health, emotional state, lifestyle, and medical history.
        </p>

        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Commonly Treated Skin Conditions
        </h2>
        <p className="mb-8 text-lg leading-relaxed">
          Our clinic has successfully treated a wide range of skin conditions
          through personalized homeopathic care. These include eczema, psoriasis,
          acne, stubborn fungal infections, and urticaria (hives). Every case is
          unique, and our approach ensures that each patient receives a remedy
          tailored specifically to their symptoms and body type.
        </p>

        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          The Homeopathic Process
        </h2>
        <p className="mb-8 text-lg leading-relaxed">
          Your journey to healthier skin begins with a detailed consultation. Our
          experienced homeopath will take the time to understand your concerns in
          depth. Based on this understanding, we prescribe a gentle yet powerful
          homeopathic remedy aimed at stimulating your body’s own healing
          mechanisms.
        </p>
      </main>

      {/* Follow Us & Reviews */}
      <section
        className="bg-[#e3ffe0] py-4 px-4 text-center"
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-900 transition text-3xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-900 transition text-3xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-900 transition text-3xl"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-900 transition text-3xl"
          >
            <FaYoutube />
          </a>
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
