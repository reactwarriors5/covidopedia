import React from "react";

const Vendors = () => {
  return (
    <div className="bg-vendorBg">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-8 text-center lg:max-w-xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-700 md:text-5xl">
            Discover Our <span className="text-indigo-500">Vendors</span>
          </h2>

          <p className="text-base text-gray-700 md:text-lg">
            A heritage in care. A reputation in excellence. Advancing the
            boundaries of medicine. Caring for the growing needs of our
            community.
          </p>
        </div>
        <div className="flex flex-col mb-12 space-y-4 text-center sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="p-2 font-semibold text-white bg-indigo-500 rounded hover:bg-indigo-600"
          >
            Buy Medicine
          </a>
          <a
            href="#"
            className="p-2 font-semibold border border-purple-300 rounded hover:border-indigo-500"
          >
            View All Vendors
          </a>
        </div>

        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <div className="mb-8 text-center  md:mb-0">
              <img
                className="w-1/2 mx-auto -mb-24 rounded-full md:w-80"
                src="/asset/images-atik/vendor-1.jpg"
                alt="Avatar Jacky"
              />
              <div className="pb-10 text-gray-400 bg-white rounded-lg shadow-lg pt-28">
                <h3 className="text-xl text-gray-800 font-title">
                  Moments Hospice
                </h3>
                <p className="text-indigo-400 font-body">Antipyretics</p>
                <div className="flex items-center justify-center mt-2 space-x-3">
                  <a
                    href="#"
                    className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
                  >
                    View Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-8 text-center  md:mb-0">
              <img
                className="w-1/2 mx-auto -mb-24 rounded-full md:w-80"
                src="/asset/images-atik/vendor-2.jpg"
                alt="Avatar Jacky"
              />
              <div className="pb-10 text-gray-400 bg-white rounded-lg shadow-lg pt-28">
                <h3 className="text-xl text-gray-800 font-title">
                  CPR – Medical
                </h3>
                <p className="text-indigo-400 font-body">Analgesics</p>
                <div className="flex items-center justify-center mt-2 space-x-3">
                  <a
                    href="#"
                    className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
                  >
                    View Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-8 text-center  md:mb-0">
              <img
                className="w-1/2 mx-auto -mb-24 rounded-full md:w-80"
                src="/asset/images-atik/vendor-3.jpg"
                alt="Avatar Jacky"
              />
              <div className="pb-10 text-gray-400 bg-white rounded-lg shadow-lg pt-28">
                <h3 className="text-xl text-gray-800 font-title">UN Drugged</h3>
                <p className="text-indigo-400 font-body">Antimalarial</p>
                <div className="flex items-center justify-center mt-2 space-x-3">
                  <a
                    href="#"
                    className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
                  >
                    View Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-8 text-center  md:mb-0">
              <img
                className="w-1/2 mx-auto -mb-24 rounded-full md:w-80"
                src="/asset/images-atik/vendor-4.jpg"
                alt="Avatar Jacky"
              />
              <div className="pb-10 text-gray-400 bg-white rounded-lg shadow-lg pt-28">
                <h3 className="text-xl text-gray-800 font-title">
                  Canadian Valley
                </h3>
                <p className="text-indigo-400 font-body">Antibiotics</p>
                <div className="flex items-center justify-center mt-2 space-x-3">
                  <a
                    href="#"
                    className="p-1 border border-gray-300 rounded font-body hover:bg-indigo-500 hover:text-white hover:border-none"
                  >
                    View Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
