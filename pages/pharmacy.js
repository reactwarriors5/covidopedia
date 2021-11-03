import React, { useState } from 'react';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import PharmaNav from '../components/Pharmacy/PharmaNav/PharmaNav';
import Footer from '../components/HomePage/HomePage/Footer/Footer';
import PharmaCard from '../components/Pharmacy/PharmaCard/PharmaCard';
import PharmaSidebar from '../components/Pharmacy/PharmaSidebar/PharmaSidebar';

const pharmacy = () => {
    const [message,setMessage]=useState({"name":"pharmacy"})
    return (
        <div>
            <Navbar />
            <PharmaNav message={message} />
            <div className="grid grid-cols-12">
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