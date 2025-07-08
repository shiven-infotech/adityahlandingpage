export default function ServicesSection() {
  const services = [
    {
      title: "👶 Children’s Health",
      items: [
        "Recurrent tonsillitis",
        "Bedwetting",
        "ADHD & behavior issues",
        "Weak immunity",
      ],
    },
    {
      title: "🧖‍♀️ Skin & Hair Care",
      items: ["Acne, pimples", "Psoriasis, eczema", "Hair fall, dandruff"],
    },
    {
      title: "🦴 Bones & Joints",
      items: ["Arthritis", "Sciatica", "Spondylitis"],
    },
    {
      title: "🌸 Women’s Health",
      items: ["PCOS", "Menstrual issues", "Hormonal imbalance"],
    },
    {
        title: "🧠 Mental Health",
        items: ["Anxiety", "Depression", "Stress management"],
        },
        {
        title: "👃 ENT Disorders",
        items: ["Sinusitis", "Allergic rhinitis", "Hearing issues"],
        },
        {
        title: "💔 Cardiac Care",
        items: ["Hypertension", "Cholesterol management", "Heart health"],
        },
        {
        title: "🫁 Respiratory Issues",
        items: ["Asthma", "Bronchitis", "COPD"],
    },
    {
      title: "🩺 Lifestyle Disorders",
      items: ["Thyroid", "Diabetes", "Obesity"],
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto shadow-lg ">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6  shadow-xl/30"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
