import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
const PharmaLocation = () => {

    return (
        <div className=" py-8 my-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:container lg:px-2">
            <div className="flex justify-between items-start  shadow-sm p-5 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-1/2">
                    {/* doc img div */}
                    
                    {/* doc info div */}
                    <div className="font-semibold text-gray-700 ml-6">
                        <h4 className='text-lg font-bold '>
                            Medlife Medical
                        </h4>
                        <div className="mb-5">
                            <FontAwesomeIcon className="m-1 check" icon={faStar} />
                            <FontAwesomeIcon className="m-1 check" icon={faStar} />
                            <FontAwesomeIcon className="m-1 check" icon={faStar} />
                            <FontAwesomeIcon className="m-1 check" icon={faStar} />
                            <FontAwesomeIcon className="m-1" icon={faStar} />
                        </div>
                        <div className="flex font-semibold gap-1 mb-3 text-gray-500 ">
                            <svg className="mt-2 mr-2 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <p className="text-xs ">320-795-8815</p>
                        </div>
                        <div className="flex  text-gray-500 mb-3 ">
                            <FontAwesomeIcon className="mt-2 mr-2 " icon={faMapMarkerAlt} />
                            <p className="text-xs mt-2">96 Red Hawk Road Cyrus, MN 56323</p>
                        </div>
                        <div className="flex  text-gray-500 mb-3">
                            <svg className="mt-2 mr-2 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <p className="text-xs ">Chemists, Surgical Equipment Dealer</p>
                        </div>
                        <div className="flex  text-gray-500 ">
                            <svg className="mt-2 mr-2 mb-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <p className="text-xs ">Opens at 08.00 AM</p>
                        </div>


                    </div>
                </div>
                <div className="-space-y-2 grid grid-cols-1 gap-2 mr-80 mt-1 text-md">

                  <div className="mb-2">
                      <h1 className="text-bold text-xl">Mon - Sat</h1>
                      <p>10:00 AM - 2:00 PM</p>
                      <p>4:00 PM - 9:00 PM</p>
                  </div>
                  <div className="mb-2">
                      <h1 className="text-bold text-xl">Sun</h1>
                      <p>10:00 AM - 2:00 PM</p>
                      <p>4:00 PM - 9:00 PM</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default PharmaLocation;