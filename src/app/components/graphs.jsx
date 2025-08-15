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
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

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
    <div className="bg-[#e3ffe0] py-8 px-4 ">
      <h1
        className="text-3xl font-bold text-green-700 text-center mb-10"
        data-aos="fade-down"
      >
        📊 Homeopathy Clinic Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Bar Chart */}
        <div
          className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 sm:p-6 w-full overflow-x-auto max-w-full"
          data-aos="fade-up"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-green-600 mb-4">
            Monthly Patients Treated
          </h2>
          <div className="min-w-[280px] sm:min-w-0">
            <Bar data={barData} />
          </div>
        </div>

        {/* Line Chart */}
        <div
          className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 sm:p-6 w-full overflow-x-auto max-w-full"
          data-aos="fade-up"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-green-600 mb-4">
            Symptom Improvement Over Time
          </h2>
          <div className="min-w-[280px] sm:min-w-0">
            <Line data={lineData} />
          </div>
        </div>

        {/* Pie Chart */}
        <div
          className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 sm:p-6 w-full overflow-x-auto max-w-full"
          data-aos="fade-up"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-green-600 mb-4">
            Treatment Success by Condition
          </h2>
          <div className="min-w-[280px] sm:min-w-0">
            <Pie data={pieData} />
          </div>
        </div>

        {/* Doughnut Chart */}
        <div
          className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 sm:p-6 w-full overflow-x-auto max-w-full"
          data-aos="fade-up"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-green-600 mb-4">
            Consultation Types
          </h2>
          <div className="min-w-[280px] sm:min-w-0">
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </div>
    </div>
  );
}
