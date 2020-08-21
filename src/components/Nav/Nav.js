import React, { useState } from 'react'
import {
  Menu,
  MenuContainer,
  MenuBrandContainer,
  MenuBrand,
  MenuItem,
  MenuLink,
  MenuHyperlink,
  MenuBurger,
  Line
} from './styles'

import cv from '../../assets/media/CV.pdf'
import logo from '../../assets/media/logo.svg'

import Settings from './Settings'

const Nav = () => {
  const [ open, setOpen ] = useState(false)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Menu sticky>
      <MenuBrandContainer>
        <MenuBrand onClick={() => scrollToTop()} src={logo} />
      </MenuBrandContainer>
      <MenuContainer active={open}>
        <MenuItem>
          <MenuLink to='#'>Projects</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuHyperlink href={cv} target='_blank'>
            Resume
          </MenuHyperlink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='#'>Contact</MenuLink>
        </MenuItem>
        <Settings />
      </MenuContainer>

      <MenuBurger onClick={() => setOpen(!open)}>
        <Line active={open} one />
        <Line active={open} two />
        <Line active={open} three />
      </MenuBurger>
    </Menu>
  )
}

export default Nav
