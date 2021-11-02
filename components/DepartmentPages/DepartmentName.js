import React, { useState } from 'react';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { departmentInfo } from '../../features/departmentSlice/departmentSlice';
const DepartmentName = (props) => {
    const { name, mobile, image } = props.deptName;
    // console.log(props);
    const [detailsDepartment, setDetailsDepartment] = useState({
        name, mobile, image
    })

    const dispatch = useDispatch()
    const handleDepartment = () => {
        dispatch(
            departmentInfo({ detailsDepartment })
        )
    }

    return (


        <div
            className="w-2/3 grid grid-cols-2 ml-16 mb-0.5 font-semibold leading-5  hover:bg-indigo-300  text-left  px-4 py-4 shadow-sm z-30 bg-white"
        >
            <Link href="/departmentDetails">
                <a href="#">
                    <div className="justify-self-start"
                        onClick={handleDepartment}
                    >
                        <h6> {name}</h6>
                    </div>
                    <div className="justify-self-end ml-60 -mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </a>
            </Link>
        </div>


    );
};

export default DepartmentName;