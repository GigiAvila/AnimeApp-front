import styled from 'styled-components'

export const ProfileInformationOuterContainer = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  box-shadow: 2px -1px 105px -3px rgba(0, 0, 0, 0.75);
  padding: 2vw;

  > h1 {
    font-size: 2vw;
    padding: 1vw 0.5vw;
    color: white;
  }
`

export const ProfileInformationContainer = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 3vw;
  align-items: flex-start;
  justify-content: center;
`

export const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const AvatarPreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
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
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1vw;
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

export const InputWrapper = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;

  > button {
    height: 4vh;
    width: 4vw;
    padding: 0.5vw 0.3vw;
    margin: 0 auto;
    font-size: 0.7vw;
    cursor: pointer;
  }
`

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2vw;
  color: white;
  padding: 0.5vw;
`

export const StyledInput = styled.input`
  height: 5vh;
  width: 25vw;
  font-size: 0.8vw;
  color: #f2f2f2;
  padding: 0.5vw;
  border: none;
  border-bottom: 1px solid white;
  margin: 0.5vw 0;
  background: transparent;
  outline: none;
  font-size: 1vw;
`

export const StyledSelect = styled.select`
  height: 5vh;
  width: 25vw;
  font-size: 0.8vw;
  color: #f2f2f2;
  padding: 0.5vw;
  border: none;
  border-bottom: 1px solid white;
  margin: 0.5vw 0;
  background: transparent;
  outline: none;
  font-size: 1vw;

  > option {
    height: 4vh;
    width: 20vw;
    color: white;
    background: black;
    font-size: 0.8vw;
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
