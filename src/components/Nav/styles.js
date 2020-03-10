import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'
import device from '../../device'

export const Menu = styled.nav`
  display: flex;
  padding: 1rem 0;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  position: ${props => (props.sticky ? 'fixed' : 'relative')};
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.test1};
  z-index: 9999;
`

export const MenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  right: 0;
  height: 100vh;
  top: 0vh;
  background-color: ${props => props.theme.colors.primary};
  flex-direction: column;
  align-items: center;
  transform: ${props => (props.active ? 'translateY(0%)' : 'translateY(-100%)')};
  transition: transform 0.5s ease-in;

  @media ${device.greaterThan.laptopLMin} {
    transform: translateX(0%);
    position: relative;
    flex-direction: row;
    height: 0vh;
    width: 50%;
  }
  @media ${device.greaterThan.laptopL} {
    width: 30%;
  }
`
export const MenuItem = styled.li`
  list-style: none;
  display: inline-block;
`

export const MenuLink = styled(({ ...props }) => <Link {...props} />)`
color: ${props => props.theme.colors.light};
text-decoration: none;
letter-spacing: 2px;
font-family: 'Raleway', sans-serif;
font-weight: ${props => props.theme.fonts.weight.bold};
font-size: ${props => props.theme.fonts.size.large.md};
&:hover {
  border-bottom: 2px solid ${props => props.theme.colors.danger};
}
@media ${device.greaterThan.laptopLMin} {
  font-weight: ${props => props.theme.fonts.weight.light};
  font-size: ${props => props.theme.fonts.size.md};
}
`

export const MenuTag = styled.a`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: ${props => props.theme.fonts.weight.bold};
  font-size: ${props => props.theme.fonts.size.large.md};
  font-family: 'Raleway', sans-serif;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${props => props.theme.colors.danger};
  }
  @media ${device.greaterThan.laptopLMin} {
    font-weight: ${props => props.theme.fonts.weight.light};
    font-size: ${props => props.theme.fonts.size.md};
  }
`

export const MenuBrand = styled.div`
  height: auto;
  width: 50%;
  position: relative;
  z-index: 9998;
  @media ${device.greaterThan.laptopL} {
    width: 30%;
  }
  @media ${device.greaterThan.laptopLMin} {
    width: 20%;
  }
`

export const MenuBrandText = styled.h4`
  font-size: ${props => props.theme.fonts.size.md};
  font-family: 'Open Sans', sans-serif;
  font-weight: ${props => props.theme.fonts.weight.light};
  color: ${props => props.theme.colors.light};
  padding: 0;
  margin: 0;
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
  background-color: ${props => props.theme.colors.light};
  transition: 0.6s ease;
  transform: ${props =>
    props.active && props.one
      ? 'rotate(-45deg) translate(-6px, 7px)'
      : props.active && props.three ? 'rotate(45deg) translate(-6px, -7px)' : ''};
  opacity: ${props => (props.active && props.two ? 0 : 1)};
`
