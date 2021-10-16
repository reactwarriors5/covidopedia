import React from 'react';
import DoctorRegistrationForm from '../../DoctorRegistrationForm/DoctorRegistrationForm';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const RegistrationForm = ({ sidebarOpen, setSidebarOpen }) => {
    return (
       <section className="flex-1">
        <DashboardHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        />
        <div className="">
            <DoctorRegistrationForm/>
        </div>
       </section>
    );
};

export default RegistrationForm;