import React from "react";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import PatientCard from "../PatientCard/PatientCard";

const patientCardData = [
  {
    patientId: "P0001",
    patientName: "Shakil Atik",
    patientPhone: "+8801555222555",
    appointmentTime: "06 OCT 2021, 10.15 A.M",
    patientEmail: "example@atik.com",
    patientAddress: "Savar, Dhaka, Bangladesh",
    patientAge: "20",
    patientGender: "Male",
    patientBloodGroup: "B +",
  },
  {
    patientId: "P0001",
    patientName: "Shakil Atik",
    patientPhone: "+8801555222555",
    appointmentTime: "06 OCT 2021, 10.15 A.M",
    patientEmail: "example@atik.com",
    patientAddress: "Savar, Dhaka, Bangladesh",
    patientAge: "20",
    patientGender: "Male",
    patientBloodGroup: "B +",
  },
  {
    patientId: "P0001",
    patientName: "Shakil Atik",
    patientPhone: "+8801555222555",
    appointmentTime: "06 OCT 2021, 10.15 A.M",
    patientEmail: "example@atik.com",
    patientAddress: "Savar, Dhaka, Bangladesh",
    patientAge: "20",
    patientGender: "Male",
    patientBloodGroup: "B +",
  },
];

const MyPatientData = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <section className="flex-1">
      {/* common component */}
      <DashboardHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* main content here */}
      <div className="grid grid-cols-1 gap-8 px-5 lg:grid-cols-3 justify-items-center">
        {patientCardData.map((patientCardData, idx) => {
          return <PatientCard patientCardData={patientCardData} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default MyPatientData;
