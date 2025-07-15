"use client";
import dynamic from "next/dynamic";

const AppointmentForm = dynamic(() => import(".//appointment"), {
  ssr: false,
});

export default function ClientAppointmentWrapper() {
  return <AppointmentForm />;
}
