import styled, { keyframes } from 'styled-components'
import BgLogin from '../../assets/bg.png'

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`

const swayAnimation = keyframes`
  0% {
    transform: rotate(180deg) translateX(0) translateY(0);
  }
  50% {
    transform: rotate(180deg) translateX(5px) translateY(5px);
  }
  100% {
    transform: rotate(180deg) translateX(0) translateY(0);
  }
`

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  h2 {
    font-family: 'Manga', sans-serif;
    position: absolute;
    top: 35vh;
    left: 25vw;
    font-size: 8vw;
    z-index: 5;
    letter-spacing: 20px;
  }
`
export const BgPatternLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #ecece6, #cccbbb);
`
export const Circle = styled.div`
  width: 700px;
  height: 700px;
  position: absolute;
  top: 7vh;
  left: 30vw;
  border-radius: 100%;
  background-color: #8b312c;
  z-index: 2;
`
export const MountainWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  left: 20vw;
  width: 60vw;
  z-index: 4;

  > img {
    width: 100%;
    height: auto;
  }
`
export const CloudWrapperRight = styled.div`
  position: absolute;
  top: 27vh;
  right: 8vw;
  width: 28vw;
  animation: ${floatAnimation} 3s infinite;

  > img {
    width: 100%;
    height: auto;
  }
`

export const CloudWrapperLeft = styled.div`
  position: absolute;
  top: 0px;
  left: 0vw;
  width: 25vw;
  animation: ${floatAnimation} 3s infinite reverse;
  animation-delay: 0.4s;

  > img {
    width: 100%;
    height: auto;
  }
`

export const CloudWrapperBottom = styled.div`
  position: absolute;
  bottom: -7vh;
  right: -5vw;
  width: 18vw;
  z-index: 6;
  animation: ${floatAnimation} 3s infinite;
  animation-delay: 0.8s;

  > img {
    width: 100%;
    height: auto;
  }
`
export const CloudWrapperBottom1 = styled.div`
  position: absolute;
  bottom: -7vh;
  right: 7vw;
  width: 18vw;
  z-index: 6;
  animation: ${floatAnimation} 3s infinite;
  animation-delay: 0.2s;

  > img {
    width: 100%;
    height: auto;
  }
`

export const CloudWrapperBottom2 = styled.div`
  position: absolute;
  bottom: -7vh;
  right: 19vw;
  width: 22vw;
  z-index: 6;
  animation: ${floatAnimation} 3s infinite;
  animation-delay: 0.8s;

  > img {
    width: 100%;
    height: auto;
  }
`

export const CloudWrapperBottom3 = styled.div`
  position: absolute;
  bottom: -7vh;
  right: 33vw;
  width: 15vw;
  z-index: 6;
  animation: ${floatAnimation} 3s infinite;
  animation-delay: 0.6s;

  > img {
    width: 100%;
    height: auto;
  }
`

export const CloudWrapperBottom4 = styled.div`
  position: absolute;
  bottom: -7vh;
  right: 43vw;
  width: 20vw;
  z-index: 6;
  animation: ${floatAnimation} 3s infinite;
  animation-delay: 0.7s;

  > img {
    width: 100%;
    height: auto;
  }
`

export const CloudWrapperBottom5 = styled.div`
  position: absolute;
  bottom: -7vh;
  right: 56vw;
  width: 16vw;
  z-index: 6;
  animation: ${floatAnimation} 3s infinite;
  animation-delay: 0.4s;

  > img {
    width: 100%;
    height: auto;
  }
`
export const CloudWrapperBottom6 = styled.div`
  position: absolute;
  bottom: -7vh;
  right: 65vw;
  width: 23vw;
  z-index: 6;
  animation: ${floatAnimation} 3s infinite;
  animation-delay: 0.5s;

  > img {
    width: 100%;
    height: auto;
  }
`

export const CloudWrapperBottom7 = styled.div`
  position: absolute;
  bottom: -7vh;
  right: 82vw;
  width: 17vw;
  z-index: 6;
  animation: ${floatAnimation} 3s infinite;
  animation-delay: 0.3s;

  > img {
    width: 100%;
    height: auto;
  }
`
export const CherryWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0vw;
  width: 35vw;
  transform: rotate(180deg);
  z-index: 3;
  animation: ${swayAnimation} 4s infinite alternate;

  > img {
    width: 100%;
    height: auto;
  }
`
