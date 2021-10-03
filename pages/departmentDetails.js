import React from 'react'
import DepartmentSection from '../components/DepartmentPages/DepartmentSection'
import LaboratoryServices from '../components/DepartmentPages/LaboratoryServices'
import MedicalServices from '../components/DepartmentPages/MedicalServices'
// import TeamMember from "../components/DepartmentPages/TeamMember";
import DepartmentFaq from '../components/DepartmentPages/DepartmentFaq'
import DepartmentBanner from '../components/DepartmentPages/DepartmentBanner'
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar'

const DepartmentDetails = () => {
  return (
    <div>
      <Navbar />
      <DepartmentBanner />
      <DepartmentSection />
      <LaboratoryServices />
      <MedicalServices />
      {/* <TeamMember /> */}
      <DepartmentFaq />
    </div>
  )
}

export default DepartmentDetails
