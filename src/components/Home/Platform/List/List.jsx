import React, { useState } from 'react';
import { ListContainer, ListSlider, CardList, Card, HeartWrapper, ArrowRight, ArrowLeft } from './List.Styles';
import arrow from '../../../../assets/arrow.png';
import { MANGAS } from '../../../../data/MangaData';
import FullHeart from '../../../../assets/me-gusta.png';
import EmptyHeart from '../../../../assets/corazon-vacio.png';

const List = ({ setSelectedManga }) => {
  const cardWidth = 12;
  const [position, setPosition] = useState(0);
  const [likes, setLikes] = useState({});

  const sortedMangas = [...MANGAS].sort((a, b) => b._fans.length - a._fans.length);

  const handleArrowClick = (direction) => {
    let newPosition;

    if (direction === 'left') {
      newPosition = position + cardWidth;
      if (newPosition > 0) {
        newPosition = -cardWidth * (sortedMangas.length - 6);
      }
    } else {
      newPosition = position - cardWidth;
      if (newPosition < -cardWidth * (sortedMangas.length - 6)) {
        newPosition = 0;
      }
    }

    setPosition(newPosition);
  };

  const handleSelectManga = (manga) => {
    setSelectedManga(manga);
  };

  const handleToggleLike = (mangaId) => {
    setLikes(prevLikes => {
      const newLikes = { ...prevLikes };
      newLikes[mangaId] = !newLikes[mangaId];
      return newLikes;
    });
  };

  return (
    <ListContainer>
      <h1>Most popular mangas</h1>
      <ListSlider>
        <ArrowLeft onClick={() => handleArrowClick('left')}>
          <img src={arrow} alt="Left Arrow" />
        </ArrowLeft>
        <CardList>
          {sortedMangas.map((manga, index) => (
            <Card
              key={index}
              style={{ transform: `translateX(${position}vw)`, backgroundImage: `url(${manga.cover})` }}
              onClick={() => handleSelectManga(manga)}>
              <HeartWrapper onClick={() => handleToggleLike(manga._mangaId)}>
                <img src={likes[manga._mangaId] ? FullHeart : EmptyHeart} alt="Like icon" />
              </HeartWrapper>
            </Card>
          ))}
        </CardList>
        <ArrowRight onClick={() => handleArrowClick('right')}>
          <img src={arrow} alt="Right Arrow" />
        </ArrowRight>
      </ListSlider>
    </ListContainer>
  );
};

export default List;
