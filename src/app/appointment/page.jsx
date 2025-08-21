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


// let adityaurl = 'https://admin.adityahomoeopathicclinic.com/api/';
let adityaurl = 'http://localhost:5500/';

const initialState = {
  doctor: undefined,
  patient: { id: undefined, name: null, phone: "" },
  bookTimeSlot: "",
  selectedRole: "doctor",
  IsOnline: false,
  IsDoctor: true,
};

const getDateFormat = (date) => {
  if (!date) return null;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getAvailableDays = (selectedDoctor) => {
  const availableDays = [];
  const offDays = [];
  const { availability } = selectedDoctor?.[0] || {};

  Object.entries(availability || {}).forEach(([dateKey, dateValue]) => {
    if (dateValue.a_status === "Available") {
      availableDays.push(dateKey);
    } else {
      offDays.push(dateKey);
    }
  });

  return availableDays;
};

const fetchAppointments = async (doctorId, date) => {
  try {
    const formattedDate = date;
    const apiUrl = `${adityaurl}appointment/external?doctorName=${doctorId}&date=${formattedDate}&page=1&limit=100`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch appointments");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return null;
  }
};


const createItem = async (path, data) => {
  try {
    
    const response = await fetch(`${adityaurl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      // window.alert(errorData?.message || "Something went wrong");
      throw new Error(errorData?.message || "Something went wrong");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    // window.alert("Something went wrong while fetching data");
  }
};

export default function AppointmentPage() {
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState("online");
  const [submitted, setSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [consultationType, setConsultationType] = useState("");
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState({});
  const [doctorsData, setDoctorsData] = useState(null);
  const [consultantDoctors, setConsultantDoctors] = useState(null);
  const [customers, setCustomers] = useState(null);
  const [assistantDoctor, setAssistantDoctor] = useState([]);
  const [timeslots, settimeslots] = useState();
  const [bookedSlot, setBookedSlot] = useState();
  const [bookedAppointments, setBookeedAppointments] = useState();

  useEffect(() => {
    console.log("fial form data", formData);
  }, [formData]);

  useEffect(() => {
    let selectedDoctor = doctorsData?.filter((doctor) => doctor._id == formData?.doctor?.id)?.[0];
    let ibookedSlots = selectedDoctor?.availability?.[getDateFormat(date)]?.timeSlots || [];
    settimeslots(ibookedSlots);

    fetchAppointments(formData?.doctor?.id, "2025-01-01").then((apn) => {
      const bookedAppointments =
    (Object.keys(apn || {}).length > 0 &&
    apn?.filter((e) => e?.bookDate?.slice(0, 10) === getDateFormat(date))
        .filter((e) => e?.status !== 'Cancelled')
        .map((e) => ({
          patient: e?.patient?.id,
          bookedTime: e?.bookTimeSlot?._id,
          bookedStatus: e?.status,
          name: e?.patient?.name,
        }))) ||
    [];
      setBookeedAppointments(bookedAppointments);
    });

    console.log('wrorn gdate selcted', date)
  }, [date]);

  useEffect(() => {
    let apiUrl = "";
    switch (formData?.selectedRole) {
      case "doctor":
        apiUrl = `${adityaurl}doctor/external/doctor`;
        break;
      case "assistantDoctor":
        apiUrl = `${adityaurl}assistantDoctor`;
        break;
      case "consultant":
        apiUrl = `${adityaurl}consultant`;
        break;
      default:
        return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        if (formData?.selectedRole === "doctor") {
          setDoctorsData(data);
        } else if (formData?.selectedRole === "assistantDoctor") {
          setAssistantDoctor(data);
        } else if (formData?.selectedRole === "consultant") {
          setConsultantDoctors(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [formData?.selectedRole]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    setHasMounted(true);
    setDate(new Date());
  }, []);

  const handelButtonClick = (e) => {
    e.preventDefault()
    let isValidInput = true;
    let updatedFormError = { ...formError };

    if (!formData.patient || !formData.patient.name) {
      updatedFormError.patient.name = 'Patient Name is required!';
      window.alert('Patient name is required!');
      isValidInput = false;
    } else {
      if (formData?.patient?.id === undefined) {
        const nameParts = formData.patient.name.split(' ');
        if (nameParts.length !== 2) {
          updatedFormError.patient.name = 'Invalid format for Patient Name. Please provide both first name and surname.';
          window.alert('Invalid patient name');
          isValidInput = false;
        }
      }
    }

    if (formData?.patient?.phone?.length < 10) {
      window.alert('Invalid phone number');
      isValidInput = false;
    }

    if (!formData.bookDate) {
      // Validate date
      updatedFormError.bookDate = 'please select date';
      window.alert('please select date');
      isValidInput = false;
    }

    //  validate doctor name
    if (!formData.bookTimeSlot._id) {
      updatedFormError.bookTimeSlot = 'please select time';
      window.alert('please select time');
      isValidInput = false;
    }

    // Set role-specific properties
    if (formData.selectedRole === 'consultant') {
      formData.IsConsultant = true;
    } else {
      formData.IsConsultant = false;
    }

    if (formData.selectedRole === 'assistantDoctor') {
      formData.IsAssistantDoctor = true;
    } else {
      formData.IsAssistantDoctor = false;
    }

    if (formData.selectedRole === 'doctor') {
      formData.IsDoctor = true;
    } else {
      formData.IsDoctor = false;
    }

    formData.IsOnline = formData.IsOnline;
    setFormError(updatedFormError);


    if (isValidInput) {
      if (formData?.patient?.id === undefined) {
        let names = formData?.patient?.name?.split(' ');

        createItem('public/customer/', { firstName: names?.[0], surname: names?.[1], mobile: formData?.patient?.phone }).then((e) => {
          let data = e?.customer;
          let updateData = { ...formData };
          updateData.patient.name = names?.[0];
          updateData.patient.surname = names?.[1];
          updateData.patient.id = data?._id;

          if (updateData?.patient.id !== undefined) {
            createItem('public/appointment' ,updateData).then(apbook=>{
              window.alert('Appointment booked successfully!');
            }).catch(err=>{
              window.alert('Failed To Book')
            });
          }
        });
      } else {
        createItem('public/appointment', formData).then(apbook=>{
          window.alert('Appointment booked successfully!');
        }).catch(err=>{
          window.alert('Failed To Book')
        });
      }
    }
  };

  if (!hasMounted) return null;

  return (
    <>
      <Header />
      <Navbar />
      <section className="bg-[#e3ffe0] py-2 px-3 sm:px-4 lg:px-6">
        <form className="max-w-screen mx-auto grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6" onSubmit={handelButtonClick}>
          {/* Form Section */}
          <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col" data-aos="fade-right">
            <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">Book an Appointment</h2>

            {submitted && <div className="mb-3 p-2 rounded-lg bg-green-100 text-green-800 border border-green-300 animate-fadeIn text-sm">✅ Appointment submitted successfully!</div>}

            <div className="space-y-2 flex-1">
              <SelectField
                label="Select Role"
                name="selectedRole"
                placeholder="Select Role"
                options={[
                  { value: "doctor", label: "Doctor" },
                  { value: "consultant", label: "Consultant" },
                  { value: "assistantDoctor", label: "Assistant Doctor" },
                ]}
                onChange={(e) => setFormData((prev) => ({ ...prev, selectedRole: e.target.value }))}
                error={formError.selectedRole}
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
                    }}
                    value={formData?.patient.phone}
                    type="text"
                    name="phoneNumber"
                    error={formError?.patient?.phone}
                  />
                  <button
                    type="button"
                    className="px-2 py-1 mt-5 bg-green-600 text-white rounded"
                  >
                    Search
                  </button>
                  </div>
                    <div className="flex justify-start gap-10 items-center w-full p-3 m-2 border border-gray-300 rounded-lg">

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
                  placeholder="Select Patient"
                  label={"Select Existing"}
                  name={"doctor"}
                  error={formError.doctor}
                />
          <span className="text-black">OR</span>
                  <InputField
                  required={true}
                    label="Create New"
                    name="name"
                    onChange={(e) => {
                    let selectedPatient = customers?.filter((p) => `${p?.firstName} ${p?.surname}` == e.target.value)?.[0];
                    if (selectedPatient !== undefined) {
                      setFormData((prev) => ({ ...prev, patient: { id: selectedPatient?._id, name: selectedPatient?.firstName, phone: selectedPatient?.mobile, surname: selectedPatient?.surname } }));
                    } else {
                      setFormData((prev) => ({ ...prev, patient: { name: e.target.value, phone: "" } }));
                    }
                  }}
                  value={customers?.filter((p) => p?._id == formData?.patient?.id)?.[0]?.firstName}
                  error={formError?.patient?.name}
                  placeholder="[firstname lastname]"
                />
                </div>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Choose a Date</label>
                  <Calendar
                    locale="en-GB"
                    onChange={setDate}
                    value={date}
                    tileDisabled={({ date }) => !getAvailableDays(doctorsData?.length > 0 && doctorsData?.filter((doctor) => doctor._id == formData?.doctor?.id))?.includes(date?.toISOString().slice(0, 10))}
                    className="rounded-lg border border-gray-200 w-full calendar-compact text-black"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3  items-start">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Available Slots</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeslots.map((slot, idx) => {
                        const isBooked = bookedAppointments?.filter((i) => i?.bookedTime == slot?._id)?.[0];
                        return (
                          <button
                            type="button"
                            key={slot?._id}
                            disabled={isBooked?.bookedStatus}
                            onClick={() => {
                              if (!isBooked?.bookedStatus) {
                                setFormData((prevForm) => ({ ...prevForm, bookDate: date, bookTimeSlot: slot }));
                                setBookedSlot(slot?._id);
                              }
                            }}
                            className={`px-2 py-1 rounded-lg text-xs font-medium border transition ${
                              isBooked?.bookedTime ? "bg-red-100 text-red-500 border-red-300 cursor-not-allowed" : selectedSlot === slot.time ? "bg-green-600 text-white border-green-700" : "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"
                            }`}
                          >
                            <div
                              className="slotContent flex flex-col text-center"
                              data-te-toggle="tooltip"
                              data-te-placement="top"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                              title={bookedAppointments?.filter((i) => i?.bookedTime === slot?._id)?.[0]?.name ? `Booked By ${bookedAppointments?.filter((i) => i?.bookedTime === slot?._id)?.[0]?.name}` : "Empty"}
                            >
                              <p className="text-sm">
                                {slot?.startTime} - {slot?.endTime}
                              </p>
                              <p className="bookedStatusLabel text-sm ">{isBooked?.bookedTime ? (isBooked?.bookedStatus ? isBooked?.bookedStatus : "Booked") : bookedSlot !== slot?._id ? "Available" : "Booked"}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

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

              <button type="submit" className="w-full bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition mt-3 text-sm">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden" data-aos="fade-left">
            <Image src="/appointment.png" alt="Appointment Booking" width={400} height={400} className="object-cover w-full h-full" />
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

/* Helper Components */
function InputField({ label, name, type = "text", required, onChange, error, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 text-black">{label}</label>
      <input onChange={onChange} type={type} name={name} required={required} placeholder={placeholder} className="w-full border border-gray-300 rounded px-2 py-1 text-sm text-black" />
      {error && <small>{error}</small>}
    </div>
  );
}

function SelectField({ label, name, options, required, onChange, error }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select name={name} className="w-full border border-gray-300 rounded px-2 py-1 text-sm text-black" required={required} onChange={onChange} defaultValue="">
        {name !== "selectedRole" && (
          <option value="" disabled>
            -- Select an option --
          </option>
        )}
        {options.map((opt, idx) => (
          <option key={idx} value={opt?.value}>
            {opt?.label}
          </option>
        ))}
      </select>
      {error && <small>{error}</small>}
    </div>
  );
}

function RadioField({ label, value, checked, onChange }) {
  return (
    <label className="inline-flex items-center text-sm">
      <input type="radio" name="mode" value={value} checked={checked} onChange={onChange} className="text-green-600" />
      <span className="ml-1 text-gray-700">{label}</span>
    </label>
  );
}
