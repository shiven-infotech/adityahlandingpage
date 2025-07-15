'use client';
import { FaStar } from "react-icons/fa";
import Header from "../components/header";
import Navbar from "../components/navbar"; // Make sure these paths are correct
import Footer from "../components/footer";

const testimonials = [
  {
    name: "Priya S., Pune",
    title: "A miracle for my migraines!",
    content: "I had been suffering from chronic migraines for over 10 years...",
  },
  {
    name: "Ravi & Meena K., Nashik",
    title: "My child's immunity has improved!",
    content: "My 6-year-old used to fall sick every month...",
  },
  {
    name: "Aarti M., Mumbai",
    title: "PCOD symptoms under control – naturally!",
    content: "I had irregular periods and severe acne due to PCOD...",
  },
  {
    name: "Nikhil R., Aurangabad",
    title: "No side effects, only results.",
    content: "What I love most is how safe the treatments are...",
  },
  {
    name: "Sunita D., Indore",
    title: "A personal touch you won’t find elsewhere.",
    content: "Dr. Shital is not just a doctor — she listens, understands...",
  },
  {
    name: "Madhav V., Nagpur",
    title: "From anxiety to calm — my emotional healing.",
    content: "I approached the clinic for anxiety and sleep issues...",
  },
];

export default function TestimonialsPage() {
  return (
    <>
    <Header/>
      <Navbar />

      <main className="py-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-10">
            What Our Patients Say
          </h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center justify-center mb-3 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h2 className="text-lg font-semibold text-green-800 mb-2">
                  {testimonial.title}
                </h2>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <p className="text-sm font-medium text-gray-500">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
