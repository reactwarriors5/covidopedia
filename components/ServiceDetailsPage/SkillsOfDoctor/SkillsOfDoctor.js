import React from 'react'

const SkillsOfDoctor = () => {
  return (
    <section className='mx-32 body-font overflow-hidden'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-12'>
          <div className='p-12 md:w-1/2 flex flex-col items-start'>
            <h2 className='text-4xl font-bold'>Skills of Doctor</h2>
            <br />
            <p className='leading-relaxed mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className='w-full'>
              <div className='relative pt-1'>
                <div className='flex mb-2 items-center justify-between'>
                  <div>
                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400'>
                      Professional
                    </span>
                  </div>
                  <div className='text-right'>
                    <span className='text-xs font-semibold inline-block text-blue-400'>
                      90%
                    </span>
                  </div>
                </div>
                <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300'>
                  <div
                    style={{ width: '90%' }}
                    className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400'
                  ></div>
                </div>
              </div>
              <div className='relative pt-1'>
                <div className='flex mb-2 items-center justify-between'>
                  <div>
                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400'>
                      Biotechnology
                    </span>
                  </div>
                  <div className='text-right'>
                    <span className='text-xs font-semibold inline-block text-blue-400'>
                      80%
                    </span>
                  </div>
                </div>
                <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300'>
                  <div
                    style={{ width: '80%' }}
                    className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400'
                  ></div>
                </div>
              </div>
              <div className='relative pt-1'>
                <div className='flex mb-2 items-center justify-between'>
                  <div>
                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400'>
                      Medical Research
                    </span>
                  </div>
                  <div className='text-right'>
                    <span className='text-xs font-semibold inline-block text-blue-400'>
                      70%
                    </span>
                  </div>
                </div>
                <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300'>
                  <div
                    style={{ width: '70%' }}
                    className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400'
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-12 md:w-1/2 flex flex-col items-start'>
            <h2 className='text-4xl font-bold'>Benefits of Doctor</h2>
            <br />
            <p className='leading-relaxed mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className='grid grid-cols-2 gap-4'>
              <div className=''>
                <p>Routine and medical care</p>
                <br />
                <p>Excellence in Healthcare every</p>
                <br />
                <p>Building a healthy environment.</p>
                <br />
                <p>Routine and medical care</p>
                <br />
                <p>Excellence in Healthcare every</p>
              </div>
              <div className=''>
                <p>Routine and medical care</p>
                <br />
                <p>Excellence in Healthcare every</p>
                <br />
                <p>Building a healthy environment.</p>
                <br />
                <p>Routine and medical care</p>
                <br />
                <p>Excellence in Healthcare every</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsOfDoctor
