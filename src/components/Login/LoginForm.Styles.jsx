import styled from 'styled-components'

export const LoginFormBg = styled.div`
  width: 50vw;
  height: 60vh;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 15px;
  box-shadow: 2px -1px 105px -3px rgba(0, 0, 0, 0.75);
  position: absolute;
  z-index: 5;
  top: 20vh;
  left: 48vh;
`
export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const StyledLoginForm = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2vw;

  > h2 {
    align-self: center;
    background: linear-gradient(to bottom, #ecece6, #cccbbb);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 3vw;
  }
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
    border-radius: 10px;
    border: none;
    margin: 0.5vw 0;
    background: #ecece6;
  }

  > button {
    align-self: flex-end;
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
  }
`

export const LoginImageWrapper = styled.div`
  width: 18vw;
  height: auto;

  > img {
    width: 100%;
    height: auto;
  }
`
