import { FaStar, FaRegStar } from "react-icons/fa"; // Star icons

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
            <FaStar key={i} className="mr-1" />
          ) : (
            <FaRegStar key={i} className="mr-1" />
          )
        )}
      </div>
    );
  };

  return (
    <div className="bg-[#FFFDD0] py-10 px-6  ">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        What Our Patients Say
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow"
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
