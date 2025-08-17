"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
// React Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaStar, FaStarHalfAlt } from "react-icons/fa";
export default function BoostingImmunityPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className=" bg-[#e3ffe0] py-16 px-6 text-center" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Boosting Immunity the Natural Way
        </h1>
        <p className="text-lg  max-w-3xl mx-auto">
          Discover how homeopathy strengthens your body’s natural defense system
          and keeps you healthier, naturally and safely.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-screen mx-auto bg-[#e3ffe0] py-12 px-6 grid md:grid-cols-2 gap-10 items-center" data-aos="fade-right">
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">Why Immunity Matters</h2>
          <p className="text-lg mb-4">
            Your immune system is your body’s primary defense against infections and diseases.
            A strong immune system not only protects you from seasonal illnesses but also
            enhances your energy, mood, and overall well-being.
          </p>
          <p className="text-lg">
            Homeopathy focuses on balancing and stimulating the body’s innate healing abilities,
            making it a natural choice for boosting immunity without side effects.
          </p>
        </div>
        <div>
          <img
            src="/im.jpeg"
            alt="Boost Immunity Naturally"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#e3ffe0] py-12 px-6" data-aos="fade-up">
        <div className="max-w-screen mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">Benefits of Homeopathy for Immunity</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Natural & Safe</h3>
              <p className="">
                Homeopathic remedies are derived from natural sources, making them gentle yet effective.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">No Side Effects</h3>
              <p className="">
                Boost your immunity without worrying about harmful chemical side effects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Personalized Care</h3>
              <p className="">
                Treatments are tailored to your specific health profile and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Homeopathy Helps */}
      <section className="max-w-8xl mx-auto bg-[#e3ffe0] py-12 px-8 grid md:grid-cols-2 gap-10 items-center" data-aos="fade-left">
        <div>
          <img
            src="/im1.jpeg"
            alt="Natural Healing"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">How Homeopathy Boosts Immunity</h2>
          <ul className="list-disc text-lg list-inside  space-y-2">
            <li>Stimulates the body’s natural defense mechanism</li>
            <li>Addresses underlying causes of weak immunity</li>
            <li>Improves energy and resilience against illnesses</li>
            <li>Supports long-term wellness naturally</li>
          </ul>
        </div>
      </section>

     {/* Follow Us & Reviews */}
           <section
             className="bg-[#e3ffe0] py-4 px-4 text-center"
             data-aos="fade-up"
           >
             {/* Follow Us */}
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
     
             {/* Reviews */}
             {/* <h4 className="text-xl font-semibold mb-3">What Our Patients Say</h4> */}
             <div className="flex justify-center items-center gap-2 mb-2 text-yellow-500 text-xl">
               <FaStar />
               <FaStar />
               <FaStar />
               <FaStar />
               <FaStarHalfAlt />
             </div>
             <p className="text-gray-700 mb-1">4.5 out of 5 based on 1,200+ reviews</p>
             {/* <a
               href="/reviews"
               className="text-green-700 font-medium hover:underline"
             >
               Read Reviews →
             </a> */}
           </section>

           {/* Comment Section */}
<section
  className="bg-[#e3ffe0] py-8 px-6"
  data-aos="fade-up"
>
  <h3 className="text-2xl font-bold text-center text-green-700 mb-6">
    Leave a Comment
  </h3>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      alert("Your comment has been submitted!");
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
