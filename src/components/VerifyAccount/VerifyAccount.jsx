import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  BgAccountContainer,
  AvatarEdition,
  ProfileInformationContainer,
  FormContainer,
  SubmitButton,
  AvatarWrapper,
  StyledInput,
  StyledLabel,
  StyledSelect,
  InputWrapper,
  BgImage
} from './VerifyAccount.Styles'
import PencilIcon from '../../assets/lapiz.png'
import { COUNTRIES } from '../../data/CountryList'
import { LANGUAGES } from '../../data/Languages'
import { PAYMENTMETHODS } from '../../data/PaymentMethod'
import AvatarImg from '../../assets/404.png'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useFetchOtakuData } from '../../context/FetchOtakuDataContext'

const VerifyAccount = () => {
  const { register, handleSubmit, formState, errors } = useForm({
    defaultValues: {}
  })
  const { login } = useAuth()
  const navigate = useNavigate()
  const { registerOtaku, fetchOtakuData } = useFetchOtakuData()
  const [invalidCredentials, setInvalidCredentials] = useState(false)

  const onSubmit = async (data) => {
    try {
      const response = await registerOtaku(data)

      console.log('Response from registerOtaku:', response)

      if (response && response.data.success) {
        const user = response.otaku
        login(user)
        navigate('/home')
        console.log('Otaku registration successful', response)
      } else {
        setInvalidCredentials(true)
        const errorMessage = response.data
          ? response.data.message
          : 'Registration failed'
        console.log('Registration failed:', errorMessage)
      }
    } catch (error) {
      console.error('Error during registration:', error)
      setInvalidCredentials(true)
    }
  }

  return (
    <BgAccountContainer>
      <BgImage></BgImage>
      <h1>Welcome to Manga App!</h1>
      <p>Please complete the information below to finish the registration</p>
      <ProfileInformationContainer onSubmit={handleSubmit(onSubmit)}>
        <AvatarWrapper>
          <img src={AvatarImg} alt='My profile photo' />
          <AvatarEdition>
            <img src={PencilIcon} alt='Pencil logo for photo edition' />
          </AvatarEdition>
        </AvatarWrapper>
        <FormContainer>
          <InputWrapper>
            <StyledLabel htmlFor='name'>
              Name:
              <StyledInput
                id='name'
                name='name'
                {...register('name', { required: true })}
              />
            </StyledLabel>
            {errors && errors.name && <span>Este campo es requerido</span>}
            <button>Edit</button>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel htmlFor='surname'>
              Surname:
              <StyledInput
                id='surname'
                name='surname'
                {...register('surname', { required: true })}
              />
            </StyledLabel>
            {errors && errors.surname && <span>Este campo es requerido</span>}
            <button>Edit</button>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel htmlFor='language'>
              Language:
              <StyledSelect
                id='language'
                name='language'
                defaultValue='english'
                {...register('language', { required: true })}
              >
                {LANGUAGES.map((language, index) => (
                  <option key={index} value={language}>
                    {language}
                  </option>
                ))}
              </StyledSelect>
            </StyledLabel>

            <button>Edit</button>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel htmlFor='country'>
              Country:
              <StyledSelect
                id='country'
                name='country'
                {...register('country', { required: true })}
              >
                {COUNTRIES.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </StyledSelect>
            </StyledLabel>

            <button>Edit</button>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel htmlFor='email'>
              Email:
              <StyledInput
                id='email'
                name='email'
                {...register('email', { required: true })}
              />
            </StyledLabel>
            {errors && errors.email && <span>Este campo es requerido</span>}
            <button>Edit</button>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel htmlFor='password'>
              Password:
              <StyledInput
                id='password'
                name='password'
                type='password'
                {...register('password', { required: true })}
              />
            </StyledLabel>
            {errors && errors.password && <span>Este campo es requerido</span>}
            <button>Edit</button>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel htmlFor='paymentMethod'>
              Payment method:
              <StyledSelect
                id='paymentMethod'
                name='paymentMethod'
                {...register('paymentMethod', { required: true })}
              >
                {PAYMENTMETHODS.map((paymentMethod, index) => (
                  <option key={index} value={paymentMethod}>
                    {paymentMethod}
                  </option>
                ))}
              </StyledSelect>
            </StyledLabel>
            <button>Edit</button>
          </InputWrapper>

          <SubmitButton type='submit' disabled={!formState.isDirty}>
            Apply changes
          </SubmitButton>
        </FormContainer>
      </ProfileInformationContainer>
    </BgAccountContainer>
  )
}

export default VerifyAccount
