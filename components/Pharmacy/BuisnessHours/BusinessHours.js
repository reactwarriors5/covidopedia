import React from 'react';

const BusinessHours = () => {
    return (
        <div className="bg-white  mr-28 ml-8">

            <div class="grid grid-cols-1 gap-2">
                <div class="grid grid-cols-2 gap-2 shadow-sm">
                    <div>
                        <h1 className="text-bold">Today</h1>
                        <p>5 Nov 2019</p>
                    </div>
                    <div>
                        <h1 className="ml-16 text-xs text-indigo-500 text-bold">Open Now</h1>
                        <p>07:00 AM - 09:00 PM
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <div>
                        <h1 className="text-semibold">Monday</h1>
                    </div>
                    <div>
                        <p>07:00 AM - 09:00 PM</p>
                    </div>
                    <div>
                        <h1 className="text-semibold">Tuesday</h1>
                    </div>
                    <div>
                        <p>07:00 AM - 09:00 PM</p>
                    </div>
                    <div>
                        <h1 className="text-semibold">Wednesday</h1>
                    </div>
                    <div>
                        <p>07:00 AM - 09:00 PM</p>
                    </div>
                    <div>
                        <h1 className="text-semibold">Thursday</h1>
                    </div>
                    <div>
                        <p>07:00 AM - 09:00 PM</p>
                    </div>
                    <div>
                        <h1 className="text-semibold">Friday</h1>
                    </div>
                    <div className="ml-20">
                        <h1 className="text-red-500 text-bold">Closed</h1>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BusinessHours;