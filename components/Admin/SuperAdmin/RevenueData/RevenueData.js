import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
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
      </section>
    );
};

export default RevenueData;