import React from 'react'
import { HomeContainer } from './Home.Styles'
import Navbar from './Navbar/Navbar'
import Platform from './Platform/Platform'

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Platform />
    </HomeContainer>
  )
}

export default Home
