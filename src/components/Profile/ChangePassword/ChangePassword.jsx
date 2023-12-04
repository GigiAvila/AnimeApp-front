import React, { useState } from 'react'
import {
  Form,
  Label,
  StyledLoginForm,
  SubmitButton,
  IconWrapper,
  Message
} from './ChangePassword.Styles'
import { useForm } from 'react-hook-form'
import alertIcon from '../../../assets/exclamacion.png'
import { useFetchOtakuData } from '../../../context/FetchOtakuDataContext'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  })
  const { changePassword } = useFetchOtakuData()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const toggleShowPassword = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field]
    }))
  }

  const onSubmit = async (data) => {
    console.log(data)
    console.log('user', user)
    changePassword(user.email, data)
    logout()
    navigate('/')
  }

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Change password</h1>
      <h3>Choose a unique password to maintain your account safe</h3>
      <Form>
        <Label htmlFor='currentPassword'>
          <input
            type={showPassword.currentPassword ? 'text' : 'password'}
            id='currentPassword'
            placeholder='Actual password'
            {...register('currentPassword', { required: true })}
          />
          <button
            type='button'
            onClick={() => toggleShowPassword('currentPassword')}
            style={{
              position: 'absolute',
              right: 0,
              padding: '0.3vw',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            {showPassword.currentPassword ? 'Hide' : 'Show'}
          </button>
        </Label>

        <Label htmlFor='newPassword'>
          <input
            type={showPassword.newPassword ? 'text' : 'password'}
            id='newPassword'
            placeholder='New password'
            {...register('newPassword', { required: true })}
          />
          <button
            type='button'
            onClick={() => toggleShowPassword('newPassword')}
            style={{
              position: 'absolute',
              right: 0,
              padding: '0.3vw',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            {showPassword.newPassword ? 'Hide' : 'Show'}
          </button>
        </Label>

        <Label htmlFor='confirmPassword'>
          <input
            type={showPassword.confirmPassword ? 'text' : 'password'}
            id='confirmPassword'
            placeholder='Confirm new password'
            {...register('confirmPassword', { required: true })}
          />
          <button
            type='button'
            onClick={() => toggleShowPassword('confirmPassword')}
            style={{
              position: 'absolute',
              right: 0,
              padding: '0.3vw',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            {showPassword.confirmPassword ? 'Hide' : 'Show'}
          </button>
        </Label>
        <Message>
          <IconWrapper>
            <img src={alertIcon} alt='Alert Icon' />
          </IconWrapper>
          <p>
            Changing your password will log you out on other devices. You will
            need to enter your new password on those devices to access your
            account again.
          </p>
        </Message>

        <SubmitButton type='submit'>Change password</SubmitButton>
      </Form>
    </StyledLoginForm>
  )
}
