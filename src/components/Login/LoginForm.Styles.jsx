import styled from 'styled-components'


export const StyledLoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2vw;

  > h2 {
    align-self: center;
    background: linear-gradient(to bottom, #ecece6, #cccbbb);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 3vw;
    padding-bottom: 3vw;
  }

  `

  export const Form = styled.div`
  
  display: flex;
  flex-direction: column; 
  gap: 1vw;
  

  > label {
    font-size: 1vw;
    color: white;
    padding: 0.5vw 0;
  }

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

    &::placeholder{
      color: rgba(255,255,255,0.5);
      font-size: 1.2vw;
    }

    &:focus {
      border-bottom: 1px solid #7c2629;
      background: transparent;
      font-size: 1.2vw;
      color: white;
    }
  }
  `

  export const SubmitButton = styled.button`
    align-self: center;
    margin-top: 2vw;
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
  
`

export const PassButton = styled.button`
background-color: transparent;
outline: none;
border: none;
cursor: pointer;
color: rgba(255,255,255, 0.5);
font-size: 0.6vw;
align-self: flex-start
`