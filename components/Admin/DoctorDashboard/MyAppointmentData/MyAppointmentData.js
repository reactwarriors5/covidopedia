import React, { useEffect, useState } from 'react'
import AppointmentCard from '../AppointmentCard/AppointmentCard'
import DashboardHeader from '../../DashboardHeader/DashboardHeader'

import axios from 'axios'
axios.defaults.withCredentials = true

const MyAppointmentData = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <section className='flex-1'>
      {/* common component */}
      <DashboardHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/* main content here */}

      <div className='p-5'>
        <AppointmentCard />
      </div>
    </section>
  )
}

export default MyAppointmentData
