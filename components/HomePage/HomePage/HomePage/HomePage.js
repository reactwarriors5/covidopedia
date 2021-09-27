import React from "react";
import BookAppointment from "../BookAppointment/BookAppointment";
import Departments from "../Departments/Departments";
import Navbar from "../Navbar/Navbar";
import Testimonial from "../Testimonial/Testimonial";

const HomePage = () => {
  return (
    <main>
      <BookAppointment />
      <Testimonial />
      <Departments />
    </main>
  );
};

export default HomePage;
