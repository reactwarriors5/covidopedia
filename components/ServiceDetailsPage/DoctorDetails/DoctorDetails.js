
import React, { useState } from 'react'
import Image from 'next/image'

import { useSelector } from 'react-redux';
import { selectADoctor} from '../../../features/doctorSlice/doctorSlice';
import AppointmentModal from '../Modal/AppointmentModal';


const DoctorDetails = () => {
  
  const doctorUser = useSelector(selectADoctor)
  
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20'>
      <div className='flex flex-col overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
        <div className='relative lg:w-1/2'>
          <img
            src={doctorUser.doctor.image}
            alt=''
            className='object-cover w-full lg:absolute h-80 lg:h-full'
          />
          <svg
            className='absolute top-0 right-0 hidden h-full text-white lg:inline-block'
            viewBox='0 0 20 104'
            fill='currentColor'
          >
            <polygon points='17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104'></polygon>
          </svg>
        </div>
        <div className='flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
          <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
            {doctorUser.doctor.name}
          </h5>
          <p className='mb-5 text-gray-800'>
            <span className='font-bold'>Cardiology Specialist</span>
          </p>
          <p className='mb-5 text-gray-800'>
            Highly qualified and practical experienced doctor with a diversity
            of skills and special interests. Always prepared for all type of
            surgeries and emergencies cases.
          </p>
          <p className='mb-5 text-gray-800'>Phone 123456789</p>
          <p className='mb-5 text-gray-800'>Email info@creativesplanet.com</p>
          <p className='mb-5 text-gray-800'>Website www.creativesplanet.com</p>
          <p className='mb-5 text-gray-800'>Fax 123456789</p>
        <AppointmentModal/>
        </div>

      </div>
    </div>
  );
};

export default DoctorDetails;
