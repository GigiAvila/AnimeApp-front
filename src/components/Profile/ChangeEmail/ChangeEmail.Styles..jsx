import styled from 'styled-components'

export const StyledForm = styled.form`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vw;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  box-shadow: 2px -1px 105px -3px rgba(0, 0, 0, 0.75);

  > h1 {
    font-size: 2vw;
    padding: 1vw 0.5vw;
    color: white;
  }
  > h3 {
    font-size: 1vw;
    padding: 1vw 0.5vw;
    color: #f2f2f2;
  }
`

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1vw;
  margin: 2vw 0;
`

export const Label = styled.label`
  display: flex;
  position: relative;
  align-tems: center;

  > input {
    width: 20vw;
    font-size: 0.8vw;
    color: #7c2629;
    padding: 0.5vw;
    border: none;
    border-bottom: 1px solid white;
    margin: 0.5vw 0;
    background: transparent;
    outline: none;
    font-size: 1vw;
    color: white;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.2vw;
    }

    &:focus {
      border-bottom: 1px solid #7c2629;
      background: transparent;
      font-size: 1.2vw;
      color: white;
    }
  }

  > button {
    height: 100%;
  }
`

export const SubmitButton = styled.button`
  align-self: center;
  width: 15vw;
  font-size: 0.8vw;
  font-weight: bold;
  background-color: #7c2629;
  color: #ecece6;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.8vw;
  border-radius: 5px;
  text-transform: uppercase;

  &:hover {
    filter: contrast(120%);
  }
`
export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  padding: 1vw;

  > p {
    width: 70%;
    color: white;
    letter-spacing: 0.9px;
    line-height: 20px;
  }
`

export const IconWrapper = styled.div`
  width: 1.6vw;
  height: auto;

  > img {
    width: 100%;
    height: auto;
    filter: invert(1);
  }
`
