import React from 'react';
import { useSelector } from 'react-redux';
import { selectADoctor } from '../../../features/doctorSlice/doctorSlice';
// violet

const Banner = () => {
    const doctorUser = useSelector(selectADoctor)
    console.log(doctorUser);
    return (
        <section>

            <div
                className="w-full h-auto bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("https://image.shutterstock.com/image-photo/medical-physician-doctor-hands-healthcare-260nw-261024704.jpg")` }}
            >
                <div className="mx-40 grid-cols-6">
                    <br /><br />
                    <h1 className="text-4xl font-bold">Team Member</h1>
                    <br />
                    <p className="text-md">
                        {' '}
                        COVIDOPEDIA {'>'}
                        {'>'} SERVICES {'>'}
                        {'>'} TEAM MEMBERS {'>'}
                        {'>'}  {doctorUser.doctor.doctorName}</p>
                    <br /><br /><br />

                </div>
            </div>

        </section>
    );
};

export default Banner;

