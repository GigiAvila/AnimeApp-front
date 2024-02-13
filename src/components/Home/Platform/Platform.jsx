import React, { useState, useEffect } from 'react'
import { PlatformBg, PlatformTop } from './Platform.Styles'
import Preview from './Preview/Preview'
import List from './List/List'
import LastReading from './LastReading/LastReading'
import { useFetchMangaData } from '../../../context/FetchMangaDataContext'

const Platform = () => {
  const { fetchMangaData } = useFetchMangaData()
  const [selectedManga, setSelectedManga] = useState({})

  const sortedMangas = [...fetchMangaData].sort((a, b) => {
    const fansA = a.fans ? a.fans.length : 0
    const fansB = b.fans ? b.fans.length : 0
    return fansB - fansA
  })

  return (
    <PlatformBg>
      <PlatformTop>
        <Preview selectedManga={selectedManga} sortedMangas={sortedMangas} />
        <LastReading />
      </PlatformTop>
      <List setSelectedManga={setSelectedManga} sortedMangas={sortedMangas} />
    </PlatformBg>
  )
}

export default Platform
