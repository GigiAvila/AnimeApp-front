import React, { useState } from 'react'
import {
  AvatarEdition,
  ProfileInformationContainer,
  FormContainer,
  SubmitButton,
  AvatarWrapper,
  StyledInput,
  StyledLabel,
  StyledSelect,
  InputWrapper,
  AvatarLabel,
  AvatarPreview
} from './ProfileInformation.Styles'
import { useAuth } from '../../../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { COUNTRIES } from '../../../data/CountryList'
import { LANGUAGES } from '../../../data/Languages'
import { PAYMENTMETHODS } from '../../../data/PaymentMethod'
import PencilIcon from '../../../assets/lapiz.png'
import { useFetchOtakuData } from '../../../context/FetchOtakuDataContext'

const ProfileInformation = () => {
  const { editOtaku } = useFetchOtakuData()
  const { user } = useAuth()
  const { register, handleSubmit, setValue, formState } = useForm({
    defaultValues: {
      name: user.name,
      surname: user.surname,
      language: user.language,
      country: user.country,
      email: user.email,
      password: user.password,
      premium: user.premium,
      paymentMethod: user.paymentMethod
    }
  })

  const [avatarPreview, setAvatarPreview] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

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

  const onSubmit = (data) => {
    console.log('user', user)
    console.log('data', data)
    editOtaku(user._id, data)
  }

  React.useEffect(() => {
    setValue('name', user.name)
    setValue('surname', user.surname)
    setValue('language', user.language)
    setValue('country', user.country)
    setValue('email', user.email)
    setValue('password', user.password)
    setValue('premium', user.premium)
    setValue('paymentMethod', user.paymentMethod)
    setValue('avatar', user.avatar)
  }, [setValue, user])

  return (
    <ProfileInformationContainer onSubmit={handleSubmit(onSubmit)}>
      <AvatarWrapper>
        {avatarPreview ? (
          <AvatarPreview src={avatarPreview} alt='Avatar Preview' />
        ) : (
          <AvatarPreview src={user.avatar} alt='My profile photo' />
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
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              clip: 'rect(1px, 1px, 1px, 1px)',
              opacity: 0
            }}
          />
        </AvatarEdition>
      </AvatarWrapper>
      <FormContainer>
        <InputWrapper>
          <StyledLabel htmlFor='name'>
            Name:
            <StyledInput {...register('name')} />
          </StyledLabel>
          <button>Edit</button>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor='surname'>
            Surname:
            <StyledInput {...register('surname')} />
          </StyledLabel>
          <button>Edit</button>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor='language'>
            Language:
            <StyledSelect {...register('language')}>
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
            <StyledSelect {...register('country')}>
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
            <StyledInput {...register('email')} />
          </StyledLabel>
          <button>Edit</button>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor='password'>
            Password:
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <StyledInput
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: 0,
                  padding: '0.3vw',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </StyledLabel>
          <button>Edit</button>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor='paymentMethod'>
            Payment method:
            <StyledSelect {...register('paymentMethod')}>
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
  )
}

export default ProfileInformation
