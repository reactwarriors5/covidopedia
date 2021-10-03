import React, { useState } from 'react'
import SignIn from '../components/AuthNew/SignIn/SignIn'
import SignUp from '../components/AuthNew/SignUp/SignUp'
import Navbar from '../components/HomePage/HomePage/Navbar/Navbar'

const login = () => {
  const [newUser, setNewUser] = useState(false)
  const handleRender = userType => setNewUser(userType)

  return (
    <>
      <Navbar />
      {newUser ? (
        <SignUp handleRender={handleRender} />
      ) : (
        <SignIn handleRender={handleRender} />
      )}
    </>
  )
}

export default login
