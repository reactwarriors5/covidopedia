import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import MyAppointmentData from "../MyAppointmentData/MyAppointmentData";

const MyAppointments = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="lg:flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <MyAppointmentData
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </>
  );
};

export default MyAppointments;
