"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const BlogSection = ({ title, articles }) => (
  <section className="mb-20" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-green-900 mb-8  pb-2">{title}</h2>
    {articles.map(({ title, image, content, link }, i) => (
      <div key={i} className="mb-14">
        <img src={image} alt={title} className="w-full h-72 object-cover rounded-xl shadow" />
        <h3 className="text-2xl font-semibold text-green-800 mt-6 mb-2">{title}</h3>
        <p className=" leading-relaxed text-[17px] mb-4">{content}</p>
       
        <div className="flex gap-6 mt-4 text-green-700 text-xl">
          <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
          <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a>
        </div>
      </div>
    ))}
  </section>
);

export default function BlogsPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const hotTopics = [
    {
      title: "Homeopathy in the Modern World",
      image: "https://source.unsplash.com/featured/?homeopathy,nature",
      content:
        "Homeopathy has transformed from an alternative into an integral part of modern holistic wellness. From enhancing immunity to treating chronic conditions, its reach is growing daily. People now seek balance—not just relief—and homeopathy offers just that, rooted in nature and science. The resurgence of homeopathy in modern practice shows how personalized medicine is reshaping healthcare philosophies.",
      link: "https://www.homeopathy360.com/homeopathy-in-modern-world",
    },
  ];

  const latestBlogs = [
    {
      title: "Treating Skin Disorders Naturally",
      image: "https://source.unsplash.com/featured/?eczema,skin,herbal",
      content:
        "Skin disorders like eczema, psoriasis, and acne go beyond appearance—they affect confidence, comfort, and self-worth. Homeopathy doesn’t suppress the symptoms—it heals the root causes. Remedies such as Sulphur and Graphites have shown long-term relief in patients. In this blog, we explore the emerging trends of skin healing through homeopathy’s gentle and holistic approach.",
      link: "https://www.homeopathy360.com/homeopathic-treatment-skin-disorders",
    },
  ];

  const allBlogs = [
    {
      title: "Women’s Wellness with Homeopathy",
      image: "https://source.unsplash.com/featured/?women,health",
      content:
        "Women's health concerns like PCOS, PMS, fertility issues, and menopause-related symptoms are often poorly managed by conventional medicine. Homeopathy offers balance and restoration, addressing emotional and physical symptoms without hormone therapy. This article dives into how personalized remedies can support women throughout different life stages.",
      link: "https://www.homeopathy360.com/homeopathy-for-women",
    },
    {
      title: "Chronic Diseases: Long-Term Relief Through Homeopathy",
      image: "https://source.unsplash.com/featured/?chronic,illness,natural",
      content:
        "Unlike quick-fix treatments, homeopathy works gradually to build your immune response and inner vitality. Chronic ailments like asthma, migraines, arthritis, or even anxiety respond well to carefully selected homeopathic remedies. Learn how constitutional treatment is making life better for chronic patients globally.",
      link: "https://www.homeopathy360.com/homeopathy-chronic-illnesses",
    },
    {
      title: "Boosting Immunity the Natural Way",
      image: "https://source.unsplash.com/featured/?immunity,homeopathy",
      content:
        "We’re in an era where boosting immunity isn’t just desirable—it’s necessary. From children to the elderly, people are seeking safe immunity-building approaches. Homeopathy helps by activating natural defense mechanisms without overstimulating. Dive into the top remedies and protocols that can help enhance your resistance against seasonal infections and stress-induced weaknesses.",
      link: "https://www.homeopathy360.com/homeopathy-immunity",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <main className="bg-[#e3ffe0] px-4 sm:px-6 py-12">
        <div className="lg:flex lg:gap-12 max-w-screen mx-auto">
          {/* Sidebar */}
          <aside className="lg:w-64 w-full mb-10 lg:mb-0 sticky top-24 h-fit self-start z-10">
            <div className="mb-6 p-4 ">
              <h3 className="font-bold text-green-700 mb-2">Health Packages</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="/healthpackages/reversalprogram" className="hover:underline">Reversal Program</a></li>
                <li><a href="#" className="hover:underline">Full Body Scan</a></li>
                <li><a href="#" className="hover:underline">Homeopathy Combo</a></li>
                <li><a href="#" className="hover:underline">Wellness Plan</a></li>
              </ul>
            </div>
            <div className="p-4 ">
              <h3 className="font-bold text-green-700 mb-2">Main</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="/resource/patientstestimonials" className="hover:underline">Patients Testimonials</a></li>
                <li><a href="/resource/casestudies" className="hover:underline">Case Studies</a></li>
                <li><a href="/resource/blogs" className="hover:underline">Blogs</a></li>
                <li><a href="/resource/onlineforms" className="hover:underline">Online Forms</a></li>
              </ul>
            </div>
          </aside>

          {/* Blog Content */}
          <div className="flex-1">
            <BlogSection title="🔥 Hot Topics" articles={hotTopics} />
            <BlogSection title="🆕 Latest Blogs" articles={latestBlogs} />
            <BlogSection title="📖 All Blog Posts" articles={allBlogs} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
