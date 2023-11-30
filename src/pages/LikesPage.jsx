import React from 'react'
import { PageContainer } from './Page.Styles'
import Navbar from '../components/Navbar/Navbar'
import Favorites from '../components/Favorites/Favorites'


const LikesPage = () => {
  return (
    <PageContainer>
          <Navbar />
          <Favorites />
    </PageContainer>
  )
}

export default LikesPage