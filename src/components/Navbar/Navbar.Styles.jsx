import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.div`
  width: 5vw;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  gap: 3vw;
  justify-content: center;
  align-items: center;
`
export const NavbarIconWrapper = styled(Link)`
  width: 1.5vw;
  height: auto;
  display: flex;

  > img {
    width: 100%;
    height: auto;
    filter: invert(1);
  }
`

export const NavbarAvatarWrapper = styled.div`
width:  50px;
height: 50px;

> img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover; 

}`



