import React from 'react'
import axios from 'axios'
import { logout } from '../../../../features/userSlice/userSlice'
import Link from 'next/link'
import { toast } from 'react-toastify'

// import logo from "../../../../images/logo-n.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../features/userSlice/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // Logout user and clear state
  const handleLogout = async (e) => {
    // make state null
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/logout`);
    window.location.reload();
    // dispatch(
    //   login({
    //     user: null,
    //   })
    // )
    e.preventDefault();
    dispatch(logout());
    toast.warning(data.message)
  }
  const user = useSelector(selectUser)

  return (
    <section className="sticky z-30 drop-shadow-lg">
      <Popover className="relative bg-white">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="sr-only">
                <a className="font-mono text-3xl font-semibold tracking-widest text-indigo-800">
                  COVIDOPEDIA
                </a>
                {/* <img className="w-auto h-8 sm:h-10" src={logo} alt="" /> */}
              </Link>
            </div>
            {/* responsive mobile menu */}
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-400">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex ">
              <div className="items-center space-x-10 md:flex md:justify-end ">
                <Link href="/">
                  <a className="text-base font-semibold text-indigo-600 font-body text-secondary">
                    Home
                  </a>
                </Link>
                {user === null && (
                  <>
                    <Link href="/login">
                      <a className="text-base font-semibold text-gray-800 whitespace-nowrap hover:text-gray-900">
                        Sign in
                      </a>
                    </Link>
                    <Link href="/login">
                      <a className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-center text-white bg-indigo-600 rounded-full shadow-md hover:text-white hover:bg-indigo-700 focus:outline-none">
                        Sign up
                      </a>
                    </Link>
                  </>
                )}
                {user !== null && user.user && (
                  <>
                    <Link href='/adminDashboard'>
                      <a className='text-base font-semibold text-gray-800 whitespace-nowrap hover:text-gray-900'>
                        {user?.user?.name}
                      </a>
                    </Link>
                    <button
                      // onClick={logout}
                      onClick={(e) => handleLogout(e)} // nadim
                      className='text-base px-2 py-2 rounded-lg font-semibold text-white whitespace-nowrap bg-indigo-500 '
                    >
                      Log Out
                    </button>
                  </>
                )}
              </div>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    {/* <img className="w-auto h-8" src={logo} alt="logo" /> */}
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-400">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div className="grid grid-cols-1 gap-y-4">
                  <Link href="/">
                    <a className="text-base font-semibold text-indigo-600 font-body text-secondary">
                      Home
                    </a>
                  </Link>
                  <Link href="/adminDashboard">
                    <a className="text-base font-semibold text-indigo-600 font-body text-secondary">
                      Admin
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href='#' 
                    // onClick={logout}
                    onClick={(e) => handleLogout(e)} //nadim
                  >
                    <a className='text-base font-semibold text-gray-800 whitespace-nowrap hover:text-gray-900'>

                      Log Out
                    </a>
                  </Link>
                  <p className="mt-6 font-medium text-center text-secondary font-body">
                    Existing customer?{" "}
                    <Link href="/login">
                      <a className="text-sm font-semibold text-indigo-600 whitespace-nowrap hover:text-indigo-900">
                        Sign in
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </section>
  );
};

export default Navbar;
