import React from "react";
import DepartmentCard from "../DepartmentCard/DepartmentCard";

const deptData = [
  {
    title: "Orthopedics",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    img: "/images/images-adnan/orthopedics.jpg",
  },
  {
    title: "Neurology",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    img: "/images/images-adnan/neurology.jpg",
  },
  {
    title: "Gynecology",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    img: "/images/images-adnan/gynecology.jpg",
  },
];

const Departments = () => {
  return (
    <section className="my-16 bg-indigo-900">
      <div className="container py-20">
        {/* dept header */}
        <div className="text-center">
          <h5 className="font-bold text-indigo-300 text-md">
            Best practice care!
          </h5>
          <h3 className="mt-3 text-3xl font-bold text-white lg:text-5xl">
            Responsible Departments
          </h3>
        </div>
        {/* depts card data */}
        <div className="container grid items-center justify-center grid-cols-1 gap-8 mt-20 lg:grid-cols-3 ">
          {deptData.map((departments, idx) => (
            <DepartmentCard departments={departments} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
