import React, { useState } from 'react';
import { StyledLoginForm, Form, PassButton, SubmitButton } from './LoginForm.Styles';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { USERDATA } from '../../data/UserData';
import Modal from '../Modal/Modal';
import { NOTFOUNDGIF } from '../../data/GifList';

const LoginForm = ({ isModalOpen, setIsModalOpen }) => {
  const [showLabel, setShowLabel] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const user = USERDATA.find((userData) => {
      return (
        userData.email.trim() === data.email.trim() &&
        userData.password.toString().trim() === data.password.trim()
      );
    });

    if (user) {
      login(user);
      navigate('/home');
    } else {
      setInvalidCredentials(true);
      setIsModalOpen(true);
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  return (
    <>
      <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Access</h2>
        <Form>
          <label htmlFor='email' style={{ display: showLabel ? 'block' : 'none' }}>Email:</label>
          <input
            type='text'
            id='email'
            placeholder={showLabel ? '' : 'Email'}
            {...register('email', { required: true })}
            onChange={() => setShowLabel(true)}
          />
          {errors.email && <span>Este campo es requerido</span>}

          <label htmlFor='password' style={{ display: showLabel ? 'block' : 'none' }}>Password:</label>
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
    content={'Uh-oh! It seems like we can\'t find an account with that email and password combo. Maybe double-check your details and give it another shot? 🕵️‍♂️'}
    textButton={'Try Again'}
  />
) : null}

    </>
  );
};

export default LoginForm;
