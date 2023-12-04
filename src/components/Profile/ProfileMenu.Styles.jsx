import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuContainer = styled.div`
  width: 30%;

  > h2 {
    font-size: 2vw;
    padding: 1vw;
    letter-spacing: 2px;
  }
`

export const MenuList = styled.ul`
  list-style: none;
`

export const MenuElementContainer = styled.li`
  margin: 0.5vw 0;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #7c2629;
    opacity: 0.8;
  }
`

export const MenuElement = styled(Link)`
  text-decoration: none;

  > p {
    font-size: 1vw;
    letter-spacing: 2px;
    padding: 1vw;
    color: #7c2629;

    &:hover {
      font-weight: bold;
      color: white;
    }
  }
`
