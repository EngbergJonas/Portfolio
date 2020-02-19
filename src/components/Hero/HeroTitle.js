import React from 'react'
import styled from 'styled-components'
import device from '../../device'
const Container = styled.div`width: 100vw;`

const Title = styled.h1`
  font-size: ${props => props.theme.fonts.size.large.s};
  font-weight: ${props => props.theme.fonts.weight.light};
  color: ${props => props.theme.colors.test1};
  padding: 0;
  margin: 0;
  &::selection {
    background-color: ${props => props.theme.colors.danger};
  }
  @media ${device.greaterThan.desktop} {
    font-size: ${props => props.theme.fonts.size.large.xl};
    font-weight: 500;
  }
  @media ${device.greaterThan.desktop} {
    font-size: ${props => props.theme.fonts.size.large.lg};
    font-weight: 500;
  }
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.md};
    font-weight: 500;
  }
`

const Subtitle = styled.h2`
  font-size: ${props => props.theme.fonts.size.large.xs};
  color: ${props => props.theme.colors.light};
  padding: 0.3rem 0 0;
  margin: 0;
  font-weight: ${props => props.theme.fonts.weight.light};

  @media ${device.greaterThan.desktopMin} {
    font-size: ${props => props.theme.fonts.size.large.s};
    padding: 0;
  }

  @media ${device.greaterThan.laptop} and ${device.smallerThan.desktopMin} {
    font-size: ${props => props.theme.fonts.size.large.xs};
    padding: 0;
  }
`

const Span = styled.span`
  font-size: ${props => props.theme.fonts.size.large.xs};
  font-weight: ${props => props.theme.fonts.weight.bold};
  color: ${props => props.theme.colors.info};
  &::selection {
    background-color: ${props => props.theme.colors.danger};
  }
  @media ${device.greaterThan.desktopMin} {
    font-size: ${props => props.theme.fonts.size.large.md};
  }
  @media ${device.greaterThan.laptop} and ${device.smallerThan.desktopMin} {
    font-size: ${props => props.theme.fonts.size.large.s};
  }
`

const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 4px;
  padding: 0.6rem;
  margin: 0.6rem 0 0;
  background: none;
  outline: 0;
  box-shadow: none;
  font-size: ${props => props.theme.fonts.size.xs};
  font-weight: ${props => props.theme.fonts.weight.thin};
  color: ${props => props.theme.colors.light};
  &:hover {
    border-color: ${props => props.theme.colors.test1};
    color: ${props => props.theme.colors.test1};
    cursor: pointer;
  }
  @media ${device.greaterThan.desktop} {
    font-size: ${props => props.theme.fonts.size.xl};
  }
  @media ${device.greaterThan.laptopL} {
    font-size: ${props => props.theme.fonts.size.lg};
  }
  @media ${device.greaterThan.laptop} and ${device.smallerThan.laptopL} {
    font-size: ${props => props.theme.fonts.size.md};
  }
`

const HeroTitle = () => {
  return (
    <Container>
      <Title>Hello,</Title>
      <Subtitle>
        I'm <Span>Jonas Engberg</Span>
      </Subtitle>
      <Subtitle>
        My <Span>passion</Span> is <Span>Web Development</Span>
      </Subtitle>
      <Subtitle>
        and <Span>Web Design</Span>
      </Subtitle>
      <Button>About me</Button>
    </Container>
  )
}

export default HeroTitle
