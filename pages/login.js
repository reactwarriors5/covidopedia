import React, { useState } from 'react'
import SignIn from '../components/Auth/SignIn/SignIn'
import SignUp from '../components/Auth/SignUp/SignUp'

const login = () => {
  const [newUser, setNewUser] = useState(false)
  const handleRender = userType => setNewUser(userType)

  return (
    <>
      {newUser ? (
        <SignUp handleRender={handleRender} />
      ) : (
        <SignIn handleRender={handleRender} />
      )}
    </>
  )
}

export default login
