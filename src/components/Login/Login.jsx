import React, { useState } from 'react'
import BgLogin from './BgLogin'
import Signin from './Signin'
import LoginButton from './LoginButton'

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(false)

  return (
    <>
      <LoginButton
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
      />
      <BgLogin />
      <Signin
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
      />
    </>
  )
}

export default Login
