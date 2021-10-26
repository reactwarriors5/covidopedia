import React, { useEffect, useState } from "react";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";

import axios from 'axios'
axios.defaults.withCredentials = true

const MyAppointmentData = ({ sidebarOpen, setSidebarOpen }) => {
  const [appointmentCardData,setAppointmentCardData]=useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/doctor-appointments`)
      setAppointmentCardData(data)
      console.log(data)
    }
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
