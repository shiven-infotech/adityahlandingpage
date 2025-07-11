export default function ClinicSchedule() {
  const schedule = [
    { day: "Monday", time: "10:00 AM – 1:00 PM, 5:00 PM – 8:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 1:00 PM, 5:00 PM – 8:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 1:00 PM" },
    { day: "Thursday", time: "10:00 AM – 1:00 PM, 5:00 PM – 8:00 PM" },
    { day: "Friday", time: "10:00 AM – 1:00 PM, 5:00 PM – 8:00 PM" },
    { day: "Saturday", time: "10:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="bg-[#FFFDD0] py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
        Clinic Schedule
      </h2>

      <div className="max-w-6xl rounded-2xl shadow-lg mx-auto overflow-x-auto">
        <table className="w-full border border-green-300 ">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Day</th>
              <th className="py-3 px-4 text-left">Timings</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((entry, index) => (
              <tr
                key={index}
                className={`${
                  entry.day === "Sunday" ? "bg-red-100 text-red-600" : "bg-white"
                } border-b border-green-200`}
              >
                <td className="py-3 px-4 font-medium">{entry.day}</td>
                <td className="py-3 px-4">{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
