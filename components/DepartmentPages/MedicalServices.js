import React, { useState, useEffect } from 'react';
import servicedata from './FakeData/servicedata.json';
import MedicalServiceDetails from './MedicalServiceDetails';


const MedicalServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => setServices(servicedata), []);

    return (
        <div class="grid grid-cols-3 gap-2">
            <div className="grid-rows-2 bg-white z-40">
                <div className="grid grid-rows-3 px-6 py-2 grid-cols-1 rounded-sm shadow-md gap-4 bg-purple-200 ml-32 z-50">
                    <div className="flex gap-4 px-6 pt-8 justify-left mt-10">
                        <div className="mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50px" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                            </svg>

                        </div>
                        <div>
                            <h1 className="font-bold text-xl">Emergency Cases</h1>
                            <h1 className="font-bold text-3xl">01815621323</h1>
                        </div>
                    </div>
                    <div className="px-6 py-2 text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                            esse mollitia est vel sed repudiandae. Ut nobis corrupti aliquam neque.</p>
                    </div>
                    <div className="justify-self-center py-2 ">
                        <button className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold px-24 py-4 text-md">Contact Us</button>
                    </div>
                </div>
                <div className="ml-32 hover:bg-indigo-300 p-4 mb-2 gap-4 mt-6 flex rounded-sm shadow-md bg-purple-200">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-md">Download Our brochures </h1>
                    </div>
                </div>
            </div>
            <div class="col-span-2  p-5 border-2 w-11/12">
                <h1 className="font-bold text-3xl mb-5">Wide range of facilities and medical services</h1>
                <p className="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dolorem, esse quia similique eos, dicta eligendi minus dignissimos dolores tenetur sapiente laboriosam? Repellendus error quidem similique,
                    sunt mollitia eaque inventore fugit ipsa omnis non doloremque!</p>
                <div className="grid grid-cols-2">
                    {
                        services.map((service) => <MedicalServiceDetails service={service}></MedicalServiceDetails>)
                    }

                </div>
            </div>
        </div>
    );
};

export default MedicalServices;