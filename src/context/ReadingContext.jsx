import React, { createContext, useCallback, useState, useEffect } from 'react'
import { mangaEstructure } from '../data/MangaEstructure'
import { useAuth } from '../hooks/useAuth'

export const ReadingContext = createContext()

export const ReadingContextProvider = ({ children }) => {
  const { user } = useAuth()

  const initialReadings = user ? user.previousReadings : ''

  const [userReadings, setUserReadings] = useState(() => {
    return initialReadings
  })

  useEffect(() => {
    setUserReadings(user ? user.previousReadings : '')
  }, [user])

  const addReading = useCallback((reading) => {
    setUserReadings((prevReadings) => {
      console.log('adding reading', reading)
      return [...prevReadings, { ...reading }]
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('previous-readings', JSON.stringify(userReadings))
    console.log('readings in context', userReadings)
  }, [userReadings])

  const removeReading = useCallback((id) => {
    setUserReadings((prevReadings) =>
      prevReadings.filter((reading) => reading !== id)
    )
  }, [])

  return (
    <ReadingContext.Provider
      value={{
        readings: userReadings,
        setReadings: setUserReadings,
        addReading,
        removeReading
      }}
    >
      {children}
    </ReadingContext.Provider>
  )
}
