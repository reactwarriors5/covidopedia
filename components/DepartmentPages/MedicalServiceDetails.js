import React from 'react';

const MedicalServiceDetails = (props) => {
    const {serviceName,description,iconImage}=props.service;
    return (

        <div className="grid grid-cols-2 mb-10">
            <div className="justify-center">
                <img className="w-20 h-20 justify-center p-2" src={iconImage} alt="" />
            </div>
            <div>
                <h3 className="pb-2 font-bold text-gray-700">{serviceName}</h3>
                <p>{description}</p>
            </div>

        </div>

    );
};

export default MedicalServiceDetails;