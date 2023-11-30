import React from 'react';
import { StyledRegisterForm, Form } from './RegisterForm.Styles';
import { useForm } from 'react-hook-form';
import { CREATEACCOUNTGIF, EXISTINGUSERGIF, VERIFYEMAILGIF} from '../../data/GifList';
import Modal from '../Modal/Modal';
import { USERDATA } from '../../data/UserData';

const RegisterForm = ({ isModalOpen, setIsModalOpen, setNewAccount }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendGmail = async ({ email, name }) => {
    const url = "http://localhost:4001/api/email";
    const data = {
      gmail: email,
      name: name,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error in response: ' + response.statusText);
      }

      const responseData = await response.json();
      console.log('Email sent correctly:', responseData);
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);

    const user = USERDATA.find((userData) => {
      return userData.email.trim() === data.email.trim();
    });

    if (user) {
      if (user.verifyEmail) {
        setIsModalOpen({
          setNewAccount: { setNewAccount },
          isOpen: true,
          title: 'User Already Exists',
          gif: EXISTINGUSERGIF,
          content: 'It seems like you already have an account. Please log in instead.',
          textButton: 'Log In',
        });
      } else {
        setIsModalOpen({
          setNewAccount: { setNewAccount },
          isOpen: true,
          title: 'Email Verification Required',
          gif: VERIFYEMAILGIF,
          content: 'Please check your email to verify your account.',
          textButton: 'Got It!',
        });
      }
    } else {
      await sendGmail({ email: data.email, name: data.name });
      setIsModalOpen({
        isOpen: true,
        title: 'Yay, You\'re In! 🚀',
        gif: CREATEACCOUNTGIF,
        content: 'We just sent you an email. Give it a peek to wrap up the registration process. Super easy, right? 📬✨',
        textButton: 'Got It!',
      });
    }
  };

  return (
    <>
      <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Create account</h2>
        <Form>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            {...register('name', { required: true })}
          />
          {errors.name && <span>Este campo es requerido</span>}
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            {...register('email', { required: true })}
          />
          {errors.email && <span>Este campo es requerido</span>}

          <button type='submit'>Create new account</button>
        </Form>
      </StyledRegisterForm>

      {isModalOpen.isOpen ? (
        <Modal
          setNewAccount={setNewAccount}
          setIsModalOpen={setIsModalOpen}
          title={isModalOpen.title}
          gif={isModalOpen.gif}
          content={isModalOpen.content}
          textButton={isModalOpen.textButton}
        />
      ) : null}
    </>
  );
}

export default RegisterForm;