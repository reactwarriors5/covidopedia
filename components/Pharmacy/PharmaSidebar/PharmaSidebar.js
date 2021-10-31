import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'

const PharmaSidebar = () => {
    return (
        <div className="mt-5 ">
            <div class="bg-white flex flex-col space-y-10 justify-center items-center">

                <div class="bg-white w-5/6  shadow-xl rounded p-5">
                    <div className="divide-y">
                        <h1 class="text-3xl font-medium">Search Filter</h1>
                        <hr />
                    </div>

                    <form class="space-y-5 mt-5">
                        <p class="">Location</p>
                        <input type="text" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Select Location" />

                        <div>
                            <h3 className="">Categories</h3>
                            <div className="flex justify-start items-center ">
                                <FontAwesomeIcon className="" icon={faCheckSquare} />
                                <p className="ml-2">Popular</p>
                            </div>
                            <div className="flex justify-start items-center ">
                                <FontAwesomeIcon className="" icon={faSquare} />
                                <p className="ml-2">Latest</p>
                            </div>
                            <div className="flex justify-start items-center ">
                                <FontAwesomeIcon className="" icon={faSquare} />
                                <p className="ml-2">Ratings</p>
                            </div>
                            <div className="flex justify-start items-center ">
                                <FontAwesomeIcon className="" icon={faSquare} />
                                <p className="ml-2">Availability</p>
                            </div>
                            <div className="flex justify-start items-center ">
                                <FontAwesomeIcon className="" icon={faSquare} />
                                <p className="ml-2">Open 24 Hrs</p>
                            </div>
                            <div className="flex justify-start items-center ">
                                <FontAwesomeIcon className="" icon={faSquare} />
                                <p className="ml-2">Home Delivery</p>
                            </div>
                        </div>


                        <button class="text-center w-full bg-blue-700  text-white py-3 font-medium">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PharmaSidebar;