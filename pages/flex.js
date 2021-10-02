import React from 'react'

const flex = () => {
  return (
    <div className='my-4 container flex flex-col lg:flex-row justify-center lg:justify-between items-center  p-6 mx-auto sm:py-12 border border-indigo-800'>
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
      <div className='flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 md:flex-row lg:justify-between'>
        <h1 className='w-full'>Lorem ipsum dolor sit amet.</h1>
        <h1 className='w-full'>Lorem ipsum dolor sit amet.</h1>
        <h1 className='w-full'>Lorem ipsum dolor sit amet.</h1>
        <h1 className='w-full'>Lorem ipsum dolor sit amet.</h1>
      </div>
    </div>
  )
}

export default flex
