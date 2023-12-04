import React, { createContext, useContext, useState, useEffect } from 'react'

const FetchOtakuDataContext = createContext()

export const useFetchOtakuData = () => {
  return useContext(FetchOtakuDataContext)
}

export const FetchOtakuDataProvider = ({ children }) => {
  const [fetchOtakuData, setFetchOtakuData] = useState({ data: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchOtakuDataFromApi()
  }, [])

  const fetchOtakuDataFromApi = async () => {
    try {
      setLoading(true)

      const response = await fetch('http://localhost:4001/api/otakus')
      const result = await response.json()
      setFetchOtakuData(result)
    } catch (error) {
      console.error('Error fetching Otaku data:', error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const registerOtaku = async (userData) => {
    try {
      console.log(userData)

      const response = await fetch(
        'http://localhost:4001/api/otakus/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        }
      )

      const result = await response.json()
      console.log('POST response:', result)

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      fetchOtakuDataFromApi()

      return result
    } catch (error) {
      console.error('Error posting Otaku data:', error)
      throw error
    }
  }

  const changePassword = async (email, newData) => {
    try {
      console.log(email)
      console.log(newData)

      const urlSearchParams = new URLSearchParams()

      for (const key in newData) {
        urlSearchParams.append(key, newData[key])
      }

      const response = await fetch(
        `http://localhost:4001/api/otakus/change-password/${email}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: urlSearchParams.toString()
        }
      )

      const result = await response.json()
      console.log('PUT response:', result)

      if (response.ok) {
        fetchOtakuDataFromApi()
      } else {
        console.error('Error updating password:', result.message)
      }
    } catch (error) {
      console.error('Error updating password:', error)
    }
  }

  const editOtaku = async (email, newData) => {
    try {
      console.log(email)
      console.log('newdata', newData)
      const formData = new FormData()

      for (const key in newData) {
        formData.append(key, newData[key])
      }

      const avatar = document.querySelector('input[name="avatar"]')
      if (avatar && avatar.files.length > 0) {
        formData.append('avatar', avatar.files[0])
      }

      const response = await fetch(
        `http://localhost:4001/api/otakus/${email}`,
        {
          method: 'PUT',
          body: formData
        }
      )

      const result = await response.json()
      console.log('PUT response:', result)

      fetchOtakuDataFromApi()
    } catch (error) {
      console.error('Error editing otaku:', error)
    }
  }

  const deleteOtaku = async (id) => {
    try {
      const response = await fetch(`http://localhost:4001/api/otakus/${id}`, {
        method: 'DELETE'
      })

      const result = await response.json()
      console.log('DELETE response:', result)

      fetchOtakuDataFromApi()
    } catch (error) {
      console.error('Error deleting otaku:', error)
    }
  }

  const loginOtaku = async (email, password) => {
    try {
      const response = await fetch('http://localhost:4001/api/otakus/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()
      console.log('Response from loginOtaku:', data)

      return data
    } catch (error) {
      console.error('Error during login:', error)
      throw error
    }
  }

  const sendGmail = async ({ email, name }) => {
    const url = 'http://localhost:4001/api/email'
    const data = {
      gmail: email,
      name: name
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Error in response: ' + response.statusText)
      }

      const responseData = await response.json()
      console.log('Email sent correctly:', responseData)
    } catch (error) {
      console.error('Error sending email:', error.message)
    }
  }

  const contextValue = {
    fetchOtakuData,
    setFetchOtakuData,
    registerOtaku,
    editOtaku,
    deleteOtaku,
    loginOtaku,
    sendGmail,
    changePassword,
    error
  }

  return (
    <FetchOtakuDataContext.Provider value={contextValue}>
      {children}
    </FetchOtakuDataContext.Provider>
  )
}
