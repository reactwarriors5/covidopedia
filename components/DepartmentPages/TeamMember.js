import React from "react";
import Link from "next/link";

const TeamMember = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <h3 className="text-3xl font-bold text-center text-indigo-600 lg:mt-0 lg:text-5xl">
        COVID-19 Response Team
      </h3>
      <div className="grid gap-12 mx-auto my-20 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <img
            className="object-cover mb-2 rounded-full shadow w-52 h-52"
            src="https://doctery-demo.themesion.com/demo1/wp-content/uploads/sites/2/2020/01/team-01.jpg"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Oliver Aguilerra</p>
            <p className="text-gray-800 text-md">Cardiology Specialist</p>
            <button className="btn-home">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a className="text-lg text-white">See Details</a>
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
            <p className="text-xl font-bold">Marta Clermont</p>
            <p className="text-gray-800 text-md">Dermatologist</p>
            <button className="btn-home">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a className="text-lg text-white">See Details</a>
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
            <p className="text-xl font-bold">Jennifer Winds</p>
            <p className="text-gray-800 text-md">Neurology Specialist</p>
            <button className="btn-home">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a className="text-lg text-white">See Details</a>
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
            <p className="text-xl font-bold">Alice Melbourne</p>
            <p className="text-gray-800 text-md">Medicine Specialist</p>
            <button className="btn-home">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a className="text-lg text-white">See Details</a>
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
            <p className="text-xl font-bold">Merry Anderson</p>
            <p className="text-gray-800 text-md">Gastrologic Specialist</p>
            <button className="btn-home">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a className="text-lg text-white">See Details</a>
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
            <p className="text-xl font-bold">Andrew Larkin</p>
            <p className="text-gray-800 text-md">General Doctor</p>
            <button className="btn-home">
              <Link
                href="/doctorDetailsPage"
                className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
              >
                <a className="text-lg text-white">See Details</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
