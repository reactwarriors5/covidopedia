import React, { useState, useEffect } from 'react';


import PharmaCardDetails from '../PharmaCardDetails/PharmaCardDetails';

const pharmaData =
    [
        {
            "name": "Medlife Medical",
            "image": "https://doccure-laravel.dreamguystech.com/template/public/assets/img/medical-img1.jpg",
            "mobile": "320-795-8815",
            "address": "96 Red Hawk Road Cyrus, MN 56323",
            "pharmacy": "Chemists, Surgical Equipment Dealer",
            "openTime": "Opens at 08.00 AM"

        },
        {
            "name": "PharmaMed Medical",
            "image": "https://doccure-laravel.dreamguystech.com/template/public/assets/img/medical-img2.jpg",
            "mobile": "913-631-2538",
            "address": "3830 Poe Lane Kansas City, KS 66216",
            "pharmacy": "Chemists, Surgical Equipment Dealer",
            "openTime": "Opens at 08.00 AM"

        },
        {
            "name": "The Pill Club Medical",
            "image": "https://doccure-laravel.dreamguystech.com/template/public/assets/img/medical-img3.jpg",
            "mobile": "816-270-2336",
            "address": "3849 Nutter Street Ferrelview, MO 64163",
            "pharmacy": "Chemists, Surgical Equipment Dealer",
            "openTime": "Opens at 08.00 AM"

        }
    ]
const PharmaCard = () => {
    const [pharmaShop, setPharmaShop] = useState([]);
    useEffect(() => setPharmaShop(pharmaData), [])

    return (
        <div className='bg-gray-50  py-8 my-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:container lg:px-2'>
            {/* flex -- two divs */}

            {
                pharmaShop.map((pharma) => <PharmaCardDetails pharma={pharma}></PharmaCardDetails>)
            }
            <div className="btn">
                <button class="bg-indigo-500  text-white  active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                    Load More
                </button>
            </div>

        </div>
    );
};

export default PharmaCard;

