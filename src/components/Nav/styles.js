import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import device from '../../device'
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

export const Menu = styled.nav`
  display: flex;
  padding: 1rem 0;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  background-color: ${props => props.theme.colors.primaryDark};
  position: ${props => (props.sticky ? 'fixed' : 'relative')};
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.neutralDark};
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
  top: 0vh;
  background-color: ${props => props.theme.colors.primaryDark};
  flex-direction: column;
  align-items: center;
  transform: ${props => (props.active ? 'translateY(0%)' : 'translateY(-100%)')};
  transition: transform 0.5s ease-in;

  @media ${device.greaterThan.laptopLMin} {
    transform: translateX(0%);
    position: relative;
    flex-direction: row;
    height: 0vh;
    width: 40%;
  }
  @media ${device.greaterThan.laptopL} {
    width: 35%;
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
letter-spacing: 2px;
font-family: 'Raleway', sans-serif;
font-weight: ${props => props.theme.fonts.weight.bold};
font-size: ${props => props.theme.fonts.size.large.md};
&:hover {
  border-bottom: 2px solid ${props => props.theme.colors.secondaryLight};
}
@media ${device.greaterThan.laptopLMin} {
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: ${props => props.theme.fonts.size.md};
}
`

export const MenuHyperlink = styled.a`
  color: ${props => props.theme.colors.neutralLight};
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: ${props => props.theme.fonts.weight.bold};
  font-size: ${props => props.theme.fonts.size.large.md};
  font-family: 'Raleway', sans-serif;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${props => (props.settingsBar ? 'none' : props.theme.colors.secondaryLight)};
    color: ${props => (props.settingsBar ? props.theme.colors.neutralDark : 'none')};
  }
  @media ${device.greaterThan.laptopLMin} {
    font-weight: ${props => props.theme.fonts.weight.normal};
    font-size: ${props => props.theme.fonts.size.md};
  }
`

export const MenuBrandContainer = styled.div`
  z-index: 9998;
  width: 40px;
  display: inline-block;
  @media ${device.greaterThan.laptopLMin} {
    width: 40px;
  }
`

export const MenuBrand = styled(ReactSVG)`
  fill: ${props => props.theme.colors.neutralLight};
  height: auto;
  position: relative;
  width: 100%;
  &:hover {
    cursor: pointer;
    animation: ${enlarge} 0.3s linear;
    fill: ${props => props.theme.colors.neutralDark};
    transform: scale(1.1);
  }
`

export const MenuBurger = styled.div`
  cursor: pointer;
  z-index: 10;
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
export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-radius: 3px;
  //background-color: ${props => props.theme.colors.primaryDark};
  margin-top: 24px;
  border-top: none;
  padding-top: 20px;
  animation: ${fadeIn} 0.3s;
  position: absolute;
`
