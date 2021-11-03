import React from 'react';

const YourOrder = () => {
    return (
        <div class="flex justify-start">
            <div class="bg-white shadow-lg rounded-lg  w-8/12">
                <div class="w-full p-4 px-5 py-5">
                    <div class="flex flex-row">
                        <h2 class="text-3xl font-semibold">Your Order</h2>
                    </div>

                    <div class="flex justify-between items-center ">
                        <p class="">Product</p>
                        <a href="#" class="">Total</a>
                    </div>
                    <div class="flex justify-between items-center ">
                        <p class="">Safi Natural Blood Purifier Syrup 200 ml Manufactured By Hamdard (Wakf) Laboratories</p>
                        <a href="#" class="">$200</a>
                    </div>
                    <div class="flex justify-between items-center pt-5">
                        <p class="">Safi Natural Blood Purifier Syrup 200 ml</p>
                        <a href="#" class="">$200</a>
                    </div>
                    <div class="flex justify-between items-center pt-5">
                        <p class="">Subtotal</p>
                        <a href="#" class="">$5,877.00</a>
                    </div>
                    <div class="flex justify-between items-center pt-5">
                        <p class="">Shipping</p>
                        <a href="#" class="">$25.00</a>
                    </div>
                    <div class="flex justify-between items-center pt-5">
                        <p class="">Tax</p>
                        <a href="#" class="">$0.00</a>
                    </div>
                    <div class="flex justify-between items-center pt-5">
                        <p class="">Total</p>
                        <a href="#" class="">$160</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourOrder;