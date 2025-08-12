"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const sections = [
  { id: "reversalprogram", label: "Reversal Program" },
  { id: "garbhsanskarclasses", label: "Garbh Sanskar classes" },
  { id: "rightbrainactivationclasses", label: "Right Brain Activation Classes" },
  { id: "prepregnancy", label: "Pre Pregnancy" },
  { id: "postdelivery", label: "Post Delivery" },
  { id: "corporatewellnessprogram", label: "Corporate Wellness Program" },
];

 const BlogSection = ({ articles }) => {
  return (
    <section className="mb-20" data-aos="fade-up">
      {articles.map(({ title, image, content, link }, i) => (
        <div key={i} className="mb-14">
          {/* Title above image */}
          <h3 className="text-2xl font-semibold text-green-800 mb-4">{title}</h3>

          {/* Image below title */}
          <img
            src={image}
            alt={title || "Blog image"}
            className="w-full h-[360px] object-cover rounded-md"
          />

          <p className="leading-relaxed text-[17px] mt-6 mb-4">{content}</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 border-t pt-4">
            <a
              href={link}
              rel="noopener noreferrer"
              className="inline-block text-green-700 underline hover:text-green-900"
            >
              Read More
            </a>

            <div className="flex items-center gap-3 text-green-700 text-xl">
              <span className="text-sm font-semibold">Follow Us:</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>

            <div className="flex items-center gap-4 text-green-700 text-base">
              <button className="hover:text-green-900">👍 Like</button>
              <button className="hover:text-green-900">🔄 Reblog</button>
              <button
                className="hover:text-green-900"
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
      ))}
    </section>
  );
};


