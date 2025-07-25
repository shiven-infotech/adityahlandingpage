"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function BlogPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const blogPosts = [
    {
      title: "5 Benefits of Homeopathy for Chronic Ailments",
      summary:
        "Explore how homeopathy offers long-term relief from conditions like arthritis, skin diseases, and more.",
      image: "/images/blog1.jpg",
    },
    {
      title: "Natural Remedies for Childhood Allergies",
      summary:
        "Learn how homeopathy treats allergies in children without side effects or dependency.",
      image: "/images/blog2.jpg",
    },
    {
      title: "What to Expect During Your First Homeopathy Consultation",
      summary:
        "Step-by-step overview of how your homeopathic treatment journey begins.",
      image: "/images/blog3.jpg",
    },
    {
      title: "Homeopathy vs Allopathy: A Comparative Guide",
      summary:
        "Weighing both systems of medicine in chronic conditions, and why integration works best.",
      image: "/images/blog4.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Heading */}
          <section className="text-center" data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">Our Blog</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, updates, and articles to help you stay informed and inspired.
            </p>
          </section>

          {/* Blog Cards */}
          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{post.title}</h3>
                  <p className="text-gray-700 text-sm">{post.summary}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-green-600 font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
