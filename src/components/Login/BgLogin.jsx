import React from 'react'
import CherryBranch from '../../assets/cherry.png'
import Mountain from '../../assets/mountain.png'
import Cloud from '../../assets/cloud.png'
import {
  LoginContainer,
  BgPatternLogin,
  Circle,
  MountainWrapper,
  CloudWrapperRight,
  CloudWrapperLeft,
  CloudWrapperBottom,
  CloudWrapperBottom1,
  CloudWrapperBottom2,
  CloudWrapperBottom3,
  CloudWrapperBottom4,
  CloudWrapperBottom5,
  CloudWrapperBottom6,
  CloudWrapperBottom7,
  CherryWrapper
} from './BgLogin.Styles'

const BgLogin = () => {
  return (
    <LoginContainer>
      <h2>Welcome</h2>
      <BgPatternLogin />
      <Circle></Circle>
      <MountainWrapper>
        <img src={Mountain} alt='Mountain Image' />
      </MountainWrapper>
      <CloudWrapperRight>
        <img src={Cloud} alt='Cloud Image' />
      </CloudWrapperRight>
      <CloudWrapperLeft>
        <img src={Cloud} alt='Cloud Image' />
      </CloudWrapperLeft>
      <CloudWrapperBottom>
        <img src={Cloud} alt='Cloud Image' />
      </CloudWrapperBottom>
      <CloudWrapperBottom1>
        <img src={Cloud} alt='Cloud Image' />
      </CloudWrapperBottom1>
      <CloudWrapperBottom2>
        <img src={Cloud} alt='Cloud Image' />
      </CloudWrapperBottom2>
      <CloudWrapperBottom3>
        <img src={Cloud} alt='Cloud Image' />
      </CloudWrapperBottom3>
      <CloudWrapperBottom4>
        <img src={Cloud} alt='Cloud Image' />
      </CloudWrapperBottom4>
      <CloudWrapperBottom5>
        <img src={Cloud} alt='Cloud Image' />
      </CloudWrapperBottom5>
      <CloudWrapperBottom6>
        <img src={Cloud} alt='Cloud Image' />
      </CloudWrapperBottom6>
      <CloudWrapperBottom7>
        <img src={Cloud} alt='Cloud Image' />
      </CloudWrapperBottom7>
      <CherryWrapper>
        <img src={CherryBranch} alt='CherryBranch Image' />
      </CherryWrapper>
    </LoginContainer>
  )
}

export default BgLogin
