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

export default function ChronicDiseasesPage() {
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
      <section className="py-5 bg-[#e3ffe0] px-6 text-center max-w-screen mx-auto">
        <h1
          className="text-4xl font-bold text-green-700 mb-4"
          data-aos="fade-up"
        >
          Chronic Diseases: Long-Term Relief Through Homeopathy
        </h1>
        <p
          className="text-lg max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Chronic health problems can feel like a lifelong burden — limiting
          energy, reducing comfort, and affecting every aspect of daily life.
          While conventional medicine often focuses on symptom control, many
          people seek a deeper, more lasting solution. Homeopathy offers a
          gentle yet powerful approach that works with the body’s natural
          healing ability to bring balance, restore vitality, and improve
          long-term quality of life.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-screen mx-auto bg-[#e3ffe0] px-6 py-8 space-y-12">
        {/* Intro */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Understanding Chronic Diseases
          </h2>
          <p className="text-lg leading-relaxed">
            Chronic diseases are health conditions that persist for extended
            periods — often months or even years — and can deeply affect
            physical, emotional, and mental well-being. Conditions such as
            asthma, arthritis, thyroid disorders, and skin diseases not only
            bring discomfort but can also limit mobility, disrupt sleep, and
            reduce productivity. Conventional treatments may offer temporary
            relief, but they often focus on managing symptoms rather than
            addressing the underlying imbalance that causes the illness in the
            first place.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Homeopathy approaches chronic illness from a completely different
            perspective. Instead of suppressing symptoms, it views them as the
            body’s signals of imbalance. Remedies are chosen based on the
            unique combination of physical, mental, and emotional symptoms each
            patient experiences. This means that even if two people have the
            same medical diagnosis, their homeopathic treatment plans may be
            entirely different — because their bodies, lifestyles, and health
            histories are different. Over time, this personalized approach can
            bring about profound, lasting improvements.
          </p>
        </div>

        {/* Benefits Section */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Why Choose Homeopathy for Chronic Conditions?
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            The main strength of homeopathy lies in its ability to work with the
            body’s natural defenses rather than against them. Remedies are safe,
            non-addictive, and gentle enough for all ages — yet powerful enough
            to bring meaningful change over time. Instead of masking the
            problem, they help the body restore balance from within. This means
            fewer relapses, less dependency on ongoing medication, and a better
            overall sense of wellness.
          </p>
          <p className="text-lg leading-relaxed">
            Beyond just physical relief, homeopathy addresses mental and
            emotional health as well. Many chronic illnesses are worsened by
            stress, anxiety, or emotional strain. By supporting the whole
            person, homeopathy can bring a renewed sense of energy, better mood
            stability, and improved resilience. This holistic effect is what
            makes it especially valuable for long-term health challenges.
          </p>
        </div>

        {/* Common Conditions */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Chronic Conditions Treated with Homeopathy
          </h2>
          <p className="leading-relaxed mb-4 text-lg">
            At our clinic, we have successfully supported patients with a wide
            variety of chronic illnesses. While each case is unique, some of the
            most common conditions we treat include:
          </p>
          <p className="leading-relaxed mb-4 text-lg">
            <strong>Asthma & Respiratory Disorders:</strong> Homeopathic
            remedies can reduce the frequency and severity of breathing
            difficulties while addressing triggers such as allergies and
            infections.  
            <br />
            <strong>Arthritis & Joint Pain:</strong> Instead of relying solely
            on painkillers, homeopathy helps manage inflammation and improve
            mobility naturally.  
            <br />
            <strong>Chronic Skin Disorders:</strong> Psoriasis, eczema, and
            other recurring skin problems often respond well to remedies that
            treat both the visible symptoms and the internal cause.  
            <br />
            <strong>Digestive Issues:</strong> From IBS to chronic gastritis,
            homeopathy focuses on restoring gut health and preventing flare-ups.  
            <br />
            <strong>Thyroid Disorders:</strong> Gentle support for hypo- or
            hyperthyroidism helps regulate metabolism and improve energy levels.  
            <br />
            <strong>Migraine & Chronic Headaches:</strong> Remedies are tailored
            to individual triggers, reducing intensity and frequency over time.  
            <br />
            <strong>Hormonal Imbalances:</strong> Supports menstrual health,
            menopause transition, and other hormone-related conditions without
            synthetic hormone therapy.
          </p>
        </div>
      </section>

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
