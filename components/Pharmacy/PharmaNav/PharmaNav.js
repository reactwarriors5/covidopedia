import React from 'react';

const PharmaNav = () => {
    return (
        <div>
            <nav style={{backgroundColor:"#15558d"}} class=" dark:bg-gray-800  shadow py-4 ">
                <div class="max-w-7xl mx-auto ">
                    <div class="flex items-center justify-between h-16">
                        <div class=" ">
                            <p class="" >Home / Search</p>
                            <p>2245 matches found for : Pharmacy In United States</p>
                        </div>
                        
                        {/* <div class="block">
                            <div class="ml-4 flex items-center md:ml-6">
                                <div class="ml-3 relative">
                                    <div class="relative inline-block text-left">
                                        <div>
                                            <button type="button" class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                               Sort by Select
                                            </button>
                                        </div>
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
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default PharmaNav;