export default function BlogsPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const hotTopicsText =
    "Discover trending discussions and breakthrough ideas in the world of homeopathy. Our hot topics section brings you the latest insights, emerging therapies, and patient success stories that are shaping the future of natural healing.";

  const latestBlogsText =
    "Stay updated with our freshest articles, written by homeopathy experts and wellness professionals. From practical health tips to in-depth case studies, these blogs are designed to keep you informed and inspired.";

  const hotTopics = [
    {
      title: "Homeopathy in the Modern World",
      image: "/related2.jpg",
      content:
        "Homeopathy has transformed from an alternative into an integral part of modern holistic wellness...",
      link: "/resource/blogs/homeopathymodernworld",
    },
  ];

  const latestBlogs = [
    {
      title: "Treating Skin Disorders Naturally",
      image: "/treatment.jpeg",
      content:
        "Skin disorders like eczema, psoriasis, and acne go beyond appearance—they affect confidence...",
      link: "/resource/blogs/treatingskindisorders",
    },
  ];

  const allBlogs = [
    {
      title: "Women’s Wellness with Homeopathy",
      image: "/women2.jpg",
      content:
        "Women's health concerns like PCOS, PMS, fertility issues, and menopause-related symptoms...",
      link: "/resource/blogs/womenswellness",
    },
    {
      title: "Chronic Diseases: Long-Term Relief Through Homeopathy",
      image: "/chronic.jpeg",
      content:
        "Unlike quick-fix treatments, homeopathy works gradually to build your immune response...",
      link: "/resource/blogs/chronicdiseases",
    },
    {
      title: "Boosting Immunity the Natural Way",
      image: "/immunity.jpeg",
      content: "We’re in an era where boosting immunity isn’t just desirable—it’s necessary...",
      link: "/resource/blogs/boostingimmunity",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <main className="bg-[#e3ffe0] px-4 py-4">
        <div className="lg:grid lg:grid-cols-[250px_1fr_250px] lg:gap-12 max-w-screen mx-auto">
          {/* Left Sidebar */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
            <nav className="space-y-1">
              <h3 className="text-xl text-green-700 px-2 font-semibold">Health Packages</h3>
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={`${sec.id}`}
                  className="flex items-center hover:text-green-700 transition"
                >
                  <span className="text-lg p-1">{sec.icon}</span>
                  {sec.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar 2 */}
            <nav className="p-1 space-y-1">
              <h3 className="text-xl text-green-700 font-semibold">Main</h3>

             <Link href="/resource/patientstestimonials" className="block hover:text-green-700 transition">
                Patients Testimonials
              </Link>
              <Link
                href="/resource/casestudies"
                className="block hover:text-green-700 transition"
              >
                Case Studies
              </Link>
              <Link
                href="/resource/blogs"
                className="block hover:text-green-700 transition"
              >
                Blogs
              </Link>
              <Link href="/aboutus/visionandmission" className="block hover:text-green-700 transition">
                Online Forms
              </Link>
            </nav>
          </aside>

          {/* Main Blog Content */}
          <div>
            <BlogSection articles={hotTopics} />
            <BlogSection articles={latestBlogs} />
            <BlogSection articles={allBlogs} />
          </div>

          {/* Right Sidebar */}
           <aside className="space-y-8 sticky top-24 h-fit self-start z-10">
  {/* Hot Topics */}
  <div className="p-1">
    <h3 className="font-bold text-lg text-green-700 mb-2">Hot Topics</h3>
   
    <ul className=" text-sm list-disc space-y-1 ">
      <li>
        <Link href="/resource/blogs/homeopathymodernworld" className="hover:underline hover:text-green-900">
          Homeopathy in the Modern World
        </Link>
      </li>
      <li>
        <Link href="/resource/blogs/mentalhealth" className="hover:underline hover:text-green-900">
          Role of Homeopathy in Mental Wellness
        </Link>
      </li>
      <li>
        <Link href="/resource/blogs/childhealth" className="hover:underline hover:text-green-900">
          Safe Remedies for Children
        </Link>
      </li>
      <li>
        <Link href="/resource/blogs/seasonalallergies" className="hover:underline hover:text-green-900">
          Natural Relief for Seasonal Allergies
        </Link>
      </li>
    </ul>
  </div>

  {/* Latest Blogs */}
  <div className="p-1">
    <h3 className="font-bold text-lg text-green-700 mb-2">Latest Blogs</h3>
   
    <ul className=" list-disc text-sm space-y-1 ">
      <li>
        <Link href="/resource/blogs/treatingskindisorders" className="hover:underline hover:text-green-900">
          Treating Skin Disorders Naturally
        </Link>
      </li>
      <li>
        <Link href="/resource/blogs/boostingimmunity" className="hover:underline hover:text-green-900">
          Boosting Immunity the Natural Way
        </Link>
      </li>
      <li>
        <Link href="/resource/blogs/chronicdiseases" className="hover:underline hover:text-green-900">
          Chronic Diseases: Long-Term Relief
        </Link>
      </li>
      <li>
        <Link href="/resource/blogs/womenswellness" className="hover:underline hover:text-green-900">
          Women’s Wellness with Homeopathy
        </Link>
      </li>
    </ul>
  </div>
  
  {/* Complete List of Blogs */}
  <div className="p-1">
    <h3 className="font-bold text-lg text-green-700 mb-2">Complete List of Blogs</h3>
    <ul className="list-disc text-sm space-y-1">
      <li>
        <Link href="/resource/blogs/homeopathymodernworld" className="hover:underline hover:text-green-900">
          Homeopathy in the Modern World
        </Link>
      </li>
      <li>
        <Link href="/resource/blogs/treatingskindisorders" className="hover:underline hover:text-green-900">
          Treating Skin Disorders Naturally
        </Link>
      </li>
      <li>
        <Link href="/resource/blogs/boostingimmunity" className="hover:underline hover:text-green-900">
          Boosting Immunity the Natural Way
        </Link>
      </li>
      <li>
        <Link href="/resource/blogs/chronicdiseases" className="hover:underline hover:text-green-900">
          Chronic Diseases: Long-Term Relief
        </Link>
      </li>
      <li>
        <Link href="/resource/blogs/womenswellness" className="hover:underline hover:text-green-900">
          Women’s Wellness with Homeopathy
        </Link>
      </li>
    </ul>
  </div>
</aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
