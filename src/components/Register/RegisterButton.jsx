import React from 'react'
import {RegisterButtonContainer} from './RegisterButton.Styles'

const RegisterButton = ({setNewAccount}) => {
  return (
    <RegisterButtonContainer>
        <p>Don't have an account?</p>
        <button onClick={() => setNewAccount(true)}>CREATE ACCOUNT</button>
    </RegisterButtonContainer>
  )
}

export default RegisterButton