import styled, { keyframes } from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import device from '../../device'

const moveRight = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(8px); 

  }
`

const slideIn = keyframes`

  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(25%); 

  }
`

//Navigation Bar
export const Navbar = styled.nav`
  height: 60px;
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.colors.primaryDark};
  padding: 0 1rem;
  border-bottom: 1.5px solid ${props => props.theme.colors.neutralDark};
  z-index: 999;
`
//List inside navigation bar
export const Nav = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`

//Container for logo and links in navigation bar
export const NavContainer = styled.li`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

//Container for settings button
export const NavButtonContainer = styled.li`
  width: 43%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

//Hyperlink
export const NavHyperlink = styled.a`
  display: none;
  @media ${device.greaterThan.laptopLMin} {
    font-weight: ${props => props.theme.fonts.weight.normal};
    font-size: ${props => props.theme.fonts.size.md};
    color: ${props => props.theme.colors.neutralLight};
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.neutralDark};
    }
  }
`

//Router Link
export const NavLink = styled(Link)`
    display: ${props => (props.mobile ? 'block' : 'none')};
  @media ${device.greaterThan.laptopLMin} {
    font-weight: ${props => props.theme.fonts.weight.normal};
    font-size: ${props => props.theme.fonts.size.md};
    color: ${props => props.theme.colors.neutralLight};
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.neutralDark};
    }
  }
`

//Settings Button
export const IconButton = styled.a`
  width: calc(60px * 0.5);
  height: calc(60px * 0.5);
  background-color: ${props => props.theme.colors.neutralLight};
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.theme.colors.neutralDark};
    cursor: pointer;
  }
  & svg {
    width: calc(60px);
    height: calc(60px);
  }
`

//Logo
export const Brand = styled(IconButton)`
  width: 40px;
  height: 40px;
  background-color: transparent;
  &:hover{
      background-color: transparent;
    }
  & svg {
    fill: ${props => props.theme.colors.neutralLight};
    width: calc(60px);
    height: calc(60px);
    &:hover{
      fill: ${props => props.theme.colors.neutralDark};
    }
  }
`

//Dropdown Container
export const DropdownContainer = styled.div`
  position: absolute;
  top: 70px;
  width: 200px;
  animation: ${slideIn} 300ms ease;
  transform: translateX(25%);
  background-color: ${props => props.theme.colors.primaryDark};
  border: 1px ${props => props.theme.colors.primaryDark};
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: height 200ms ease;
`

//Dropdown item
export const DropdownMenuItem = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 0.5rem;
  width: auto;
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: ${props => props.theme.fonts.size.md};
  color: ${props => props.theme.colors.neutralLight};
  font-family: 'Raleway', sans-serif;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.neutralDark};
    animation: ${moveRight} 300ms ease;
    transform: translateX(8px);
  }
`
export const DropdownMenuLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 0.5rem;
  width: auto;
  font-weight: ${props => props.theme.fonts.weight.normal};
  font-size: ${props => props.theme.fonts.size.md};
  color: ${props => props.theme.colors.neutralLight};
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.neutralDark};
    animation: ${moveRight} 300ms ease;
    transform: translateX(8px);
  }
`
