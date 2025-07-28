"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function OnlineFormsPage() {
  const [selectedForm, setSelectedForm] = useState("new");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <main className="py-10 px-4 md:px-16 max-w-5xl mx-auto" data-aos="fade-up">
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg border">
          <h2 className="text-2xl font-bold text-center text-yellow-600 mb-6">
            Online Patient Forms
          </h2>

          {/* Form Selector */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 justify-center items-center">
            <label className="text-gray-600 font-medium">Select Form Type:</label>
            <select
              value={selectedForm}
              onChange={(e) => setSelectedForm(e.target.value)}
              className="border px-4 py-2 rounded-md text-sm"
            >
              <option value="new">New Patient Registration</option>
              <option value="followup">Follow-up Appointment</option>
              <option value="feedback">Patient Feedback</option>
              <option value="custom">Custom Form</option>
            </select>
          </div>

          {/* Render selected form */}
          {selectedForm === "new" && <NewPatientForm />}
          {selectedForm === "followup" && <FollowUpForm />}
          {selectedForm === "feedback" && <FeedbackForm />}
          {selectedForm === "custom" && <CustomForm />}
        </div>
      </main>

      <Footer />
    </>
  );
}

// ========== New Patient Form ==============
function NewPatientForm() {
  const [form, setForm] = useState({
    name: "", email: "", gender: "", address: "", city: "", zip: "",
    country: "", disease: "", mobile: "", promoCode: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Patient Form Submitted", form);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
      <Input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" />
      <Input name="address" value={form.address} onChange={handleChange} placeholder="Address *" />
      <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Id *" />
      <Input name="city" value={form.city} onChange={handleChange} placeholder="City *" />
      <Select name="gender" value={form.gender} onChange={handleChange} options={["Male", "Female"]} label="Gender *" />
      <Input name="zip" value={form.zip} onChange={handleChange} placeholder="Zip Code *" />
      <Select name="country" value={form.country} onChange={handleChange} options={["India", "USA", "UK"]} label="Country *" />
      <Select name="disease" value={form.disease} onChange={handleChange} options={["Eczema", "Psoriasis", "Asthma"]} label="Disease *" />
      <Input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile Number *" />
      <Input name="promoCode" value={form.promoCode} onChange={handleChange} placeholder="Promo Code" />
      <div className="col-span-2 text-center">
        <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 py-2 px-6 rounded-lg mt-4 font-semibold">
          Register
        </button>
      </div>
    </form>
  );
}

// ========== Follow-up Form ==============
function FollowUpForm() {
  return (
    <div className="text-center text-gray-600 text-sm">
      <p className="mb-4">This is a placeholder for the <strong>Follow-up Appointment Form</strong>.</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Coming Soon</button>
    </div>
  );
}

// ========== Feedback Form ==============
function FeedbackForm() {
  return (
    <div className="text-center text-gray-600 text-sm">
      <p className="mb-4">This is a placeholder for the <strong>Patient Feedback Form</strong>.</p>
      <button className="bg-green-500 text-white py-2 px-4 rounded">Coming Soon</button>
    </div>
  );
}

// ========== Custom Form ==============
function CustomForm() {
  return (
    <div className="text-center text-gray-600 text-sm">
      <p className="mb-4">You can add a <strong>custom form</strong> here dynamically.</p>
      <button className="bg-purple-500 text-white py-2 px-4 rounded">Custom Form Logic</button>
    </div>
  );
}

// ========== Reusable Input ============
function Input({ name, value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="border p-2 rounded-md w-full"
    />
  );
}

// ========== Reusable Select ============
function Select({ name, value, onChange, options = [], label }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="border p-2 rounded-md w-full bg-white"
    >
      <option value="">{label}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>{opt}</option>
      ))}
    </select>
  );
}
