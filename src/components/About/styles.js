import styled, { css, keyframes } from 'styled-components'
import device from '../../device'

const expand = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1); 
  }
`
const expandAnimation = css`
  animation: ${props => (props.signature || props.main ? 'none' : css`${expand} 300ms ease;`)};
`
const colorScheme = css`color: ${props => props.$color || props.theme.colors.neutralDark};`
const centerFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
const blogText = css`
  font-size: ${props => props.theme.fonts.size.xs};
  font-weight: ${props => props.theme.fonts.weight.normal};
  color: ${props => props.theme.colors.neutralLight};
  @media ${device.greaterThan.laptopLMin} {
    font-size: ${props => props.theme.fonts.size.md};
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
  font-family: 'Raleway', sans-serif;
`

export const InfoTab = styled.div`
  ${expandAnimation};
  ${blogText};
  width: 85%;
  margin: 0 auto;
  margin-bottom: 2rem;
  & div {
    width: 100%;
    float: left;
  }
  & p {
    width: 100%;
    @media ${device.greaterThan.laptopLMin} {
      width: 70%;
    }
  }
`

export const InfoTitle = styled.h3`
  ${colorScheme};
  ${scrollPosition};
  ${expandAnimation};
  display: flex;
  font-size: ${props => props.theme.fonts.size.large.xs};
  font-weight: ${props => props.theme.fonts.weight.bold};
  padding: 0;
  margin: 0;
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
  width: 100%;
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
  ${scrollPosition};
  margin: 2rem 0;
  color: ${props => props.theme.colors.neutralLight};
  font-size: ${props => props.theme.fonts.size.large.md};
  font-weight: ${props => props.theme.fonts.weight.bold};
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.xxl};
  }
`

export const Subtitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.theme.colors.neutralLight};
  font-size: ${props => props.theme.fonts.size.large.s};
  font-weight: ${props => props.theme.fonts.weight.bold};
  margin: 1rem 0;
  ${scrollPosition};
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.lg};
    margin: 0 0 2.5rem 0;
  }
`

export const IntroParagraph = styled.p`
  font-size: ${props => props.theme.fonts.size.lg};
  font-weight: ${props => props.theme.fonts.weight.light};
  color: ${props => props.theme.colors.neutralLight};
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.xl};
  }
`

export const Container = styled.div`
  ${centerFlex};
  margin: 0 auto;
  width: 85%;
  & div {
    text-align: center;
    & svg {
      stroke: ${props => (props.signature ? props.theme.colors.secondaryDark : '')};
      fill: ${props => (props.signature ? props.theme.colors.secondaryDark : '')};
      height: ${props => (props.signature ? '50px' : '70px')};
      margin: 0 auto;
      @media ${device.greaterThan.laptopLMin} {
        height: ${props => (props.signature ? '80px' : '100px')};
      }
    }
  }
  @media ${device.greaterThan.laptopLMin} {
    width: 70%;
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
