"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {useDispatch, useSelector} from "react-redux";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// React Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { CreateSharedThoughts } from "../../../../../Redux/Api/LandingPageFormsApi";

export default function HomeopathyModernWorld() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    comment: "",
    rating: 5,
    mobileNo: "",
    reference:"blogs"
  });

    const dispatch = useDispatch()

  const handleChange = (e) =>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async(e) => {

    e.preventDefault();
    if (formData.mobileNo.length !== 10) {
          toast.error("Mobile number should be 10 digits");
          return;
        }
    
        console.log("Form submitted:", formData);
        await dispatch(CreateSharedThoughts(formData))
        setFormData({
        firstname: "",
        lastname: "",
        mobileNo: "",
        city: "",
        query: "",
        comment:"",
        rating: 5,
        reference:"blogs"
        })
        toast.success("Form submitted successfully");

      }
    



  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="py-5 bg-[#e3ffe0] px-6 text-center" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Homeopathy in the Modern World
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Discover how centuries-old homeopathic practices blend seamlessly with
          modern healthcare innovations to offer holistic, patient-focused
          treatments.
        </p>
      </section>

      {/* Main Content */}
      <section
        className="max-w-screen bg-[#e3ffe0] mx-auto py-8 px-6 text-gray-800 leading-relaxed"
        data-aos="fade-up"
      >
        {/* --- Your paragraphs remain unchanged --- */}
        <h2 className="text-3xl text-green-700 font-semibold mb-4">
          The Relevance of Homeopathy Today
        </h2>
        <p className="mb-8 text-lg">
          In today’s fast-paced, technology-driven world, health challenges are
          evolving. Homeopathy continues to play a significant role by focusing
          on individualized care, natural remedies, and long-term wellness. It
          complements conventional medicine, often reducing side effects and
          improving quality of life. Homeopathy remains a subject of both
          interest and debate in modern healthcare, yet its relevance today is
          tied to a growing demand for holistic, individualized, and minimally
          invasive treatment options. In an era where chronic illnesses,
          lifestyle disorders, and stress-related health problems are on the
          rise, many patients are seeking alternatives that address the root
          cause rather than just suppressing symptoms. Homeopathy’s guiding
          principle of “like cures like” and its focus on stimulating the
          body’s own healing mechanisms resonate with individuals looking for a
          more natural approach to wellness. Unlike many conventional
          treatments, homeopathy is generally free from toxic side effects,
          making it appealing for long-term use and for vulnerable groups such
          as children, the elderly, and pregnant women. Additionally, its
          emphasis on understanding the patient as a whole—considering physical
          symptoms alongside emotional and mental well-being—aligns well with
          the modern integrative healthcare movement, where collaboration
          between conventional and alternative medicine is increasingly valued.
          While scientific debate continues about the mechanisms behind
          homeopathy’s effects, its continued popularity in countries like
          India, Germany, and the UK highlights that for millions, it offers
          not only perceived symptom relief but also a sense of personalized
          care, empowerment, and connection to a more natural healing
          philosophy. In today’s healthcare landscape, where patient-centered
          care and preventive medicine are gaining ground, homeopathy continues
          to hold a unique place as a complementary therapy that bridges
          tradition and contemporary wellness needs.
        </p>

        <h2 className="text-3xl text-green-700 font-semibold mb-4">
          Integrating Tradition with Technology
        </h2>
        <p className="mb-8 text-lg">
          Modern homeopathy embraces technology through telemedicine, digital
          case analysis, and global access to remedies. Patients can now consult
          homeopaths online, receive guidance, and track their progress from
          anywhere in the world. Integrating tradition with technology
          represents a powerful way to preserve the wisdom of the past while
          enhancing its effectiveness for the needs of the present and future.
          In healthcare, education, agriculture, and countless other fields,
          traditional knowledge has stood the test of time, offering tried-and-true
          methods rooted in centuries of experience. However, by combining these
          approaches with modern technological innovations—such as digital
          diagnostics, data analytics, telemedicine, artificial intelligence,
          and advanced manufacturing—these age-old practices can become more
          precise, accessible, and scalable.
        </p>

        <h2 className="text-3xl text-green-700 font-semibold mb-4">
          Global Acceptance & Research
        </h2>
        <p className="mb-8 text-lg">
          With increasing clinical studies and international recognition,
          homeopathy is now part of healthcare systems in several countries. Its
          adaptability and minimal side effects make it a preferred choice for
          people seeking safe, natural healing options.
        </p>

        <h2 className="text-3xl text-green-700 font-semibold mb-4">
          The Future Ahead
        </h2>
        <p className="mb-8 text-lg">
          The future of homeopathy lies in a balanced approach — respecting its
          traditional roots while embracing evidence-based research and modern
          innovations. As more people seek holistic, personalized healthcare,
          homeopathy is poised to thrive in the modern era.
        </p>
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
              name="firstname"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>

          {/* Mobile Number */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNo"
              placeholder="Enter your mobile number"
              pattern="[0-9]{10}"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              value={formData.mobileNo}
              onChange={handleChange}
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
                      currentRating <= (hover || formData.rating)
                        ? "text-yellow-500 cursor-pointer"
                        : "text-gray-300 cursor-pointer"
                    }
                    onClick={() =>
                      handleChange({
                        target: { name: "rating", value: currentRating },
                      })
                    }
                    // name="rating"
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                    value={currentRating}

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
              value={formData.comment}
              name="comment"
              onChange={handleChange}
              
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-green-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-800 transition duration-300"
              onClick={handleSubmit}
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
