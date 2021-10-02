import React from 'react'
import BookAppointment from "../BookAppointment/BookAppointment";
import Departments from "../Departments/Departments";
import BannerComp from '../Hero/BannerComp'
import Vendors from '../Vendors/Vendors'
import Contents from "../Contents/Contents";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Testimonial from "../Testimonial/Testimonial";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <BannerComp />
      <BookAppointment />
      <Departments />
      <Contents />
      <Vendors />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default HomePage
