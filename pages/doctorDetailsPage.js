import React from 'react'
import Footer from '../components/HomePage/HomePage/Footer/Footer'
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar'
import AboutDoctor from '../components/ServiceDetailsPage/AboutDoctor/AboutDoctor'
import Banner from '../components/ServiceDetailsPage/Banner/Banner'
import ContactMe from '../components/ServiceDetailsPage/ContactMe/ContactMe'
import DoctorDetails from '../components/ServiceDetailsPage/DoctorDetails/DoctorDetails'
import DoctorExperience from '../components/ServiceDetailsPage/DoctorExperience/DoctorExperience'
import SkillsOfDoctor from '../components/ServiceDetailsPage/SkillsOfDoctor/SkillsOfDoctor'

const ServiceDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <DoctorDetails />
      <AboutDoctor />
      <SkillsOfDoctor />
      <DoctorExperience />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default ServiceDetailsPage
