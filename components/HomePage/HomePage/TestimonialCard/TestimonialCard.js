import React from "react";
// import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div>
      <div className="bg-white rounded-md lg:mb-24">
        <div className="flex flex-col w-full max-w-lg p-6 mx-auto text-gray-800 ">
          <div className="p-4 text-sm text-gray-600">
            <p className="italic">{testimonial.description}</p>
          </div>
        </div>
        {/* description */}
        <div className="px-8 py-4 bg-gray-200 rounded-md">
          <div className="flex space-x-4">
            <div>
              <h4 className="font-mono text-xl font-bold">
                {testimonial.author}
              </h4>
              <span className="italic text-indigo-600">{testimonial.dept}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
