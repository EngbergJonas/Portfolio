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
  border-bottom: 1px solid ${props => props.theme.colors.info};
  z-index: 11;
`

export const MenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  right: 0;
  height: 100vh;
  top: 6vh;
  background-color: ${props => props.theme.colors.primary};
  flex-direction: column;
  align-items: center;
  transform: ${props => (props.active ? 'translateY(0%)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in;
  font-size: ${props => props.theme.fonts.size.md};
  z-index: 10;

  @media ${device.greaterThan.laptopLMin} {
    transform: translateX(0%);
    font-size: ${props => props.theme.fonts.size.md};
    position: relative;
    flex-direction: row;
    height: 0vh;
    top: 0vh;
    width: 25%;
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
font-weight: ${props => props.theme.fonts.weight.light};
font-family: 'Raleway', sans-serif;
&:hover {
  border-bottom: 2px solid ${props => props.theme.colors.test1};
}

`

export const BrandText = styled.h4`
  font-size: ${props => props.theme.fonts.size.md};
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  color: ${props => props.theme.colors.light};
  padding: 0;
  margin: 0;
`

export const Brand = styled.div`
  height: auto;
  width: 50%;
  position: relative;
  @media ${device.greaterThan.tablet} {
    width: 30%;
  }
`
