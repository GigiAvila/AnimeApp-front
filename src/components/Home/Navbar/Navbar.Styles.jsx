import styled from 'styled-components'

export const NavbarContainer = styled.div`
  width: 6vw;
  height: 100vh;
  background: black;
  box-shadow: 2px 2px 130px 5px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  gap: 3vw;
  justify-content: center;
  align-items: center;
`
export const NavbarIconWrapper = styled.div`
  width: 1.6vw;
  height: auto;

  > img {
    width: 100%;
    height: auto;
    filter: invert(1);
  }
`
