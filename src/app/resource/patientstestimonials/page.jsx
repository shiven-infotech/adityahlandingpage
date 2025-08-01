"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function PatientTestimonialsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      name: "Sita Devi",
      feedback:
        "I was suffering from chronic headaches for years. After consulting Dr. Shital Khodke, I found complete relief. Thank you for your care and dedication!",
      rating: 5,
    },
    {
      name: "Rahul Sharma",
      feedback:
        "The treatment I received from Dr. Shital's team was life-changing. Not only did they listen to me patiently, but they also treated me with such respect.",
      rating: 4,
    },
    {
      name: "Fatima Begum",
      feedback:
        "Free camps conducted in our village gave my entire family access to professional care. We’re grateful for this initiative and support!",
      rating: 5,
    },
    {
      name: "Ramesh Pawar",
      feedback:
        "My son was cured of skin allergies with personalized care. The homeopathic approach was gentle and effective. Truly thankful!",
      rating: 4,
    },
  ];

  const [formData, setFormData] = useState({ name: "", feedback: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Testimonial:", formData);
    setSubmitted(true);
    setFormData({ name: "", feedback: "", rating: 5 });
  };

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] py-12 px-4 text-gray-800">
        <div className="flex flex-col lg:flex-row max-w-screen mx-auto gap-12">
          {/* Sidebars */}
          <div className="lg:w-64 w-full flex flex-col gap-8 sticky top-24 self-start z-10">
            <div className="   p-4 ">
              <h3 className="font-bold text-green-700 mb-2">Health Packages</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="/healthpackages/reversalprogram" className="hover:underline">Reversal Program</a></li>
                <li><a href="#" className="hover:underline">Full Body Scan</a></li>
                <li><a href="#" className="hover:underline">Homeopathy Combo</a></li>
                <li><a href="#" className="hover:underline">Wellness Plan</a></li>
              </ul>
            </div>

            <div className=" p-4 ">
              <h3 className="font-bold text-green-700 mb-2">Main</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="/resource/patientstestimonials" className="hover:underline">Patients Testimonials</a></li>
                <li><a href="/resource/casestudies" className="hover:underline">Case Studies</a></li>
                <li><a href="/resource/blogs" className="hover:underline">Blogs</a></li>
                <li><a href="/resource/onlineforms" className="hover:underline">Online Forms</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-12">
            {/* Title */}
            <section className="text-center" data-aos="fade-down">
              <h1 className="text-4xl md:text-5xl font-bold text-green-700">
                Patient Testimonials
              </h1>
              <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                Real stories from real people who found healing through our care.
              </p>
            </section>

            {/* Testimonials Grid */}
            <section className="grid gap-6 sm:grid-cols-2">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className=" p-6 border border-green-100"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < item.rating ? "text-yellow-400" : "text-gray-300"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="italic text-gray-700">"{item.feedback}"</p>
                  <p className="mt-4 text-green-700 font-bold">– {item.name}</p>
                </div>
              ))}
            </section>

            {/* Submit Form */}
            <section className="  p-8" data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-green-700 text-center">
                Submit Your Testimonial
              </h2>
              <p className="text-center text-gray-600 mt-2">
                We’d love to hear how homeopathy helped you.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-xl mx-auto">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Your Feedback</label>
                  <textarea
                    name="feedback"
                    rows={4}
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Share your experience"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Your Rating</label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    {[5, 4, 3, 2, 1].map((r) => (
                      <option key={r} value={r}>
                        {r} Star{r > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
                >
                  Submit Testimonial
                </button>

                {submitted && (
                  <p className="text-green-700 font-medium mt-4 text-center">
                    Thank you! Your testimonial has been submitted.
                  </p>
                )}
              </form>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
