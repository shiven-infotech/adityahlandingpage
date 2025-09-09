"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import {useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CreateQuestions, CreateTestimonials } from "../../../../Redux/Api/LandingPageFormsApi";


// ✅ Make sure form is rendered only on client (avoids hydration issues)
const ClientForm = dynamic(() => Promise.resolve(FormComponent), { ssr: false });

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
      image: "/sitadevi.jpg",
    },
    {
      name: "Rahul Sharma",
      feedback:
        "The treatment I received from Dr. Shital's team was life-changing. Not only did they listen to me patiently, but they also treated me with such respect.",
      rating: 4,
      image: "/man.jpg",
    },
    {
      name: "Fatima Begum",
      feedback:
        "Free camps conducted in our village gave my entire family access to professional care. We’re grateful for this initiative and support!",
      rating: 5,
      image: "/begam.jpg",
    },
    {
      name: "Ramesh Pawar",
      feedback:
        "My son was cured of skin allergies with personalized care. The homeopathic approach was gentle and effective. Truly thankful!",
      rating: 4,
      image: "/ramesh.jpg",
    },
  ];

  const sections = [
    { id: "reversalprogram", label: "Reversal Program" },
    { id: "garbhsanskarclasses", label: "Garbh Sanskar classes" },
    { id: "rightbrainactivationclasses", label: "Right Brain Activation Classes" },
    { id: "prepregnancy", label: "Pre Pregnancy" },
    { id: "postdelivery", label: "Post Delivery" },
    { id: "corporatewellnessprogram", label: "Corporate Wellness Program" },
  ];

  return (
    <>
      <Header />
      <Navbar />

      <main className="bg-[#e3ffe0] py-4 px-4">
        <div className="max-w-screen mx-auto flex flex-col md:flex-row gap-6">
          {/* Sticky Sidebar */}
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
              <Link href="/resource/onlineforms" className="block hover:text-green-700 transition">
                Online Forms
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Title */}
            <section className="text-center" data-aos="fade-down">
              <h1 className="text-4xl md:text-5xl font-bold text-green-700">
                Patient Testimonials
              </h1>
              <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                Real stories from real people who found healing through our care.
              </p>
            </section>

            {/* Testimonials */}
            <section className="grid gap-6 sm:grid-cols-2">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-green-600 mb-4"
                  />

                  {/* Rating */}
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

                  {/* Feedback */}
                  <p className="italic text-gray-700">"{item.feedback}"</p>
                  <p className="mt-4 text-green-700 font-bold">– {item.name}</p>
                </div>
              ))}
            </section>

            {/* Form */}
            <ClientForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

// ✅ Client-only form component
function FormComponent() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobileNo: "",
    subject: "",
    feedback: "",
    rating: 5,
    image: null,
  });

  const dispatch = useDispatch()

  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, photo: file }));
      setPreview(file ? URL.createObjectURL(file) : null);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

            if (formData.mobileNo.length !== 10) {
      toast.error("Mobile number should be 10 digits");
      return;
            }

    // If sending to backend, use FormData
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    console.log("Submitted Testimonial:", formData);

    await dispatch(CreateTestimonials(formData))
    toast.success("Form submitted successfully");

    setSubmitted(true);
    setFormData({
      firstname: "",
      lastname: "",
      mobileNo: "",
      subject: "",
      feedback: "",
      rating: 5,
      photo: null,
    });
    setPreview(null);
  };

  return (
    <section className="p-8" data-aos="fade-up">
      <h2 className="text-2xl font-semibold text-green-700 text-center">
        Submit Your Testimonial
      </h2>
      <p className="text-center text-gray-600 mt-2">
        We’d love to hear how homeopathy helped you.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-1 max-w-xl mx-auto">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your 10-digit mobile number"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter the subject of your feedback"
          />
        </div>

        {/* Feedback */}
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

        {/* Rating */}
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

        {/* Photo Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Your Photo</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          {preview && (
            <div className="mt-3 flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="h-24 w-24 rounded-full object-cover border-2 border-green-600"
              />
            </div>
          )}
        </div>

        {/* Submit */}
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
  );
}
