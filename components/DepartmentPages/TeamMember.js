import React from "react";
import Link from "next/link";

const TeamMember = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-bold ">Team Member</h1>
      <div className="grid gap-12 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <img
            className="object-cover mb-2 rounded-full shadow w-52 h-52"
            src="https://doctery-demo.themesion.com/demo1/wp-content/uploads/sites/2/2020/01/team-01.jpg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Oliver Aguilerra</p>
            <p className="text-sm text-gray-800">Cardiology Specialist</p>
            <button className="flex items-center justify-center mt-4">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a>See Details</a>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover mb-2 rounded-full shadow w-52 h-52"
            src="https://doctery-demo.themesion.com/demo1/wp-content/uploads/sites/2/2020/01/team-02.jpg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Marta Clermont</p>
            <p className="text-sm text-gray-800">Dermatologist</p>
            <button className="flex items-center justify-center mt-4">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a>See Details</a>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover mb-2 rounded-full shadow w-52 h-52"
            src="https://doctery-demo.themesion.com/demo1/wp-content/uploads/sites/2/2019/05/team-03.jpg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Jennifer Winds</p>
            <p className="text-sm text-gray-800">Neurology Specialist</p>
            <button className="flex items-center justify-center mt-4">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a>See Details</a>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover mb-2 rounded-full shadow w-52 h-52"
            src="https://doctery-demo.themesion.com/demo1/wp-content/uploads/sites/2/2019/05/team-04.jpg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Alice Melbourne</p>
            <p className="text-sm text-gray-800">Medicine Specialist</p>
            <button className="flex items-center justify-center mt-4">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a>See Details</a>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover mb-2 rounded-full shadow w-52 h-52"
            src="https://doctery-demo.themesion.com/demo1/wp-content/uploads/sites/2/2019/04/team-05.jpg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Merry Anderson</p>
            <p className="text-sm text-gray-800">Gastrologic Specialist</p>
            <button className="flex items-center justify-center mt-4">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a>See Details</a>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover mb-2 rounded-full shadow w-52 h-52"
            src="https://doctery-demo.themesion.com/demo1/wp-content/uploads/sites/2/2019/03/team-06.jpg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Andrew Larkin</p>
            <p className="text-sm text-gray-800">General Doctor</p>
            <button className="flex items-center justify-center mt-4">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a>See Details</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
