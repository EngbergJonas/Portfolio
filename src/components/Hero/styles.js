import styled from 'styled-components'
import device from '../../device'
import backgroundImg from '../../assets/media/background.svg'
import backgroundImgLight from '../../assets/media/background_light.svg'

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
  padding-top: 5%;
  width: 70vw;
  align-items: center;
`

export const Item = styled.div`margin: 2rem 0 0;`

export const Title = styled.h1`
  font-size: ${props => props.theme.fonts.size.large.lg};
  font-weight: ${props => props.theme.fonts.weight.thick};
  font-style: 'Open Sans', sans-serif;
  color: ${props => props.theme.colors.neutralLight};
  padding: 0;
  margin: 0;
  /* This will position the anchor tag nicely */
  &::before {
    display: block;
    content: "";
    margin-top: -5rem;
    height: 5rem;
    visibility: hidden;
    pointer-events: none;
  }
  &::selection {
    background-color: ${props => props.theme.colors.neutralDark};
  }
  @media ${device.greaterThan.desktop} {
    font-size: ${props => props.theme.fonts.size.large.xxl};
  }
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.hl};
    font-weight: ${props => props.theme.fonts.weight.thick};
  }
`

export const Subtitle = styled.div`
  font-size: ${props => props.theme.fonts.size.s};
  color: ${props => props.theme.colors.neutralLight};
  padding: 0.3rem 0 0;
  margin: 0;
  font-weight: ${props => props.theme.fonts.weight.light};
  &::selection {
    background-color: ${props => props.theme.colors.neutralDark};
  }
  @media ${device.greaterThan.laptopLMin} {
    font-size: ${props => props.theme.fonts.size.large.md};
    padding: 0;
  }
`

export const Highlight = styled.span`
  font-size: ${props => props.theme.fonts.size.s};
  font-weight: ${props => props.theme.fonts.weight.bold};
  color: ${props => (props.typewriter ? props.theme.colors.secondaryDark : props.theme.colors.secondaryLight)};
  padding: 0;
  margin: 0;
  display: inline;
  &::selection {
    background-color: ${props => props.theme.colors.neutralDark};
  }
  @media ${device.greaterThan.laptopLMin} {
    font-size: ${props => props.theme.fonts.size.large.md};
  }
`

export const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.neutralLight};
  letter-spacing: 2px;
  font-family: 'Raleway', sans-serif;
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
`
