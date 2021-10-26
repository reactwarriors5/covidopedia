import React, { useEffect, useState } from "react";
import axios from 'axios'
import DashboardHeader from "../../DashboardHeader/DashboardHeader";
import PatientCard from "../PatientCard/PatientCard";
axios.defaults.withCredentials = true

const MyPatientData = ({ sidebarOpen, setSidebarOpen }) => {
  const [patientCardData,setPatientCardData]=useState([]);

  const getAppointments = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/doctor-appointments`)
    setPatientCardData(data)
    console.log(data)
  }

  useEffect(() => {
    getAppointments()
  }, [])
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
