import React from 'react';
// violet
const Banner = () => {
    return (
        <section>
                <div 
                    className="w-full h-auto bg-no-repeat bg-cover"
                    style={{backgroundImage: `url("https://image.shutterstock.com/image-photo/medical-physician-doctor-hands-healthcare-260nw-261024704.jpg")`}}
                >
                    <div className="mx-40 grid-cols-6">
                        <br /><br />
                        <h1 className="text-7xl font-bold">Team Member</h1>
                        <br />
                        <p className="text-2xl"> DOXTERY   >>   TEAM MEMBERS   >>   SMITH JOHNSON</p>
                        <br /><br /><br />
                    </div>
                </div>
                
        </section>
    );
};

export default Banner;

{/* <div class="relative">
        <img 
            class="object-cover w-full h-56 sm:h-96" 
            src="https://thumbs.dreamstime.com/z/coronavirus-doctor-working-hospital-copy-text-background-banner-doctors-hospitals-fighting-male-protective-suit-mask-178767875.jpg" 
            alt="" 
        />
    <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
</div> */}