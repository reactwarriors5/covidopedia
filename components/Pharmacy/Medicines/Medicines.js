import React, { useEffect, useState } from 'react';
// import {MedicinesData} from "../MedicinesData/MedicinesData.json";
import MedicinesDetails from '../MedicinesDetails/MedicinesDetails';

const MedicinesData = [
    {
        "name": "seclo tablet",
        "price": "55",
        "Image": "http://www.squarepharma.com.bd/products/Seclo%2040%20Capsule.jpg"
    },
    {
        "name": "Napa Extra",
        "price": "15",
        "Image": "https://emedi.com.bd/wp-content/uploads/2020/09/Napa-Extra-Tablet.jpg"
    },
    {
        "name": "Barri tablet",
        "price": "15",
        "Image": "https://beximco-pharma.com/cdn/bpl/product/img/barri-1.jpg"
    },
    {
        "name": "Kinexa tablet",
        "price": "15",
        "Image": "https://beximco-pharma.com/cdn/bpl/product/img/kinexa-1.jpg"
    },
    {
        "name": "Billi",
        "price": "15",
        "Image": "https://beximco-pharma.com/cdn/bpl/product/img/billi-1.jpg"
    }
]

const Medicines = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => setMedicines(MedicinesData),[])
    console.log(medicines)
    return (
        <div className="">
            <div>
                <nav style={{ backgroundColor: "" }} class="pt-5 max-w-7xl mx-auto">
                    <div class="h-16">
                        <h1 class="">beximco pharma</h1>
                        <p>Dhaka, Bangladesh.</p>
                        <p>Showing 6 of 98 products</p>
                    </div>
                </nav>
            </div>
           
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        medicines.map((medicine) => <MedicinesDetails medicine={medicine}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Medicines;

