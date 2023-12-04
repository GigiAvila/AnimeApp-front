import React, { useState } from 'react'
import {
  ProfileHeader,
  ProfileSection,
  PremiumContainer,
  PremiumIconWrapper,
  ProfileOptions,
  ProfileOptionSelected
} from './Profile.Styles'
import ProfileInformation from './ProfileInformation/ProfileInformation'
import { useAuth } from '../../hooks/useAuth'
import PremiumIcon from '../../assets/premium.png'
import { ProfileMenu } from './ProfileMenu'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  const { user } = useAuth()

  return (
    <ProfileSection>
      <ProfileHeader>
        <h1>
          {user.name} {user.surname}
        </h1>
        {user.premium === true ? (
          <>
            <PremiumContainer>
              <h3>Premium Member</h3>
              <PremiumIconWrapper>
                <img src={PremiumIcon} alt='Premium icon' />
              </PremiumIconWrapper>
            </PremiumContainer>
          </>
        ) : null}
      </ProfileHeader>
      <ProfileOptions>
        <ProfileMenu />
        <ProfileOptionSelected>
          <Outlet />
        </ProfileOptionSelected>
      </ProfileOptions>
    </ProfileSection>
  )
}

export default Profile
