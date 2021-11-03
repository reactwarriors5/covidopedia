import React from 'react';
import { useState, useEffect } from 'react';
import DepartmentName from './DepartmentName';
import { departmentFakeData } from './FakeData/departmentFakeData';


const DepartmentSection = (props) => {
    const [department, setDepartment] = useState([]);
    console.log(props.deptImage)

    useEffect(() => setDepartment(departmentFakeData), [])

    return (
        <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid max-w-screen-lg gap-0 lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col  justify-center mr-5 z-40 bg-gray-200">

                    {department.map((deptName) => <DepartmentName deptName={deptName}></DepartmentName>)}

                </div>
                <div className="grid grid-cols-2 gap-5">
                    <img
                        className="object-cover w-full h-61 col-span-2 rounded shadow-lg"
                        src={props.deptImage.image1}
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-48 rounded shadow-lg"
                        src={props.deptImage.image2}
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-48 rounded shadow-lg"
                        src={props.deptImage.image3}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default DepartmentSection;