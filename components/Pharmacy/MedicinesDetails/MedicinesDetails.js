import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const MedicinesDetails = (props) => {
    const { name, price, Image } = props.medicine
    return (
        <div className="overflow-hidden rounded bg-gray-100">

            <div className="p-3 flex justify-between items-center ">
                <Link href="/medicineDetails">
                    <a>
                        <img
                            src={Image}
                            className="object-cover w-full h-64 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            alt=""
                        />
                    </a>
                </Link>
            </div>

            <div className="px-3">
                <p className="text-2xl font-bold leading-5">{name}</p>
                <div className=" flex justify-between items-center ">
                    <h5 className="">${price}</h5>
                    <div style={{ height: "40px", width: "40px" }}
                        className="rounded-full flex items-center  justify-center hover:bg-blue-500 hover:text-white">
                        <FontAwesomeIcon className="" icon={faShoppingCart} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicinesDetails;
