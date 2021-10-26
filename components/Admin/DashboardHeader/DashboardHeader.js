import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice/userSlice'

const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  const user = useSelector(selectUser)
  console.log(user);
  const [menuItem, setMenuItem] = useState(false);

    const isOpen = () => {
        if (menuItem === false) {
            setMenuItem(true);
        }
        else {
            setMenuItem(false);
        }
    }
  return (
    <header className='font-semibold bg-gray-200 font-body text-secondary '>
      <div className='sticky top-0 z-30 lg:z-40'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 -mb-px'>
            {/* Header: Left side */}
            <div className='flex'>
              {/* Hamburger button */}
              <button
                className='text-gray-500 hover:text-gray-600 lg:hidden'
                aria-controls='sidebar'
                aria-expanded={sidebarOpen}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span className='sr-only'>Open sidebar</span>
                <svg
                  className='w-6 h-6 fill-current'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect x='4' y='5' width='16' height='2' />
                  <rect x='4' y='11' width='16' height='2' />
                  <rect x='4' y='17' width='16' height='2' />
                </svg>
              </button>
            </div>

            {/* Header: Right side */}
            <div className='flex items-center'>
              {/* <h3>Welcome {user !== null && user.user && user.user.name}</h3> */}
              <div class="ml-3 relative "  >
                <div onClick={isOpen}>
                  <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>

                <div className={menuItem ? "visible" : "invisible"}>
                  <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" >

                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>

                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>

                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
