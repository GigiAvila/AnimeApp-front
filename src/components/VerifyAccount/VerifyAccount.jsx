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
  BgImage,
  AvatarLabel,
  PasswordButton
} from './VerifyAccount.Styles'
import PencilIcon from '../../assets/lapiz.png'
import { COUNTRIES } from '../../data/CountryList'
import { LANGUAGES } from '../../data/Languages'
import AvatarImg from '../../assets/404.png'
import { useNavigate } from 'react-router-dom'
import { useFetchOtakuData } from '../../context/FetchOtakuDataContext'

const VerifyAccount = () => {
  const { register, handleSubmit, formState, errors } = useForm({
    defaultValues: {}
  })
  const navigate = useNavigate()
  const { registerOtaku } = useFetchOtakuData()
  const [showPassword, setShowPassword] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState(null)

  const onSubmit = async (data) => {
    await registerOtaku(data)
    navigate('/home')
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <BgAccountContainer>
      <BgImage></BgImage>
      <h1>Welcome to Manga App!</h1>
      <p>Please complete the information below to finish the registration</p>
      <ProfileInformationContainer onSubmit={handleSubmit(onSubmit)}>
        <AvatarWrapper>
          {avatarPreview ? (
            <img src={avatarPreview} alt='Avatar Preview' />
          ) : (
            <img src={AvatarImg} alt='My profile photo' />
          )}
          <AvatarEdition>
            <AvatarLabel htmlFor='avatar-input'>
              <img src={PencilIcon} alt='Edit Avatar' />
            </AvatarLabel>
            <input
              name='avatar'
              type='file'
              id='avatar-input'
              {...register('avatar')}
              onChange={handleAvatarChange}
            />
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
          </InputWrapper>
          <InputWrapper>
            <StyledLabel htmlFor='password'>
              Password:
              <div>
                <StyledInput
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', { required: true })}
                />
                <PasswordButton
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </PasswordButton>
              </div>
            </StyledLabel>
            {errors && errors.password && <span>Este campo es requerido</span>}
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
