import React from 'react'
import {
  LastReadingContainer,
  MoreIconWrapper,
  LastReadings
} from './LastReading.Styles'
import moreIcon from '../../../../assets/otro.png'
import { usePreviousReading } from '../../../../hooks/usePreviousReading'
import { useFetchMangaData } from '../../../../context/FetchMangaDataContext'

const LastReading = () => {
  const { readings } = usePreviousReading()
  const { fetchMangaData } = useFetchMangaData()

  const lastFiveReadings = readings
    ? readings.length > 5
      ? readings.slice(-5)
      : readings
    : ''

  return (
    <LastReadingContainer>
      <h3>Last readings...</h3>
      <LastReadings>
        {Array.isArray(lastFiveReadings) &&
          lastFiveReadings.map((reading, index) => {
            const manga = fetchMangaData.find((m) => m._id === reading)

            return (
              <img
                key={index}
                src={manga?.cover}
                alt={`last reading manga cover ${index + 1}`}
              />
            )
          })}
      </LastReadings>
      <MoreIconWrapper to={'/history'}>
        <img src={moreIcon} alt='More previous readings icon' />
      </MoreIconWrapper>
    </LastReadingContainer>
  )
}

export default LastReading
