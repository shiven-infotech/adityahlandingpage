export default function PrivacyPolicy() {
  const sections = [
    {
      label: "1. Information We Collect",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Personal Info:</strong> Name, phone, email, gender, age.</li>
          <li><strong>Medical Info:</strong> Symptoms, history, prescriptions.</li>
          <li><strong>Appointments:</strong> Date, time, follow-up, feedback.</li>
        </ul>
      ),
    },
    {
      label: "2. How We Use Your Info",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide proper homeopathic treatment.</li>
          <li>Store your consultation records securely.</li>
          <li>Send reminders and health updates.</li>
        </ul>
      ),
    },
    {
      label: "3. Data Security",
      content: (
        <p>
          We protect your personal and medical information with encryption and never share it without your consent, unless legally required.
        </p>
      ),
    },
    {
      label: "4. Cookies & Tracking",
      content: (
        <p>
          Our site may use cookies to analyze performance and improve UX. You can turn them off in your browser settings.
        </p>
      ),
    },
    {
      label: "5. Your Rights",
      content: (
        <p>
          You may request access, correction, or deletion of your data anytime. Contact us to proceed.
        </p>
      ),
    },
    {
      label: "6. Policy Updates",
      content: (
        <p>
          We may change this policy. Latest version will always be on this page.
        </p>
      ),
    },
    {
      label: "7. Contact Info",
      content: (
        <ul className="pl-5 space-y-1">
          <li>📞 +91 98765 43210</li>
          <li>📧 info@adityahomeopathy.com</li>
          <li>🏥 Aditya Homeopathy Clinic, Indore</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="  px-4  bg-[#FFFDD0] py-8">
      <h1 className="text-3xl font-bold text-green-700 mb-10 text-center">
        Privacy Policy
      </h1>

      <div className="max-w-6xl rounded-2xl shadow-lg mx-auto overflow-x-auto  ">
        <table className="w-full  table-auto border border-gray-300 text-left">
          <thead>
            <tr className="bg-green-100 text-green-800">
              <th className="p-4 border border-gray-300 w-1/3">Section</th>
              <th className="p-4 border border-gray-300">Details</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {sections.map((section, index) => (
              <tr key={index} className="border-t border-gray-200 align-top">
                <td className="p-4 border border-gray-300 font-semibold text-green-600">
                  {section.label}
                </td>
                <td className="p-4 border border-gray-300">{section.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
