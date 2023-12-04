import React, { useState } from 'react'
import Error from './components/404/Error'
import Login from './components/Login/Login'
import Loader from './components/Loader/Loader'
import { useFetchMangaData } from './context/FetchMangaDataContext'
import { useFetchOtakuData } from './context/FetchOtakuDataContext'

function App() {
  const { error: mangaError } = useFetchMangaData()
  const { error: otakuError, loading } = useFetchOtakuData()
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {mangaError || otakuError ? (
        <Error />
      ) : loading ? (
        <div>Loading</div>
      ) : (
        <Login />
      )}
    </>
  )
}

export default App
