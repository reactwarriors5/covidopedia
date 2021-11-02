import React, { useState } from 'react';
import Footer from '../components/HomePage/HomePage/Footer/Footer';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import MedicineCard from '../components/Pharmacy/MedicineCard/MedicineCard';
import PharmaNav from '../components/Pharmacy/PharmaNav/PharmaNav';
import ProductDetails from '../components/Pharmacy/ProductDetails/ProductDetails';
import ShippingCard from '../components/Pharmacy/ShippingCard/ShippingCard';

const medicineDetails = () => {
    const [message,setMessage]=useState({"name":"medicine"})
    return (
        <div>
            <Navbar />
            <PharmaNav message={message} />
            <div className="grid grid-cols-12 bg-gray-50">
                <div class="col-span-9">
                    <MedicineCard />
                    <ProductDetails />
                </div>
                <div class="col-span-3 ">
                    <ShippingCard />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default medicineDetails;