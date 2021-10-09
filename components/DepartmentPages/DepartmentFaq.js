import React from 'react';

const DepartmentFaq = () => {
    return (
        <div class="grid grid-cols-3 gap-4">

            <div class="..."></div>
            <div class="col-span-2 ...">
            <h2 class="mb-2 ml-4 mt-8 text-xl font-bold leading-none text-start sm:text-4xl">Frequently Asked Questions</h2>
                <section class="bg-coolGray-100 text-coolGray-800">
                    <div class="container flex flex-col  justify-center  mx-auto md:p-8">
                        <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-300">
                            <details>
                                <summary class="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
                                <div class="px-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                                </div>
                            </details>
                            <details>
                                <summary class="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
                                <div class="px-4 pb-4">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                                </div>
                            </details>
                            <details>
                                <summary class="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
                                <div class="px-4 pb-4 space-y-2">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                                    <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DepartmentFaq;