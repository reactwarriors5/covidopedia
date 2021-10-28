import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import DoctorsData from "../DoctorsData/DoctorsData";



const Doctors = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="lg:flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DoctorsData
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </>
  );
};

export default Doctors;
