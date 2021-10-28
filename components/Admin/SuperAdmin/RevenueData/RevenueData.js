import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import BarChart from '../BarChart/BarChart';
import Transactions from '../Transactions/Transactions';


const RevenueData = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <section className="flex-1">
        {/* common component */}
        <DashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* main content here */}
        <div className="px-5 pt-5">
         <Transactions/>
        </div>
        <div className="px-5 pt-5">
         <BarChart/>
        </div>
      </section>
    );
};

export default RevenueData;