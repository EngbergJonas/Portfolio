import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Menu = styled.nav`
  display: flex;
  padding: 0px;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  position: ${props => (props.sticky ? 'fixed' : 'relative')};
  width: 100%;
  top: 0;
  border-bottom: 1px solid ${props => props.theme.colors.info};
`

export const MenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  right: 0px;
  height: 93vh;
  top: 7vh;
  background-color: ${props => props.theme.colors.primary};
  flex-direction: column;
  align-items: center;
  transform: ${props => (props.active ? 'translateY(0%)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in;
  font-size: 24px;
  z-index: 10;

  @media (min-width: 768px) {
    transform: translateX(0%);
    font-size: 16px;
    position: relative;
    flex-direction: row;
    height: 0vh;
    top: 0vh;
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
font-weight: 300;
&:hover {
  border-bottom: 2px solid ${props => props.theme.colors.info};
}

`

export const Brand = styled.div`padding: 1rem 0 1rem;`

export const BrandText = styled(({ ...props }) => <Link {...props} />)`
  color: ${props => props.theme.colors.light};
  letter-spacing: 3px;
  font-size: 20px;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  
`
