import React, { createContext, useCallback, useState, useEffect } from 'react';
import { mangaEstructure } from '../data/MangaEstructure';


export const ReadingContext = createContext();


export const ReadingContextProvider = ({ children }) => {
  const [readings, setReadings] = useState(() => {
    //LAZY INIT
    const localReadings = localStorage.getItem('previous-readings');
    return localReadings ? JSON.parse(localReadings) : mangaEstructure;
  });


  const addReading = useCallback((reading) => {
    setReadings((prevState) => [...prevState, { ...reading }])

  }, [])

  useEffect(() => {
    localStorage.setItem('previous-readings', JSON.stringify(readings));
  }, [readings])

  const removeReading = useCallback((readingId) => {
    setReadings((prevState) => prevState.filter((reading) => reading._mangaId !== readingId))
  }, [])

  return (
    <ReadingContext.Provider value={{ readings, addReading, removeReading }}>
      {children}
    </ReadingContext.Provider>
  );
};