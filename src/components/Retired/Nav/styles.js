import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import device from '../../../device'
import { ReactSVG } from 'react-svg'

const enlarge = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
    transform-origin: 50% 50%;
  }
`

const fadeIn = keyframes`
  from {opacity: 0;} 
  to {opacity: 1;}
`

const moveRight = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(8px); 

  }
`

export const Menu = styled.nav`
  display: flex;
  padding: 0.6rem 0;
  align-items: center;
  height: 2rem;
  background-color: ${props => props.theme.colors.primaryDark};
  position: ${props => (props.sticky ? 'fixed' : 'relative')};
  width: 100%;
  border-bottom: 1.5px solid ${props => props.theme.colors.neutralDark};
  z-index: 9999;
  @media ${device.greaterThan.laptopLMin} {
    height: 2.5rem;
  }
`

export const MenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  right: 0;
  height: 100vh;
  align-items: center;
  top: 0vh;
  background-color: ${props => props.theme.colors.primaryDark};
  flex-direction: column;
  transform: ${props => (props.active ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in;

  @media ${device.greaterThan.laptopLMin} {
    transform: translateX(0%);
    position: relative;
    flex-direction: row;
    height: 0vh;
    width: 50%;
    padding-left: 14%;
    padding-right: 0%;
    align-items: center;
    justify-content: space-around;
  }
  @media ${device.greaterThan.laptopL} {
    width: 35%;
  }
`

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 8rem;
  height: auto;
  border-top: none;
  animation: ${fadeIn} 0.3s;
  position: absolute;
  align-items: center;
  margin-top: 12px;
  padding-top: 10px;
  @media ${device.greaterThan.laptopLMin} {
    margin-top: 24px;
    padding-top: 20px;
    align-items: flex-start;
  }
`

export const MenuItem = styled.li`
  list-style: none;
  display: inline-block;
  &:first-child {
    padding-top: 10rem;
  }
  &:last-child {
    padding-bottom: 10rem;
  }

  @media ${device.greaterThan.laptopLMin} {
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }
`

export const MenuLink = styled(Link)`
color: ${props => props.theme.colors.neutralLight};
text-decoration: none;
letter-spacing: 1px;
font-family: 'Raleway', sans-serif;
font-weight: ${props => props.theme.fonts.weight.bold};
font-size: ${props => props.theme.fonts.size.large.xs};
&:hover {
  color: ${props => props.theme.colors.neutralDark};
  animation: ${enlarge} 0.2s;
  transform: scale(1.1);
}
@media ${device.greaterThan.laptopLMin} {
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: ${props => props.theme.fonts.size.s};
}
`

export const MenuHyperlink = styled.a`
  color: ${props => props.theme.colors.neutralLight};
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: ${props => props.theme.fonts.weight.bold};
  font-size: ${props => (props.settingsBar ? props.theme.fonts.size.large.xxs : props.theme.fonts.size.large.xs)};
  font-family: 'Raleway', sans-serif;
  //transform: ${props => (props.active ? 'translate(0%)' : 'translate(-200px, -230px)')};
  transition: transform 0.5s ease-in;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.neutralDark};
  }
  @media ${device.greaterThan.laptopLMin} {
    font-weight: ${props => props.theme.fonts.weight.normal};
    font-size: ${props => props.theme.fonts.size.s};
    &:hover {
      animation: ${moveRight} 0.3s;
      transform: translateX(8px);
    }
  }
`

export const MenuBrandContainer = styled.div`
  z-index: 9998;
  width: 36px;
  display: block;
  position: relative;
  padding-left: 48%;
  @media ${device.greaterThan.laptopLMin} {
    padding: 6%;
    width: 40px;
    position: absolute;
  }
`

export const MenuBrand = styled(ReactSVG)`
  fill: ${props => props.theme.colors.neutralLight};
  height: auto;
  position: relative;
  width: 100%;

  &:hover {
    cursor: pointer;
    animation: ${enlarge};
    transition: transform 120ms ease-in-out; 
    fill: ${props => props.theme.colors.neutralDark};
    transform: scale(1.1);
  }
`

export const MenuBurger = styled.div`
  cursor: pointer;
  z-index: 10;
  position: absolute;
  right: 0;
  padding-right: 6%;
  @media ${device.greaterThan.laptopLMin} {
    display: none;
  }
`

export const Line = styled.div`
  width: 30px;
  height: 3px;
  margin: 6px;
  background-color: ${props => props.theme.colors.neutralLight};
  transition: 0.6s ease;
  transform: ${props =>
    props.active && props.one
      ? 'rotate(-45deg) translate(-6px, 7px)'
      : props.active && props.three ? 'rotate(45deg) translate(-6px, -7px)' : ''};
  opacity: ${props => (props.active && props.two ? 0 : 1)};
`
