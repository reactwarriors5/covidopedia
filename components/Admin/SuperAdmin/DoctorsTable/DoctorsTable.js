import React, { useEffect, useState } from "react";
import axios from 'axios'
axios.defaults.withCredentials = true

const DoctorsTable = () => {
  const [doctorInfo,setDoctorInfo]=useState([]);

  const getAllDoctors = async () => {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/doctors`)
    setDoctorInfo(data)
    console.log(data.data)
    
  }
  console.log(doctorInfo)

  useEffect(() => {
    getAllDoctors()
  }, [])
  
  return (
    <section>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Doctor Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Experience
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Fee
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                    >
                      Degree
                    </th>
                  </tr>
                </thead>

                {/* table body here...can be transferred into another component */}
                <tbody className="bg-white divide-y divide-gray-200">
                  {doctorInfo.map((doctor, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src={doctor.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {doctor.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {doctor.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {doctor.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                        {doctor.experience}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                        {doctor.fee}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {doctor.degree}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsTable;
