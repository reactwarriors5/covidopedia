import React from "react";
import DashboardHeader from "../../DashboardHeader/DashboardHeader";

import DoctorsTable from "../DoctorsTable/DoctorsTable";

const DoctorsData = ({ sidebarOpen, setSidebarOpen }) => {

    return (
        <section className="flex-1">
            {/* common component */}
            <DashboardHeader
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            {/* main content here */}

            <div className="p-5">
                <DoctorsTable />
            </div>:
        </section>
    );
};

export default DoctorsData;
