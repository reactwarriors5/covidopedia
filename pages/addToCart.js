import React from 'react';
import Footer from '../components/HomePage/HomePage/Footer/Footer';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import AddToCartBody from '../components/Pharmacy/AddToCart/AddToCartBody/AddToCartBody';
import AddToCartSidebar from '../components/Pharmacy/AddToCart/AddToCartSidebar/AddToCartSidebar';

const addToCart = () => {
    return (
        <>
            <Navbar />
            <div class="">
                <div class="container mx-auto mt-10">
                    <div class="flex shadow-md my-10">
                        <AddToCartBody />
                        <AddToCartSidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default addToCart;