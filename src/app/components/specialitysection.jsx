"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function SpecialitySection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="bg-[#e3ffe0] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT - Text Content */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Speciality of Dr. Shital&apos;s Line of Treatment
          </h2>
          <p className="text-gray-700 text-lg">
            Dr. Shital&apos;s treatment approach is rooted in classical homoeopathy,
            emphasizing individualized care and long-term healing. Every patient is
            thoroughly evaluated, not just for physical symptoms but for emotional and
            lifestyle patterns as well. The specialty lies in targeting the root cause
            of the disease using minimal doses, ensuring safe, gentle, and effective
            results.
            <br /><br />
            Her line of treatment is especially beneficial for chronic ailments,
            hormonal imbalances, autoimmune conditions, children’s health issues, and
            psychological concerns. Dr. Shital&apos;s compassionate listening and deep
            case analysis stand out as hallmarks of her practice, offering hope where
            conventional medicine may fall short.
          </p>
        </div>

        {/* RIGHT - Image */}
        <div data-aos="fade-left" className="flex justify-center">
          <Image
            src="/doctor.png" // <-- Replace with your actual image path
            alt="Dr. Shital during treatment"
            width={500}
            height={500}
            className="rounded-xl  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
