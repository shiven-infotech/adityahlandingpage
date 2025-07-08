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
  // Charts Data
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Bar Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Monthly Patients Treated
          </h2>
          <Bar data={barData} />
        </div>

        {/* Card 2: Line Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Symptom Improvement Over Time
          </h2>
          <Line data={lineData} />
        </div>

        {/* Card 3: Pie Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Treatment Success by Condition
          </h2>
          <Pie data={pieData} />
        </div>

        {/* Card 4: Doughnut Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Consultation Types
          </h2>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
}
