import { useContext } from 'react'
import { ReadingContext } from '../context/ReadingContext'

export const usePreviousReading = () => {
  return useContext(ReadingContext)
}
