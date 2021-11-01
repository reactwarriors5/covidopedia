import React from 'react';

const ProductDetails = () => {
    return (
        <div class="m-10 bg-blue-lightest">
            <div class="p-10  bg-white rounded shadow-md  card text-grey-darkest">
                <h1 className="text-2xl pb-3">Product Details</h1>
                <hr />
                <h3 className="text-lg py-3">Description</h3>
                <div className="grid grid-cols-3">
                    <p className="col-span-2"> Safi syrup is best for purifying the blood.
                        As it contains herbal extracts it can cure indigestion,
                        constipation, nose bleeds and acne boils.
                        It helps in the removal of the toxins from the blood.
                        It improves the complexion and gives you a healthy life
                    </p>
                </div>
                <h3 className="text-lg py-3">Highlights</h3>
                <ul>
                    <li>Safi syrup is known for its best purifying syrup for blood.</li>
                    <li>It helps in eliminating the toxins from the bloodstream.</li>
                    <li>It improves digestion.</li>
                    <li>It also helps in indigestion and constipation.</li>
                </ul>
                <h3 className="text-lg py-3">Directions for use</h3>
                <div className="grid grid-cols-3">
                    <p className="col-span-2">Adults: Take 2 tablespoons once a day in a glass full of water.</p>
                </div>
                <h3 className="text-lg py-3">Storage</h3>
                <div className="grid grid-cols-3">
                    <p className="col-span-2">Store this syrup at room temperature protected from sunlight,
                        heat, and moisture. Keep away from reaching out of children and pets.
                        Ensure that the unused medicine is disposed of properly.
                    </p>
                </div>
                <h3 className="text-lg py-3">Administration Instructions</h3>
                <div className="grid grid-cols-3">
                    <p className="col-span-2">Shake the bottle before its use.
                        This syrup can be taken with or without food.
                        The quantity consumed should not be lesser or greater than
                        the prescribed one.
                    </p>
                </div>

                <h3 className="text-lg py-3">Warning</h3>
                <div className="grid grid-cols-3">
                    <p className="col-span-2">This is not recommended for the pregnant women and lactating mothers.
                    </p>
                </div>

                <h3 className="text-lg py-3">Precaution</h3>
                <div className="grid grid-cols-3">
                    <p className="col-span-2">Syrup has to be disposed of properly after 3 years from manufactured date and it is not recommended to use after the date.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;