import React from 'react';
import { useSelector } from 'react-redux';
import { selectMedicine } from '../../../features/medicineSlice/medicineSlice';

const MedicineCard = () => {
    const medicine = useSelector(selectMedicine)
    console.log(medicine);
    return (
        <div class="m-10 flex justify-between items-center bg-blue-lightest">
            <div class="p-8 bg-white rounded shadow-md flex card text-grey-darkest">
                <img class="w-1/3  rounded-l-sm" src={medicine.Image} alt="Room Image" />
                <div class="ml-20 px-5">
                    <h1 className="text-2xl font-bold py-3">{medicine.name}</h1>
                    <p className="text-md font-bold pb-4">Manufactured By Hamdard (Wakf) Laboratories</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled</p>
                    <p className="text-md py-3">Applied for:</p>
                    <div>
                        <div className="flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            <p>Moisturization & Nourishment</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            <p>Blackhead Removal</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            <p>Anti-acne & Pimples</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            <p>Whitening & Fairness</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicineCard;