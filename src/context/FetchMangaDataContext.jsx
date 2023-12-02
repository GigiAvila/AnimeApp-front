import React, { createContext, useContext, useState, useEffect } from 'react'

const FetchMangaDataContext = createContext()

export const useFetchMangaData = () => {
  return useContext(FetchMangaDataContext)
}

export const FetchMangaDataProvider = ({ children }) => {
  const [fetchMangaData, setFetchMangaData] = useState({ data: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMangaDataFromApi()
  }, [])

  const fetchMangaDataFromApi = async () => {
    try {
      setLoading(true)

      const response = await fetch('http://localhost:4001/api/mangas')
      const result = await response.json()
      setFetchMangaData(result)
    } catch (error) {
      console.error('Error fetching Manga data:', error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const postManga = async (data) => {
    try {
      const formData = new FormData()

      const response = await fetch('http://localhost:4001/api/mangas', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      console.log('POST response:', result)

      fetchMangaDataFromApi()
    } catch (error) {
      console.error('Error posting Manga data:', error)
    }
  }

  const editManga = async (id, newData) => {
    try {
      const formData = new FormData()

      for (const key in newData) {
        formData.append(key, newData[key])
      }

      const response = await fetch(`http://localhost:4001/api/mangas/${id}`, {
        method: 'PUT',
        body: formData
      })

      const result = await response.json()
      console.log('PUT response:', result)

      fetchMangaDataFromApi()
    } catch (error) {
      console.error('Error editing manga:', error)
    }
  }

  const deleteManga = async (id) => {
    try {
      const response = await fetch(`http://localhost:4001/api/mangas/${id}`, {
        method: 'DELETE'
      })

      const result = await response.json()
      console.log('DELETE response:', result)

      fetchMangaDataFromApi()
    } catch (error) {
      console.error('Error deleting manga:', error)
    }
  }

  const contextValue = {
    fetchMangaData,
    setFetchMangaData,
    postManga,
    editManga,
    deleteManga,
    error
  }

  return (
    <FetchMangaDataContext.Provider value={contextValue}>
      {children}
    </FetchMangaDataContext.Provider>
  )
}
