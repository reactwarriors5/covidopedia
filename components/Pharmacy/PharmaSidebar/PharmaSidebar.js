import React, { useEffect, useState } from 'react';

const PharmaSidebar = () => {
    const [isEnable_0, setIsEnable_0] = useState(false);
    const [isEnable_1, setIsEnable_1] = useState(false);
    const [isEnable_2, setIsEnable_2] = useState(false);
    const [isEnable_3, setIsEnable_3] = useState(false);
    const [isEnable_4, setIsEnable_4] = useState(false);
    const [isEnable_5, setIsEnable_5] = useState(false);
  
    const isClick = (e) => {
        if (e===0 && isEnable_0 === true) {
            setIsEnable_0(false);
        }
        else if(e===0 && isEnable_0 === false){
            setIsEnable_0(true);
        }

        else if (e===1 && isEnable_1 === true) {
            setIsEnable_1(false);
        }
        else if(e===1 && isEnable_1 === false){
            setIsEnable_1(true);
        }

        else if (e===2 && isEnable_2 === true) {
            setIsEnable_2(false);
        }
        else if(e===2 && isEnable_2 === false){
            setIsEnable_2(true);
        }

        else if(e===3 && isEnable_3 === true) {
            setIsEnable_3(false);
        }
        else if(e===3 && isEnable_3 === false){
            setIsEnable_3(true);
        }

        else if (e===4 && isEnable_4 === true) {
            setIsEnable_4(false);
        }
        else if(e===4 && isEnable_4 === false){
            setIsEnable_4(true);
        }

        else if (e===5 && isEnable_5 === true) {
            setIsEnable_5(false);
        }
        else if(e===5 && isEnable_5 === false){
            setIsEnable_5(true);
        }
    }
    return (
        <div className="mt-5 ">
            <div class="bg-white flex flex-col space-y-10 justify-center items-center">

                <div class="bg-white w-5/6  shadow-xl rounded p-5">
                    <div className="divide-y">
                        <h1 class="text-3xl font-medium">Search Filter</h1>
                        <hr />
                    </div>

                    <form class="space-y-5 mt-5">
                        <p class="text-lg">Location</p>
                        <input type="text" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Select Location" />

                        <div>
                            <h3 className="text-xl py-1">Categories</h3>
                            <div className="flex justify-start items-center ">
                                <div onClick={() => isClick(0)}>
                                    {
                                        isEnable_0 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                                                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                                            </svg>
                                    }
                                </div>
                                <p className="ml-2">Popular</p>
                            </div>
                            <div className="flex justify-start items-center ">
                                <div onClick={() => isClick(1)}>
                                    {
                                        isEnable_1 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                                                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                                            </svg>
                                    }
                                </div>
                                <p className="ml-2">Latest</p>
                            </div>
                            <div className="flex justify-start items-center ">
                                <div onClick={() => isClick(2)}>
                                    {
                                        isEnable_2 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                                                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                                            </svg>
                                    }
                                </div>
                                <p className="ml-2">Ratings</p>
                            </div>
                            <div className="flex justify-start items-center ">
                                <div onClick={() => isClick(3)}>
                                    {
                                        isEnable_3 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                                                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                                            </svg>
                                    }
                                </div>
                                <p className="ml-2">Availability</p>
                            </div>
                            <div className="flex justify-start items-center ">
                                <div onClick={() => isClick(4)}>
                                    {
                                        isEnable_4 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                                                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                                            </svg>
                                    }
                                </div>
                                <p className="ml-2">Open 24 Hrs</p>
                            </div>
                            <div className="flex justify-start items-center ">
                                <div onClick={() => isClick(5)}>
                                    {
                                        isEnable_5 ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
                                                <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                                            </svg>
                                    }
                                </div>
                                <p className="ml-2">Home Delivery</p>
                            </div>
                        </div>

                        <button class="text-center w-full bg-blue-700  text-white py-3 font-medium">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PharmaSidebar;