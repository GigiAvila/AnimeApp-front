import React from 'react';
import { Overlayer, ModalContainer, TextContainer, ActionsContainer, IconWrapper } from './Modal.Styles';
import CloseIcon from '../../assets/close.png';


const Modal = ({ setIsModalOpen, setNewAccount, title, content, textButton, gif }) => {

  const handleOpenModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginButtonClick = () => {
   
    if (textButton === 'Log In') {
      setNewAccount(false);
    }
    handleOpenModal();
  };

  return (
    <Overlayer>
      <ModalContainer>
        <TextContainer>
          <IconWrapper onClick={handleOpenModal}>
            <img src={CloseIcon} alt="Close modal icon" />
          </IconWrapper>
          <h1>{title}</h1>
          <iframe src={gif} width="200" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          <p><a href="https://giphy.com/gifs/head-hero-boku-naiatn5LxTOsU"></a></p>
          <p>{content}</p>
        </TextContainer>
        <ActionsContainer>
          <button onClick={handleLoginButtonClick}>{textButton}</button>
          <button onClick={handleOpenModal}>Cancel</button>
        </ActionsContainer>
      </ModalContainer>
    </Overlayer>
  );
};

export default Modal;