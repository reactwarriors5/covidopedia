import React from 'react';

const BillingDtails = () => {
    return (
        <div class="flex justify-end">
            <div class="bg-white shadow-lg rounded-lg mr-5 w-9/12">
                <div class="w-full p-4 px-5 py-5">
                    <div class="flex flex-row mb-2">
                        <h1 class="text-3xl font-semibold">Billing details</h1>
                    </div>
                    <hr />

                    <form action="/" method="post" className="">
                        <h3 class="text-xl font-semibold my-3">Personal Information</h3>
                        <div class="flex justify-between">
                            <div class="flex flex-col mb-4 w-full mr-2">
                                <label class="mb-2 text-sm text-gray-900" for="first_name">First Name</label>
                                <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" />
                            </div>
                            <div class="flex flex-col mb-4 w-full ml-2">
                                <label class="mb-2 text-sm text-gray-900" for="last_name">Last Name</label>
                                <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name" />
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex flex-col mb-4 w-full mr-2">
                                <label class="mb-2 text-sm text-gray-900" for="email">Email</label>
                                <input class="border py-2 px-3 text-grey-800" type="email" name="email" id="email" />
                            </div>
                            <div class="flex flex-col mb-4 w-full ml-2">
                                <label class="mb-2 text-sm text-gray-900" for="password">Password</label>
                                <input class="border py-2 px-3 text-grey-800" type="password" name="password" id="password" />
                            </div>
                        </div>

                        <p className="mb-8">Existing Customer? Click here to login</p>
                        <hr />

                        <h3 class="text-xl font-semibold mt-8 mb-3">Payment Method</h3>

                        <div class="flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            </svg>

                            <p className="text-lg font-semibold my-3 ml-2">Credit Card</p>
                        </div>

                        <div class="flex justify-between">
                            <div class="flex flex-col mb-4 w-full mr-2">
                                <label class="mb-2 text-sm text-gray-900" for="first_name">Name on Card</label>
                                <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" />
                            </div>
                            <div class="flex flex-col mb-4 w-full ml-2">
                                <label class="mb-2 text-sm text-gray-900" for="last_name">Card Number</label>
                                <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name" />
                            </div>
                        </div>

                        <div class="flex justify-between">
                            <div class="flex flex-col mb-4 ">
                                <label class="mb-2 text-sm text-gray-900" for="first_name">Expiry Month</label>
                                <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" />
                            </div>
                            <div class="flex flex-col mb-4 mx-1">
                                <label class="mb-2 text-sm text-gray-900" for="last_name">Expiry Year</label>
                                <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name" />
                            </div>
                            <div class="flex flex-col mb-4">
                                <label class="mb-2 text-sm text-gray-900" for="last_name">CVV</label>
                                <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name" />
                            </div>
                        </div>

                        <div class="flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>

                            <p className="text-lg font-semibold my-3 ml-2">Paypal</p>
                        </div>

                        <div class="flex justify-start items-center mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                            </svg>

                            <p className="ml-1">I have read and accept Terms & Conditions</p>
                        </div>

                        <button
                            style={{ backgroundColor: "#09e5ab" }}
                            class="text-white  text-sm  p-4 rounded "
                            type="submit"
                        >
                            Confirm and Pay
                        </button>


                    </form>

                </div>
            </div>
        </div>
    );
};

export default BillingDtails;