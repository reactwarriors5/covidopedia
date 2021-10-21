import React, { useState } from "react";
import AppointmentData from "../AppointmentData/AppointmentData";
import Sidebar from "../Sidebar/Sidebar";

const Appointments = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="lg:flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <AppointmentData
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </>
  );
};

export default Appointments;
