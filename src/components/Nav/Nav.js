import React, { useState } from 'react'
import { Menu, MenuContainer, Brand, BrandText, MenuItem, MenuLink } from '../Styles/Menu'
import MenuBurger from '../Styles/MenuBurger'
import { ReactSVG } from 'react-svg'

import logo from '../../logo.svg'

const Nav = ({ mode, setMode }) => {
  const [ open, setOpen ] = useState(false)
  const props = { open, setOpen }

  return (
    <Menu sticky>
      <Brand className='svg-test1'>
        <ReactSVG src={logo} onClick={() => setMode(!mode)} />
      </Brand>
      <MenuContainer active={open}>
        <MenuItem active={open}>
          <MenuLink to='#'>Projects</MenuLink>
        </MenuItem>
        <MenuItem active={open}>
          <MenuLink to='#'>About</MenuLink>
        </MenuItem>
        <MenuItem active={open}>
          <MenuLink to='#'>Contact</MenuLink>
        </MenuItem>
      </MenuContainer>
      <MenuBurger {...props} />
    </Menu>
  )
}

export default Nav
