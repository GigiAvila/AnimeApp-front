import React, { useState } from 'react'
import {
  StyledLoginForm,
  Form,
  PassButton,
  SubmitButton
} from './LoginForm.Styles'
import { useForm } from 'react-hook-form'
import { useFetchOtakuData } from '../../context/FetchOtakuDataContext'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import { NOTFOUNDGIF } from '../../data/GifList'
import { useAuth } from '../../hooks/useAuth'

const LoginForm = ({ isModalOpen, setIsModalOpen }) => {
  const [showLabel, setShowLabel] = useState(false)
  const [invalidCredentials, setInvalidCredentials] = useState(false)
  const { loginOtaku, fetchOtakuData } = useFetchOtakuData()
  const navigate = useNavigate()
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginOtaku(data.email, data.password)

      console.log('Response from loginOtaku:', response)

      if (response && response.success) {
        const user = fetchOtakuData.data.find(
          (user) => user.email === data.email
        )
        login(user)
        navigate('/home')
      } else {
        setInvalidCredentials(true)
        setIsModalOpen(true)
        console.log('Modal abierto')
      }
    } catch (error) {
      console.error('Error during login:', error)
      console.log(error)
    }
  }

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked')
  }

  return (
    <>
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Access</h2>
        <Form>
          <label
            htmlFor='email'
            style={{ display: showLabel ? 'block' : 'none' }}
          >
            Email:
          </label>
          <input
            type='text'
            id='email'
            placeholder={showLabel ? '' : 'Email'}
            {...register('email', { required: true })}
            onChange={() => setShowLabel(true)}
          />
          {errors.email && <span>Este campo es requerido</span>}

          <label
            htmlFor='password'
            style={{ display: showLabel ? 'block' : 'none' }}
          >
            Password:
          </label>
          <input
            type='password'
            id='password'
            placeholder={showLabel ? '' : 'Password'}
            {...register('password', { required: true })}
            onChange={() => setShowLabel(true)}
          />
          <PassButton type='button' onClick={handleForgotPassword}>
            FORGOT PASSWORD?
          </PassButton>
          {errors.password && <span>Este campo es requerido</span>}

          <SubmitButton type='submit'>Access</SubmitButton>
        </Form>
      </StyledLoginForm>

      {isModalOpen ? (
        <Modal
          setIsModalOpen={setIsModalOpen}
          title={'Oops, No Luck!'}
          gif={NOTFOUNDGIF}
          content={
            "Uh-oh! It seems like we can't find an account with that email and password combo. Maybe double-check your details and give it another shot? 🕵️‍♂️"
          }
          textButton={'Try Again'}
        />
      ) : null}
    </>
  )
}

export default LoginForm
