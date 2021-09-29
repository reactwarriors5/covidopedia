import React from 'react';

const SkillsOfDoctor = () => {

    return (
        <div class="grid grid-cols-2 gap-4">
            <div class="...">
                <h1>Skills Of Doctor</h1>
                <div class="flex flex-col gap-4">
                    <div>
                        <div class="bg-white rounded-lg w-72 shadow block p-1 m-auto">
                            <h1>Professional</h1>
                            <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
                                <div class="w-1/5 h-full text-center text-xs text-white bg-red-400 rounded-full">
                                    75%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-white rounded-lg w-72 shadow block p-1 m-auto">
                            <h1>Biotechnology</h1>
                            <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
                                <div class="w-3/4 h-full text-center text-xs text-white bg-yellow-500 rounded-full">
                                    75%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-white rounded-lg w-72 shadow block p-1 m-auto">
                            <h1>Medical Research</h1>
                            <div class="w-full h-4 bg-gray-400 rounded-full mt-3">
                                <div class="w-3/4 h-full text-center text-xs text-white bg-indigo-500 rounded-full">
                                    75%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="...">
                <h1>Benefits Of Doctor</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, similique
                    perferendis. Omnis, facere. Molestiae voluptatum dolore, voluptatem dolorum sit consequatur? Corporis,
                    qui ducimus eius debitis consequuntur in sequi esse quasi.
                </p>
            </div>

        </div>



    );
};

export default SkillsOfDoctor;