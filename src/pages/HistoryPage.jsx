import React from 'react'
import { PageContainer } from './Page.Styles'
import Navbar from '../components/Navbar/Navbar'
import PreviousReadings from '../components/PreviuosReadings/PreviousReadings'



const HistoryPage = () => {
  return (
    <PageContainer>
          <Navbar />
          <PreviousReadings />
    </PageContainer>
  )
}

export default HistoryPage