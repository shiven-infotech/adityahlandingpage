"use client";

import { FaStar, FaRegStar } from "react-icons/fa"; // Star icons
import { useEffect, useRef, useState } from "react";

export default function PatientTestimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      message:
        "I was suffering from chronic sinusitis for 4 years. After starting homeopathic treatment here, my condition has improved drastically. Thank you!",
      location: "Indore",
      rating: 5,
    },
    {
      name: "Rohit Mehta",
      message:
        "The doctor really understood my issues and gave personalized treatment. My skin allergies are finally under control.",
      location: "Bhopal",
      rating: 4,
    },
    {
      name: "Sonal Desai",
      message:
        "Homeopathy helped me manage stress and anxiety during exams. I feel balanced and more confident now.",
      location: "Ujjain",
      rating: 5,
    },
    {
      name: "Deepak Jain",
      message:
        "Earlier I doubted homeopathy, but now I'm a believer. My daughter's recurring tonsils got cured without surgery!",
      location: "Dewas",
      rating: 4,
    },
  ];

  // Render stars based on rating
  const renderStars = (count) => {
    return (
      <div className="flex text-yellow-400 mb-3">
      {[...Array(5)].map((_, i) =>
        i < count ? (
        <FaStar
          key={i}
          className="mr-1 animate-bounce"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
        ) : (
        <FaRegStar
          key={i}
          className="mr-1 animate-bounce"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
        )
      )}
      </div>
    );
  };

  // Animation: Fade in and slide up when testimonials come into view
  // We'll use the Intersection Observer API and React state


  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const testimonialRefs = useRef([]);

  useEffect(() => {
    testimonialRefs.current = testimonialRefs.current.slice(0, testimonials.length);

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = Number(entry.target.getAttribute("data-index"));
              setVisibleIndexes((prev) =>
                prev.includes(idx) ? prev : [...prev, idx]
              );
            }
          });
        },
        { threshold: 0.2 }
      );

      testimonialRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => {
        testimonialRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      };
    }
    return undefined;
  }, [testimonials.length]);

  return (
    <div className="bg-[#e3ffe0] py-8 px-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        What Our Patients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            ref={(el) => (testimonialRefs.current[index] = el)}
            data-index={index}
            className={`bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow
              transform transition-all duration-700 ease-out
              ${
                visibleIndexes.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            {renderStars(t.rating)}
            <p className="text-gray-800 italic mb-4">“{t.message}”</p>
            <div className="text-sm text-gray-600 font-medium">
              — {t.name}, {t.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
