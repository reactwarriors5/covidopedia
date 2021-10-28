import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import BarChart from '../BarChart/BarChart';
import RevenueData from '../RevenueData/RevenueData';

const TotalRevenue = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <>
            <div className="lg:flex">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <RevenueData
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

             
            </div>
        </>
    );
};

export default TotalRevenue;