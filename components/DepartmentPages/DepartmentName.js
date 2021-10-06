import React from 'react';

const DepartmentName = (props) => {
   const {name}=props.deptName;
   
    return (
        <div className="flex">
            <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                    <svg
                        className="w-8 h-8 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                    >
                        <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                    </svg>
                </div>
            </div>
            <div className="w-3/4 ">
                <h6 className="mb-2 font-semibold leading-5 rounded-lg hover:bg-indigo-300  text-center  p-5 shadow-md ">
                    {name}
                </h6>

            </div>
        </div>
        
    );
};

export default DepartmentName;