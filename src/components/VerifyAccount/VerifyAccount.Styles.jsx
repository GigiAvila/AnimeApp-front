import styled from 'styled-components'
import verifyBg from '../../assets/verifyBg.jpg'

export const BgAccountContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    padding: 1vw;
    font-size: 3vw;
  }

  > p {
    font-size: 1.5vw;
  }
`

export const BgImage = styled.div`
  width: 100%;
  height: 30vh;
  background-image: url(${verifyBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const ProfileInformationContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  position: relative;

  > img {
    width: 100%;
    height: 95%;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const AvatarEdition = styled.div`
  font-size: 0.7vw;
  width: 3vw;
  padding: 0.2vw;
  align-self: flex-end;
  border: none;
  background-color: black;
  border-radius: 50%;
  padding: 0.5vw;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;

  > input {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0;
  }
`

export const AvatarLabel = styled.label`
  width: 3vw;
  padding: 0.2vw;
  cursor: pointer;

  > img {
    width: 100%;
    height: auto;
    filter: invert(1);
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3vw;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1vw;
  color: black;
  padding: 0.3vw;
  gap: 0.3vw;

  > div {
    display: flex;
    position: relative;
  }
`

export const StyledInput = styled.input`
  height: 4vh;
  width: 25vw;
  font-size: 0.8vw;
  color: black;
  padding: 0.5vw;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  outline: none;
  font-size: 0.8vw;
`

export const StyledSelect = styled.select`
  height: 4vh;
  width: 25vw;
  color: black;
  padding: 0.5vw;
  border: none;
  border-bottom: 1px solid black;
  margin: 0.5vw 0;
  background: transparent;
  outline: none;
  font-size: 0.8vw;

  > option {
    height: 4vh;
    width: 20vw;
    color: black;
    background: white;
    font-size: 0.8vw;
  }
`

export const PasswordButton = styled.button`
  padding: 0.3vw;
  border-radius: 4px;
  border: none;
  outline: none;
  background: white;
  color: black;
  position: absolute;
  height: auto;
  right: 0;
  margin: 0.2vw;

  &:hover {
    background: black;
    color: white;
  }
`

export const SubmitButton = styled.button`
  align-self: center;
  width: 8vw;
  font-size: 0.8vw;
  font-weight: bold;
  background-color: #7c2629;
  color: #ecece6;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.5vw;
  border-radius: 5px;
  align-self: flex-end;

  &:hover {
    filter: contrast(120%);
  }
`
