import React, { useEffect, useState } from 'react'
import AppointmentHistoryCard from '../AppointmentCard/AppointmentHistoryCard'
import DashboardHeader from '../../DashboardHeader/DashboardHeader'

import axios from 'axios'
axios.defaults.withCredentials = true

const MyAppointmentHistoryData = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <section className='flex-1'>
      {/* common component */}
      <DashboardHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* main content here */}

      <div className='p-5'>
        <AppointmentHistoryCard />
      </div>
    </section>
  )
}

export default MyAppointmentHistoryData
