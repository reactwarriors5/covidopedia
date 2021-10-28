import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import InvoiceData from "../InvoiceData/InvoiceData";

const Invoices = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <div className="lg:flex">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <InvoiceData
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
            </div>
        </>
    );
};

export default Invoices;