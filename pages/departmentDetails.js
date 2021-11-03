import React from 'react'
import DepartmentSection from '../components/DepartmentPages/DepartmentSection'
import LaboratoryServices from '../components/DepartmentPages/LaboratoryServices'
import MedicalServices from '../components/DepartmentPages/MedicalServices'
import DepartmentBanner from '../components/DepartmentPages/DepartmentBanner'
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectDepartment } from '../features/departmentSlice/departmentSlice'
import Footer from '../components/HomePage/HomePage/Footer/Footer';

const DepartmentDetails = () => {
  const dept = useSelector(selectDepartment);
 console.log(dept);
  return (
    <div>
      <Navbar />
      <DepartmentBanner deptName={dept.detailsDepartment.name}/>
      <DepartmentSection deptImage={dept.detailsDepartment} />
      <MedicalServices deptMobile={dept.detailsDepartment.mobile} />
      <LaboratoryServices />
      <Footer/>
    </div>
  )
}

export default DepartmentDetails
