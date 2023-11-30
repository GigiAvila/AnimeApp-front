import { useState } from 'react'


export const useReadingLocalStorage = (key, value) => {
  const [readings, setReadings] = useState(() => {
    try {
      const readings = window.localStorage.getItem(key);
      if (readings) {
        return JSON.parse(readings);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value))
        return value;
      }
    } catch (error) {
      return value;

    }
  })


  const setLocalStorageReadings = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setUser(value);
    } catch (error) {
      return value;
    }
  }
  return [readings, setLocalStorageReadings]
}