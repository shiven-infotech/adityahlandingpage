export default function PrivacyPolicy() {
  const sections = [
    {
      label: "1. Information We Collect",
      content: (
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Personal Info:</strong> Name, phone, email, gender, age.</li>
          <li><strong>Medical Info:</strong> Symptoms, history, prescriptions.</li>
          <li><strong>Appointments:</strong> Date, time, follow-up, feedback.</li>
        </ul>
      ),
    },
    {
      label: "2. How We Use Your Info",
      content: (
        <ul className="list-disc space-y-2 pl-5">
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
    <div className="max-w-5xl bg-white mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-700 mb-10">Privacy Policy</h1>

      <div className="space-y-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="grid md:grid-cols-4 gap-4 border-b border-gray-200 pb-6"
          >
            <div className="text-green-600 font-semibold">{section.label}</div>
            <div className="md:col-span-3 text-gray-700">{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
