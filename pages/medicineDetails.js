import React from 'react';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import MedicineCard from '../components/Pharmacy/MedicineCard/MedicineCard';
import PharmaNav from '../components/Pharmacy/PharmaNav/PharmaNav';
import ProductDetails from '../components/Pharmacy/ProductDetails/ProductDetails';
import ShippingCard from '../components/Pharmacy/ShippingCard/ShippingCard';

const medicineDetails = () => {
    return (
        <div>
            <Navbar />
            <PharmaNav />
            <div className="grid grid-cols-12">
                <div class="col-span-9">
                    <MedicineCard />
                    <ProductDetails />
                </div>
                <div class="col-span-3 ">
                    <ShippingCard />
                </div>
            </div>
        </div>
    );
};

export default medicineDetails;