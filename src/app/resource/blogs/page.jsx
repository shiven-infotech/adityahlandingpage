"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const blogs = [
  {
    title: "Understanding Homeopathy: A Modern Guide",
    content:
      "Homeopathy is gaining global traction as a holistic healing practice. This article dives into how individualized treatments offer powerful solutions for chronic and acute ailments alike.",
    date: "July 25, 2025",
    author: "Dr. Anita Verma",
    image: "/blogs.jpg",
  },
  {
    title: "Top 10 Remedies for Seasonal Allergies",
    content:
      "Learn how homeopathic solutions like Allium Cepa and Sabadilla offer safe, side-effect-free relief from sneezing, runny nose, and more.",
    date: "July 20, 2025",
    author: "Dr. Rakesh Sharma",
    image: "/blogs1.jpg",
  },
  {
    title: "Why Children Respond Well to Homeopathy",
    content:
      "Homeopathy is gentle yet effective for children. Discover how it helps with colds, behavioral issues, and immunity building.",
    date: "July 15, 2025",
    author: "Dr. Meera Joshi",
    image: "/blogs2.jpg",
  },
  {
    title: "Treating PCOS Naturally Through Homeopathy",
    content:
      "Explore how homeopathy provides long-term relief for PCOS symptoms like irregular periods, acne, and hormonal imbalance.",
    date: "July 5, 2025",
    author: "Dr. Neha Kulkarni",
    image: "/blogs3.jpg",
  },
];

export default function BlogsPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="max-w-7xl  mx-auto px-4 py-10">
        {/* Title Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-green-700">Our Blogs</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Hot Topics, Latest Blogs, and Insights from Experts
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10" data-aos="zoom-in">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none shadow-sm"
          />
        </div>

        {/* Blog Entries */}
        <div className="space-y-14">
          {blogs.map((blog, index) => (
            <div key={index} className="space-y-4" data-aos="fade-up">
              <div className="relative w-full h-125 rounded-lg overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-green-800">{blog.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  {blog.date} · by {blog.author}
                </p>
                <p className="text-gray-700">{blog.content}</p>
                <div className="mt-4 flex gap-6 text-green-700 text-sm">
                  <button className="hover:underline">👍 Like</button>
                  <button className="hover:underline">🔁 Reblog</button>
                  <button className="hover:underline">🔗 Share</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Us Section */}
        <div className="pt-14 border-t mt-16 text-center" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Follow Us</h3>
          <div className="flex justify-center gap-6 text-2xl text-green-700">
            <a href="#" className="hover:text-green-900">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-900">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-900">
              <FaInstagram />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
