import React from "react";
import { useState } from "react";

const appointmentInfo = [
  {
    doctorName: "Jane Cooper",
    patientName: "Morgan Cooper",
    department: "Neurology",
    amount: "$300",
    status: "Confirmed",
    appointmentTime: "09 Oct, 2021, GMT 6.30 p.m.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    doctorName: "Jane Cooper",
    patientName: "Morgan Cooper",
    department: "Neurology",
    amount: "$300",
    status: "Confirmed",
    appointmentTime: "09 Oct, 2021, GMT 6.30 p.m.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    doctorName: "Jane Cooper",
    patientName: "Morgan Cooper",
    department: "Neurology",
    amount: "$300",
    status: "Confirmed",
    appointmentTime: "09 Oct, 2021, GMT 6.30 p.m.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const AppointmentTable = () => {
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
                      Patient Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Appointment Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                    >
                      Status
                    </th>
                  </tr>
                </thead>

                {/* table body here...can be transferred into another component */}
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointmentInfo.map((appointmentData, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-10 h-10 rounded-full"
                              src={appointmentData.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {appointmentData.doctorName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {appointmentData.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {appointmentData.patientName}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {appointmentData.appointmentTime}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {appointmentData.amount}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {appointmentData.status}
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

export default AppointmentTable;
