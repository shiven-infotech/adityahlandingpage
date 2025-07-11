import { FaLightbulb, FaHandsHelping, FaLeaf, FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaLightbulb className="text-green-600 text-3xl" />,
      title: "Expert Knowledge",
      description: "Led by highly trained homoeopaths",
    },
    {
      icon: <FaHandsHelping className="text-green-600 text-3xl" />,
      title: "Personalized Care",
      description: "Treatments tailored to your needs",
    },
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      title: "Holistic Approach",
      description: "Focus on overall well-being",
    },
    {
      icon: <FaCheckCircle className="text-green-600 text-3xl" />,
      title: "Proven Results",
      description: "Long track record of patient improvement",
    },
  ];

  return (
    <section className="py-12 px-4 bg-[#FFFDD0] text-gray-800">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10">WHY CHOOSE US</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition flex gap-4 items-start"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
