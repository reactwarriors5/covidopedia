import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice/userSlice";
import AppointmentTable from "../AppointmentTable/AppointmentTable";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AllPatientTable from "../SuperAdmin/AllPatientTable/AllPatientTable";

const AppointmentData = ({ sidebarOpen, setSidebarOpen }) => {
  const user = useSelector(selectUser)
  return (
    <section className="flex-1">
      {/* common component */}
      <DashboardHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* main content here */}
      {
      user.user.role === 'user' ? <div className="p-5">  <AppointmentTable /></div>:
      <div className="p-5">  <AllPatientTable /></div>

      }


    </section>
  );
};

export default AppointmentData;
