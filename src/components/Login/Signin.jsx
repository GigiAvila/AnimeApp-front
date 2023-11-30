import React, {useState} from 'react'
import {
  LoginFormBg,
  LoginImageWrapper,
  LoginImageContainer,
  LoginContainer,
  LoginText,
} from './Signin.Styles'
import LoginImage from '../../assets/nezuko_manga.webp'
import LoginForm from './LoginForm';
import RegisterButton from '../Register/RegisterButton';
import RegisterForm from '../Register/RegisterForm';
import LoginOption from './LoginOption';



const Signin = ({ showLoginForm, setShowLoginForm }) => {

const [newAccount, setNewAccount] = useState(false)
const [isModalOpen, setIsModalOpen] = useState(false)


  return showLoginForm ? (
    <LoginFormBg>
      <LoginContainer>
        <LoginText>
          {!newAccount ?
         <> <LoginForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          <RegisterButton setNewAccount={setNewAccount}/>
        </>
        : 
        <> 
        <RegisterForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setNewAccount={setNewAccount}/>
        <LoginOption setNewAccount={setNewAccount}/>
      </>
        }
        </LoginText>
      <LoginImageContainer>
        <LoginImageWrapper>
          <img
              src={LoginImage}
              alt='Login Image. Nezuko from Demon Slayer Anime'
            />
          </LoginImageWrapper>
        </LoginImageContainer>
      </LoginContainer>
    </LoginFormBg>
  ) : null;
};

export default Signin;
