import styled from 'styled-components'
import device from '../../device'

export const Page = styled.div`
  background: ${props => props.theme.colors.primaryDark};
  border-top: 1.5px solid ${props => props.theme.colors.neutralDark};
`

export const ProfilePicture = styled.img`
  display: inline-block;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`

export const ProfileFrame = styled.div`
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
  font-weight: ${props => props.theme.fonts.weight.bold};
  margin: 2.5rem 0 0 0;
  /* This will position the anchor tag nicely */
  &::before {
    display: block;
    content: "";
    margin-top: -5.5rem;
    height: 5.5rem;
    visibility: hidden;
    pointer-events: none;
  }
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.hl};
  }
`

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fonts.size.sm};
  font-family: 'Raleway', sans-serif;
  font-weight: ${props => (props.iconText ? props.theme.fonts.weight.bold : props.theme.fonts.weight.light)};
  color: ${props => (props.info ? props.theme.colors.secondaryDark : props.theme.colors.neutralLight)};
  text-align: center;
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.xl};
  }
`

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  width: ${props => (props.text ? '80%' : '100%')};
  @media ${device.greaterThan.laptopMin} {
    width: ${props => (props.text ? '50%' : '100%')};
  }
  @media ${device.greaterThan.desktopMin} {
    width: ${props => (props.text ? '30%' : '100%')};
  }
`

export const ContainerItem = styled.div`
  & svg {
    stroke: ${props => props.theme.colors.neutralDark};
    height: auto;
    width: 100%;
    fill: ${props => props.theme.colors.neutralDark};
  }
`

export const ContainerItemSignature = styled.div`
  text-align: center;
  & svg {
    stroke: ${props => props.theme.colors.neutralDark};
    margin: auto;
    height: auto;
    width: 40%;
    fill: ${props => props.theme.colors.neutralDark};
    padding: 1rem 0 1rem;
    @media ${device.greaterThan.laptop} {
      width: 60%;
    }
  }
`
