import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

const FetchOtakuDataContext = createContext()

export const useFetchOtakuData = () => {
  return useContext(FetchOtakuDataContext)
}

export const FetchOtakuDataProvider = ({ children }) => {
  const [fetchOtakuData, setFetchOtakuData] = useState({ data: [] })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { login } = useAuth()

  useEffect(() => {
    fetchOtakuDataFromApi()
  }, [])

  const fetchOtakuDataFromApi = async () => {
    try {
      setLoading(true)

      const response = await fetch('https://mern6.vercel.app/api/otakus')
      const result = await response.json()
      setFetchOtakuData(result)

      setLoading(false)
      return result
    } catch (error) {
      console.error('Error fetching Otaku data:', error)
      setError(error)
      setLoading(false)
      throw error
    }
  }

  const registerOtaku = async (newData) => {
    try {
      console.log('newData', newData)
      const formData = new FormData()

      for (const key in newData) {
        formData.append(key, newData[key])
      }
      const avatar = document.querySelector('input[name="avatar"]')
      if (avatar && avatar.files.length > 0) {
        formData.append('avatar', avatar.files[0])
      }

      const response = await fetch(
        'https://mern6.vercel.app/api/otakus/register',
        {
          method: 'POST',
          body: formData
        }
      )

      const result = await response.json()
      console.log('POST response:', result)

      const updatedData = await fetchOtakuDataFromApi()
      console.log(updatedData)

      const email = newData.email
      const filteredUserEdited = updatedData.data.find(
        (user) => user.email === email
      )

      console.log('filteredUserEdited', filteredUserEdited)
      login(filteredUserEdited)
    } catch (error) {
      console.error('Error posting Otaku data:', error)
      throw error
    }
  }

  const sendChangingEmail = async ({ email, name }) => {
    console.log(email)
    console.log(name)
    const url = 'http://localhost:4001/api/email/change-email'
    const data = {
      email: email,
      name: name
    }

    try {
      setLoading(true)
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
      console.log('Email for changing user email sent correctly:', responseData)
      setLoading(false)
    } catch (error) {
      console.error(
        'Error sending email for changing user email:',
        error.message
      )
    }
  }

  const changeEmail = async (emailConfirmationToken, newEmail) => {
    try {
      setLoading(true)

      const response = await fetch(
        `https://mern6.vercel.app/api/otakus/change-email/${emailConfirmationToken}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ newEmail })
        }
      )

      const result = await response.json()
      console.log('PUT changing email response:', result)

      const updatedData = await fetchOtakuDataFromApi()
      setLoading(false)
      console.log('updatedData', updatedData)

      const filteredUserEdited = updatedData.data.find(
        (user) => user.email === newEmail
      )

      console.log('filteredUserEdited', filteredUserEdited)
      login(filteredUserEdited)
    } catch (error) {
      console.error('Error during changing email... ', error)
    }
  }

  const changePassword = async (email, newData) => {
    try {
      setLoading(true)
      console.log(email)
      console.log(newData)

      const urlSearchParams = new URLSearchParams()

      for (const key in newData) {
        urlSearchParams.append(key, newData[key])
      }

      const response = await fetch(
        `https://mern6.vercel.app/api/otakus/change-password/${email}`,
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
      setLoading(false)

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
      setLoading(true)
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
        `https://mern6.vercel.app/api/otakus/${email}`,
        {
          method: 'PUT',
          body: formData
        }
      )

      const result = await response.json()
      console.log('PUT response:', result)

      const updatedData = await fetchOtakuDataFromApi()
      setLoading(false)

      console.log(updatedData)

      const filteredUserEdited = updatedData.data.find(
        (user) => user.email === email
      )

      console.log('filteredUserEdited', filteredUserEdited)
      login(filteredUserEdited)
    } catch (error) {
      console.error('Error editing otaku:', error)
    }
  }

  const deleteOtaku = async (id) => {
    try {
      const response = await fetch(
        `https://mern6.vercel.app/api/otakus/${id}`,
        {
          method: 'DELETE'
        }
      )

      const result = await response.json()
      console.log('DELETE response:', result)

      fetchOtakuDataFromApi()
    } catch (error) {
      console.error('Error deleting otaku:', error)
    }
  }

  const loginOtaku = async (email, password) => {
    try {
      setLoading(true)
      const response = await fetch(
        'https://mern6.vercel.app/api/otakus/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        }
      )

      const data = await response.json()
      console.log('Response from loginOtaku:', data)

      setLoading(false)
      return data
    } catch (error) {
      console.error('Error during login:', error)
      throw error
    }
  }

  const sendGmail = async ({ email, name }) => {
    const url = 'https://mern6.vercel.app/api/email'
    const data = {
      gmail: email,
      name: name
    }

    try {
      setLoading(true)
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
      setLoading(false)
    } catch (error) {
      console.error('Error sending email:', error.message)
    }
  }

  const updatePreviousReadings = async (email, newData) => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://mern6.vercel.app/api/otakus/history/${email}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            previousReadings: [newData]
          })
        }
      )

      if (!response.ok) {
        throw new Error(
          `Failed to update previous readings: ${response.statusText}`
        )
      }

      const result = await response.json()
      console.log('PUT previous readings response:', result)

      const updatedData = await fetchOtakuDataFromApi()
      setLoading(false)

      const filteredUserEdited = updatedData.data.find(
        (user) => user.email === email
      )
      login(filteredUserEdited)
    } catch (error) {
      console.error('Error updating previous readings:', error.message)
    }
  }

  const removePreviousReadings = async (email, readingId) => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://mern6.vercel.app/api/otakus/history/remove/${email}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            previousReadings: [readingId]
          })
        }
      )

      if (!response.ok) {
        throw new Error(`Failed to remove  reading: ${response.statusText}`)
      }

      const result = await response.json()
      console.log('PUT remove reading response:', result)

      const updatedData = await fetchOtakuDataFromApi()
      setLoading(false)

      const filteredUserEdited = updatedData.data.find(
        (user) => user.email === email
      )
      login(filteredUserEdited)
    } catch (error) {
      console.error('Error removing reading:', error.message)
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
    updatePreviousReadings,
    removePreviousReadings,
    sendChangingEmail,
    changeEmail,
    changePassword,
    error,
    loading
  }

  return (
    <FetchOtakuDataContext.Provider value={contextValue}>
      {children}
    </FetchOtakuDataContext.Provider>
  )
}
