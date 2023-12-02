import React from 'react'
import ErrorImg from '../../assets/error2.jpg'
import {
  ErrorPage,
  ErrorContainer,
  ErrorImage,
  ErrorImageWrapper,
  ErrorTextContainer
} from './Error.Styles'

const Error = () => {
  return (
    <ErrorPage>
      <ErrorContainer>
        <ErrorImageWrapper>
          <ErrorImage src={ErrorImg} alt='Error fetching ⚠️' />
        </ErrorImageWrapper>
        <ErrorTextContainer>
          <h1>Oops!</h1>
          <h3>404 error</h3>
          <h5>It was here, but is not anymore...</h5>
          <h5>Refresh the page or try again later</h5>
        </ErrorTextContainer>
      </ErrorContainer>
    </ErrorPage>
  )
}

export default Error
