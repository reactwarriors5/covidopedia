import React from 'react';

const LaboratoryServices = () => {
    return (

        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="font-semibold font-bold text-2xl">Medical laboratory and specialists services</h1>

            <div className="grid gap-2 row-gap- lg:grid-cols-2">
                <div className="flex flex-col m-5 ">
                    <div className="text-left">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vel totam eaque iste impedit minima amet libero dignissimos placeat quae!</p>
                    </div>
                    <div className="flex"  >
                        <div className="w-3/4 ">
                            <h6 className="mb-1 font-semibold leading-5 rounded-lg hover:bg-indigo-300 text-start p-2 ">
                            Routine and medical care
                            </h6>

                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-3/4">
                            <h6 className="mb-1 font-semibold leading-5 rounded-lg hover:bg-indigo-300 text-start  p-2 ">
                            Excellence in Healthcare every
                            </h6>

                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-3/4">
                            <h6 className="mb-1 font-semibold leading-5 rounded-lg hover:bg-indigo-300 start  p-2">
                            Building a healthy environment.
                            </h6>

                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-3/4">
                            <h6 className="mb-1 font-semibold leading-5 rounded-lg hover:bg-indigo-300 start  p-2">
                            Routine and medical care
                            </h6>

                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-3/4">
                            <h6 className="mb-1 font-semibold leading-5 rounded-lg text-start p-2 hover:bg-indigo-300 ">
                            Excellence in Healthcare every
                            </h6>

                        </div>
                    </div>
                </div>
                <div className="relative ">
                    <img
                        className="inset-0 object-cover object-bottom w-full rounded  h-70 lg:absolute lg:h-full"
                        src="https://images.unsplash.com/photo-1578496779937-3815e442abed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>

    );
};

export default LaboratoryServices;