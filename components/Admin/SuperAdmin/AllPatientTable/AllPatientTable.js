import React, { useEffect, useState } from "react";
import axios from 'axios'
axios.defaults.withCredentials = true

const AllPatientTable = () => {
    const [patientInfo, setPatientInfo] = useState([]);

    const getAllPatient = async () => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/allPatient`)
        setPatientInfo(data)
    }

    useEffect(() => {
        getAllPatient()
    }, [])

    return (
        <section>
            <div className="flex flex-col">
                <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full  align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Patient Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                          Age
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Gender
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Name of Disease
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Fee
                                        </th>

                                    </tr>
                                </thead>

                                {/* table body here...can be transferred into another component */}
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {patientInfo.map((patient, idx) => (
                                        <tr key={idx}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    {/* <div className="flex-shrink-0 w-10 h-10">
                                                        <img
                                                            className="w-10 h-10 rounded-full"
                                                            src={patient.image}
                                                            alt=""
                                                        />
                                                    </div> */}
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {patient.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">
                                                    {patient.age}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">
                                                    {patient.gender}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">
                                                    {patient.message}
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">
                                                    100
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

export default AllPatientTable;
