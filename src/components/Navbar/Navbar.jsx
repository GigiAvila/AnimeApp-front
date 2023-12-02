import React from 'react'
import {
  NavbarContainer,
  NavbarIconWrapper,
  NavbarAvatarWrapper
} from './Navbar.Styles'
import { useAuth } from '../../hooks/useAuth'

import AvatarImg from '../../assets/error1.png'
import HomeIcon from '../../assets/tori.png'
import ProfileIcon from '../../assets/usuario.png'
import FavoritesIcon from '../../assets/me-gusta.png'
import HistorialIcon from '../../assets/historial.png'
import LogoutIcon from '../../assets/cerrar-sesion.png'
import SettingIcon from '../../assets/setting.png'

const Navbar = () => {
  const { user, logout } = useAuth()

  const Avatar = user ? user.avatar : AvatarImg

  return (
    <NavbarContainer>
      <NavbarAvatarWrapper>
        <img src={Avatar} alt='User Avatar Icon' />
      </NavbarAvatarWrapper>
      <NavbarIconWrapper to='/home'>
        <img src={HomeIcon} alt='Home Icon' />
      </NavbarIconWrapper>
      <NavbarIconWrapper to='/profile'>
        <img src={ProfileIcon} alt='Profile Icon' />
      </NavbarIconWrapper>
      <NavbarIconWrapper to='/favorites'>
        <img src={FavoritesIcon} alt='Favorites anime Icons' />
      </NavbarIconWrapper>
      <NavbarIconWrapper to='/history'>
        <img src={HistorialIcon} alt='Previous readings Icons' />
      </NavbarIconWrapper>
      <NavbarIconWrapper to='/settings'>
        <img src={SettingIcon} alt='Favorites anime Icons' />
      </NavbarIconWrapper>
      <NavbarIconWrapper onClick={() => logout()} to='/'>
        <img src={LogoutIcon} alt='Logout Icon' />
      </NavbarIconWrapper>
    </NavbarContainer>
  )
}

export default Navbar
