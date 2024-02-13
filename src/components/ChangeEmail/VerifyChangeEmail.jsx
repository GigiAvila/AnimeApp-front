import React from 'react'
import {
  Form,
  Label,
  StyledLoginForm,
  SubmitButton
} from './VerifyChangeEmail.Styles'
import { useForm } from 'react-hook-form'
import { useFetchOtakuData } from '../../context/FetchOtakuDataContext'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const VerifyChangeEmail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const { changeEmail } = useFetchOtakuData()
  const { user } = useAuth()
  const navigate = useNavigate()

  const newEmail = watch('newEmail')
  const confirmNewEmail = watch('confirmNewEmail')

  const emailConfirmationToken = window.location.pathname.split('/').pop()

  const onSubmit = async () => {
    try {
      if (newEmail !== confirmNewEmail) {
        console.error('Emails do not match')
        return
      }
      console.log(newEmail)
      console.log('emailConfirmationToken', emailConfirmationToken)
      changeEmail(emailConfirmationToken, newEmail)
      navigate('/')
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Change email</h1>
      <h3>Choose a new email</h3>
      <Form>
        <Label htmlFor='newEmail'>
          <input
            id='newEmail'
            placeholder='New Email'
            {...register('newEmail', { required: true })}
          />
        </Label>
        <Label htmlFor='confirmNewEmail'>
          <input
            id='confirmNewEmail'
            placeholder='Confirm new email'
            {...register('confirmNewEmail', { required: true })}
          />
        </Label>
        {errors.confirmNewEmail && <p>Emails do not match</p>}
        <SubmitButton type='submit'>Change email</SubmitButton>
      </Form>
    </StyledLoginForm>
  )
}

export default VerifyChangeEmail
