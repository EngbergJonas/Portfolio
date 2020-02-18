import React from 'react'
import { HeroPage } from '../Styles/Page'
import styled from 'styled-components'
import logo from '../../logo.svg'
import { ReactSVG } from 'react-svg'
const HeroTitle = styled.p`
  margin: 0px;
  font-size: 20px;
  font-weight: 300;
  &::selection {
    background-color: ${props => props.theme.colors.danger};
  }
  @media (min-width: 1920px) and (max-width: 2560px) {
    font-size: 50px;
  }
  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 40px;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: 40px;
  }
`
const LogoContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 4rem;
  @media (min-width: 1920px) and (max-width: 2560px) {
    width: 40rem;
    right: 0px;
    display: block;
  }
  @media (min-width: 1440px) and (max-width: 1920px) {
    width: 26rem;
    right: 0px;
    display: block;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    width: 22rem;
    right: 0px;
    bottom: 2.5rem;
    display: block;
  }
`
const HeroTitleContainer = styled.div`
  padding: 65% 0;
  @media (min-width: 1920px) and (max-width: 2560px) {
    padding: 15% 0;
  }
  @media (min-width: 768px) and (max-width: 1920px) {
    padding: 15% 0;
  }
`
const HeroTitleSpan = styled.span`
  color: ${props => props.theme.colors.info};

  &::selection {
    background-color: ${props => props.theme.colors.danger};
  }
`

const Hero = () => {
  return (
    <HeroPage>
      <HeroTitleContainer>
        <HeroTitle>
          <HeroTitleSpan>Hello</HeroTitleSpan>, I'm Jonas Engberg.
        </HeroTitle>
        <HeroTitle>
          I'm a front-end <HeroTitleSpan>Developer</HeroTitleSpan> and <HeroTitleSpan>Designer</HeroTitleSpan>
        </HeroTitle>
      </HeroTitleContainer>
      <LogoContainer>
        <ReactSVG className='svg-test' src={logo} />
      </LogoContainer>
    </HeroPage>
  )
}

export default Hero
