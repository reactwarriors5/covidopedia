import React from 'react';


const Overview = ({doctor}) => {
  
    return (
        <div className="lg:mx-20 mx-4">
            {/* bio */}
            <div className="my-8">
            <h4 className="text-2xl font-semibold text-indigo-700">About Me</h4>
            <p className="text-justify">{doctor.biography}
            </p>
            </div>
            {/* education */}
            <div className="mb-8">
            <h4 className="text-2xl font-semibold text-indigo-700">Experience</h4>
            <p className="text-justify">{doctor.designation}, <span>{doctor.hospital}, </span> <span>({doctor.from} - {doctor.to})</span>
            </p>
            </div>
        </div>
    );
};

export default Overview;