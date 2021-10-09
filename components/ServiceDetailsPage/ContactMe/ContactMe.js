import React from 'react';

const ContactMe = () => {
    return (
      <div>
        <div class="items-center lg:mx-14 mx-auto ">
          <form action="#" class="w-full   p-4">
            <div class="p-3">
              <h1 className="text-4xl font-bold">Contact Me</h1>
              <p className="text-sm mt-2">Our Project manager adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat.</p>
            </div>
            <div class="flex justify-between mt-2">
              <div class="p-3 w-full">
                <input class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Your Name *" required />
              </div>
              <div class="p-3 w-full">
                <input class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="email" placeholder="Your Email *" required />
              </div>
            </div>
            <div class="p-3">
              <textarea class="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Message" required></textarea>
            </div>
            <div class="p-3 pt-4">
            <button class="lg:w-1/6 w-full bg-blue-400 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded text-sm">
            Send Message
            </button>
            </div>
          </form>
      </div>
      </div>
    );
};

export default ContactMe;