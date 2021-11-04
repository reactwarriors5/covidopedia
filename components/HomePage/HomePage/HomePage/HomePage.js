import React from "react";
import BookAppointment from "../BookAppointment/BookAppointment";
import Departments from "../Departments/Departments";
import BannerComp from "../Hero/BannerComp";
import Vendors from "../Vendors/Vendors";
import Contents from "../Contents/Contents";
import Footer from "../Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";
import TeamMember from "../../../DepartmentPages/TeamMember";
import Navbar from "../Navbar/Navbar";
import CovidPortal from "../CovidPortal/CovidPortal";
import Faq from "../../../Faq/Faq";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <BannerComp />
      {/* <BookAppointment /> */}
      <CovidPortal />
      <Departments />
      <TeamMember />
      <Contents />
      <Vendors />
      <Faq />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default HomePage;
