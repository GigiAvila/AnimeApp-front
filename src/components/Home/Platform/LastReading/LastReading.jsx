import React from 'react';
import { LastReadingContainer, MoreIconWrapper, LastReadings } from './LastReading.Styles';
import moreIcon from '../../../../assets/otro.png';
import { usePreviousReading } from '../../../../hooks/usePreviousReading';

const LastReading = () => {
  const { readings } = usePreviousReading();

  
  const lastFiveReadings = [];
  const seenMangaIds = [];

  
  for (let i = readings.length - 1; i >= 0 && lastFiveReadings.length < 5; i--) {
    const reading = readings[i];
    const mangaId = reading._mangaId;
    
    if (!seenMangaIds.includes(mangaId)) {
      lastFiveReadings.push(reading);
      seenMangaIds.push(mangaId);
    }
  }

  return (
    <LastReadingContainer>
      <h3>Last readings...</h3>
      <LastReadings>
        {lastFiveReadings.map((reading, index) => (
          <img key={index} src={reading.cover} alt={`last reading manga cover ${index + 1}`} />
        ))}
      </LastReadings>
      <MoreIconWrapper to={"/history"}>
        <img src={moreIcon} alt="More previous readings icon" />
      </MoreIconWrapper>
    </LastReadingContainer>
  );
};

export default LastReading;
