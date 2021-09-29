import React from 'react';

const SkillsOfDoctor = () => {
    return (
        <section class="mx-32 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-12">
                <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <h2 class="text-4xl font-bold">Skills of Doctor</h2><br />
                    <p class="leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                    <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                                Task in progress
                            </span>
                            </div>
                            <div class="text-right">
                            <span class="text-xs font-semibold inline-block text-purple-600">
                                30%
                            </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                            <div style={{width: '30%'}}
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500">
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
                <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <h2 class="text-4xl font-bold">Benefits of Doctor</h2><br />
                    <p class="leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsOfDoctor;