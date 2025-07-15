export default function CorporateWellnessSection() {
  const features = [
    {
      title: "Workplace Stress Management",
      description:
        "We offer meditation, counseling, and homeopathic remedies to reduce workplace anxiety and improve mental health.",
    },
    {
      title: "Employee Health Checkups",
      description:
        "Regular health screenings with personalized guidance from our homeopathic experts to boost immunity and productivity.",
    },
    {
      title: "Nutritional Guidance",
      description:
        "Corporate diet plans tailored for busy professionals to maintain energy levels and long-term wellness.",
    },
    {
      title: "Customized Wellness Plans",
      description:
        "We design programs based on your company’s needs—virtual sessions, workshops, or on-site camps.",
    },
  ];

  return (
    <section className="bg-[#FFFDD0] py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        Corporate Wellness Program
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        A healthy employee is a productive employee. Our Corporate Wellness
        Program is designed to enhance physical and emotional well-being in the
        workplace through holistic homeopathic care and lifestyle support.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
