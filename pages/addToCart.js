import React, { useState } from 'react';
import Footer from '../components/HomePage/HomePage/Footer/Footer';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import AddToCartBody from '../components/Pharmacy/AddToCart/AddToCartBody/AddToCartBody';
import AddToCartSidebar from '../components/Pharmacy/AddToCart/AddToCartSidebar/AddToCartSidebar';
import PharmaNav from '../components/Pharmacy/PharmaNav/PharmaNav';

const addToCart = () => {
    const [message,setMessage]=useState({"name":"pharmacy"})
    return (
        <div class="bg-gray-50">
            <Navbar />
            <PharmaNav message={message} />
            <div class="">
                <div class="flex shadow-sm mx-20 my-10">
                    <AddToCartBody />
                    <AddToCartSidebar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default addToCart;