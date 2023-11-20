import React from 'react'
import LoginIcon from '../../assets/carpa.png'
import { LoginButtonContainer, LoginIconWrapper } from './LoginButton.Styles'

const LoginButton = ({ showLoginForm, setShowLogginForm }) => {
  return (
    <LoginButtonContainer
      onClick={() => {
        setShowLogginForm(!showLoginForm)
      }}
    >
      <LoginIconWrapper>
        <img src={LoginIcon} alt='Login Icon' />
      </LoginIconWrapper>
      <p>Login</p>
    </LoginButtonContainer>
  )
}

export default LoginButton
