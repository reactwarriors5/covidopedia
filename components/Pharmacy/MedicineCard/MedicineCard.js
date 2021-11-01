import React from 'react';

const MedicineCard = () => {
    return (
        <div class="m-10 flex justify-between items-center bg-blue-lightest">
            <div  class="p-8 bg-white rounded shadow-md flex card text-grey-darkest">
                <img class="w-1/3  rounded-l-sm" src="http://www.squarepharma.com.bd/products/Seclo%2040%20Capsule.jpg" alt="Room Image" />
                <div class="ml-10">
                    <h1>Benzaxapine Croplex</h1>
                    <p>Manufactured By Hamdard (Wakf) Laboratories</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled</p>
                    <p>Applied for:</p>
                    <ul>
                        <li>Moisturization & Nourishment</li>
                        <li>Blackhead Removal</li>
                        <li>Anti-acne & Pimples</li>
                        <li>Whitening & Fairness</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MedicineCard;