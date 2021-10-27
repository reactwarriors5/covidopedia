import React from 'react';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import PharmaNav from '../components/Pharmacy/PharmaNav/PharmaNav';
import Footer from '../components/HomePage/HomePage/Footer/Footer';
import PharmaCard from '../components/Pharmacy/PharmaCard/PharmaCard';
import PharmaSidebar from '../components/Pharmacy/PharmaSidebar/PharmaSidebar';

const pharmacy = () => {
    return (
        <div>
            <Navbar />
            <PharmaNav />
            <div className="grid grid-cols-12 gap-2">
                <div class="col-span-3">
                    <PharmaSidebar />
                </div>
                <div class="col-span-9 container ">
                    <PharmaCard /> 
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default pharmacy;