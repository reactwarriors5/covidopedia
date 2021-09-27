export const Team = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/asset/meteor.svg")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='mx-auto mb-8 lg:max-w-xl text-center'>
          <h2 className='text-3xl font-bold  text-gray-700  md:text-5xl mb-4'>
            Discover Our <span className='text-indigo-500'>Doctors</span>
          </h2>

          <p className='text-base text-gray-700 md:text-lg'>
            A heritage in care. A reputation in excellence. Advancing the
            boundaries of medicine. Caring for the growing needs of our
            community.
          </p>
        </div>
        <div className='flex flex-col space-y-4 text-center sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 mb-12'>
          <a
            href='#'
            className='p-2 font-semibold rounded bg-indigo-500 hover:bg-indigo-600  text-white'
          >
            Appointment
          </a>
          <a
            href='#'
            className='p-2 font-semibold border rounded border-purple-300 hover:border-indigo-500'
          >
            View All Doctors
          </a>
        </div>

        <div className='grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg'>
          <div>
            <div className=' text-center mb-8 md:mb-0'>
              <img
                className='rounded-full w-1/2 md:w-80 mx-auto -mb-24'
                src='/asset/doc-1.jpg'
                alt='Avatar Jacky'
              />
              <div className='bg-white shadow-lg rounded-lg pt-28 pb-10 text-gray-400'>
                <h3 className='font-title text-gray-800 text-xl'>
                  Justin Beckham
                </h3>
                <p className='font-body text-indigo-400'>
                  Cardiology Specialist
                </p>
                <div className='flex items-center space-x-3 mt-2 justify-center'>
                  <a
                    href='#'
                    className='p-1 font-body border rounded border-gray-300 hover:bg-indigo-500 hover:text-white hover:border-none'
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=' text-center mb-8 md:mb-0'>
              <img
                className='w-1/2 md:w-80 rounded-full mx-auto -mb-24'
                src='/asset/doc-2.jpg'
                alt='Avatar Jacky'
              />
              <div className='bg-white shadow-lg rounded-lg pt-28 pb-10 text-gray-400'>
                <h3 className='font-title text-gray-800 text-xl'>
                  Smith Johnson
                </h3>
                <p className='font-body text-indigo-400'>Dermatologist</p>
                <div className='flex items-center space-x-3 mt-2 justify-center'>
                  <a
                    href='#'
                    className='p-1 font-body border rounded border-gray-300 hover:bg-indigo-500 hover:text-white hover:border-none'
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=' text-center mb-8 md:mb-0'>
              <img
                className='w-1/2 md:w-80 rounded-full mx-auto -mb-24'
                src='/asset/doc-3.jpg'
                alt='Avatar Jacky'
              />
              <div className='bg-white shadow-lg rounded-lg pt-28 pb-10 text-gray-400'>
                <h3 className='font-title text-gray-800 text-xl'>
                  Jennifer Winds
                </h3>
                <p className='font-body text-indigo-400'>
                  Neurology Specialist
                </p>
                <div className='flex items-center space-x-3 mt-2 justify-center'>
                  <a
                    href='#'
                    className='p-1 font-body border rounded border-gray-300 hover:bg-indigo-500 hover:text-white hover:border-none'
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=' text-center mb-8 md:mb-0'>
              <img
                className='w-1/2 md:w-80 rounded-full mx-auto -mb-24'
                src='/asset/doc-4.jpg'
                alt='Avatar Jacky'
              />
              <div className='bg-white shadow-lg rounded-lg pt-28 pb-10 text-gray-400'>
                <h3 className='font-title text-gray-800 text-xl'>
                  Edward Willey
                </h3>
                <p className='font-body text-indigo-400'>General Doctor</p>
                <div className='flex items-center space-x-3 mt-2 justify-center'>
                  <a
                    href='#'
                    className='p-1 font-body border rounded border-gray-300 hover:bg-indigo-500 hover:text-white hover:border-none'
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
