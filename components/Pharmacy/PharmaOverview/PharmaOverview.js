import React from 'react';

const PharmaOverview = () => {
    return (

        <div class="grid grid-cols-3">
            <div class="col-span-2 ...">
                <h1 className="text-bold text-start text-xl ml-12 mb-2">About</h1>
                <p className="text-justify ml-12 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="..."></div>
            <div className="col-span-2">
                <div className=" sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <h1 className="text-bold text-start text-xl ml-4 mb-2">Award</h1>
                    <div className="lg:py-6 lg:pr-16">
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-1 text-lg font-bold">Humanitarian Award</p>
                                <p className="text-lg font-bold text-indigo-300">July 2019</p>
                                <p className="text-gray-700 text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                                    ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-1 text-lg font-bold">Certificate for International Volunteer Service</p>
                                <p className="text-lg font-bold text-indigo-300">March 2019</p>
                                <p className="text-gray-700 text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                                    ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-4 text-gray-600"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <line
                                                fill="none"
                                                strokeMiterlimit="10"
                                                x1="12"
                                                y1="2"
                                                x2="12"
                                                y2="22"
                                            />
                                            <polyline
                                                fill="none"
                                                strokeMiterlimit="10"
                                                points="19,15 12,22 5,15"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-1 text-lg font-bold">The Dental Professional of The Year Award</p>
                                <p className="text-lg font-bold text-indigo-300">November 2019</p>
                                <p className="text-gray-700 text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a 
                                    ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>

    );
};

export default PharmaOverview;
