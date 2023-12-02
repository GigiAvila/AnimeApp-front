import styled from 'styled-components'

export const ErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle, #2c3035, black);
  position: relative;
`
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

export const ErrorImageWrapper = styled.div`
  width: 60%;
  height: auto;
  position: absolute;
`

export const ErrorImage = styled.img`
  width: 100%;
  height: auto;
  padding-left: 3vw;
`

export const ErrorTextContainer = styled.div`
  width: 35vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  left: 0;
  top: 20vh;

  > h1 {
    color: white;
    font-size: 7vw;
    letter-spacing: 1px;
  }

  > h3 {
    color: white;
    font-size: 5vw;
    letter-spacing: 1px;
  }

  > h5 {
    color: white;
    font-size: 2vw;
    line-height: 2.5vw;
    letter-spacing: 1px;
  }
`
