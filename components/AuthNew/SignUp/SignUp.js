import axios from 'axios'
import React, { useState } from 'react';
import {firebaseAuth, googleProvider} from "../../../helpers/firebaseConfig";



const SignUp = ({ handleRender }) => {
  /* const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 0,
  }) */
const [userName, setUserName] = useState("");
const [userPassword, setUserPassword] = useState("");
const [userEmail, setUserEmail] = useState("");
const [userRole, setUserRole] = useState("");

  const register = ()=>{

    console.log(userName, userEmail, userPassword)
    axios.post('http://localhost:5000/api/user/signup',{
      name: userName,
      password: userPassword,
      email: userEmail
      // role: userRole

    }).then((response) =>{
      console.log("success", response)
    }).catch(error => {
      console.log(error.response)
})
  }

  //Handle form state
  const handleChange = e => {
    /* const newUserInfo = { ...user }
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo) */
  }
  //Handle Form Submit
  const handleSubmit = e => {
    e.preventDefault()
    console.log("success")
     register();
    // console.table(user)
    
  }

  //firebase google login 
  const loginWithGoogle=() =>{
    return firebaseAuth().signInWithRedirect(googleProvider);
    //return authenticate(loginWithFirebase(googleProvider));
}

  return (
    <section className='my-8'>
      <a
        href='/'
        title='Covidopedia Home Page'
        className='flex items-center justify-center'
      >
        <svg
          className='w-auto h-6'
          width='86'
          height='24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 335 93'
        >
          <path
            d='M134.71 45.7599c1.32-1.44 2.67-2.94 4.05-4.5 1.44-1.56 2.82-3.09 4.14-4.59 1.32-1.56 2.55-3.03 3.69-4.41 1.2-1.38 2.22-2.58 3.06-3.6h15.93c-3.18 3.66-6.3 7.17-9.36 10.53-3 3.3-6.3 6.72-9.9 10.26 1.8 1.62 3.66 3.57 5.58 5.85 1.92 2.22 3.78 4.53 5.58 6.93 1.8 2.4 3.45 4.8 4.95 7.2 1.5 2.4 2.76 4.59 3.78 6.57h-15.39c-.96-1.56-2.07-3.27-3.33-5.13-1.2-1.92-2.49-3.81-3.87-5.67-1.38-1.92-2.85-3.75-4.41-5.49-1.5-1.74-3-3.21-4.5-4.41v20.7H121.3V8.31991l13.41-2.16V45.7599zM209.35 74.3799c-2.28.66-5.22 1.26-8.82 1.8-3.6.6-7.38.9-11.34.9-4.02 0-7.38-.54-10.08-1.62-2.64-1.08-4.74-2.58-6.3-4.5-1.56-1.98-2.67-4.32-3.33-7.02-.66-2.7-.99-5.67-.99-8.91v-26.37h13.41v24.75c0 4.32.57 7.44 1.71 9.36 1.14 1.92 3.27 2.88 6.39 2.88.96 0 1.98-.03 3.06-.09 1.08-.12 2.04-.24 2.88-.36v-36.54h13.41v45.72zM217.888 16.8699l13.41-2.16v13.95h16.11v11.16h-16.11v16.65c0 2.82.48 5.07 1.44 6.75 1.02 1.68 3.03 2.52 6.03 2.52 1.44 0 2.91-.12 4.41-.36 1.56-.3 2.97-.69 4.23-1.17l1.89 10.44c-1.62.66-3.42 1.23-5.4 1.71-1.98.48-4.41.72-7.29.72-3.66 0-6.69-.48-9.09-1.44-2.4-1.02-4.32-2.4-5.76-4.14-1.44-1.8-2.46-3.96-3.06-6.48-.54-2.52-.81-5.31-.81-8.37v-39.78zM254.279 16.8699l13.409-2.16v13.95h16.11v11.16h-16.11v16.65c0 2.82.48 5.07 1.44 6.75 1.02 1.68 3.03 2.52 6.03 2.52 1.44 0 2.91-.12 4.41-.36 1.56-.3 2.97-.69 4.23-1.17l1.891 10.44c-1.62.66-3.421 1.23-5.401 1.71s-4.409.72-7.289.72c-3.66 0-6.691-.48-9.091-1.44-2.4-1.02-4.32-2.4-5.76-4.14-1.44-1.8-2.459-3.96-3.059-6.48-.54-2.52-.81-5.31-.81-8.37v-39.78zM334.028 28.6599c-2.7 9.12-5.52 17.67-8.46 25.65-2.94 7.98-6.15 15.72-9.63 23.22-1.26 2.7-2.52 4.98-3.78 6.84-1.26 1.92-2.64 3.48-4.14 4.68-1.5 1.26-3.21 2.16-5.13 2.7-1.86.6-4.05.9-6.57.9-2.1 0-4.05-.21-5.85-.63-1.74-.36-3.18-.78-4.32-1.26l2.34-10.71c1.38.48 2.61.81 3.69.99 1.08.18 2.22.27 3.42.27 2.4 0 4.23-.66 5.49-1.98 1.32-1.26 2.43-3.03 3.33-5.31-3.06-6-6.12-12.72-9.18-20.16-3.06-7.5-5.94-15.9-8.64-25.2h14.22c.6 2.34 1.29 4.89 2.07 7.65.84 2.7 1.71 5.46 2.61 8.28.9 2.76 1.8 5.46 2.7 8.1.96 2.64 1.86 5.04 2.7 7.2.78-2.16 1.59-4.56 2.43-7.2.84-2.64 1.65-5.34 2.43-8.1.84-2.82 1.62-5.58 2.34-8.28.78-2.76 1.47-5.31 2.07-7.65h13.86z'
            fill='#1A202C'
          />
          <path
            d='M5.61825.4114C24.3953-2.95442 43.4551 21.1695 51.21 34.8757v29.6906c-4.8347 14.2497-12.952 19.1401-20.8473 19.362-12.7347.358-22.758-14.27-17.6881-25.9574 2.926-6.7451 8.905-10.1655 13.0016-11.2189C5.61473 45.9161.32294 23.2628.01461 7.98884-.05756 4.41366 2.09844 1.04233 5.61825.4114z'
            fill='#9E58E9'
          />
          <path
            d='M96.8018.4114C78.0247-2.95442 58.9649 21.1695 51.21 34.8757v29.6906c4.8347 14.2497 12.952 19.1401 20.8474 19.362 12.7346.358 22.7579-14.27 17.688-25.9574-2.9259-6.7451-8.905-10.1655-13.0015-11.2189 20.0614-.8359 25.3531-23.4892 25.6611-38.76316.073-3.57518-2.083-6.94651-5.6032-7.57744z'
            fill='#7629C8'
          />
        </svg>
        <span className='sr-only'>Covidopedia</span>
      </a>
      <div className='flex justify-center mt-4'>
        <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
          <h1 className='mb-5 text-xl font-light text-left text-gray-800 sm:text-center'>
            Sign up to Covidopedia today for free
          </h1>
          <form
             onSubmit={handleSubmit}
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            {/* <div className='space-y-1 text-sm'>
              <label className='block text-gray-600' htmlFor='role'>
                Account Type
              </label>
              <select
                id='role'
               onChange={e=> setUserRole(e.target.value)}
                className='block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500'
                name='role'
              >
                <option >User</option>
                <option >Doctor</option>
                <option >Vendor</option>
              </select>
            </div> */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
                onChange={(e)=>setUserName(e.target.value)}
               type='text'
                placeholder='Your full name'
                
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='email' className='block text-gray-600'>
                Email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
                onChange={(e)=>setUserEmail(e.target.value)}
                type='text'
                placeholder='Your email address'
                
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='password' className='block text-gray-600'>
                Password
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-indigo-300 rounded-md bg-indigo-50'
                onChange={(e)=>setUserPassword(e.target.value)}
                type='text'
                placeholder='Your password'
                
              />
            </div>
            <div className='flex flex-col items-start justify-between sm:items-center sm:flex-row'>
              <label className='flex items-center'>
                <input type='checkbox' className='form-checkbox' />
                <span className='block ml-2 text-xs font-medium text-gray-700 cursor-pointer'>
                  Agree to Privacy Policy
                </span>
              </label>
              <input
                type='submit'
                className='w-full cursor-pointer p-3 mt-5 bg-indigo-600 text-center rounded-sm text-gray-50 sm:w-auto sm:mt-0'
                value='Sign up'
              />
            </div>
          </form>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px bg-gray-300 sm:w-16'></div>
            <p className='px-3 text-sm text-gray-600'>
              Login with social accounts
            </p>
            <div className='flex-1 h-px bg-gray-300 sm:w-16'></div>
          </div>
          <div className='flex justify-center space-x-4'>
            <button onClick={loginWithGoogle}  aria-label='Log in with Google' className='p-3 rounded-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='w-5 h-5 fillCurrent'
              >
                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
              </svg>
            </button>
            <button aria-label='Log in with Twitter' className='p-3 rounded-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='w-5 h-5 fillCurrent'
              >
                <path d='M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z'></path>
              </svg>
            </button>
            <button aria-label='Log in with GitHub' className='p-3 rounded-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='w-5 h-5 fillCurrent'
              >
                <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
              </svg>
            </button>
          </div>
          <p className='my-0 text-xs font-medium text-center text-gray-700 sm:my-5'>
            Already have an account?
            <a
              href='#'
              onClick={() => handleRender(false)}
              className='text-gray-800 hover:text-purple-700'
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp