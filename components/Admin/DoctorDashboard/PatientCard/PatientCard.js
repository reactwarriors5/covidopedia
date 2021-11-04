import React from 'react'

const PatientCard = ({ patientCardData }) => {
  return (
    <section>
      <div className='items-center py-4'>
        <div className='flex flex-wrap'>
          <div className='w-full px-5 my-4 bg-white border rounded-lg shadow-xl'>
            <div className='p-6 px-6 text-center'>
              <img
                alt='team'
                className='flex-shrink-0 object-cover object-center w-20 h-20 mx-auto rounded-full shadow-xl'
                src='https://storage.googleapis.com/indie-hackers.appspot.com/avatars/300x300_DUFTlhOdmSdoT9F4r1Woo40pyML2.webp'
              />
              {/* patient info */}
              <div className='mb-8'>
                <h4 className='pt-8 text-xl font-bold tracking-wider text-indigo-800 uppercase title-font'>
                  {patientCardData.name}
                </h4>
                <p className='text-sm font-bold text-gray-800 pt-7'>
                  {' '}
                  Patient ID :{' '}
                  <span className='font-medium text-gray-500'>
                    1811048
                  </span>{' '}
                </p>
              </div>

              {/* patient history  */}
              <div className='text-sm'>
                {/* Contact no */}
                <div className='flex items-center justify-between '>
                  <p className='mr-4 font-bold text-gray-800'> Contact No : </p>
                  <span className='text-gray-500 '>+8801815621324</span>{' '}
                </div>
                {/* age */}
                <div className='flex items-center justify-between pt-3'>
                  <p className='mr-4 font-bold text-gray-800'> Age : </p>
                  <span className='text-gray-500 '>24</span>{' '}
                </div>
                {/* gender */}
                <div className='flex items-center justify-between pt-3'>
                  <p className='mr-4 font-bold text-gray-800'> Gender : </p>
                  <span className='text-gray-500 '>Male</span>{' '}
                </div>
                {/* Blood Group */}
                <div className='flex items-center justify-between pt-3'>
                  <p className='mr-4 font-bold text-gray-800'>
                    {' '}
                    Blood Group : O(+ve)
                  </p>
                  <span className='text-gray-500 '>
                    {patientCardData.patientBloodGroup}
                  </span>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatientCard
