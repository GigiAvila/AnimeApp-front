import React from 'react'
import { NavbarContainer, NavbarIconWrapper } from './Navbar.Styles'

import HomeIcon from '../../../assets/tori.png'
import ProfileIcon from '../../../assets/usuario.png'
import FavoritesIcon from '../../../assets/me-gusta.png'
import LogoutIcon from '../../../assets/cerrar-sesion.png'

const Navbar = () => {
  return (
    <NavbarContainer>
      {/* <NavbarIconWrapper>
        <img src={provisorio} alt='User Avatar Icon' />
      </NavbarIconWrapper> */}
      <NavbarIconWrapper>
        <img src={HomeIcon} alt='Home Icon' />
      </NavbarIconWrapper>
      <NavbarIconWrapper>
        <img src={ProfileIcon} alt='Profile Icon' />
      </NavbarIconWrapper>
      <NavbarIconWrapper>
        <img src={FavoritesIcon} alt='Favorites anime Icons¿' />
      </NavbarIconWrapper>
      <NavbarIconWrapper>
        <img src={LogoutIcon} alt='Logout Icon' />
      </NavbarIconWrapper>
    </NavbarContainer>
  )
}

export default Navbar
