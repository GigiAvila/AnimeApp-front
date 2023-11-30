import React from 'react';
import { AvatarEdition, ProfileInformationContainer, FormContainer, SubmitButton, AvatarWrapper, StyledInput, StyledLabel, StyledSelect, InputWrapper } from './ProfileInformation.Styles';
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { COUNTRIES } from '../../../data/CountryList';
import {LANGUAGES} from '../../../data/Languages'
import {PAYMENTMETHODS} from '../../../data/PaymentMethod'
import PencilIcon from '../../../assets/lapiz.png'

const ProfileInformation = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState
  } = useForm({
    defaultValues: {
      name: user.name,
      surname: user.surname,
      language: user.language,
      country: user.country,
      email: user.email,
      password: user.password,
      premium: user.premium,
      paymentMethod: user.paymentMethod,
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  React.useEffect(() => {
    setValue('name', user.name);
    setValue('surname', user.surname);
    setValue('language', user.language);
    setValue('country', user.country);
    setValue('email', user.email);
    setValue('password', user.password);
    setValue('premium', user.premium);
    setValue('paymentMethod', user.paymentMethod);
  }, [setValue, user]);

  return (
    <ProfileInformationContainer onSubmit={handleSubmit(onSubmit)}>
      <AvatarWrapper>
        <img src={user.avatar} alt="My profile photo" />
        <AvatarEdition><img src={PencilIcon} alt="Pencil logo for photo edition" /></AvatarEdition>
      </AvatarWrapper>
      <FormContainer>
      <InputWrapper>
        <StyledLabel htmlFor='name'>Name:
          <StyledInput {...register('name')} />
        </StyledLabel>
        <button>Edit</button>
        </InputWrapper>
        <InputWrapper>
        <StyledLabel htmlFor='surname'>Surname:
          <StyledInput {...register('surname')} />
        </StyledLabel>
        <button>Edit</button>
        </InputWrapper>
        <InputWrapper>
        <StyledLabel htmlFor='language'>Language:
        <StyledSelect {...register('language')}>
            {LANGUAGES.map((language, index) => (
              <option key={index} value={language}>
             
              </option>
            ))}
          </StyledSelect>
        </StyledLabel>
        <button>Edit</button>
        </InputWrapper>
        <InputWrapper>
        <StyledLabel htmlFor='country'>Country:
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
        <StyledLabel htmlFor='email'>Email:
          <StyledInput {...register('email')} />
        </StyledLabel>
        <button>Edit</button>
        </InputWrapper>
        <InputWrapper>
        <StyledLabel htmlFor='password'>Password:
          <StyledInput type="password" {...register('password')} />
        </StyledLabel>
        <button>Edit</button>
        </InputWrapper>
        <InputWrapper>
        <StyledLabel htmlFor='paymentMethod'>Payment method:
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
        
        <SubmitButton type="submit" disabled={!formState.isDirty}>
          Apply changes
        </SubmitButton>
      </FormContainer>
    </ProfileInformationContainer>
  );
};

export default ProfileInformation;
