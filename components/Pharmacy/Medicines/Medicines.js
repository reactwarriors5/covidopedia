import React, { useEffect, useState } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import MedicinesData  from "../MedicinesData/MedicinesData.json";
import MedicinesDetails from '../MedicinesDetails/MedicinesDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons'


const Medicines = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => setMedicines(MedicinesData), [])
    // console.log(medicines)
    return (
        <div className="bg-gray-50">
            <div>
                <nav style={{ backgroundColor: "" }} class="flex pt-5 max-w-7xl ml-10 mx-auto">
                    <div class="h-16">
                        <h1 class="text-lg font-bold text-gray-700">Square Pharma</h1>
                        <div className="flex mb-1">
                            <FontAwesomeIcon className="mt-2 mr-2 " icon={faMapMarkerAlt} />
                            <p className=" mt-2">Noakhali,Bangladesh</p>
                        </div>
                        <p>Showing 6 of 98 products</p>
                    </div>

                </nav>
            </div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        medicines.map((medicine) => <MedicinesDetails medicine={medicine} />)
                    }
                </div>
                <div className="btn mt-5">
                <button class="bg-indigo-700  text-white  active:bg-indigo-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                >
                    Load More
                </button>
            </div>
            </div>
        </div>
    );
};

export default Medicines;

