import React from 'react'
import {LoginButtonContainer} from './LoginOption.Styles'

const LoginOption = ({setNewAccount}) => {
  return (
    <LoginButtonContainer>
        <p> Already have an account?</p>
        <button onClick={() => setNewAccount(false)}>ACCESS</button>
    </LoginButtonContainer>
  )
}

export default LoginOption