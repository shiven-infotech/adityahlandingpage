 import React from 'react';
 import Header from "../components/header";
 import Navbar from '../components/navbar';
import Footer from '../components/footer';


 export default function aboutUspage() {
  return (
    <div>
      <Header/>
      <Navbar/>
    <main className="px-6 py-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        About Aditya Homeopathy Clinic
      </h1>

      <p className="mb-4 text-lg leading-relaxed">
        At <strong>Aditya Homeopathy Clinic</strong>, we believe in the power of holistic healing and
        personalized care. Founded by <strong>Dr. Shital</strong>, a passionate and experienced homeopathy
        practitioner, our clinic is dedicated to helping individuals achieve long-term wellness through natural
        remedies and compassionate treatment.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        With over a decade of expertise, Dr. Shital has developed a unique and result-oriented line of treatment that
        combines classical homeopathy principles with a deep understanding of each patient's physical, emotional, and
        mental state. We address a wide range of ailments—from acute conditions like allergies and infections to chronic
        issues like migraines, skin disorders, hormonal imbalances, and more.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Our mission is to promote healing from the inside out. Every treatment plan is tailored to the individual, aiming
        not just to suppress symptoms, but to restore the body's natural balance and immunity.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-700">Why Choose Us?</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Led by Dr. Shital with 10+ years of homeopathy experience</li>
        <li>Safe, side-effect-free treatments for all age groups</li>
        <li>Holistic approach to physical and emotional well-being</li>
        <li>Modern consultation with traditional healing methods</li>
        <li>Convenient online appointments available</li>
      </ul>

      <p className="mt-8 text-lg leading-relaxed">
        Visit Aditya Homeopathy Clinic and take the first step towards natural and sustainable healing. Your health is our priority.
      </p>
    </main>
    <Footer/>
    </div>
  );
}

