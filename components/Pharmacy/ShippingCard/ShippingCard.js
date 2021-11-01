import React from 'react';

const ShippingCard = () => {
    return (
        <div className="mt-5 ">
            <div class="bg-white flex  space-y-10 justify-between items-center">

                <div class="bg-white w-5/6  shadow-xl rounded p-5">
                    <div className="divide-y">
                        <h1 class="text-3xl font-medium">$19 $45 10% off</h1>
                    </div>

                    <div class="space-y-5 mt-5">
                        <p class="text-sm">In stock</p>
                        <div className="flex justify-between items-center border-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-dash-lg bg-gray-300" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                            </svg>
                            <p className="">10</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus-lg bg-gray-300" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>
                        </div>
                        <button class="text-center w-full bg-blue-700  text-white py-3 font-medium">ADD TO CART</button>

                        <div>
                            <div className="p-3 flex justify-between border-2">
                                <p>SKU</p>
                                <p>201902-0057</p>
                            </div>

                            <div className="p-3 flex justify-between border-2">
                                <p>Pack Size</p>
                                <p>100g</p>
                            </div>

                            <div className="p-3 flex justify-between border-2">
                                <p>Unit Count</p>
                                <p>200ml</p>
                            </div>

                            <div className="p-3 flex justify-between border-2">
                                <p>Country</p>
                                <p>Japan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingCard;