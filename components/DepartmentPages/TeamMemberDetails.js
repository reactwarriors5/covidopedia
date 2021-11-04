import React from "react";
import Link from "next/link";

const TeamMemberDetails = (props) => {
  const { name, biography, department, image, _id } = props.doctor;

  return (
    <div className="flex max-w-md mb-12 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="w-1/3 h-40 bg-cover">
        <img
          alt=""
          classNameName="w-24 bg-gray-500 bg-center bg-cover rounded-full"
          src={image}
        />
      </div>
      <div className="w-2/3 p-4">
        <h4 className="text-2xl font-bold text-gray-900">{name}</h4>
        <p className="mt-2 text-sm text-indigo-600">{department}</p>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{biography}</p>
        <div className="flex justify-between mt-3 item-center">
          <button classNameName="flex items-center justify-center my-4 btn-home">
            <Link href={`/doctorDetailsPage/${_id}`}>
              <a classNameName="tracking-wider text-white uppercase ">
                See Details
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetails;
