import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamMemberDetails from "./TeamMemberDetails";
axios.defaults.withCredentials = true;

const TeamMember = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/doctors`
      );
      setDoctors(data);
      console.log(data);
    };
    getDoctors();
  }, []);
  return (
    <>
      {doctors && (
        <section className="py-6 text-gray-800 bg-gray-100">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
            <p className="p-2 text-sm font-semibold tracking-wider text-center text-indigo-700 uppercase">
              COVID Response Team
            </p>
            <h4 className="text-4xl font-bold leading-none text-center sm:text-5xl">
              The Dedicated People Behind The Scenes
            </h4>
            <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
              {doctors.map((doctor) => (
                <TeamMemberDetails
                  key={doctor._id}
                  doctor={doctor}
                ></TeamMemberDetails>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TeamMember;
