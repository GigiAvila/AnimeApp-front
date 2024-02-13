import React, { useEffect, useState } from 'react'
import {
  NavbarContainer,
  NavbarIconWrapper,
  NavbarAvatarWrapper
} from './Navbar.Styles'
import { useAuth } from '../../hooks/useAuth'

import AvatarImg from '../../assets/error1.png'
import HomeIcon from '../../assets/tori.png'
import ProfileIcon from '../../assets/usuario.png'
import HistorialIcon from '../../assets/historial.png'
import LogoutIcon from '../../assets/cerrar-sesion.png'

const Navbar = () => {
  const { user, logout } = useAuth()
  const [avatar, setAvatar] = useState(AvatarImg)

  useEffect(() => {
    setAvatar(user.avatar)
  }, [user])

  return (
    <NavbarContainer>
      <NavbarAvatarWrapper>
        <img
          src={typeof avatar === 'string' ? avatar : AvatarImg}
          alt='User Avatar Icon'
        />
      </NavbarAvatarWrapper>
      <NavbarIconWrapper to='/home'>
        <img src={HomeIcon} alt='Home Icon' />
      </NavbarIconWrapper>
      <NavbarIconWrapper to='/profile'>
        <img src={ProfileIcon} alt='Profile Icon' />
      </NavbarIconWrapper>
      <NavbarIconWrapper to='/history'>
        <img src={HistorialIcon} alt='Previous readings Icons' />
      </NavbarIconWrapper>
      <NavbarIconWrapper onClick={() => logout()} to='/'>
        <img src={LogoutIcon} alt='Logout Icon' />
      </NavbarIconWrapper>
    </NavbarContainer>
  )
}

export default Navbar
