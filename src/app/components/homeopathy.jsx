export default function HomeopathyFundamentals() {
  const fundamentals = [
    {
      principle: "Like Cures Like",
      meaning:
        "A substance causing symptoms in a healthy person can cure similar symptoms in a sick person.",
    },
    {
      principle: "Minimum Dose",
      meaning:
        "Use highly diluted substances to stimulate the body’s natural healing response without toxicity.",
    },
    {
      principle: "Individualized Care",
      meaning:
        "Each patient is treated uniquely, considering physical, emotional, and mental aspects.",
    },
    {
      principle: "Vital Force",
      meaning:
        "Belief in a life energy that maintains health; disease is an imbalance of this force.",
    },
    {
      principle: "Potentization",
      meaning:
        "Process of dilution and shaking (succussion) that enhances the healing power of remedies.",
    },
    {
      principle: "Law of Cure (Hering’s Law)",
      meaning:
        "Healing progresses from within outward, from top to bottom, and in reverse order of symptoms.",
    },
    {
      principle: "Holistic Healing",
      meaning:
        "Homeopathy treats the root cause, not just symptoms — aiming for long-lasting wellness.",
    },
    {
      principle: "Common Potencies",
      meaning:
        "Common potencies used: 6C, 30C, 200C, 1M — chosen based on patient sensitivity and case.",
    },
  ];

  return (
    <div className=" bg-gray-100 p-6 pb-0">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
        Fundamentals of Homeopathy
      </h1>
      <div className="overflow-x-auto bg-white rounded-2xl shadow-md max-w-6xl mx-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-4 text-left text-sm font-semibold uppercase border-r border-green-500">
                Principle
              </th>
              <th className="p-4 text-left text-sm font-semibold uppercase">
                Meaning
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {fundamentals.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-green-50" : "bg-white"}
              >
                <td className="p-4 font-medium border-r border-gray-200">
                  {item.principle}
                </td>
                <td className="p-4">{item.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
