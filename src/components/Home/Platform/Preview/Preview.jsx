import React, { useEffect, useState } from 'react';
import { FavoritePreviewContainer, MangaCoverContainer, InfoContainer, AuthorYearInfo, VolumesAndContinueInfo, ReadingIconWrapper } from './Preview.Styles';
import { usePreviousReading } from '../../../../hooks/usePreviousReading';
import readingIcon from '../../../../assets/libro.png';
import { MANGAS } from '../../../../data/MangaData';

const sortedMangas = [...MANGAS].sort((a, b) => b._fans.length - a._fans.length);

const FavoritePreview = ({ selectedManga }) => {
  const { readings, addReading } = usePreviousReading();
  const [displayedManga, setDisplayedManga] = useState(sortedMangas[0]);

  if (selectedManga && selectedManga !== displayedManga) {
    setDisplayedManga(selectedManga);
  }

  const handleLastReading = () => {
    addReading(displayedManga);
    console.log(readings);
  };

  const MangaName = selectedManga?.name || sortedMangas[0].name;
  const MangaArgument = selectedManga?.argument || sortedMangas[0].argument;
  const MangaAuthor = selectedManga?.author || sortedMangas[0].author;
  const MangaYear = selectedManga?.year || sortedMangas[0].year;
  const MangaIssues = selectedManga?.issues || sortedMangas[0].issues;
  const MangaCover = selectedManga?.cover || sortedMangas[0].cover;

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
          <img src={readingIcon} alt="read now icon" />
        </ReadingIconWrapper>
      </InfoContainer>
      <MangaCoverContainer>
        <img src={MangaCover} alt='manga cover' />
      </MangaCoverContainer>
    </FavoritePreviewContainer>
  );
}

export default FavoritePreview;

