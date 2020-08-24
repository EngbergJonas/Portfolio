import styled, { css } from 'styled-components'
import device from '../../device'

const colorScheme = css`
  color: ${props =>
    props.react
      ? props.theme.colors.react
      : props.java
        ? props.theme.colors.java
        : props.python
          ? props.theme.colors.python
          : props.csharp
            ? props.theme.colors.csharp
            : props.angular ? props.theme.colors.angular : props.theme.colors.neutralDark};
`

const scrollPosition = css`
  /* This will position the anchor tag nicely */
  &::before {
    display: block;
    content: "";
    margin-top: -5.5rem;
    height: 5.5rem;
    visibility: hidden;
    pointer-events: none;
  }
`
export const Page = styled.div`
  background: ${props => props.theme.colors.primaryDark};
  border-top: 1.5px solid ${props => props.theme.colors.neutralDark};
  align-items: center;
`

export const InfoTab = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 3rem;
`
export const InfoContainer = styled.div`
  width: 50%;
  float: ${props => (props.left ? 'left' : 'right')};
`

export const InfoTitle = styled.h3`
  ${colorScheme};
  font-family: 'Raleway', sans-serif;
  font-size: ${props => props.theme.fonts.size.large.md};
  font-weight: ${props => props.theme.fonts.weight.thick};
  padding: 0;
  margin: 0;
  /* This will position the anchor tag nicely */
  ${scrollPosition};
`

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 2rem;
  & svg {
    height: 100%;
    width: 75%;
    fill: ${props => props.theme.colors.neutralDark};
    stroke: ${props => props.theme.colors.neutralDark};
  }
`

export const Underline = styled.span`
  width: max-content;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: inset 0px -7px ${props => (props.react ? props.theme.colors.pale.react : props.java ? props.theme.colors.pale.java : props.python ? props.theme.colors.pale.python : props.csharp ? props.theme.colors.pale.csharp : props.angular ? props.theme.colors.pale.angular : props.theme.colors.pale.neutralDark)};
  transition: box-shadow 250ms ease;
  &:hover {
    box-shadow: inset 0px -25px ${props => (props.react ? props.theme.colors.pale.react : props.java ? props.theme.colors.pale.java : props.python ? props.theme.colors.pale.python : props.csharp ? props.theme.colors.pale.csharp : props.angular ? props.theme.colors.pale.angular : props.theme.colors.pale.neutralDark)};
  }
`

export const Image = styled.img`
  display: inline-block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`

export const ImageContainer = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.neutralLight};
  @media ${device.greaterThan.tabletMin} {
    height: 110px;
    width: 110px;
  }
  @media ${device.greaterThan.tablet} {
    height: 180px;
    width: 180px;
  }
`

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.theme.colors.neutralLight};
  font-size: ${props => props.theme.fonts.size.large.md};
  font-weight: ${props => props.theme.fonts.weight.thick};
  margin: 2.5rem 0 0 0;
  ${scrollPosition};
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.hl};
  }
`

export const IntroParagraph = styled.p`
  font-size: ${props => props.theme.fonts.size.sm};
  font-family: 'Raleway', sans-serif;
  font-weight: ${props => (props.iconText ? props.theme.fonts.weight.bold : props.theme.fonts.weight.light)};
  color: ${props => (props.info ? props.theme.colors.secondaryDark : props.theme.colors.neutralLight)};
  text-align: center;
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.xl};
  }
`

export const InfoParagraph = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: ${props => props.theme.fonts.size.s};
  font-weight: ${props => props.theme.fonts.weight.normal};
  color: ${props => props.theme.colors.neutralLight};
`

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 1rem;
  width: 70%;
`

export const ContainerItem = styled.div`
  text-align: center;
  & svg {
    stroke: ${props => props.theme.colors.neutralDark};
    height: auto;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    fill: ${props => props.theme.colors.neutralDark};
    @media ${device.greaterThan.laptop} {
      width: 80%;
    }
  }
`
