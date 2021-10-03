import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Progress } from "antd";
import { geekblue } from "@ant-design/colors";

const testimonialData = [
  {
    id: 1,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    author: "John Doe",
    dept: "Hematology",
  },
  {
    id: 2,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    author: "John Doe",
    dept: "Orthopedics",
  },
  {
    id: 3,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    author: "John Doe",
    dept: "Cardiac",
  },
];

const Testimonial = () => {
  return (
    <section className="relative z-10 object-cover py-16 mt-16 mb-16 bg-center bg-no-repeat bg-cover lg:mt-24 lg:mb-40 lg:pt-16 lg:pb-72 bg-Testimonial">
      {/* overlay div */}
      <div className="absolute inset-0 bg-gray-900 opacity-75 -z-10"></div>
      {/* container div */}
      <div className="container z-20">
        {/* testimonial header div */}
        <div className="grid items-center grid-cols-1 gap-16 text-white lg:grid-cols-3 lg:justify-items-evenly">
          {/* title div */}
          <div className="text-center lg:text-left lg:col-span-2">
            <h5 className="font-bold text-indigo-300 text-md">Testimonials</h5>
            <h3 className="mt-3 text-3xl font-bold text-white lg:text-5xl">
              What People Say About{" "}
              <span className="block lg:pt-3">Medical Heath care</span>{" "}
            </h3>
          </div>
          {/* progress bar div */}
          <div className="flex items-center justify-around">
            {/* progress bar */}
            <div className="text-white">
              <Progress strokeColor="geekblue-3" type="circle" percent={75} />
            </div>
            <div>
              <h4 className="mb-3 text-xl font-bold text-indigo-300 lg:text-2xl">
                Happy Patients
              </h4>
              <p>
                Best Medical Facilities
                <span className="block">and Loving Staffs</span>
              </p>
            </div>
          </div>
        </div>
        {/* testimonial card data */}
        <div className="container grid items-center justify-center grid-cols-1 gap-8 mt-12 lg:absolute lg:inset-x-0 lg:z-20 lg:inset-y-56 lg:grid-cols-3 ">
          {testimonialData.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
