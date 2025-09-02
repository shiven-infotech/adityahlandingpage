"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

export default function AppointmentPage() {
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState("online");
  const [submitted, setSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [consultationType, setConsultationType] = useState("");

  const slots = [
    { time: "10:00 AM", booked: false },
    { time: "11:00 AM", booked: true },
    { time: "12:00 PM", booked: false },
    { time: "02:00 PM", booked: false },
    { time: "03:00 PM", booked: true },
    { time: "04:00 PM", booked: false },
  ];

  useEffect(() => {
    AOS.init({ duration: 800 });
    setHasMounted(true);
    setDate(new Date());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSlot || !consultationType) {
      alert("Please select a slot and consultation type before booking.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  if (!hasMounted) return null;

  return (
    <>
      <Header />
      <Navbar />
      <section className="bg-[#e3ffe0] py-2 px-3 sm:px-4 lg:px-6">
        <form
          className="max-w-screen mx-auto grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6"
          onSubmit={handleSubmit}
        >
          {/* Form Section */}
          <div
            className="bg-white p-3 rounded-2xl shadow-md flex flex-col"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">
              Book an Appointment
            </h2>

            {submitted && (
              <div className="mb-3 p-2 rounded-lg bg-green-100 text-green-800 border border-green-300 animate-fadeIn text-sm">
                ✅ Appointment submitted successfully!
              </div>
            )}

            <div className="space-y-2 flex-1">
              {/* Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <InputField label="First Name" name="firstName" required />
                <InputField label="Last Name" name="lastName" required />
                <InputField
                  label="Mobile Number"
                  name="mobileNumber"
                  type="tel"
                  required
                />
              </div>

              {/* Doctor */}
              <SelectField
                label="Doctor"
                name="doctor"
                options={["Dr. Shital Khodke"]}
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Mode</label>
                <div className="flex items-center gap-4">
                  <RadioField label="Online" value="online" checked={formData.IsOnline} onChange={() => setFormData((prev) => ({ ...prev, IsOnline: true }))} />
                  <RadioField label="Offline" value="offline" checked={!formData.IsOnline} onChange={() => setFormData((prev) => ({ ...prev, IsOnline: false }))} />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <InputField
                    required={true}
                    label="Enter Phone Number"
                    placeholder="Contact Number"
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, patient: { ...prev.patient, phone: e.target.value } }));
                      setCustomers([])
                      setphone(false);
                    }}
                    value={formData?.patient.phone}
                    type="text"
                    name="phoneNumber"
                    error={formError?.patient?.phone}
                  />
                  <button
                    type="button"
                    className="px-2 py-1 mt-5 bg-green-600 text-white rounded"
                    onClick={() => {
                      if (formData?.patient?.phone) {
                        getItem(`customer?search=${formData?.patient?.phone}`).then((data) => {
                          setCustomers(data);
                          setphone(true);
                        });
                      }
                    }}
                  >
                  {/* test */}
                    Submit
                  </button>
                </div>
             {phone &&   <div className="flex justify-start gap-10 items-center w-full p-3 m-2 border border-gray-300 rounded-lg">
                  <SelectField
                    options={
                      customers?.map((p) => ({
                        label: `${p?.firstName} ${p?.surname}`,
                        value: p?._id,
                      })) || []
                    }
                    value={formData?.patient?.id}
                    onChange={(e) => {
                      const selectedPatient = customers?.find((p) => p?._id === e.target.value);
                      if (selectedPatient) {
                        setFormData((prev) => ({
                          ...prev,
                          patient: {
                            id: selectedPatient?._id,
                            name: selectedPatient?.firstName,
                            phone: selectedPatient?.mobile,
                            surname: selectedPatient?.surname,
                          },
                        }));
                      }
                    }}
                    placeholder="Select Patient"
                    label={"Select Existing"}
                    name={"name"}
                    error={formError?.patient?.name}
                  />
                  <span className="text-black">OR</span>
                  <InputField
                    required={true}
                    label="Create New"
                    name="name"
                    onChange={(e) => {
                      let selectedPatient = customers?.filter((p) => `${p?.firstName} ${p?.surname}` == e.target.value)?.[0];
                      let fullname = e.target.value?.split(' ')
                      if (selectedPatient === undefined) {
                        setFormData((prev) => ({ ...prev, patient: {...prev?.patient, name:fullname?.[0], surname:fullname?.[1]} }));
                      } 
                    }}
                    value={customers?.filter((p) => p?._id == formData?.patient?.id)?.[0]?.firstName}
                    error={formError?.patient?.name}
                    placeholder="[firstname lastname]"
                  />
                </div>}
              </div>

              {formData.selectedRole === "doctor" && doctorsData?.length > 0 && (
                <SelectField
                  options={doctorsData?.map((doctor) => ({
                    value: doctor._id,
                    label: doctor.name,
                  }))}
                  value={formData?.doctor?.id}
                  onChange={(e) => {
                    let selectedDoctor = doctorsData?.filter((i) => i?._id == e.target.value)?.[0];
                    const { _id, name } = selectedDoctor;
                    setFormData((prev) => ({ ...prev, doctor: { id: _id, name: name } }));
                  }}
                  placeholder="Select Doctor"
                  label={"Select Doctor"}
                  name={"doctor"}
                  error={formError.doctor}
                />
              )}

              {formData.selectedRole === "assistantDoctor" && (
                <>
                  <SelectField
                    options={assistantDoctor?.map((doctor) => ({
                      value: doctor._id,
                      label: doctor.name,
                    }))}
                    value={formData?.doctor?.id}
                    onChange={(e) => {
                      let selectedDoctor = assistantDoctor?.filter((i) => i?._id == e.target.value)?.[0];
                      const { _id, name } = selectedDoctor;
                      setFormData((prev) => ({ ...prev, doctor: { id: _id, name: name } }));
                    }}
                    placeholder="Select Assistant Doctor"
                    label={"Select Assistant Doctor"}
                    name={"doctor"}
                    error={formError.doctor}
                  />
                </>
              )}

              {formData.selectedRole === "consultant" && consultantDoctors?.length > 0 && (
                <>
                  <SelectField
                    options={consultantDoctors?.map((consultant) => ({
                      value: consultant._id,
                      label: consultant.name,
                    }))}
                    value={formData?.doctor?.id}
                    onChange={(e) => {
                      let selectedDoctor = consultantDoctors?.filter((i) => i?._id == e.target.value)?.[0];
                      const { _id, name } = selectedDoctor;
                      setFormData((prev) => ({ ...prev, doctor: { id: _id, name: name } }));
                    }}
                    placeholder="Select Consultant"
                    label={"Select Consultant"}
                    name={"doctor"}
                    error={formError.Consultant}
                  />
                </>
              )}

              <div className="grid grid-cols-1 md:grid-cols-[40%_60%] ">
                {/* Calendar */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Choose a Date
                  </label>
                  <Calendar
                    locale="en-GB"
                    onChange={setDate}
                    value={date}
                    tileDisabled={({ date }) => date.getDay() === 0}
                    className="rounded-lg border border-gray-200 w-full calendar-compact"
                  />
                </div>

                {/* Slots + Consultation in same row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3  items-start">
                  {/* Available Slots */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Available Slots
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {slots.map((slot, idx) => (
                        <button
                          type="button"
                          key={idx}
                          disabled={slot.booked}
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`px-2 py-1 rounded-lg text-xs font-medium border transition ${
                            slot.booked
                              ? "bg-red-100 text-red-500 border-red-300 cursor-not-allowed"
                              : selectedSlot === slot.time
                              ? "bg-green-600 text-white border-green-700"
                              : "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div className="flex flex-col items-center">
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-center">
                      Consultation Type
                    </label>
                    <select
                      value={consultationType}
                      onChange={(e) => setConsultationType(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                      required
                    >
                      <option value="">Offline Consultation</option>
                      <option value="reversalprogram">Reversal Program</option>
                      <option value="garbhsanskarclasses">Garbh Sanskar Classes</option>
                      <option value="rightbrainactivationclasses">Right Brain Activation Classes</option>
                       <option value="prepregnancy">Pre Pregnancy</option>
                      <option value="postdelivery">Post Delivery</option>
                      <option value="corporatewellnessprogram">Corporate Wellness Program</option>
                       <option value="acupuncturetherapy">Acupuncture Therapy</option>
                      <option value="acupressuretherapy">Acupressure Therapy</option>
                      <option value="ayurvedictherapy">Ayurvedic Therapy</option>
                      <option value="naturopathy">Naturopathy</option>
                      <option value="physiotherapy">Physiotherapy</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <p className="text-xs text-gray-600 mt-3">
                By Registering you agree to our{" "}
                <a href="/appointment" className="text-green-700 underline">
                  Terms and Conditions
                </a>
                ,{" "}
                <a href="/appointment" className="text-green-700 underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/appointment" className="text-green-700 underline">
                  Legal Disclaimers
                </a>
                .
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition mt-3 text-sm"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden" data-aos="fade-left">
            <Image
              src="/appointment.png"
              alt="Appointment Booking"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

/* Helper Components */
function InputField({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={label}
        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
      />
    </div>
  );
}

function SelectField({ label, name, options, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        name={name}
        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
        required={required}
      >
        {options.map((opt, idx) => (
          <option key={idx}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function RadioField({ label, value, checked, onChange }) {
  return (
    <label className="inline-flex items-center text-sm">
      <input
        type="radio"
        name="mode"
        value={value}
        checked={checked}
        onChange={onChange}
        className="text-green-600"
      />
      <span className="ml-1 text-gray-700">{label}</span>
    </label>
  );
}
