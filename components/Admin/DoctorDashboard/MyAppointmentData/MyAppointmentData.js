import React from "react";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";

const appointmentCardData = [
  {
    patientId: "P0001",
    patientName: "Shakil Atik",
    patientPhone: "+8801555222555",
    appointmentTime: "06 OCT 2021, 10.15 A.M",
    patientEmail: "example@atik.com",
    patientAddress: "Savar, Dhaka, Bangladesh",
  },
  {
    patientId: "P0001",
    patientName: "Shakil Atik",
    patientPhone: "+8801555222555",
    appointmentTime: "06 OCT 2021, 10.15 A.M",
    patientEmail: "example@atik.com",
    patientAddress: "Savar, Dhaka, Bangladesh",
  },
  {
    patientId: "P0001",
    patientName: "Shakil Atik",
    patientPhone: "+8801555222555",
    appointmentTime: "06 OCT 2021, 10.15 A.M",
    patientEmail: "example@atik.com",
    patientAddress: "Savar, Dhaka, Bangladesh",
  },
];

const MyAppointmentData = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <section className="flex-1">
      {/* common component */}
      <DashboardHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* main content here */}
      <div className="px-5 pt-5">
        {appointmentCardData.map((appointmentCardData, idx) => {
          return (
            <AppointmentCard
              appointmentCardData={appointmentCardData}
              key={idx}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MyAppointmentData;
