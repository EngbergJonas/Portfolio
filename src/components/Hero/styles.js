import styled from 'styled-components'
import device from '../../device'
import backgroundImg from '../../media/background.svg'
import backgroundImgLight from '../../media/background_light.svg'

export const Page = styled.div`
  background-image: ${props => (props.dark ? `url(${backgroundImg})` : `url(${backgroundImgLight})`)};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: ${props => props.theme.colors.light};
  font-family: 'Raleway', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

export const Container = styled.div`width: 100vw;`

export const Title = styled.h1`
  font-size: ${props => props.theme.fonts.size.large.s};
  font-weight: ${props => props.theme.fonts.weight.light};
  color: ${props => props.theme.colors.light};
  padding: 0;
  margin: 0;
  &::selection {
    background-color: ${props => props.theme.colors.test1};
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

export const Subtitle = styled.h2`
  font-size: ${props => props.theme.fonts.size.large.xs};
  color: ${props => props.theme.colors.light};
  padding: 0.3rem 0 0;
  margin: 0;
  font-weight: ${props => props.theme.fonts.weight.light};
  &::selection {
    background-color: ${props => props.theme.colors.test1};
  }
  @media ${device.greaterThan.desktopMin} {
    font-size: ${props => props.theme.fonts.size.large.s};
    padding: 0;
  }
`

export const Span = styled.span`
  font-size: ${props => props.theme.fonts.size.large.xs};
  font-weight: ${props => props.theme.fonts.weight.bold};
  color: ${props => props.theme.colors.info};
  &::selection {
    background-color: ${props => props.theme.colors.test1};
  }
  @media ${device.greaterThan.desktopMin} {
    font-size: ${props => props.theme.fonts.size.large.md};
  }
  @media ${device.greaterThan.laptop} and ${device.smallerThan.desktopMin} {
    font-size: ${props => props.theme.fonts.size.large.s};
  }
`

export const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 4px;
  padding: 0.6rem;
  margin: 0.6rem 0 0;
  background: none;
  outline: 0;
  box-shadow: none;
  font-size: ${props => props.theme.fonts.size.xs};
  font-weight: ${props => props.theme.fonts.weight.light};
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