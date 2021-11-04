import React, { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import MyAppointmentHistoryData from '../MyAppointmentData/MyAppointmentHistoryData'

const MyAppointmentHistory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <div className='lg:flex'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <MyAppointmentHistoryData
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </>
  )
}

export default MyAppointmentHistory
