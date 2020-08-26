import styled, { css, keyframes } from 'styled-components'
import device from '../../device'

const colorScheme = css`color: ${props => props.$color || props.theme.colors.neutralDark};`

const extend = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1); 
  }
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
  width: 85%;
  margin: 0 auto;
  margin-bottom: 2rem;

  & div {
    width: 100%;
    float: left;
    font-family: 'Raleway', sans-serif;
    font-size: ${props => props.theme.fonts.size.s};
    font-weight: ${props => props.theme.fonts.weight.normal};
    color: ${props => props.theme.colors.neutralLight};
  }

  & p {
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: ${props => props.theme.fonts.size.s};
    font-weight: ${props => props.theme.fonts.weight.normal};
    color: ${props => props.theme.colors.neutralLight};
    animation: ${props => (props.main ? '' : css`${extend} 200ms ease;`)};
    @media ${device.greaterThan.laptopLMin} {
      width: ${props => (props.main ? '70%' : '70%')};
      font-size: ${props => props.theme.fonts.size.xs};
    }
  }

  @media ${device.greaterThan.laptopLMin} {
    & div {
      width: 85%;
      height: 100%;
      float: left;
      font-family: 'Raleway', sans-serif;
      font-size: ${props => props.theme.fonts.size.s};
      font-weight: ${props => props.theme.fonts.weight.normal};
      color: ${props => props.theme.colors.neutralLight};
    }
  }
`
export const InfoContainer = styled.div`
  width: 100%;
  float: left;
  & p {
    font-family: 'Raleway', sans-serif;
    font-size: ${props => props.theme.fonts.size.s};
    font-weight: ${props => props.theme.fonts.weight.normal};
    color: ${props => props.theme.colors.neutralLight};
  }
  @media ${device.greaterThan.laptopLMin} {
    width: 50%;
    height: 100%;
    padding: 0 5rem 0 5rem;
  }
`

export const InfoTitle = styled.h3`
  ${colorScheme};
  ${scrollPosition};
  display: flex;
  font-family: 'Raleway', sans-serif;
  font-size: ${props => props.theme.fonts.size.large.xs};
  font-weight: ${props => props.theme.fonts.weight.bold};
  padding: 0;
  margin: 0;
  animation: ${props => (props.main ? '' : css`${extend} 200ms ease;`)};
  @media ${device.greaterThan.laptopLMin} {
    font-size: ${props => props.theme.fonts.size.large.md};
  }
`

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
  & svg {
    height: 100%;
    width: 85%;
    stroke: ${props => props.theme.colors.neutralDark};
  }
`

export const Underline = styled.span`
  width: max-content;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: inset 0px -7px ${props => props.$color || props.theme.colors.neutralDark};
  transition: box-shadow 250ms ease;
  &:hover {
    box-shadow: inset 0px -25px ${props => props.$color || props.theme.colors.neutralDark};
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
  font-weight: ${props => props.theme.fonts.weight.bold};
  margin: 2.5rem 0 0 0;
  ${scrollPosition};
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.xxl};
  }
`

export const Subtitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.theme.colors.neutralLight};
  font-size: ${props => props.theme.fonts.size.large.s};
  font-weight: ${props => props.theme.fonts.weight.bold};
  margin: 0 0 1rem 0;
  ${scrollPosition};
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.lg};
    margin: 0 0 2.5rem 0;
  }
`

export const IntroParagraph = styled.p`
  font-size: ${props => props.theme.fonts.size.lg};
  font-family: 'Raleway', sans-serif;
  font-weight: ${props => (props.iconText ? props.theme.fonts.weight.bold : props.theme.fonts.weight.light)};
  color: ${props => (props.info ? props.theme.colors.secondaryDark : props.theme.colors.neutralLight)};
  text-align: center;
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.xl};
  }
`

export const InfoParagraph = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: ${props => props.theme.fonts.size.s};
  font-weight: ${props => props.theme.fonts.weight.normal};
  color: ${props => props.theme.colors.neutralLight};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  text-align: center;
  width: 85%;
  @media ${device.greaterThan.laptopLMin} {
    width: 70%;
  }
`

export const ItemContainer = styled.div`
  text-align: center;
  & svg {
    stroke: ${props => (props.signature ? props.theme.colors.secondaryDark : '')};
    height: ${props => (props.signature ? '50px' : '70px')};
    width: auto;
    margin: 0;
    text-align: center;
    fill: ${props => (props.signature ? props.theme.colors.secondaryDark : '')};
    animation: ${props => (props.signature ? 'none' : css`${extend} 300ms ease;`)};
    @media ${device.greaterThan.laptopLMin} {
      height: ${props => (props.signature ? '80px' : '100px')};
    }
  }
`

export const Button = styled.button`
  border: 2px solid ${props => (props.active ? props.theme.colors.secondaryLight : props.theme.colors.secondaryDark)};
  margin: 0 0.5rem;
  display: inline-block;
  letter-spacing: 0.2px;
  padding: 0.5rem 0;
  width: 100px;
  font-size: 8px;
  font-family: 'Raleway', sans-serif;
  background: ${props => (props.active ? props.theme.colors.secondaryLight : props.theme.colors.secondaryDark)};
  color: ${props => props.theme.colors.primaryDark};
  font-weight: ${props => props.theme.fonts.weight.bold};
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background: none;
    color: ${props => (props.active ? props.theme.colors.secondaryLight : props.theme.colors.secondaryDark)};
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
    color: #fff;
    transform: translateY(-4px);
  }
  &:focus {
    outline: 0;
    box-shadow: none;
  }
  @media ${device.greaterThan.laptopLMin} {
    width: 150px;
    font-size: 11px;
    margin: 0 2rem;
    padding: 0.6rem 0;
  }
`

export const ButtonContainer = styled.div`
  width: 90%;
  display: block;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  overflow: auto;
  white-space: nowrap;
  @media ${device.greaterThan.laptopLMin} {
    width: 70%;
    display: flex;
    padding: 2rem 0;
  }
`
