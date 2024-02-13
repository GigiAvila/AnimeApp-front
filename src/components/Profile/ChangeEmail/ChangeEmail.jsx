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
import { useFetchOtakuData } from '../../../context/FetchOtakuDataContext'
import Modal from '../../Modal/Modal'
import { VERIFYEMAILGIF } from '../../../data/GifList'

const ChangeEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { user } = useAuth()
  const { sendChangingEmail } = useFetchOtakuData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit = async () => {
    try {
      console.log('submitting...')
      setIsModalOpen(true)
      await new Promise((resolve) => setTimeout(resolve, 0))
      sendChangingEmail({ email: user.email, name: user.name })
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Change email</h1>
        <h3>
          Change the email address you use to log in and receive information
          from Manga App
        </h3>
        <Form>
          <Label htmlFor='email'>
            <input
              type='text'
              id='email'
              placeholder={user.email}
              readOnly
              value={user.email}
              {...register('newEmail')}
            />
          </Label>
          <Message>
            <IconWrapper>
              <img src={alertIcon} alt='Alert Icon' />
            </IconWrapper>
            <p>
              When you click the button below, a secure link will be sent to
              your email inbox with instructions on how to change your email.
            </p>
          </Message>

          <SubmitButton type='submit'>Send link for email change</SubmitButton>
        </Form>
      </StyledForm>
      {isModalOpen ? (
        <Modal
          setIsModalOpen={setIsModalOpen}
          title={'Email Verification Required'}
          gif={VERIFYEMAILGIF}
          content={'Please check your email to verify your account. 🕵️‍♂️'}
          textButton={'Okidoki!'}
        />
      ) : null}
    </>
  )
}

export default ChangeEmail
