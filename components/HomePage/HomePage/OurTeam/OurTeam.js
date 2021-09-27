import React from 'react'

const OurTeam = () => {
  return (
    <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
      <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
        <h3 className=' font-bold text-indigo-400 leading-none sm:text-2xl'>
          Meet Our Team
        </h3>
        <h1 className='text-5xl font-bold leading-none sm:text-4xl'>
          Group of Certified & Experienced Doctors.
        </h1>
        <p className='mt-6 mb-8 text-lg sm:mb-12'>
          Where Compassion and Healing Come Together.
          <br className='hidden md:inline lg:hidden' /> Uncompromising
          Excellence. Commitment to Care.
        </p>
        <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
          <a
            href='#'
            className='px-8 py-3 text-lg font-semibold rounded bg-indigo-500 hover:bg-indigo-600  text-white'
          >
            Appointment
          </a>
          <a
            href='#'
            className='px-8 py-3 text-lg font-semibold border rounded border-purple-300 hover:border-indigo-500'
          >
            All Doctors
          </a>
        </div>
      </div>
      <div className='flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
        <div className='md:flex gap-8'>
          <div className='md:w-1/2 text-center mb-8 md:mb-0'>
            <img
              className='w-48 h-48 rounded-full mx-auto -mb-24'
              src='https://doctery-demo.themesion.com/demo1/wp-content/uploads/sites/2/2020/01/team-01-770x770.jpg'
              alt='Avatar Jacky'
            />
            <div className='bg-white shadow-lg rounded-lg px-16 pt-32 pb-10 text-gray-400'>
              <h3 className='font-title text-gray-800 text-xl mb-3'>
                Justin Beckham
              </h3>
              <p className='font-body'>Cardiology Specialist</p>
            </div>
          </div>
          <div className='md:w-1/2 text-center'>
            <img
              className='w-48 h-48 rounded-full mx-auto -mb-24'
              src='https://doctery-demo.themesion.com/demo1/wp-content/uploads/sites/2/2020/01/team-02-770x770.jpg'
              alt='Avatar Damien Marley'
            />
            <div className='bg-white shadow-lg rounded-lg px-16 pt-32 pb-10 text-gray-400'>
              <h3 className='font-title text-gray-800 text-xl mb-3'>
                Smith Johnson
              </h3>
              <p className='font-body'>Dermatologist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
