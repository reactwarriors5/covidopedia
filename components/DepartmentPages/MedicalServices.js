import React, { useState,useEffect } from 'react';
import servicedata from './FakeData/servicedata.json';
import MedicalServiceDetails from './MedicalServiceDetails';


const MedicalServices = () => {

    const [services,setServices]=useState([]);

    useEffect(()=>setServices(servicedata),[]);
 
    return (
        <div class="grid grid-cols-3 gap-2">
            <div className="border-2  w-2/3 h-20 ml-32 shadow-md rounded-md">
                <h1 className="font-bold text-center text-xl p-5 hover:bg-indigo-300 md:bg-purple-500">Our Company Details</h1>
            </div>
            <div class="col-span-2  p-5 border-2 w-11/12">
                <h1 className="font-bold text-3xl mb-5">Wide range of facilities and medical services</h1>
                <p className="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dolorem, esse quia similique eos, dicta eligendi minus dignissimos dolores tenetur sapiente laboriosam? Repellendus error quidem similique,
                    sunt mollitia eaque inventore fugit ipsa omnis non doloremque!</p>
                <div className="grid grid-cols-2">
                   {
                       services.map((service)=><MedicalServiceDetails service={service}></MedicalServiceDetails>)
                   }

                </div>
            </div>
        </div>
    );
};

export default MedicalServices;