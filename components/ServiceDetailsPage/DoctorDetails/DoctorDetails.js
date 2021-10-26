import React, { useState } from 'react'
import Image from 'next/image'
import { Modal, Button } from 'antd'
import AppointmentModal from '../../ServiceDetailsPage/Modal/AppointmentModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoneyBillAlt, faThumbsUp, faMapMarkerAlt, faComment, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


const DoctorDetails = ({ doctor }) => {
  return (
    <div className='bg-white px-4 py-8 my-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:container lg:px-2'>
      {/* flex -- two divs */}
      <div className="flex justify-between items-start">
        {/* left div -- doc img and other infos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-1/2">
          {/* doc img div */}
          <div className="ml-8">
          <img
            src={doctor.image}
            alt=''
            className='object-cover h-30'
          />
          </div>
          
          {/* doc info div */}
        <div className="mr-3 font-semibold text-gray-500">
        <h5 className='text-xl font-bold sm:text-4xl'>
            {doctor.name}
          </h5>
          <p className='pb-2 font-semibold text-gray-500'>BDS, MDS - Oral & Maxillofacial Surgery
          </p>
          <p className='pb-2 font-semibold text-gray-500'>Department of <span className='text-indigo-500 font-semibold'>{doctor.department}</span> 
          </p>
          {/* location div */}
          <div className="flex items-center justify-start -mt-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p className="ml-2 mt-3">Dhaka, Bangladesh - <span className='text-blue-500 font-semibold'>Get Directions</span></p>
          </div>
          </div>
          </div> 

        {/* right div -- doc payment and appointment infos */}
        <div className="-space-y-2 mr-8 text-md">
        <div className="flex items-center justify-start">
          <FontAwesomeIcon icon={faThumbsUp} />
          <p className="ml-3 mt-3 text-gray-500 font-semibold">97%</p>
          </div>
          <div className="flex items-center justify-start">
          <FontAwesomeIcon icon={faComment} />
          <p className="ml-3 mt-3 text-gray-500 font-semibold">35 Feedbacks</p>
          </div>
          <div className="flex items-center justify-start">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <p className="ml-3 mt-3 text-gray-500 font-semibold">+880-1432-456987</p>
          </div>
          <div className="flex items-center justify-start">
          <FontAwesomeIcon icon={faMoneyBillAlt} />
          <p className="ml-3 mt-3 text-gray-500 font-semibold">${doctor.fee}</p>
          </div>
          <div>
          {doctor && doctor.fee && (
            <AppointmentModal doctorId={doctor._id} doctorFee={doctor.fee} />
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails











