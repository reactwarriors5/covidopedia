import React, { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
import PatientModal from '../PatientModal/PatientModal'
import PrescriptionModal from '../PatientModal/PrescriptionModal'

{
  /** <PatientModal appointmentInfo={appointmentInfo} />
            <PrescriptionModal appointmentInfo={appointmentInfo} /> */
}

const AppointmentCard = () => {
  const [appointmentInfo, setAppointmentInfo] = useState([])

  useEffect(() => {
    const getAppointments = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/doctor-appointments`
      )
      setAppointmentInfo(data)
      console.log(data)
    }
    getAppointments()
  }, [])
  // console.log(appointmentCardData)
  return (
    <section>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Patient Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Appointment Time
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Amount
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase'
                    >
                      Details
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase'
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                {/* table body here...can be transferred into another component */}
                <tbody className='bg-white divide-y divide-gray-200'>
                  {appointmentInfo.map((appointmentData, idx) => (
                    <tr key={idx}>
                      {appointmentData.status === 'Pending' && (
                        <>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                              {appointmentData.name}
                            </div>
                          </td>
                          <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                              12/08/2021
                            </div>
                          </td>

                          <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                              ${appointmentData.fee}
                            </div>
                          </td>
                          <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                            {/*  {appointmentData.status === 'Pending' ? (
                        <div className='text-sm text-gray-500'>pending</div>
                      ) : (
                        <div className='text-sm text-gray-500'>
                          <a href={appointmentData.prescription}>
                            Download Prescription
                          </a>
                        </div>
                      )} */}
                            <div className='text-sm text-gray-500'>
                              <PatientModal
                                appointmentCardData={appointmentData}
                              />
                            </div>
                          </td>
                          <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
                            <PrescriptionModal
                              appointmentCardData={appointmentData}
                            />
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppointmentCard
