import React, { useEffect, useState } from "react";
import doctorData from './FakeData/doctorData.json';
import TeamMemberDetails from "./TeamMemberDetails";
import axios from 'axios'

const TeamMember = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API}/doctors`;
    axios.get(url).then((res)=> setDoctors(res.data))
  }, [])

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-bold ">Team Member</h1>
      <div className="grid gap-12 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">

        {
          doctors.map((doctor) => <TeamMemberDetails doctor={doctor}></TeamMemberDetails>)
        }
      </div>
    </div>
  );
};

export default TeamMember;
