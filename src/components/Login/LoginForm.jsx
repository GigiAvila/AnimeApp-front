import React from 'react'
import {
  LoginFormBg,
  LoginImageWrapper,
  LoginContainer,
  StyledLoginForm
} from './LoginForm.Styles'
import LoginImage from '../../assets/Nezuko.webp'
import { useForm } from 'react-hook-form'

const LoginForm = ({ showLoginForm, setShowLoginForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return showLoginForm ? (
    <LoginFormBg>
      <LoginContainer>
        <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>

          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            {...register('email', { required: true })}
          />
          {errors.email && <span>Este campo es requerido</span>}

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            {...register('password', { required: true })}
          />
          {errors.password && <span>Este campo es requerido</span>}

          <button type='submit'>Iniciar sesión</button>
        </StyledLoginForm>
        <LoginImageWrapper>
          <img
            src={LoginImage}
            alt='Login Image. Nezuko from Demon Slayer Anime'
          />
        </LoginImageWrapper>
      </LoginContainer>
    </LoginFormBg>
  ) : null
}

export default LoginForm
