import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
axios.defaults.withCredentials = true
import Navbar from '../../components/HomePage/HomePage/Navbar/Navbar'
// import AboutDoctor from '../../components/ServiceDetailsPage/AboutDoctor/AboutDoctor'
import Banner from '../../components/ServiceDetailsPage/Banner/Banner';
import DoctorDetails from '../../components/ServiceDetailsPage/DoctorDetails/DoctorDetails'
import DoctorDetailsTab from "../../components/ServiceDetailsPage/DoctorDetailsTab/DoctorDetailsTab"
// import DoctorExperience from '../../components/ServiceDetailsPage/DoctorExperience/DoctorExperience'
// import SkillsOfDoctor from '../../components/ServiceDetailsPage/SkillsOfDoctor/SkillsOfDoctor'
import Footer from '../../components/HomePage/HomePage/Footer/Footer'

const ServiceDetailsPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [doctor, setDoctor] = useState({})
  useEffect(() => {
    const getDoctor = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/doctor/${id}`
      )
      setDoctor(data)
    }
    getDoctor()
  }, [id])

  return (
    <div className="bg-gray-100"> 
    {doctor && (
     <>
      <Navbar />
      <Banner />
      {doctor && <DoctorDetails doctor={doctor} />}
      <DoctorDetailsTab />
      {/* <AboutDoctor />
      <SkillsOfDoctor />
      <DoctorExperience /> */}
      <Footer />
    </>
      )}
      </div>
  )
}

export default ServiceDetailsPage
