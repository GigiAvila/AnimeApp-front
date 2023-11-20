import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoginButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;

  > p {
    font-size: 1vw;

    font-family: 'Manga', sans-serif;
  }
`

export const LoginIconWrapper = styled.div`
  width: 3vw;

  > img {
    width: 100%;
    height: auto;
    animation: ${rotateAnimation} 3s linear infinite;
  }
`
