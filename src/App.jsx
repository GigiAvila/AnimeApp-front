import Error from './components/404/Error'
import Login from './components/Login/Login'
import Loader from './components/Loader/Loader'
import { useFetchMangaData } from './context/FetchMangaDataContext'
import { useFetchOtakuData } from './context/FetchOtakuDataContext'

function App() {
  const { error: mangaError } = useFetchMangaData()
  const { error: otakuError, loading } = useFetchOtakuData()

  return (
    <>
      {mangaError || otakuError ? (
        <Error />
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  )
}

export default App
