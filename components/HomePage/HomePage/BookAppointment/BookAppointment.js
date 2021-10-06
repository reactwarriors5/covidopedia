import React from 'react'
import Image from 'next/image'

const BookAppointment = () => {
  return (
    <section className='container'>
      <div className='grid items-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 lg:gap-8 xl:gap-8'>
        {/* emergency CTA */}
        <div className='relative z-10 flex items-center object-cover w-full h-full px-6 py-8 text-center text-white bg-center bg-no-repeat bg-cover bg-Emergency'>
          {/* overlay div */}
          <div className='absolute inset-0 bg-blue-900 -z-10 opacity-90'></div>
          <div className='z-20'>
            <div className='flex items-center justify-evenly'>
              <div>
                <Image
                  src='/images/images-adnan/CTA.jpg'
                  width='100'
                  height='100'
                  objectFit='cover'
                />
              </div>
              <div className='text-left'>
                <h4 className='text-xl '>Emergency Cases</h4>
                <span className='text-2xl font-bold text-blue-300'>
                  1-800-123-4560
                </span>
              </div>
            </div>
            <p className='py-4 text-left text-blue-100'>
              Sed do eiusmod tempor minim ur incididunt ut labore et dolore
              magna aliqua enim ad minim veniam quis nostrud.
            </p>
            <button className='btn-brand my-3 w-full text-white'>
              Contact Us
            </button>
          </div>
        </div>
        <div className='relative z-10 object-cover w-full h-full col-span-2 bg-center bg-no-repeat bg-cover bg-BookAppointment'>
          {/* overlay div */}
          <div className='absolute inset-0 bg-white -z-10 opacity-95'></div>
          {/* book an appointment */}
          <div className='px-10 py-8'>
            <h3 className='text-2xl font-bold text-center text-blue-700 lg:text-4xl lg:text-left '>
              Book Appointment Today!
            </h3>
            {/* from grid */}
            <div className='grid grid-cols-1 gap-5 mt-12 lg:grid-cols-3 justify-items-center lg:justify-items-start'>
              <div className='relative'>
                <select
                  className='block px-3 py-2 text-gray-700 bg-white border border-blue-300 rounded shadow-sm w-52 focus:outline-none focus:ring-blue-600 focus:border-blue-600'
                  name='department'
                >
                  <option value=''>Select Department</option>
                  <option value='web'>Neurology</option>
                  <option value='design'>Gynecology</option>
                  <option value='research'>Orthopedics</option>
                  <option value='programming'>Cardiac</option>
                </select>
              </div>
              <div className='relative mt-6 lg:mt-0'>
                <select
                  className='block px-3 py-2 text-gray-700 bg-white border border-blue-300 rounded shadow-sm w-52 focus:outline-none focus:ring-blue-600 focus:border-blue-600'
                  name='doctor'
                >
                  <option value=''>Select Doctor</option>
                  <option value='web'>Doctor 1</option>
                  <option value='web'>Doctor 2</option>
                  <option value='web'>Doctor 3</option>
                  <option value='web'>Doctor 4</option>
                </select>
              </div>
              {/* date & time fields */}
              <div className='grid grid-cols-1 gap-5 mt-6 lg:grid-cols-2 justify-items-center lg:justify-items-start lg:mt-0'>
                <div className='relative'>
                  <select
                    className='block w-full px-3 py-2 text-gray-700 bg-white border border-blue-300 rounded shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600'
                    name='date'
                  >
                    <option value=''>Date</option>
                    <option value='web'>Date 1</option>
                    <option value='web'>Date 2</option>
                    <option value='web'>Date 3</option>
                    <option value='web'>Date 4</option>
                  </select>
                </div>
                <div className='relative'>
                  <select
                    className='block w-full px-3 py-2 text-gray-700 bg-white border border-blue-300 rounded shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600'
                    name='time'
                  >
                    <option value=''>Time</option>
                    <option value='web'>Time 1</option>
                    <option value='web'>Time 2</option>
                    <option value='web'>Time 3</option>
                    <option value='web'>Time 4</option>
                  </select>
                </div>
              </div>
              {/* name,phone and email */}
              <div className='relative mt-6'>
                <input
                  type='text'
                  id='name'
                  className='flex-1 w-full px-4 py-2 text-gray-900 bg-white border border-blue-300 rounded shadow-sm appearance-none focus:outline-none focus:ring-blue-600 focus:border-blue-600'
                  placeholder='Name'
                />
              </div>
              <div className='relative mt-6'>
                <input
                  type='number'
                  id='phone'
                  className='flex-1 w-full px-4 py-2 text-gray-900 bg-white border border-blue-300 rounded shadow-sm appearance-none focus:outline-none focus:ring-blue-600 focus:border-blue-600'
                  placeholder='Phone'
                />
              </div>
              <div className='relative mt-6'>
                <input
                  type='email'
                  id='email'
                  className='flex-1 w-full px-4 py-2 text-gray-900 bg-white border border-blue-300 rounded shadow-sm appearance-none focus:outline-none focus:ring-blue-600 focus:border-blue-600'
                  placeholder='Email'
                />
              </div>
            </div>
            <button className='mt-10 btn-brand'>Make Appointment</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookAppointment
