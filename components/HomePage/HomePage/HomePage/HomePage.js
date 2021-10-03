import React from "react";
import BookAppointment from "../BookAppointment/BookAppointment";
import Departments from "../Departments/Departments";
import BannerComp from "../Hero/BannerComp";
import Vendors from "../Vendors/Vendors";
import Contents from "../Contents/Contents";
import Footer from "../Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";
import TeamMember from "../../../DepartmentPages/TeamMember";

const HomePage = () => {
  return (
    <main>
      <BannerComp />
      <BookAppointment />
      <TeamMember />
      <Departments />
      <Contents />
      <Vendors />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default HomePage;
