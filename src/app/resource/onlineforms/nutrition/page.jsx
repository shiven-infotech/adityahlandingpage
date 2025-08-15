"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../../../components/header";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function NutritionFormPage() {
  const [form, setForm] = useState({});

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const safeName = (label) =>
    label.replace(/[^a-z0-9]/gi, "_").toLowerCase();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted!");
  };

  const renderFields = (sectionTitle, fields) => (
    <>
      <h2 className="col-span-2 text-xl font-semibold text-gray-700 mt-6">
        {sectionTitle}
      </h2>
      {fields.map((label) => {
        const key = safeName(label);
        return (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-medium">{label}</label>
            <input
              type="text"
              name={key}
              value={form[key] || ""}
              onChange={handleChange}
              className="border rounded p-2"
            />
          </div>
        );
      })}
    </>
  );

  return (
    <>
      <Header />
      <Navbar />

      <main className="px-2 py-4 bg-[#e3ffe0]">
        <div
          className="max-w-screen mx-auto bg-white shadow-lg rounded-lg p-6"
          data-aos="fade-up"
        >
          <h1 className="text-4xl text-center font-bold text-green-700 mb-6">
            Nutrition Assessment Form
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {renderFields("Basic Information", [
              "Full Name",
              "DOB (dd/mm/yyyy)",
              "Gender (Male / Female)",
              "Blood Group",
              "Occupation / Profession",
              "Weight (in kg)",
              "Height (in cms)",
            ])}

            {renderFields("Fitness Assessment", [
              "How do you travel to office daily (by public or private transport)",
              "Do you work out? & How many days in a week do you exercise?",
              "What is your workout schedule and intensity and for how long do you work out?",
              "What kind of exercises do you do?",
              "What is your fitness goals ?",
              "Chest (cm)",
              "Waist around naval point (cm)",
              "Hips (cm)",
              "Thigh (cm)",
              "Arms (cm)",
              "Do you feel you gain weight more easily on your hips or abdomen?",
              "Do you store fat specifically in any area?",
              "At What age or stage of your life did you start gaining weight? Reason if any?",
            ])}

            {renderFields("Medical Assessment", [
              "Medical Condition (any accident / Operation or past History)",
              "Are you pregnant / lactating?",
              "Diabetic / Blood Pressure (If yes, since how long & what medicine)",
              "Any history of stress or hyper tension?",
              "Do you lose temper easily?",
              "Are you irritated by the end of the day?",
              "Do you sweat in your palms?",
              "On a scale of 1-10, ability to deal with stress",
              "Any close family with diabetes, arthritis, high BP, osteoporosis?",
              "Did you try to lose weight before? If yes how much and how long?",
              "Where did you have treatment & what was the line of treatment?",
              "Any other Medical History",
              "Type of body constitution (kapha / vata / pitta)",
            ])}

            {renderFields("Dietary Assessment", [
              "Do you Smoke / Drink? (frequency)",
              "Any Food Allergy",
              "Outside Food Eating (frequency)",
              "Veg / Non Veg",
              "Fasting (frequency)",
              "No. of People in Family",
              "Edible Oil Consumption per month by whole Family",
              "Type Of Edible Oil Used",
              "Frequency of Ghee / paneer / fast food / Non Veg in diet",
              "State of India you come from",
              "Water Intake per Day (glass of 200 ml)",
              "How often do You Feel constipated?",
              "Food you do not like or eat",
              "Food you like or eat most often",
            ])}

            {renderFields("Diet Recall", [
              "At what time do you wake up?",
              "Do you snore or have whistling sound while sleeping?",
              "Do you wake up fresh or feel sleepy?",
              "Do you wake up with alarm or on your own?",
              "Breakfast Time",
              "Breakfast Includes",
              "Lunch Time",
              "Lunch Includes",
              "Dinner Time",
              "Dinner Includes",
              "Snacks in between meals",
              "Do you get cravings? When?",
              "Do you eat as per timing, schedule or both?",
              "Do you feel parched and dry in your mouth?",
              "Relationship with food (Good/Bad/Neutral)",
              "Sex life & frequency per week",
              "Tea / Coffee consumption (cups/day, sugar?)",
              "Do you feel hungry before bed? What do you eat?",
              "Rate your sleeping pattern (1-10)",
            ])}

            <div className="col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
