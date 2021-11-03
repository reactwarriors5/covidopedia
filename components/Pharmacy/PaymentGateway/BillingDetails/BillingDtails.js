import React from 'react';

const BillingDtails = () => {
    return (
        <div class="flex justify-end">
            <div class="bg-white shadow-lg rounded-lg mr-5 w-9/12">
                <div class="w-full p-4 px-5 py-5">
                    <div class="flex flex-row">
                        <h2 class="text-3xl font-semibold">Billing details</h2>
                    </div>
                    
                    <p>Personal Information</p>
                    <div class="relative pb-5">
                        <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="E-mail" />
                        <span class="absolute text-blue-500 right-2 top-4 font-medium text-sm">Log out</span>
                    </div>
                    <span>Shipping Address</span>
                    <div class="grid md:grid-cols-2 md:gap-2">
                        <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="First name*" />
                        <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Last name*" />
                    </div>
                    <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Company (optional)" />
                    <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Address*" />
                    <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Apartment, suite, etc. (optional)" />
                    <div class="grid md:grid-cols-3 md:gap-2">
                        <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Zipcode*" />
                        <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="City*" />
                        <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="State*" />
                    </div> <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Country*" />
                    <input type="text" name="mail" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Phone Number*" />
                    <div class="flex justify-between items-center pt-2">
                        <button type="button" class="h-12 w-24 text-blue-500 text-xs font-medium">Return to cart</button>
                        <button type="button" class="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white">Continue to Shipping</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingDtails;