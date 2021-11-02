import React, { useState } from 'react';


const PharmaNav = (props) => {
    const [menuItem, setMenuItem] = useState(false);
    console.log(props.message);
    const { name } = props.message;


    const isOpen = () => {
        if (menuItem === false) {
            setMenuItem(true);
        }
        else {
            setMenuItem(false);
        }
    }
    return (
        <nav style={{ backgroundColor: "#15558d" }} class=" dark:bg-gray-800  shadow py-4 ">
            <div class=" ">
                <div class="flex ml-8  h-16">
                    <div class="">
                        <p class="text-white" >Home / Search</p>

                        {
                            name === 'pharmacy' ?
                                <p className="text-white font-bold text-xl">2245 matches found for  Pharmacy In United States</p>
                                :
                                name === 'products' ?
                                    <p className="text-white font-bold text-xl">Pain Relif 70 Products</p>
                                    :
                                    name === 'pharmacyDetails' ?
                                        <p className="text-white font-bold text-xl">Pharmacy Details</p>
                                        :
                                        <p className="text-white font-bold text-xl">Product Description</p>

                        }

                    </div>
                    <div class=" ml-auto mr-6 mt-3">
                        <div class="ml-4 flex items-center md:ml-6">
                            <div class="ml-3 relative">
                                <div class="relative inline-block text-left">
                                    <div className="flex gap-2">
                                        <div>
                                            <p className="text-white text-center mt-1 ">Sort by</p>
                                        </div>
                                        <div onClick={isOpen}>
                                            <button type="button" class=" gap-4 pt-2 pb-2 border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                                Select
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={menuItem ? "visible" : "invisible"}>
                                        <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                            <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                    <span class="flex flex-col">
                                                        <span>
                                                            Rating
                                                        </span>
                                                    </span>
                                                </a>
                                                <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                    <span class="flex flex-col">
                                                        <span>
                                                            Popular
                                                        </span>
                                                    </span>
                                                </a>
                                                <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                    <span class="flex flex-col">
                                                        <span>
                                                            Latest
                                                        </span>
                                                    </span>
                                                </a>
                                                <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                    <span class="flex flex-col">
                                                        <span>
                                                            Free
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default PharmaNav;