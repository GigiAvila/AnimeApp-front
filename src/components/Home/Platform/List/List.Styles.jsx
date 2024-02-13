import styled from 'styled-components'

export const ListContainer = styled.div`
  width: 95%;
  height: 40%;
  margin: 2vw;
  display: flex;
  flex-direction: column;
`

export const ListSlider = styled.div`
  width: 100%;
  height: 40vh;
  margin-top: 1vw;
  display: flex;
  gap: 1vw;
  justify-content: flex-start;
  align-items: center;
`
export const CardList = styled.div`
  width: 90%;
  display: flex;
  gap: 0.5vw;
  justify-content: flex-start;
  align-items: center;
  margin-left: 4vw;
  overflow: hidden;
`

export const Card = styled.div`
  min-width: 12vw;
  height: 40vh;
  background-color: grey;
  padding: 0.5vw;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const ArrowLeft = styled.div`
  width: 4vw;
  height: auto;
  transform: scalex(-1);
  display: flex;
  position: absolute;
  left: 2vw;
  z-index: 2;

  &:hover {
    transform: scaleX(-1) scale(1.3);
    transition: 0.3s ease;
  }

  > img {
    width: 100%;
    height: auto;
  }
`
export const ArrowRight = styled.div`
  width: 4vw;
  height: auto;
  display: flex;
  position: absolute;
  right: 3vw;

  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease;
  }

  > img {
    width: 100%;
    height: auto;
  }
`

export const HeartWrapper = styled.div`
  width: 1.5vw;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5vw;

  &:hover {
    transform: scale(1.3);
    transition: 0.3s ease;
  }

  > img {
    width: 100%;
    height: auto;
  }
`
