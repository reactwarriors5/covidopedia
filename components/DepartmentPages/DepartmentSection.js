import React from 'react';
import { useState, useEffect } from 'react';
import DepartmentName from './DepartmentName';
import departmentFakeData from './FakeData/departmentFakeData.json'

const DepartmentSection = (props) => {
    const [department, setDepartment] = useState([]);
    console.log(props.deptImage);

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
                        src={props.deptImage}
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-48 rounded shadow-lg"
                        src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-48 rounded shadow-lg"
                        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default DepartmentSection;