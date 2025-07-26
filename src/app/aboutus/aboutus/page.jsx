"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  FaUser,
  FaBullseye,
  FaEye,
  FaCheckCircle,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";

export default function AboutUsPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const sections = [
    { id: "aboutus", label: "Aditya Homeopathic Clinic", icon: <FaUser /> },
    { id: "whyadityahomeopathiccilinic", label: "Why Aditya Homeopathic Clinic", icon: <FaBullseye /> },
    { id: "visionandmissin", label: "VisionandMission", icon: <FaEye /> },
    { id: "why-choose", label: "Why Choose Us", icon: <FaCheckCircle /> },
    { id: "feedback", label: "Feedback", icon: <FaUserMd /> },
    { id: "faqs", label: "FAQS", icon: <FaUsers /> },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <main className="px-4  max-w-7xl mx-auto ">

       <div className="flex justify-center mb-10" data-aos="fade-down">
       <img
       src="/aboutus.jpeg" // <-- Replace with your actual image path
        alt="About Us"
       className="w-full h-[450px] max-w-7xl rounded-xl   "
      />
      <div className="absolute bottom-14 right-50 text-white px-4 py-2 mx-5 rounded ">
    <p className="text-5xl  font-bold">
      About Us
    </p>
  </div>
       </div>



        <div className="grid md:grid-cols-4 gap-8">
          {/* Fancy Sidebar */}
          <aside className="md:col-span-1 hidden md:block sticky top-24 self-start">
            <div className="bg-green-50 p-4 rounded-xl shadow-lg border border-green-200">
             
              <nav className="space-y-3 text-green-800 font-medium">
                {sections.map((sec) => (
                  <Link
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100 hover:text-green-900 transition-all duration-200"
                  >
                    <span className="text-lg">{sec.icon}</span>
                    {sec.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-16">
        
            <section id="aboutus" data-aos="fade-up">
              <h1 className="text-4xl font-bold text-green-700 mb-4">About Us</h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to <span className="font-semibold">Aditya Homeopathy Clinic</span>,
                Aditya Homeopathic Clinic is a trusted center for holistic healing, offering personalized and evidence-based homeopathic care for patients of all ages. Founded on the principles of classical homeopathy, the clinic emphasizes treating the root cause of illness rather than just symptoms. With a mission to restore health naturally, safely, and gently, our experienced team is committed to empowering individuals through compassionate care and comprehensive treatment plans. Whether you are seeking relief from chronic conditions, acute ailments, or lifestyle-related health challenges, Aditya Homeopathic Clinic provides a supportive and nurturing environment where healing begins from within.
              </p>
            </section>

            <section className="">
              <div id="whyadityahomeopathicclinic" data-aos="fade-right">
                <h2 className="text-2xl font-bold text-green-700 mb-2">Why Aditya Homeopathic Clinic </h2>
                <p className="text-gray-700 leading-relaxed">
                  At Aditya Homeopathic Clinic, healing is more than just treatment — it’s a journey of care, compassion, and commitment. What sets us apart is our unwavering dedication to personalized attention, deep patient understanding, and the timeless principles of classical homeopathy. Each case is approached with empathy and precision, ensuring that remedies are tailored to the individual’s physical, emotional, and mental well-being. Our clinic is led by experienced and certified professionals, equipped with modern diagnostic tools, and backed by a proven track record in treating chronic and lifestyle disorders. Patients choose us not just for our results, but for the trust, transparency, and human connection we build throughout their healing journey.


                </p>
              </div>
             
            </section>

            {/* Why Choose Us */}
            <section id="visionandmission" data-aos="fade-up" className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-green-700 mb-4">Vision and Mission</h2>
               <p>
                At Aditya Homeopathic Clinic, our vision is to be a leading center of excellence in holistic healthcare, recognized for restoring health through natural and safe remedies. We aspire to transform lives by spreading awareness about the power of homeopathy and building a healthier society rooted in balance and well-being.

Our mission is to provide high-quality, ethical, and compassionate homeopathic treatment tailored to each individual. We are committed to addressing not just symptoms, but the root causes of illness — guiding our patients toward lasting recovery. Through continuous learning, patient education, and a focus on personalized care, we strive to heal with integrity, empower with knowledge, and serve with heart.
               </p>
              </div>
              <div data-aos="zoom-in">
                <img
                  src="/images/whychooseus.jpg"
                  alt="Why Choose Us"
                  className="w-full h-auto rounded-lg shadow-md border-2 border-green-600"
                />
              </div>
            </section>

          
            <section id="whychooseus" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Why Choose Us</h2>
              <div className="flex flex-col md:flex-row items-center gap-6">
               
                <div>
                 
                  <p className="text-gray-700">
                   Choosing Aditya Homeopathic Clinic means choosing care that goes beyond prescriptions. We combine the wisdom of classical homeopathy with a personalized, patient-centered approach to healing. Our experienced doctors take the time to understand each individual’s unique constitution, lifestyle, and emotional health to deliver safe, natural, and lasting solutions. We’ve built a reputation on trust, transparency, and consistent results in both acute and chronic conditions. With a warm clinic environment, modern support tools, and a holistic philosophy, we are dedicated to helping you heal — not just quickly, but completely.


                  </p>
                 
                </div>
              </div>
            </section>

            {/* Team */}
            <section id="feeback" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-green-700 mb-6">Feedback</h2>
              <p>
                At Aditya Homeopathic Clinic, patients consistently express high levels of satisfaction and gratitude for the compassionate care and effective treatments they receive. Many have found lasting relief from chronic conditions such as asthma, arthritis, skin disorders, and digestive issues—without the side effects of conventional medicines. The personalized attention from Dr. Shital V. khodke  and his team, coupled with their deep understanding of homeopathy, creates a healing environment that patients trust. From children to the elderly, individuals appreciate the holistic approach, transparent communication, and commitment to long-term wellness. The welcoming ambiance and organized consultation process further enhance the overall experience, making Aditya Homeopathic Clinic a preferred choice for natural and reliable healing.


              </p>
              <br/>
             <p>
                "Aditya Homeopathic Clinic has been a blessing in my health journey. The personalized care, attention to detail, and holistic approach provided by Dr. Aditya Sharma and his team made a huge difference in my recovery. I was treated not just for my symptoms but for the root cause of my condition. The environment is peaceful, and the staff is extremely courteous and supportive. I highly recommend this clinic to anyone seeking long-term, side-effect-free healing through homeopathy. 
                <br />
 Ravi Mehta, Bhopal
             </p>
             <br />
               <p>
                "I had been struggling with chronic sinusitis for years, trying various treatments with little success. Visiting Aditya Homeopathic Clinic was a turning point in my life. The doctors took the time to listen to my full health history and created a treatment plan that truly addressed the root cause. Within weeks, I noticed significant improvement, and today I feel healthier, lighter, and more energized than ever. The staff is warm, professional, and genuinely caring. I’m so grateful to have found a clinic that treats the whole person, not just the symptoms.
                <br />
Pooja S., Indore
               </p>
                  
               
              
            </section>

            {/* Team */}
            <section id="feeback" data-aos="fade-up">
               <h2 className="text-2xl font-bold text-green-700 mb-4">FAQS</h2>
               <ul>
                <li>
                   <span className="text-xl">What is homeopathy and how does it work?</span> <br />
Homeopathy is a natural system of medicine that stimulates the body’s own healing mechanisms using highly diluted substances. It treats the root cause rather than just symptoms.
                </li>
                <br />
                <li>
                    <span className="text-xl">Is homeopathy safe for children and the elderly?</span>
                    <br />
                    Yes, homeopathy is gentle and safe for people of all ages, including infants, pregnant women, and elderly individuals. It is non-toxic and free of side effects.
                </li>
                <br />
                <li>
                    <span className="text-xl">
                    How long does it take to see results from treatment?
                    </span>
                    <br />
                    The duration varies depending on the condition. Acute problems may resolve within days, while chronic conditions might take weeks or months for noticeable improvement.
                </li>
                <br />
               <li>
                <span className="text-xl">
                    Can I take homeopathic medicine with allopathic treatment?
                </span>
                <br />
                Yes, homeopathic medicine can often be taken alongside conventional treatments, but it's best to consult your homeopath for personalized advice.
               </li>
                 <br />
                <li>
                    <span className="text-xl">
                        Do you offer online consultations?
                    </span>
                    <br />
                    Yes, we provide secure and convenient online consultations for patients unable to visit the clinic physically.
                </li>
                
               </ul>

            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
