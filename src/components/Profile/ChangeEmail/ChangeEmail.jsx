import React, { useState } from 'react'
import {
  Form,
  Label,
  StyledForm,
  SubmitButton,
  IconWrapper,
  Message
} from './ChangeEmail.Styles.'
import { useForm } from 'react-hook-form'
import alertIcon from '../../../assets/exclamacion.png'
import { useAuth } from '../../../hooks/useAuth'

const ChangeEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { user } = useAuth()

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Change email</h1>
      <h3>
        Change the email address you use to log in and receive information from
        Manga App
      </h3>
      <Form>
        <Label htmlFor='email'>
          <input
            type='text'
            id='email'
            placeholder={user.email}
            readOnly
            {...register('actualPassword', { required: true })}
          />
        </Label>

        <Message>
          <IconWrapper>
            <img src={alertIcon} alt='Alert Icon' />
          </IconWrapper>
          <p>
            When you click the button below, a secure link will be sent to your
            email inbox with instructions on how to change your email.
          </p>
        </Message>

        <SubmitButton type='submit'>Send link for email change</SubmitButton>
      </Form>
    </StyledForm>
  )
}

export default ChangeEmail
