import React from 'react'
import BannerComp from '../Hero/BannerComp'
import Vendors from '../Vendors/Vendors'
import Contents from "../Contents/Contents";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <BannerComp />
      <Contents />
      <Vendors />
      <Footer />
    </main>
  )
}

export default HomePage
