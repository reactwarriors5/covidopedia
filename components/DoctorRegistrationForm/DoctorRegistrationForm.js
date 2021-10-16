import React from 'react';

const DoctorRegistrationForm = () => {
    return (
        <div className="flex h-screen bg-white items-center justify-center  mt-5 mb-10">
            <div className="grid bg-white rounded-lg shadow-lg bg-gray-100 w-11/12 md:w-9/12 lg:w-1/2">

                <div className="flex justify-center">
                    <div className="flex">
                        <h1 className="text-gray-600 pt-5 font-bold md:text-2xl text-xl">Registration Form</h1>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                    <div className="grid grid-cols-1">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</label>
                        <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</label>
                        <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Email</label>
                    <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Enter Your Email" />
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Select Department</label>
                    <select className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                        <option>Neurology</option>
                        <option>Hematology</option>
                        <option>Plastic Surgery</option>
                        <option>Pharmacology</option>
                        <option>Paleontology</option>
                        <option>Gastrologic</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Academic Qualification</label>
                    <input className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Academic qualification" />
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Experience</label>
                    <select className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                        <option>One year</option>
                        <option>Two year</option>
                        <option>Three year</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 mt-5 mx-7">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
                    <div className='flex items-center justify-center w-full'>
                        <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                            <div className='flex flex-col items-center justify-center pt-7'>
                                <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Select a photo</p>
                            </div>
                            <input type='file' className="hidden" />
                        </label>
                    </div>
                </div>

                <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                    <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
                    <button className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Create</button>
                </div>

            </div>
        </div>
    );
};

export default DoctorRegistrationForm;