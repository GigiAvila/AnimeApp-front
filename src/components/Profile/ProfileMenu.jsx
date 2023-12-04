import React from 'react'
import {
  MenuContainer,
  MenuList,
  MenuElementContainer,
  MenuElement
} from './ProfileMenu.Styles'

export const ProfileMenu = () => {
  return (
    <MenuContainer>
      <h2>General</h2>
      <MenuList>
        <MenuElementContainer>
          <MenuElement to='premium'>
            <p>Subscription information</p>
          </MenuElement>
        </MenuElementContainer>
        <MenuElementContainer>
          <MenuElement to='myInformation'>
            <p>Change personal information</p>
          </MenuElement>
        </MenuElementContainer>
        <MenuElementContainer>
          <MenuElement to='email'>
            <p>Change email</p>
          </MenuElement>
        </MenuElementContainer>
        <MenuElementContainer>
          <MenuElement to='password'>
            <p>Change password</p>
          </MenuElement>
        </MenuElementContainer>
      </MenuList>
    </MenuContainer>
  )
}
