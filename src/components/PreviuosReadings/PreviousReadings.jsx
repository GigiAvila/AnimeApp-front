import React, { useState } from 'react'
import {
  NotHistoryFound,
  HistoryContainer,
  DeleteIcon,
  SearchReadings,
  InputLabel,
  InputField,
  PreviousReadingsContainer,
  Card,
  PaginationContainer,
  PaginationButton
} from './PreviuosReadings.Styles'
import { usePreviousReading } from '../../hooks/usePreviousReading'
import CloseIcon from '../../assets/close.png'
import { useAuth } from '../../hooks/useAuth'
import { useFetchMangaData } from '../../context/FetchMangaDataContext'
import { useFetchOtakuData } from '../../context/FetchOtakuDataContext'

const PreviousReadings = () => {
  const { readings, removeReading } = usePreviousReading()
  const { removePreviousReadings } = useFetchOtakuData()
  const { user } = useAuth()
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredReadings, setFilteredReadings] = useState('')
  const { fetchMangaData } = useFetchMangaData()

  const itemsPerPage = 6
  const previousReadings = []
  const seenMangaIds = []

  for (let i = readings.length - 1; i >= 0; i--) {
    const readingId = readings[i]
    const manga = fetchMangaData.find((m) => m._id === readingId)

    if (manga && !seenMangaIds.includes(readingId)) {
      previousReadings.push(manga)
      seenMangaIds.push(readingId)
    }
  }

  const totalPages = Math.ceil(previousReadings.length / itemsPerPage)
  const paginatedReadings = previousReadings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  const handleRemoveFromList = (id) => {
    removeReading(id)
    removePreviousReadings(user.email, id)
  }

  const filteredPaginatedReadings = paginatedReadings.filter((manga) =>
    manga.name.toLowerCase().includes(filteredReadings.toLowerCase())
  )

  return (
    <HistoryContainer>
      <SearchReadings>
        <InputLabel htmlFor='previousReadings'>
          <InputField
            type='text'
            placeholder='Search a previous reading...'
            onChange={(e) => setFilteredReadings(e.target.value)}
          />
        </InputLabel>
      </SearchReadings>
      <h2>All my readings</h2>
      <PreviousReadingsContainer>
        {filteredPaginatedReadings.length > 0 ? (
          filteredPaginatedReadings.map((manga, index) => (
            <Card
              key={index}
              style={{ backgroundImage: `url(${manga.cover})` }}
            >
              <DeleteIcon onClick={() => handleRemoveFromList(manga._id)}>
                <img src={CloseIcon} alt='Delete Icon' />
              </DeleteIcon>
            </Card>
          ))
        ) : (
          <NotHistoryFound>
            <iframe
              src='https://giphy.com/embed/LrXeeVSJtVqlq'
              width='480'
              height='192'
              className='giphy-embed'
            ></iframe>
            <p>
              <a href='https://giphy.com/gifs/naruto-sad-LrXeeVSJtVqlq'></a>
            </p>
          </NotHistoryFound>
        )}
      </PreviousReadingsContainer>
      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </HistoryContainer>
  )
}

export default PreviousReadings
