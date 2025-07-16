export default function PhilanthropySection() {
  const initiatives = [
    {
      title: "Free Rural Health Camps",
      description:
        "We regularly conduct free homeopathy camps in underprivileged rural areas, providing consultations and medicines.",
    },
    {
      title: "Support for Women & Children",
      description:
        "Special initiatives for women and children’s health—focusing on nutrition, menstrual health, and immunity.",
    },
    {
      title: "Community Education",
      description:
        "Workshops to spread awareness about natural healing, hygiene, and preventive care in underserved communities.",
    },
    {
      title: "Medicine Donations",
      description:
        "We contribute essential homeopathic remedies to NGOs, orphanages, and disaster relief programs.",
    },
  ];

  return (
    <section className="bg-[#e3ffe0] py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Our Philanthropy</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        At Aditya Homoeopathy, we believe in giving back to society. Through
        our philanthropic programs, we extend compassionate care to those who
        need it most — beyond the walls of our clinic.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
