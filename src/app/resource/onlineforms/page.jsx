"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function OnlineFormsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const forms = [
    {
      title: "Book an Appointment",
      description: "Schedule a consultation with our expert homeopathic doctors.",
      link: "/online-forms/appointment",
      icon: "📅",
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team for queries, support, or feedback.",
      link: "/online-forms/contact",
      icon: "☎️",
    },
    {
      title: "Volunteer Registration",
      description: "Join our mission by volunteering your time or skills.",
      link: "/online-forms/volunteer",
      icon: "🤝",
    },
    {
      title: "Make a Donation",
      description: "Support our philanthropic initiatives and patient care programs.",
      link: "/online-forms/donate",
      icon: "❤️",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Page Heading */}
          <section className="text-center" data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">Online Forms</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Use our online forms to easily connect, register, or support us from anywhere.
            </p>
          </section>

          {/* Form Cards */}
          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {forms.map((form, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl border border-gray-200 text-center p-6"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl mb-4">{form.icon}</div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">{form.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{form.description}</p>
                <a
                  href={form.link}
                  className="inline-block mt-auto text-white bg-green-600 px-4 py-2 rounded-full hover:bg-green-700 transition"
                >
                  Fill Form
                </a>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
