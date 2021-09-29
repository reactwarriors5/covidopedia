import React from 'react';
// violet
const TeamBanner = () => {
    return (
        <section>
            <div
                className="w-full h-auto bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("https://image.shutterstock.com/image-photo/medical-physician-doctor-hands-healthcare-260nw-261024704.jpg")` }}
            >
                <div className="mx-40 grid-cols-6">
                    <br /><br />
                    <h1 className="text-4xl font-bold">Neurology</h1>
                    <br />
                    <p className="text-md"> DOCTERY >> SERVICES >> MEDICINE >> NEUROLOGY</p>
                    <br /><br /><br />
                </div>
            </div>

        </section>
    );
};

export default TeamBanner;

