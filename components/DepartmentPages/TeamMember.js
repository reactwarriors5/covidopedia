import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamMemberDetails from "./TeamMemberDetails";
import { Carousel } from "antd";
axios.defaults.withCredentials = true;

const TeamMember = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/doctors`
      );
      setDoctors(data);
      console.log(data);
    };
    getDoctors();
  }, []);
  return (
    <>
      {doctors && (
        <section className="container px-20 pt-4 pb-12 my-12 text-gray-800 ">
          <div class="max-w-screen-xl p-4   mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
            <div class="relative">
              <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
                  <p class="text-base leading-6 text-indigo-500 font-semibold uppercase">
                    Doctors
                  </p>
                  <h4 class="mt-2 text-2xl leading-8 font-extrabold text-indigo-900 dark:text-white sm:text-3xl sm:leading-9">
                    Our COVID-19 Response Team is Here!
                  </h4>
                  <p class="mt-4 text-lg leading-6 text-gray-500">
                    Talk to our doctors effectively,efficiently. Take Support
                    24/7 and make an appointment as per your requirements.
                  </p>
                  <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                          Live Support
                        </span>
                      </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                          COVID-19 tracker
                        </span>
                      </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                          24/7 support
                        </span>
                      </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                          Emergency Ambulance Service
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                  <div class="relative space-y-4">
                    <Carousel autoplay effect="fade" dots={false}>
                      {doctors.map((doctor) => (
                        <TeamMemberDetails
                          key={doctor._id}
                          doctor={doctor}
                        ></TeamMemberDetails>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TeamMember;
