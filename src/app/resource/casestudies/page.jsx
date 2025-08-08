"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const BlogSection = ({ title, articles }) => {
  const randomParagraphs = [
    "Homeopathy offers a gentle yet powerful way to restore health by stimulating the body’s natural healing abilities. It’s holistic, safe, and highly personalized.",
    "Derived from natural sources, homeopathy has been practiced for over 200 years and is trusted globally for its non-toxic and non-invasive treatments.",
    "Rather than suppressing symptoms, homeopathy treats the root cause, aiming to bring lasting health and balance to mind and body.",
    "Homeopathy doesn’t just treat the disease—it treats the person. Each remedy is chosen based on the individual's overall constitution.",
  ];

  const randomText = randomParagraphs[Math.floor(Math.random() * randomParagraphs.length)];

  return (
    <section className="mb-20" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-green-900 mb-8 pb-2">{title}</h2>
      {articles.map(({ title, image, content, link }, i) => (
        <div key={i} className="mb-14 lg:flex lg:gap-8">
          {/* Left: Blog Content */}
          <div className="lg:w-4/5">
            <img
              src={image}
              alt={title}
              className="w-full h-90 object-cover "
            />
            <h3 className="text-2xl font-semibold text-green-800 mt-6 mb-2">{title}</h3>
            <p className="leading-relaxed text-[17px] mb-4">{content}</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-green-700 underline hover:text-green-900"
  >
    Read More
  </a>

  <div className="flex items-center gap-4 text-green-700 text-base">
    <button className="hover:text-green-900 transition-colors duration-200">👍 Like</button>
    <button className="hover:text-green-900 transition-colors duration-200">🔄 Reblog</button>
    <button
      className="hover:text-green-900 transition-colors duration-200"
      onClick={() => {
        const shareData = {
          title,
          text: content.slice(0, 100) + "...",
          url: link || window.location.href,
        };
        if (navigator.share) {
          navigator.share(shareData).catch(console.error);
        } else {
          navigator.clipboard.writeText(link || window.location.href);
          alert("Link copied to clipboard!");
        }
      }}
    >
      📤 Share
    </button>
  </div>
</div>

          </div>

          {/* Right Side Boxes */}
          <div className="lg:w-1/5  lg:mt-0 space-y-9">
            {/* Follow Us */}
            <div className=" p-4 ">
              <h4 className="text-lg font-semibold text-green-700 mb-3">Follow Us On</h4>
              <div className="flex flex-wrap gap-4 text-green-700 text-2xl">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              </div>
            </div>

            {/* Why Homeopathy Box */}
            <div className=" p-6 ">
              <h4 className="text-lg font-semibold text-yellow-700 mb-2">Why Homeopathy?</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{randomText}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default function BlogsPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const hotTopics = [
    {
      title: "Homeopathy in the Modern World",
      image: "/related2.jpg",
      content:
        "Homeopathy has transformed from an alternative into an integral part of modern holistic wellness. From enhancing immunity to treating chronic conditions, its reach is growing daily. People now seek balance—not just relief—and homeopathy offers just that, rooted in nature and science. The resurgence of homeopathy in modern practice shows how personalized medicine is reshaping healthcare philosophies.",
      link: "",
    },
  ];

  const latestBlogs = [
    {
      title: "Treating Skin Disorders Naturally",
      image: "/treatment.jpeg",
      content:
        "Skin disorders like eczema, psoriasis, and acne go beyond appearance—they affect confidence, comfort, and self-worth. Homeopathy doesn’t suppress the symptoms—it heals the root causes. Remedies such as Sulphur and Graphites have shown long-term relief in patients. In this blog, we explore the emerging trends of skin healing through homeopathy’s gentle and holistic approach.",
      link: "https://www.homeopathy360.com/homeopathic-treatment-skin-disorders",
    },
  ];

  const allBlogs = [
    {
      title: "Women’s Wellness with Homeopathy",
      image: "/women2.jpg",
      content:
        "Women's health concerns like PCOS, PMS, fertility issues, and menopause-related symptoms are often poorly managed by conventional medicine. Homeopathy offers balance and restoration, addressing emotional and physical symptoms without hormone therapy. This article dives into how personalized remedies can support women throughout different life stages.",
      link: "https://www.homeopathy360.com/homeopathy-for-women",
    },
    {
      title: "Chronic Diseases: Long-Term Relief Through Homeopathy",
      image: "/chronic.jpeg",
      content:
        "Unlike quick-fix treatments, homeopathy works gradually to build your immune response and inner vitality. Chronic ailments like asthma, migraines, arthritis, or even anxiety respond well to carefully selected homeopathic remedies. Learn how constitutional treatment is making life better for chronic patients globally.",
      link: "https://www.homeopathy360.com/homeopathy-chronic-illnesses",
    },
    {
      title: "Boosting Immunity the Natural Way",
      image: "/immunity.jpeg",
      content:
        "We’re in an era where boosting immunity isn’t just desirable—it’s necessary. From children to the elderly, people are seeking safe immunity-building approaches. Homeopathy helps by activating natural defense mechanisms without overstimulating. Dive into the top remedies and protocols that can help enhance your resistance against seasonal infections and stress-induced weaknesses.",
      link: "https://www.homeopathy360.com/homeopathy-immunity",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <main className="bg-[#e3ffe0] px-4 py-4">
        <div className="lg:flex lg:gap-12 max-w-screen mx-auto">
          {/* Sidebar */}
          <aside className="lg:w-64 w-full mb-10 lg:mb-0 sticky top-24 h-fit self-start z-10">
            <div className="mb-6">
              <h3 className="font-bold text-lg text-green-700 mb-2">Health Packages</h3>
              <ul className="space-y-3">
                <li><a href="/healthpackages/reversalprogram" className="hover:text-green-700">Reversal Program</a></li>
                <li><a href="/healthpackages/garbhsanskarclasses" className="hover:text-green-700">Garbh Sanskar Classes</a></li>
                <li><a href="/healthpackages/rightbrainactivationclasses" className="hover:text-green-700">Right Brain Activation Classes</a></li>
                <li><a href="/healthpackages/prepregnancy" className="hover:text-green-700">Pre Pregnancy</a></li>
                <li><a href="/healthpackages/postdelivery" className="hover:text-green-700">Post Delivery</a></li>
                <li><a href="/healthpackages/corporatewellnessprogram" className="hover:text-green-700">Corporate Wellness Program</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-700 mb-2">Main</h3>
              <ul className="space-y-3">
                <li><a href="/resource/patientstestimonials" className="hover:text-green-700">Patients Testimonials</a></li>
                <li><a href="/resource/casestudies" className="hover:text-green-700">Case Studies</a></li>
                <li><a href="/resource/blogs" className="hover:text-green-700">Blogs</a></li>
                <li><a href="/resource/onlineforms" className="hover:text-green-700">Online Forms</a></li>
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
