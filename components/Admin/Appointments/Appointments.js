import React, { useState } from "react";
import AppointmentData from "../AppointmentData/AppointmentData";
import Sidebar from "../Sidebar/Sidebar";

const UploadCourse = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div className="lg:flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <AppointmentData
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </div>
  );
};

export default UploadCourse;
