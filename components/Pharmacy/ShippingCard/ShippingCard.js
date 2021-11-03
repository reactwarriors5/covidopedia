import React, { useState } from 'react';
import { toast } from 'react-toastify'
import Link from 'next/link'

const ShippingCard = () => {
    const [counter, setCounter] = useState(1);
    const [price, setPrice] = useState(19)

    const incrementCounter = () => {

        setCounter(counter + 1)
        setPrice(19 * (counter + 1));

    };
    let decrementCounter = () => {
        setCounter(counter - 1)
        setPrice(19 * (counter - 1));
    };

    if (counter <= 0) {
        decrementCounter = () => {
            alert("It is invalid!")
        };
    }
    const handleCheckout = () => {
        toast.info('Checkout Successfully !')

    }

    return (
        <div className="mt-5 ml-4 ">
            <div class=" flex  space-y-10 justify-between items-center">

                <div class="bg-white w-5/6  shadow-sm rounded p-5">
                    <div className="divide-y">
                        <h1 class="text-3xl font-medium">${price} <span className="text-xs text-green-500">10% off</span></h1>
                    </div>

                    <div class="space-y-5 mt-5">
                        <p class="text-sm "><span className="bg-green-400 font-semibold text-white">In stock</span></p>
                        <div className="flex justify-between items-center border-2">
                            <svg onClick={decrementCounter} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-dash-lg bg-gray-300" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                            </svg>
                            <p className="text-lg">{counter}</p>
                            <svg onClick={incrementCounter} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus-lg bg-gray-300" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>
                        </div>

                        <button
                            class="text-center w-full bg-indigo-500  text-white py-3 font-medium"
                            onClick={handleCheckout}
                        >
                            <Link href="/addToCart">
                                <a class="">Add to Cart</a>
                            </Link>
                        </button>


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