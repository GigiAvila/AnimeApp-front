import React from 'react'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import { PageContainer } from './Page.Styles'

const HomePage = () => {
  return (
    <PageContainer>
    <Navbar />
    <Home/>
    </PageContainer>
  )
}

export default HomePage