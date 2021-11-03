import React from 'react';

const YourOrder = () => {
    return (
        <div class="flex justify-start">
            <div class="bg-white shadow-lg rounded-lg  w-8/12">
                <div class="w-full p-4 px-5 py-5">
                    <div class="flex flex-row mb-2">
                        <h2 class="text-3xl font-semibold">Your Order</h2>
                    </div>
                    <hr />

                    <div class="flex justify-between items-center mt-5 mb-1">
                        <p class="text-lg font-semibold ">Product</p>
                        <p class="text-lg font-semibold ">Total</p>
                    </div>
                    <hr />
                    <div class="flex justify-between items-center my-3">
                        <p class="w-2/3">Safi Natural Blood Purifier Syrup 200 ml Manufactured By Hamdard (Wakf) Laboratories</p>
                        <p class="">$200</p>
                    </div>
                    <hr />
                    
                    <div class="flex justify-between items-center mt-5">
                        <p class="">Safi Natural Blood Purifier Syrup 200 ml</p>
                        <a href="#" class="">$200</a>
                    </div>

                    <div class="flex justify-between items-center mt-16">
                        <p class="font-semibold">Subtotal</p>
                        <a href="#" class="font-semibold">$5,877.00</a>
                    </div>
                    <div class="flex justify-between items-center mt-5">
                        <p class="font-semibold">Shipping</p>
                        <a href="#" class="font-semibold">$25.00</a>
                    </div>
                    <div class="flex justify-between items-center my-5">
                        <p class="font-semibold">Tax</p>
                        <a href="#" class="font-semibold">$0.00</a>
                    </div>
                    <hr />
                    <div class="flex justify-between items-center pt-5">
                        <p class="font-bold">Total</p>
                        <a href="#" class="font-bold">$160</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourOrder;