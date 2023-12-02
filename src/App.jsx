import Error from './components/404/Error'
import Login from './components/Login/Login'
import { useFetchMangaData } from './context/FetchMangaDataContext'
import { useFetchOtakuData } from './context/FetchOtakuDataContext'

function App() {
  const { error: mangaError } = useFetchMangaData()
  const { error: otakuError } = useFetchOtakuData()

  return <> {mangaError || otakuError ? <Error /> : <Login />}</>
}

export default App
