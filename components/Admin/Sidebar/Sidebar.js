import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout } from '../../../features/userSlice/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import {
  faTh,
  faUserMd,
  faClinicMedical,
  faSignOutAlt,
  faCalendarCheck,
  faMoneyBillAlt,
  faFileInvoiceDollar,
  faUserDoctorHair,
} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice/userSlice'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const user = useSelector(selectUser)

  //   const location = useLocation();
  //   const { pathname } = location;
  //   const page = pathname.split("/")[1];

  const trigger = useRef(null)
  const sidebar = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = async () => {
    // make state null
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/logout`)
    dispatch(logout())
    router.push('/login')
    toast.warning(data.message)
  }

  return (
    <section className='w-64'>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0  bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden='true'
      ></div>
      {/* //////////////////////// */}

      {/* Sidebar */}
      <div
        id='sidebar'
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform min-h-full overflow-y-hidden lg:overflow-y-hidden  w-64 flex-shrink-0 p-4 transition-transform duration-200 ease-in-out text-gray-100 font-body bg-indigo-800 ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        {/* Sidebar header */}
        <div className='flex justify-between pr-3 mb-10 sm:px-2'>
          {/* Close button */}
          <button
            ref={trigger}
            className='block text-gray-500 lg:hidden hover:text-gray-400'
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls='sidebar'
            aria-expanded={sidebarOpen}
          >
            <span className='sr-only'>Close sidebar</span>
            <svg
              className='w-6 h-6 bg-yellow-400 rounded-sm'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
            </svg>
          </button>
        </div>

        <div className='flex items-center p-2 mt-4 space-x-2'>
          <img
            src={
              user !== null && user.user && user.user.role === 'doctor'
                ? user.user.image
                : 'https://source.unsplash.com/100x100/?portrait'
            } // src change when login function applied //
            alt='admin-img'
            className='w-12 h-12 rounded-full'
          />
          <div>
            <h4 className='pr-2 text-xl font-semibold text-indigo-50'>
              <Link href='/'>
                <a>COVIDOPEDIA</a>
              </Link>
            </h4>
          </div>
        </div>
        <div className='divide-y divide-gray-100'>
          <ul className='my-5 ml-3 space-y-1'>
            {/* sidebar url here */}
            <li className='flex items-center justify-start space-y-5'>
              <FontAwesomeIcon size='lg' className='mt-5 mr-3' icon={faTh} />
              <Link href='/dashboard' className='px-2 py-3 space-x-3 '>
                <a className='text-lg text-white'>Dashboard</a>
              </Link>
            </li>

            {user !== null && user.user && user.user.role === 'user' && (
              <>
                <li className='flex items-center justify-start space-y-5'>
                  <FontAwesomeIcon
                    size='lg'
                    className='mt-5 mr-3'
                    icon={faCalendarCheck}
                  />
                  <Link
                    href='/allAppointments'
                    className='px-2 py-3 space-x-3 '
                  >
                    <a className='text-lg text-white'>Appointments</a>
                  </Link>
                </li>
                <li className='flex items-center justify-start space-y-5'>
                  <FontAwesomeIcon
                    size='lg'
                    className='mt-5 mr-3'
                    icon={faUserMd}
                  />
                  <Link
                    href='/doctorRegistration'
                    className='px-2 py-3 space-x-3 '
                  >
                    <a className='text-lg text-white'>Register as a Doctor</a>
                  </Link>
                </li>
              </>
            )}

            {user !== null && user.user && user.user.role === 'doctor' && (
              <>
                <li className='flex items-center justify-start space-y-5'>
                  <FontAwesomeIcon
                    size='lg'
                    className='mt-5 mr-3'
                    icon={faCalendarCheck}
                  />
                  <Link href='/myAppointments' className='px-2 py-3 space-x-3 '>
                    <a className='text-lg text-white'>My Appointments</a>
                  </Link>
                </li>

                <li className='flex items-center justify-start space-y-5'>
                  <FontAwesomeIcon
                    size='lg'
                    className='mt-5 mr-3'
                    icon={faUserMd}
                  />
                  <Link href='/myPatients' className='px-2 py-3 space-x-3 '>
                    <a className='text-lg text-white'>My Patients</a>
                  </Link>
                </li>
              </>
            )}

            
            {user !== null && user.user && user.user.role === 'admin' && (
              <>
              <li className='flex items-center justify-start space-y-5'>
                  <FontAwesomeIcon
                    size='lg'
                    className='mt-5 mr-3'
                    icon={faUserMd}
                  />
                  <Link href='/allDoctors' className='px-2 py-3 space-x-3 '>
                    <a className='text-lg text-white'>Doctors</a>
                  </Link>
                </li>
                <li className='flex items-center justify-start space-y-5'>
                  <FontAwesomeIcon
                    size='lg'
                    className='mt-5 mr-3'
                    icon={faCalendarCheck}
                  />
                  <Link href='/allAppointments' className='px-2 py-3 space-x-3 '>
                    <a className='text-lg text-white'>Appointments</a>
                  </Link>
                </li>
                <li className='flex items-center justify-start space-y-5'>
                  <FontAwesomeIcon
                    size='lg'
                    className='mt-5 mr-3'
                    icon={faMoneyBillAlt}
                  />
                  <Link href='/totalRevenue' className='px-2 py-3 space-x-3 '>
                    <a className='text-lg text-white'>Total Revenue</a>
                  </Link>
                </li>
                <li className='flex items-center justify-start space-y-5'>
                  <FontAwesomeIcon
                    size='lg'
                    className='mt-5 mr-3'
                    icon={faFileInvoiceDollar}
                  />
                  <Link href='/invoices' className='px-2 py-3 space-x-3 '>
                    <a className='text-lg text-white'>Invoices</a>
                  </Link>
                </li>
              </>
            )}

          </ul>
          {/* logout menu here */}
          <ul className='pt-4 space-y-1 lg:pb-48 pb-96'>
            <li className='flex items-center justify-start ml-3'>
              <FontAwesomeIcon
                size='lg'
                className='mt-1 mr-3'
                icon={faSignOutAlt}
              />
              <div
                onClick={() => handleLogout()}
                className='p-2 cursor-pointer  space-x-3 rounded-md text-hero'
              >
                <p className='text-lg text-white'>Logout</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
