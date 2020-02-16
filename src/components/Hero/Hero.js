import React from 'react'
import { HeroPage } from '../Styles/Page'
import styled from 'styled-components'

const HeroTitle = styled.p`
  margin: 0px;
  &::selection {
    background-color: ${props => props.theme.colors.danger};
  }
`

const HeroTitleContainer = styled.div`
  padding: 65% 0;
  font-size: 50px;
  font-weight: 300;
  font-size: 30px;
  @media (min-width: 768px) {
    font-size: 50px;
    padding: 30% 0;
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
    </HeroPage>
  )
}

export default Hero
