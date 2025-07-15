
import React from 'react';
import Header from "../components/header"; 
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function VisionMissionPage() {
  return (
    <div className='' >
          <Header/>
          <Navbar/>
      <main className="px-6 py-8  max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Our Vision & Mission
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            At <strong>Aditya Homeopathy Clinic</strong>, our vision is to be a center of excellence in holistic healing—
            providing natural, effective, and individualized care to people from all walks of life. We aspire to
            make homeopathy a trusted and preferred system of medicine by fostering health and wellness with compassion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-3">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to deliver comprehensive, side-effect-free treatment through classical homeopathy, backed by
            modern diagnostic understanding and empathy. We aim to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
            <li>Identify and treat the root cause of diseases, not just the symptoms.</li>
            <li>Empower patients through awareness, education, and compassionate care.</li>
            <li>Maintain the highest standards of integrity and patient satisfaction.</li>
            <li>Promote preventive and curative healthcare using natural remedies.</li>
          </ul>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
