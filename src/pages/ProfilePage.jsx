import React from 'react'
import { PageContainer } from './Page.Styles'
import Navbar from '../components/Navbar/Navbar'
import Profile from '../components/Profile/Profile'

const ProfilePage = () => {
  return (
    <PageContainer>    
      <Navbar />
      <Profile /> </PageContainer>
  )
}

export default ProfilePage