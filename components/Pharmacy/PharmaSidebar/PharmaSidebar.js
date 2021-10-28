import React from 'react';

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
                            <h3>Categories</h3>
                            <p>Popular</p>
                            <p>Latest</p>
                            <p>Ratings</p>
                            <p>Availability</p>
                            <p>Open 24 Hrs</p>
                            <p>Home Delivery</p>
                        </div>


                        <button class="text-center w-full bg-blue-700  text-white py-3 font-medium">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PharmaSidebar;