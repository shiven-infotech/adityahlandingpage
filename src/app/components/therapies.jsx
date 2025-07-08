import { FaCapsules, FaClipboardList, FaProjectDiagram } from "react-icons/fa";

export default function TherapiesSection() {
  const therapies = [
    {
      icon: <FaCapsules className="text-green-600 text-3xl" />,
      title: "Classical Homeopathy",
      description: "Single remedy based on individualized assessment",
    },
    {
      icon: <FaClipboardList className="text-green-600 text-3xl" />,
      title: "Clinical Homeopathy",
      description: "Multiple remedies for specific conditions",
    },
    {
      icon: <FaProjectDiagram className="text-green-600 text-3xl" />,
      title: "Complex Homeopathy",
      description: "Combination remedies for broader treatment",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10">Therapies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {therapies.map((therapy, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center"
          >
            <div className="flex justify-center mb-4">{therapy.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{therapy.title}</h3>
            <p className="text-gray-600">{therapy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
