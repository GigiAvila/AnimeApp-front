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
  AvatarPreview,
  ProfileInformationOuterContainer
} from './ProfileInformation.Styles'
import { useFetchOtakuData } from '../../../context/FetchOtakuDataContext'
import { useAuth } from '../../../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { COUNTRIES } from '../../../data/CountryList'
import { LANGUAGES } from '../../../data/Languages'
import PencilIcon from '../../../assets/lapiz.png'

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
    editOtaku(user.email, data)
  }

  React.useEffect(() => {
    setValue('name', user.name)
    setValue('surname', user.surname)
    setValue('language', user.language)
    setValue('country', user.country)
    setValue('email', user.email)
    setValue('password', user.password)
    setValue('premium', user.premium)
    setValue('avatar', user.avatar)
  }, [setValue, user])

  return (
    <ProfileInformationOuterContainer>
      <h1>Change your personal information</h1>
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
              Name
              <StyledInput {...register('name')} />
            </StyledLabel>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel htmlFor='surname'>
              Surname
              <StyledInput {...register('surname')} />
            </StyledLabel>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel htmlFor='language'>
              Language
              <StyledSelect {...register('language')}>
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
              Country
              <StyledSelect {...register('country')}>
                {COUNTRIES.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </StyledSelect>
            </StyledLabel>
          </InputWrapper>
          <SubmitButton type='submit' disabled={!formState.isDirty}>
            Apply changes
          </SubmitButton>
        </FormContainer>
      </ProfileInformationContainer>
    </ProfileInformationOuterContainer>
  )
}

export default ProfileInformation
