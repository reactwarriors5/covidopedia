import React from 'react';
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar';
import PharmaNav from '../components/Pharmacy/PharmaNav/PharmaNav';
import Footer from '../components/HomePage/HomePage/Footer/Footer';

const pharmacyDetails = () => {
    return (
        <div>
            <Navbar />
            <PharmaNav />
            <div className="container">
                <div class="m-5 card flex justify-around items-center">
                    <div class="">
                        <img class="h-60"
                            src="https://www.digit24.in/wp-content/uploads/2018/09/digit24-medical-track-erp-software.jpg"
                        />
                    </div>
                    <div class="">
                        <h2 class="card-title">Medlife Medical</h2>
                        <p>320-795-8815</p>
                        <p>96 Red Hawk Road Cyrus, MN 56323</p>
                        <p>Chemists, Surgical Equipment Dealer</p>
                        <p> Opens at 08.00 AM</p>
                    </div>
                    <div class="">
                        <button class="text-center w-full bg-blue-700  text-white py-3 font-medium mb-4">View Details</button><br />
                        <button class="text-center w-full bg-blue-700  text-white py-3 font-medium">Browse Products</button>
                    </div>
                </div>
                <div class="mx-32 my-5">
                    <div class="container grid grid-cols-4 gap-5 p-4">
                        <p>Overview</p>
                        <p>Location</p>
                        <p>Reviews</p>
                        <p>Business Hours</p>
                    </div> <hr />
                    <div class="">
                        <h1 class="">About Me</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="mt-5">
                            <h1 class="">Awards</h1>
                            <div className="mt-3">
                                <p>July 2019</p>
                                <h1 class="">Humanitarian Award</h1>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </p>
                            </div>
                            <div className="mt-3">
                                <p>July 2019</p>
                                <h1 class="">Humanitarian Award</h1>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </p>
                            </div>
                            <div className="mt-3">
                                <p>July 2019</p>
                                <h1 class="">Humanitarian Award</h1>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default pharmacyDetails;