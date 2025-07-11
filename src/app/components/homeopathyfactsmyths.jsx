export default function HomeopathyFactsMyths() {
  const data = [
    {
      myth: "Homeopathy is just placebo.",
      fact: "Scientific studies and patient outcomes show homeopathy can be effective beyond placebo in many cases.",
    },
    {
      myth: "Homeopathy is too slow to work.",
      fact: "In acute conditions like fever or diarrhea, homeopathic remedies can act quickly. Chronic cases take time, like in any system.",
    },
    {
      myth: "Homeopathy and allopathy can't be taken together.",
      fact: "Homeopathy can often be safely used alongside allopathic treatments with proper guidance.",
    },
    {
      myth: "Homeopathic medicines have steroids.",
      fact: "Authentic homeopathic medicines are plant/mineral based and free from steroids. Lab testing can verify purity.",
    },
    {
      myth: "You need to stop coffee or onion with homeopathy.",
      fact: "Only certain remedies may be affected by strong substances — restrictions vary by case, not for all remedies.",
    },
    {
      myth: "Homeopathy is only for chronic diseases.",
      fact: "It is effective in both acute (cold, fever) and chronic (allergy, skin, hormonal) conditions.",
    },
  ];

  return (
    <div className="bg-[#FFFDD0] p-6 ">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
        Myths & Facts About Homeopathy
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border border-green-100"
          >
            <h2 className="text-lg font-semibold text-red-500 mb-2">Myth</h2>
            <p className="text-gray-800 mb-4">{item.myth}</p>
            <h3 className="text-lg font-semibold text-green-600 mb-2">Fact</h3>
            <p className="text-gray-700">{item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
