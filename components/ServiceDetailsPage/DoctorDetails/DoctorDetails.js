import React from 'react';

const DoctorDetails = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 lg:py-20">
            <div class="flex flex flex-col overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div class="relative lg:w-1/2">
                    <img src="https://us.123rf.com/450wm/rido/rido2002/rido200200099/141040315-happy-smiling-african-doctor-looking-at-camera-in-medical-office-portrait-of-black-man-doctor-workin.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" class="object-cover w-full lg:absolute h-80 lg:h-full" />
                    <svg class="absolute top-0 right-0 hidden h-full text-white lg:inline-block" viewBox="0 0 20 104" fill="currentColor">
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
                    </svg>
                </div>
                <div class="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <h5 class="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        Smith Johnson
                    </h5>
                    <p class="mb-5 text-gray-800">
                        <span class="font-bold">DERMATOLOGIST</span>
                    </p>
                    <p class="mb-5 text-gray-800">
                    Highly qualified and practical experienced doctor with a diversity of skills and special interests. Always prepared for all type of surgeries and emergencies cases.
                    </p>

                    <div class="grid grid-cols-3 gap-3">
                        <p>Phone</p>
                        <p class="col-span-2">123456789</p>
                        <p>Email</p>
                        <p class="col-span-2">adnan@covidopedia.com</p>
                        <p>Website</p>
                        <p class="col-span-2">www.covidopedia.com</p>
                        <p>Fax </p>
                        <p class="col-span-2">123456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;
