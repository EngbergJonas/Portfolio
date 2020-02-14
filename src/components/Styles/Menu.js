import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #5d4954;
`

export const MenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  right: 0px;
  height: 92vh;
  top: 8vh;
  background-color: #5d4954;
  flex-direction: column;
  align-items: center;
  transform: ${props => (props.active ? 'translateY(0%)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in;
  @media (min-width: 768px) {
    transform: translateX(0%);
    position: relative;
    flex-direction: row;
    height: 0vh;
    top: 0vh;
    width: 30%;
  }
`
export const MenuItem = styled.li`list-style: none;`

export const MenuLink = styled(({ brand, ...props }) => <Link {...props} />)`
color: white;
text-decoration: none;
letter-spacing: 2px;
`

export const Brand = styled.div`
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 20px;
  z-index: 1;
`
