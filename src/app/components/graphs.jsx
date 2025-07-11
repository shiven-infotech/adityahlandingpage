"use client";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

export default function HomeopathyDashboard() {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Patients Treated",
        data: [45, 60, 55, 75, 90, 110],
        backgroundColor: "#22c55e",
        borderRadius: 8,
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        label: "Symptom Score",
        data: [9, 7, 6, 4, 2, 1],
        borderColor: "#22c55e",
        backgroundColor: "#bbf7d0",
        tension: 0.4,
        pointBackgroundColor: "#15803d",
      },
    ],
  };

  const pieData = {
    labels: ["Allergies", "Skin", "Respiratory", "Digestive", "Other"],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          "#10b981",
          "#06b6d4",
          "#facc15",
          "#f87171",
          "#a78bfa",
        ],
      },
    ],
  };

  const doughnutData = {
    labels: ["In-Clinic", "Online", "Follow-Up"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ["#34d399", "#60a5fa", "#fcd34d"],
      },
    ],
  };

  return (
    <div className=" bg-[#FFFDD0] py-10 px-4">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-10">
        📊 Homeopathy Clinic Dashboard
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Monthly Patients Treated
          </h2>
          <Bar data={barData} />
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Symptom Improvement Over Time
          </h2>
          <Line data={lineData} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Treatment Success by Condition
          </h2>
          <Pie data={pieData} />
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Consultation Types
          </h2>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
}
