import React from 'react'
// import { useSelector } from 'react-redux'
// import { selectADoctor } from '../../../features/doctorSlice/doctorSlice'
// violet

const DepartmentBanner = (props) => {

    // const doctorUser = useSelector(selectADoctor)
    // console.log(doctorUser);
    return (
        <section>
            <div className="w-full h-auto bg-indigo-700">
                <div className="container py-6 lg:grid-cols-6 grid-cols-1 items-center">
                    <h6 className="text-md mt-4 text-white font-semibold">Home / Department</h6>
                    <h3 className="text-3xl text-white font-bold">{props.deptName}</h3>
                </div>
            </div>

        </section>
    );
};

export default DepartmentBanner;


