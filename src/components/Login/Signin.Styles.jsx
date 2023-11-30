import styled from 'styled-components'

export const LoginFormBg = styled.div`
  width: 60vw;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 15px;
  box-shadow: 2px -1px 105px -3px rgba(0, 0, 0, 0.75);
  position: absolute;
  z-index: 6;
  top: 10vh;
  left: 40vh;
`
export const LoginContainer = styled.div`
  width: 60vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const LoginText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3vw;
`



export const LoginImageContainer = styled.div`
width: 30vw;
height:100%;
display: flex;
align-items: flex-end;
justify-content: center;


`


export const LoginImageWrapper = styled.div`
  width: auto;
  height: 90%;




  > img {
    width: auto;
    height: 100%;

  }
`
