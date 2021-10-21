import React, { useState } from 'react';
import RegistrationForm from '../RegistrationForm/ResgistrationForm';
import Sidebar from '../Sidebar/Sidebar';

const Registration = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
      <div>
            <div className="lg:flex">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <RegistrationForm
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            />
            
        </div>
      </div>
    );
};

export default Registration;