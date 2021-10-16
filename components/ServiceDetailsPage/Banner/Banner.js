import React from 'react';

const Banner = () => {
    return (
        <section>
                <div 
                    className="h-auto bg-no-repeat bg-cover"
                    style={{backgroundImage: `url("https://image.shutterstock.com/image-photo/medical-physician-doctor-hands-healthcare-260nw-261024704.jpg")`}}
                >
                    <div className="xl:mx-40 mx-8 lg:grid-cols-6">
                        <br /><br />
                        <h1 className="text-4xl font-bold">Team Member</h1>
                        <br />
                        <p className="text-lg"> DOXTERY   >>   TEAM MEMBERS   >>   SMITH JOHNSON</p>
                        <br /><br /><br />
                    </div>
                </div>
                
        </section>
    );
};

export default Banner;
