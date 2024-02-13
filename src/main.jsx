import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'

import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import HistoryPage from './pages/HistoryPage.jsx'
import VerifyAccountPage from './pages/VerifyAccountPage.jsx'
import { ReadingContextProvider } from './context/ReadingContext.jsx'
import { FetchMangaDataProvider } from './context/FetchMangaDataContext.jsx'
import { FetchOtakuDataProvider } from './context/FetchOtakuDataContext.jsx'
import ProfileInformation from './components/Profile/ProfileInformation/ProfileInformation.jsx'
import ChangeEmail from './components/Profile/ChangeEmail/ChangeEmail.jsx'
import { ChangePassword } from './components/Profile/ChangePassword/ChangePassword.jsx'
import ChangeEmailPage from './pages/ChangeEmailPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <FetchOtakuDataProvider>
        <FetchMangaDataProvider>
          <ReadingContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<App />} />
                <Route
                  path='/verifyAccount/:token'
                  element={<VerifyAccountPage />}
                />
                <Route
                  path='/verifyAccount/change-email/:token'
                  element={<ChangeEmailPage />}
                />
                <Route path='/home' element={<HomePage />} />
                <Route path='/profile' element={<ProfilePage />}>
                  <Route
                    path='myInformation'
                    element={<ProfileInformation />}
                  />
                  <Route path='email' element={<ChangeEmail />} />
                  <Route path='password' element={<ChangePassword />} />
                </Route>
                <Route path='/history' element={<HistoryPage />} />
              </Routes>
            </BrowserRouter>
          </ReadingContextProvider>
        </FetchMangaDataProvider>
      </FetchOtakuDataProvider>
    </AuthProvider>
  </React.StrictMode>
)
