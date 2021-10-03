import React from 'react';

const MedicalServices = () => {
    return (
        <div class="grid grid-cols-3 gap-2">
            <div className="border-2  w-2/3 h-20 ml-32 shadow-md rounded-md">
                <h1 className="font-bold text-center text-xl p-5 hover:bg-indigo-300 md:bg-purple-500">Our Company Details</h1>
            </div>
            <div class="col-span-2  p-5 border-2 w-11/12">
                <h1 className="font-bold text-3xl mb-5">Wide range of facilities and medical services</h1>
                <p className="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dolorem, esse quia similique eos, dicta eligendi minus dignissimos dolores tenetur sapiente laboriosam? Repellendus error quidem similique,
                    sunt mollitia eaque inventore fugit ipsa omnis non doloremque!</p>
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-2 mb-10">
                        <div className="justify-center">
                            <img className="w-20 h-20 justify-center p-2" src="https://www.pngrepo.com/png/44997/180/doctor.png" alt="" />
                        </div>
                        <div>
                            <h3 className="pb-2 font-bold">Standards of Treatment</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, accusamus.</p>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 mb-10">
                        <div className="justify-center">
                            <img className="w-20 h-20 justify-center p-2" src="https://www.pngrepo.com/png/43219/180/loupe.png" alt="" />
                        </div>
                        <div>
                            <h3 className="pb-2 font-bold">Infection Prevention</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, accusamus.</p>
                        </div>

                    </div>

                    <div className="grid grid-cols-2">
                        <div className="justify-center">
                            <img className="w-20 h-20 justify-center p-2" src="https://www.pngrepo.com/png/251286/180/valentines-note.png" alt="" />
                        </div>
                        <div>
                            <h3 className="pb-2 font-bold">Well Communication</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, accusamus.</p>
                        </div>

                    </div>
                    <div className="grid grid-cols-2">
                        <div className="justify-center">
                            <img className="w-20 h-20 justify-center p-2" src="https://www.pngrepo.com/png/276284/180/shield.png" alt="" />
                        </div>
                        <div>
                            <h3 className="pb-2 font-bold">25+ Years Experience</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, accusamus.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalServices;