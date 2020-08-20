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
  color: ${props => props.theme.colors.primaryDark};
  font-family: 'Raleway', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //text-align: center;
`

export const Container = styled.div`
  width: 70vw;
  align-items: center;
  //text-align: center;
`

export const Item = styled.div`margin: 2rem 0 0;`

export const Title = styled.h1`
  font-size: ${props => props.theme.fonts.size.large.hl};
  font-weight: ${props => props.theme.fonts.weight.bold};
  font-style: 'Open Sans', sans-serif;
  color: ${props => props.theme.colors.neutralLight};
  padding: 0;
  margin: 0;
  &::selection {
    background-color: ${props => props.theme.colors.neutralDark};
  }
  @media ${device.greaterThan.desktop} {
    font-size: ${props => props.theme.fonts.size.large.hl};
  }
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.hl};
    font-weight: ${props => props.theme.fonts.weight.bold};
  }
`

export const Subtitle = styled.h2`
  font-size: ${props => props.theme.fonts.size.large.xs};
  color: ${props => props.theme.colors.neutralLight};
  padding: 0.3rem 0 0;
  margin: 0;
  font-weight: ${props => props.theme.fonts.weight.light};
  &::selection {
    background-color: ${props => props.theme.colors.neutralDark};
  }
  @media ${device.greaterThan.desktopMin} {
    font-size: ${props => props.theme.fonts.size.large.s};
    padding: 0;
  }
`

export const Span = styled.span`
  font-size: ${props => props.theme.fonts.size.large.xs};
  font-weight: ${props => props.theme.fonts.weight.bold};
  color: ${props => props.theme.colors.secondaryLight};
  &::selection {
    background-color: ${props => props.theme.colors.neutralDark};
  }
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.s};
  }
  @media ${device.greaterThan.desktopMin} {
    font-size: ${props => props.theme.fonts.size.large.md};
  }
`

export const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.neutralLight};
  border-radius: 4px;
  padding: 0.6rem;
  margin: 0.6rem 0 0;
  background: transparent;
  font-size: ${props => props.theme.fonts.size.xs};
  font-weight: ${props => props.theme.fonts.weight.light};
  color: ${props => props.theme.colors.neutralLight};
  &:hover {
    border-color: ${props => props.theme.colors.neutralDark};
    cursor: pointer;
    color: ${props => props.theme.colors.neutralDark};
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.md};
  }
  @media ${device.greaterThan.laptopL} {
    font-size: ${props => props.theme.fonts.size.lg};
  }
`
