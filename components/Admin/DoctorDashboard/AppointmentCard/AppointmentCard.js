import React from 'react'
import PatientModal from '../PatientModal/PatientModal'
import PrescriptionModal from '../PatientModal/PrescriptionModal'

const AppointmentCard = ({ appointmentCardData }) => {
  // console.log(appointmentCardData)
  return (
    <div className='items-center px-8 py-3 lg:px-8'>
      <div className='p-6 mx-auto bg-white border rounded-lg shadow-md lg:w-full'>
        {/* details div -- left */}
        <div className='flex flex-col items-center justify-between py-2 rounded-lg lg:flex-row'>
          <div className='flex items-start justify-start w-full lg:justify-start lg:w-1/2'>
            {/* image here */}
            <img
              src='https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_DUFTlhOdmSdoT9F4r1Woo40pyML2.webp'
              alt='placeholder'
              className='rounded-lg'
            />
            {/* patient details here */}
            <div className='flex flex-col w-full text-gray-500 lg:ml-4'>
              <h4 className='my-4 text-lg font-bold tracking-widest text-indigo-600 uppercase lg:mt-0 title-font'>
                {appointmentCardData.patient.name}
              </h4>
              <p className='mb-3 text-base leading-relaxed text-gray-600'>
                {appointmentCardData.createdAt}
              </p>
              <p className='mb-3 text-base leading-relaxed text-gray-600'>
                {/* {appointmentCardData.patientAddress} */}
                Dhaka
              </p>
              <p className='mb-3 text-base leading-relaxed text-gray-600'>
                {/* {appointmentCardData.patientEmail} */}
              </p>
              <p className='mb-3 text-base leading-relaxed text-gray-600'>
                {/* {appointmentCardData.patientPhone} */}
              </p>
            </div>
          </div>
          {/* actions & buttons div -- right */}
          <div className='flex items-center space-x-6 justify-start'>
            <PatientModal appointmentCardData={appointmentCardData} />
            <PrescriptionModal appointmentCardData={appointmentCardData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCard
