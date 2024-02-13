import React, { useState } from 'react'
import {
  FavoritePreviewContainer,
  MangaCoverContainer,
  InfoContainer,
  AuthorYearInfo,
  VolumesAndContinueInfo,
  ReadingIconWrapper
} from './Preview.Styles'
import { usePreviousReading } from '../../../../hooks/usePreviousReading'
import readingIcon from '../../../../assets/libro.png'
import { useFetchOtakuData } from '../../../../context/FetchOtakuDataContext'
import { useAuth } from '../../../../hooks/useAuth'

const FavoritePreview = ({ selectedManga, sortedMangas }) => {
  const { user } = useAuth()
  const { updatePreviousReadings } = useFetchOtakuData()
  const { readings, addReading } = usePreviousReading()

  const [displayedManga, setDisplayedManga] = useState(sortedMangas[0])

  if (selectedManga && selectedManga !== displayedManga) {
    setDisplayedManga(selectedManga)
  }

  const handleLastReading = async () => {
    if (user && displayedManga) {
      try {
        // await addReading(displayedManga)
        await updatePreviousReadings(user.email, displayedManga._id)
      } catch (error) {
        console.error('Error updating previous readings:', error)
      }
    } else {
      console.error('User, displayedManga, or _id is undefined')
    }
  }

  const MangaName =
    selectedManga?.name || (sortedMangas.length > 0 ? sortedMangas[0].name : '')
  const MangaArgument =
    selectedManga?.argument ||
    (sortedMangas.length > 0 ? sortedMangas[0].argument : '')
  const MangaAuthor =
    selectedManga?.author ||
    (sortedMangas.length > 0 ? sortedMangas[0].author : '')
  const MangaYear =
    selectedManga?.year || (sortedMangas.length > 0 ? sortedMangas[0].year : '')
  const MangaIssues =
    selectedManga?.issues ||
    (sortedMangas.length > 0 ? sortedMangas[0].issues : '')
  const MangaCover =
    selectedManga?.cover ||
    (sortedMangas.length > 0 ? sortedMangas[0].cover : '')

  return (
    <FavoritePreviewContainer>
      <InfoContainer>
        <h2>{MangaName}</h2>
        <p>{MangaArgument}</p>
        <AuthorYearInfo>
          <h5>{MangaAuthor}</h5>
          <h5>{MangaYear}</h5>
        </AuthorYearInfo>
        <VolumesAndContinueInfo>
          <h4>{MangaIssues} issues</h4>
        </VolumesAndContinueInfo>
        <ReadingIconWrapper onClick={handleLastReading}>
          <img src={readingIcon} alt='read now icon' />
        </ReadingIconWrapper>
      </InfoContainer>
      <MangaCoverContainer>
        <img src={MangaCover} alt='manga cover' />
      </MangaCoverContainer>
    </FavoritePreviewContainer>
  )
}

export default FavoritePreview
