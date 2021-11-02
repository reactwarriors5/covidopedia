import React, { useState } from 'react';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import PharmaNav from '../components/Pharmacy/PharmaNav/PharmaNav';
import Footer from '../components/HomePage/HomePage/Footer/Footer';
import PharmaDetailsTab from '../components/Pharmacy/PharmaDetailsTab/PharmaDetailsTab';
import AboutPharmacy from '../components/Pharmacy/AboutPharmacy/AboutPharmacy';

const pharmacyDetails = () => {
    const [message,setMessage]=useState({"name":"pharmacyDetails"})
    return (
        <div className="bg-gray-100">
            <Navbar  />
            <PharmaNav message={message} />
            <AboutPharmacy/>
            <PharmaDetailsTab/>
            <Footer />
        </div>
    );
};

export default pharmacyDetails;
