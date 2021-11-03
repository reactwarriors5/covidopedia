import React, { useState } from 'react';
import Footer from '../components/HomePage/HomePage/Footer/Footer';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import BillingDtails from '../components/Pharmacy/PaymentGateway/BillingDetails/BillingDtails';
import YourOrder from '../components/Pharmacy/PaymentGateway/YourOrder/YourOrder';
import PharmaNav from '../components/Pharmacy/PharmaNav/PharmaNav';

const paymentGateway = () => {
    const [message, setMessage] = useState({ "name": "Payment Gateway" })

    return (
        <div class="">
            <Navbar />
            <PharmaNav message={message} />
            <div className="grid grid-cols-12">
                <div class="col-span-7 my-5">
                    <BillingDtails />
                </div>
                <div class="col-span-5 my-5">
                    <YourOrder />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default paymentGateway;