import React from "react";
import Image from "next/image";

const DepartmentCard = ({ departments }) => {
  console.log(departments.img);
  return (
    <div>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <Image
          src={departments.img}
          className="object-cover"
          width={500}
          height={300}
          alt="dept_img"
        />
        <div className="p-5 border border-t-0">
          <a
            href="/"
            aria-label="department"
            title="Visit the East"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200"
          >
            {departments.title}
          </a>
          <p className="my-8 text-gray-700">{departments.description}</p>
          <a
            href="/login"
            aria-label=""
            className="inline-flex items-center font-semibold text-indigo-400 hover:text-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
