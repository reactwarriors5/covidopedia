import React from 'react'

const Hero1 = () => {
  return (
    <section
      style={{
        backgroundImage: `url("https://medipoint.qodeinteractive.com/wp-content/uploads/2017/05/Main-Home-Slider-3-1.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '550px',
      }}
      className='text-coolGray-100 '
    >
      <div className='container flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between'>
        <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
          <h1 className='text-4xl font-bold text-white leading-none sm:text-5xl'>
            For a healthy life keep your
            <span className='text-indigo-400'> friends</span>, family, and
            doctor close.
          </h1>
          <p className='mt-6 text-gray-300 mb-8 text-lg sm:mb-12'>
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
              Buy Medicine
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero1
