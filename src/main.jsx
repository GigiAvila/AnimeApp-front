import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'

import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import LikesPage from './pages/LikesPage.jsx'
import HistoryPage from './pages/HistoryPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import VerifyAccountPage from './pages/VerifyAccountPage.jsx'
import { ReadingContextProvider } from './context/ReadingContext.jsx'
import { FetchMangaDataProvider } from './context/FetchMangaDataContext.jsx'
import { FetchOtakuDataProvider } from './context/FetchOtakuDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchMangaDataProvider>
      <FetchOtakuDataProvider>
        <AuthProvider>
          <ReadingContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<App />} />
                <Route path='/verifyAccount' element={<VerifyAccountPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/favorites' element={<LikesPage />} />
                <Route path='/history' element={<HistoryPage />} />
                <Route path='/settings' element={<SettingsPage />} />
              </Routes>
            </BrowserRouter>
          </ReadingContextProvider>
        </AuthProvider>
      </FetchOtakuDataProvider>
    </FetchMangaDataProvider>
  </React.StrictMode>
)
