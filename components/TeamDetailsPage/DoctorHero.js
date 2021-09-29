import React from 'react';

const DoctorHero = () => {
    return (

        <header class="bg-white dark:bg-gray-800">

            <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
                <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    <div class="max-w-lg lg:mx-12 lg:order-2">
                        <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">Dr. Merry Anderson </h1>
                        <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                        <div class="mt-6">
                            <a href="#" class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400">Book An Appointment</a>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img class="object-cover w-80 h-80 max-w-2xl rounded-md" src="https://doctery-demo.themesion.com/demo1/wp-content/uploads/sites/2/2019/04/team-05.jpg"/>
                </div>
            </div>
        </header>
    );
};

export default DoctorHero;