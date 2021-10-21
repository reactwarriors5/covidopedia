import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import MyPatientData from "../MyPatientData/MyPatientData";

const MyPatients = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="lg:flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <MyPatientData
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </>
  );
};

export default MyPatients;
