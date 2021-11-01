import React from 'react';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import PharmaNav from '../components/Pharmacy/PharmaNav/PharmaNav';
import Footer from '../components/HomePage/HomePage/Footer/Footer';
import PharmaSidebar from '../components/Pharmacy/PharmaSidebar/PharmaSidebar';
import Medicines from '../components/Pharmacy/Medicines/Medicines';

const pharmacyMedicines = () => {
    return (
        <div>
            <Navbar />
            <PharmaNav />
            <div className="grid grid-cols-12">
                <div class="col-span-3">
                    <PharmaSidebar />
                </div>
                <div class="col-span-9 container ">
                    <Medicines />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default pharmacyMedicines;