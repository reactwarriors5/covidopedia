import React from "react";

const MaskInstructions = () => {
  return (
    <section className="relative px-5 pb-16 md:px-12 lg:px-24 max-w-7xl">
      <div className="p-4 bg-white">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 md:pl-20">
            <h4 className="text-3xl font-extrabold leading-9 tracking-tight text-indigo-900 uppercase lg:leading-8">
              Always Wear A Mask
            </h4>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900">
                      While Outside
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      In areas with high numbers of COVID-19 cases, consider
                      wearing a mask in crowded outdoor settings and for
                      activities with close contact with others who are not
                      fully vaccinated
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900">
                      Even if You ARE Vaccinated
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      If you are fully vaccinated, to maximize protection from
                      the Delta variant and prevent possibly spreading it to
                      others, wear a mask indoors in public if you are in an
                      area of substantial or high transmission.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900">
                      Pick a Mask with Enough Layers
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      A mask with layers will stop more respiratory droplets
                      getting inside your mask or escaping from your mask if you
                      are sick.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
            <img
              src="https://image.freepik.com/free-vector/people-wearing-different-face-mask-types_52683-41060.jpg"
              alt="illustration"
              className="relative w-auto mx-auto rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaskInstructions;
