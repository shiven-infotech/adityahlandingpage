export default function BenefitsSection() {
  const benefits = [
    {
      title: "Holistic Healing",
      description: "Homeopathy treats the root cause, not just symptoms, considering physical, mental, and emotional aspects.",
    },
    {
      title: "No Side Effects",
      description: "Homeopathic medicines are natural, non-toxic, and safe for all age groups.",
    },
    {
      title: "Alternative Therapies",
      description: "Therapies like Acupressure, Naturopathy, and Nutrition support healing alongside homeopathy.",
    },
    {
      title: "Customized Treatment",
      description: "Treatments are personalized for every individual based on their complete health profile.",
    },
    {
      title: "Long-Term Relief",
      description: "Chronic issues like allergies, migraines, and hormonal disorders show long-term improvements.",
    },
    {
      title: "Safe for Children & Pregnant Women",
      description: "Gentle remedies are ideal even during pregnancy and infancy.",
    },
  ];

  return (
    <section className="px-6 py-12 bg-[#e3ffe0] text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Benefits of Homeopathy & Alternative Therapies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-700">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
