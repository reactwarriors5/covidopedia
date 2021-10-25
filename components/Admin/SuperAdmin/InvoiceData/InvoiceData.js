import React from 'react';
import DashboardHeader from '../../DashboardHeader/DashboardHeader';
import InvoiceDetails from '../InvoiceDetails/InvoiceDetails';

const InvoiceData = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <section className="flex-1">
        {/* common component */}
        <DashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* main content here */}
        <div className="px-5 pt-5">
          <InvoiceDetails/>
        </div>
      </section>
    );
};

export default InvoiceData;