import React, { useState } from 'react'
import BgLogin from './BgLogin'
import LoginForm from './LoginForm'
import LoginButton from './LoginButton'

const Login = () => {
  const [showLoginForm, setShowLogginForm] = useState(false)

  return (
    <>
      <LoginButton
        showLoginForm={showLoginForm}
        setShowLogginForm={setShowLogginForm}
      />
      <BgLogin />
      <LoginForm
        showLoginForm={showLoginForm}
        setShowLogginForm={setShowLogginForm}
      />
    </>
  )
}

export default Login
