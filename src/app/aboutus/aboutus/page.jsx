"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  FaUserMd,
  FaStethoscope,
  FaHeartbeat,
  FaSyringe,
} from "react-icons/fa";

export default function aboutus() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const sections = [
    { id: "reversalprogram", label: " Reversal Program",  },
    { id: "garbhsanskarclasses", label: "Garbh Sanskar classes" },
    { id: "rightbrainactivationclasses", label: "Right Brain Activation Classes" },
    { id: "prepregnancy", label: "Pre Pregnancy" },
    { id: "Postdelivery", label: "Post Delivery", },
    { id: "corporatewellnessprogram", label: "Corporate Wellness Program", },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <div className="bg-[#e3ffe0] px-4 py-4">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-6">
          
          {/* Sticky Sidebar Container */}
          <aside className="hidden md:flex flex-col gap-6 w-64 h-fit sticky top-24">
            {/* Sidebar 1 */}
            <nav className="   space-y-1">
              <h3 className="text-xl text-green-700 px-2 font-semibold ">Health Packages</h3>
              {sections.map((sec) => (
                <Link
                  key={sec.id}
                  href={`${sec.id}`}
                  className="flex items-center  hover:text-green-700 transition"
                >
                  <span className="text-lg p-1">{sec.icon}</span>
                  {sec.label}
                </Link>
              ))}
            </nav>

            {/* Sidebar 2 */}
            <nav className=" p-1  space-y-1">

              <h3 className="text-xl text-green-700 font-semibold ">Main</h3>

              <Link
                href="/aboutus/aboutus"
                className="block   hover:text-green-700 transition"
              >
                About Us
              </Link>
              <Link
                href="/aboutus/fundamentalsofhomeopathy"
                className="block    hover:text-green-700 transition"
              >
                Fundamentals of Homeopathy
              </Link>
              <Link
                href="/aboutus/myths&factsabouthomeopathy"
                className="block hover:text-green-700 transition"
              >
                Myths & Facts About Homeopathy
              </Link>

               <Link
                href="/aboutus/visionandmission"
                className="block hover:text-green-700 transition"
              >
                Vision and Mission
              </Link>

                <Link
                href="/aboutus/ourteam"
                className="block  hover:text-green-900 transition"
              >
                Our Team
              </Link>


            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-12">
            {/* Image */}
            <div className="w-full">
              <img
                src="/aboutus.jpeg"
                alt="Aditya Homeopathic Clinic"
                className="w-full h-[450px] object-cover rounded-lg"
              />
            </div>

            {/* All Sections */}
            <main className="space-y-24">
              {/* About Us */}
              <section id="aboutus" className="pt-4 scroll-mt-32" data-aos="fade-up">
                <h1 className="text-4xl font-bold text-green-700 mb-4">About Us</h1>
                <p className="text-xl leading-relaxed">
                  Welcome to <span className="font-semibold">Aditya Homoeopathic Clinic</span>,
                 we are dedicated to offering compassionate, holistic, and personalized healthcare that goes beyond treating symptoms to addressing the root causes of illness. Founded with a vision to make classical homeopathy accessible and effective for all, our clinic has grown into a trusted center of healing known for its commitment to excellence, integrity, and patient-centered care. We believe that each individual is unique, and so is their journey toward wellness. That’s why our approach emphasizes a deep understanding of every patient’s mental, emotional, and physical constitution before selecting a precise, gentle, and non-toxic remedy tailored specifically to them. With years of experience, our founder Dr. Shital V. Khodke and her team of certified homeopaths have successfully treated thousands of patients suffering from chronic conditions like skin diseases, allergies, respiratory issues, hormonal imbalances, joint disorders, and stress-related ailments. At Aditya Homeopathic Clinic, modern diagnostic support is seamlessly blended with the timeless principles of classical homeopathy, ensuring treatments are both effective and safe. We are also proud to offer both in-person and online consultations, making quality care accessible no matter where our patients are located. Our clinic is not just a place of treatment, but a center of trust, understanding, and hope—where every patient is heard, respected, and supported throughout their healing journey. At Aditya Homeopathic Clinic, we don’t just treat disease—we restore balance, vitality, and well-being for a healthier tomorrow.

                </p>
              </section>

            

              {/* Why Choose Us */}
              <section id="whychooseus" className="pt-4 scroll-mt-32" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-green-700 mb-4">Why Choose Us</h2>
                <p className="text-xl leading-relaxed">
                  Choosing <span className="font-semibold">Aditya Homoeopathic Clinic</span>,

                 means choosing a path of healing that is deeply rooted in compassion, precision, and a genuine commitment to your well-being. What sets us apart is our unwavering focus on individualized care—no two patients are alike, and neither are their treatments. At our clinic, we don’t just look at the disease; we look at you as a whole person, taking into account your physical symptoms, emotional patterns, lifestyle, and medical history. This comprehensive evaluation allows us to select a highly specific remedy that stimulates your body’s own healing ability, promoting long-term recovery rather than just temporary relief. Our approach is based on the timeless principles of classical homeopathy, blended with the latest diagnostic tools and medical insights to ensure safe and effective treatment. Led by Dr. Shital V. Khodke, our experienced team has successfully treated a wide range of acute and chronic ailments—including skin conditions, hormonal imbalances, respiratory disorders, digestive issues, migraines, anxiety, arthritis, and more—helping patients achieve lasting improvements without the side effects commonly associated with conventional medicine. Our clinic provides a warm, supportive, and confidential environment where patients feel heard, understood, and genuinely cared for. Whether you're seeking alternatives to allopathic drugs, dealing with a stubborn chronic issue, or simply aiming to improve your quality of life, Aditya Homeopathic Clinic stands as a trusted partner in your healing journey. We also offer flexible online consultations, ensuring that distance is never a barrier to your health. With a legacy built on trust, results, and empathy, we invite you to experience the difference of truly personalized, holistic care.
                </p>
              </section>

              {/* Feedback */}
              <section id="feeback" className="pt-4 scroll-mt-32" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Feedback</h2>
                <p className="text-xl leading-relaxed">
                  At <span className="font-semibold">Aditya Homoeopathic Clinic</span>,
                  our greatest reward is the trust and gratitude of the thousands of patients whose lives have been transformed through our holistic approach. Over the years, we have consistently received heartfelt testimonials from individuals and families who found hope and healing after struggling with long-standing health conditions. Many of our patients describe their experience as life-changing—not only because their symptoms improved, but because they felt genuinely heard, understood, and supported throughout their journey. From chronic skin ailments and respiratory disorders to hormonal imbalances and stress-related issues, our patients have shared stories of remarkable recoveries without the side effects of conventional treatments. One patient wrote, “After years of trying everything for my psoriasis, I finally found relief at Aditya Homeopathic Clinic. The care, attention, and results were beyond my expectations.” Another shared, “My child’s recurring tonsillitis disappeared completely within a few months of starting treatment. I only wish we had come here sooner.” The consistent theme across all feedback is the personal connection our team builds with each patient—an experience where medical care is combined with empathy, patience, and respect. Many have referred their family and friends, making our clinic not just a place of healing but a growing community built on trust and success. For us, every testimonial is a reminder of our purpose: to restore health, dignity, and joy to every life we touch. Aditya Homoeopathic Clinic is not just recommended—its remembered as the best of the best.
                </p>
                
              </section>

              {/* FAQs */}
              <section id="faqs" className="pt-4 scroll-mt-32" data-aos="fade-up">
                <h2 className="text-2xl font-bold text-green-700 mb-4">FAQs</h2>
                <ul className="space-y-6 text-xl text-gray-800">
                  <li>
                    <strong>What is homeopathy and how does it work?</strong>
                    <br />Homeopathy stimulates the body’s own healing mechanisms.
                  </li>
                  <li>
                    <strong>Is homeopathy safe for children and the elderly?</strong>
                    <br />Yes, it's gentle and safe for all ages.
                  </li>
                  <li>
                    <strong>How long does it take to see results?</strong>
                    <br />It depends on your condition and its chronicity.
                  </li>
                  <li>
                    <strong>Can I take homeopathy with allopathy?</strong>
                    <br />Yes, but consult your homeopath for guidance.
                  </li>
                  <li>
                    <strong>Do you offer online consultations?</strong>
                    <br />Yes, we offer secure and convenient virtual appointments.
                  </li>
                </ul>
              </section>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
