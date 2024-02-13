import React from 'react'
import { LoaderWrapper } from './Loader.Styles'

const Loader = () => {
  return (
    <LoaderWrapper>
      <iframe
        src='https://giphy.com/embed/mf4qECoTz8ZVK'
        className='giphy-embed'
      ></iframe>
      <p>
        <a href='https://giphy.com/gifs/hetalia-axis-powers-mf4qECoTz8ZVK'></a>
      </p>
    </LoaderWrapper>
  )
}

export default Loader
