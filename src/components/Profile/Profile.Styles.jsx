import styled from 'styled-components'

export const ProfileSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1vw;
  gap: 2vw;
`

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5vw;

  > h1 {
    font-size: 4vw;
  }
`

export const PremiumContainer = styled.div`
  display: flex;
  gap: 1vw;

  > h3 {
    font-size: 1.5vw;
  }
`

export const PremiumIconWrapper = styled.div`
  display: flex;
  width: 2vw;

  > img {
    width: 100%;
    height: auto;
  }
`

export const ProfileOptions = styled.div`
  display: flex;
  gap: 2vw;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
`
export const ProfileOptionSelected = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
