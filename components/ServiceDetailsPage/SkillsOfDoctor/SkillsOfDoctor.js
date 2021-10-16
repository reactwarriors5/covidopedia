import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SkillsOfDoctor = () => {
    return (
        <section class="lg:mx-20 mx-4 body-font overflow-hidden">
            <div class=" py-24 mx-auto">
                <div class="flex flex-wrap -m-12">
                <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <h2 class="text-4xl font-bold">Skills of Doctor</h2><br />
                    <p class="leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div class="w-full">
                        <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400">
                                Professional
                            </span>
                            </div>
                            <div class="text-right">
                            <span class="text-xs font-semibold inline-block text-blue-400">
                                90%
                            </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
                            <div style={{width: '90%'}}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400">
                            </div>
                        </div>
                        </div>
                        <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400">
                            Biotechnology
                            </span>
                            </div>
                            <div class="text-right">
                            <span class="text-xs font-semibold inline-block text-blue-400">
                                80%
                            </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
                            <div style={{width: '80%'}}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400">
                            </div>
                        </div>
                        </div>
                        <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400">
                            Medical Research
                            </span>
                            </div>
                            <div class="text-right">
                            <span class="text-xs font-semibold inline-block text-blue-400">
                                70%
                            </span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
                            <div style={{width: '70%'}}
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400">
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="p-12 md:w-1/2 flex flex-col items-start">
                    <h2 class="text-4xl font-bold">Benefits of Doctor</h2><br />
                    <p class="leading-relaxed mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="">
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Routine and medical care</p>
                        </div>
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Excellence in Healthcare every</p>
                        </div>
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Routine and medical care</p>
                        </div>
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Building a healthy environment.</p>
                        </div>
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Routine and medical care</p>
                        </div>
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Excellence in Healthcare every</p>
                        </div>    
                        </div>
                        <div class="">
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Routine and medical care</p>
                        </div>
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Excellence in Healthcare every</p>
                        </div>
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Routine and medical care</p>
                        </div>
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Building a healthy environment.</p>
                        </div>
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Routine and medical care</p>
                        </div>
                        <div className="flex justify-start mt-2 gap-2">
                            <FontAwesomeIcon className='bg-blue-300 mt-1' icon={faCheck}></FontAwesomeIcon>
                            <p>Excellence in Healthcare every</p>
                        </div>  
                        </div>
                    </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsOfDoctor;
