import React from 'react';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import PharmaNav from '../components/Pharmacy/PharmaNav/PharmaNav';
import Footer from '../components/HomePage/HomePage/Footer/Footer';
import PharmaDetailsTab from '../components/Pharmacy/PharmaDetailsTab/PharmaDetailsTab';
import AboutPharmacy from '../components/Pharmacy/AboutPharmacy/AboutPharmacy';

const pharmacyDetails = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <PharmaNav />
            <AboutPharmacy/>
            <PharmaDetailsTab/>
            <Footer />
        </div>
    );
};

export default pharmacyDetails;
