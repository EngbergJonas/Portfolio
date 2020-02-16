import React, { useState } from 'react'

import { Menu, MenuContainer, Brand, BrandText, MenuItem, MenuLink } from '../Styles/Menu'
import MenuBurger from '../Styles/MenuBurger'

const Nav = ({ mode, setMode }) => {
  const [ open, setOpen ] = useState(false)
  const props = { open, setOpen }

  return (
    <Menu sticky>
      <MenuItem>
        <Brand to='#'>
          <BrandText to='#'>Engberg Development</BrandText>
        </Brand>
      </MenuItem>
      <MenuContainer active={open}>
        <MenuItem active={open}>
          <MenuLink to='#'>Home</MenuLink>
        </MenuItem>
        <MenuItem active={open}>
          <MenuLink to='#'>Projects</MenuLink>
        </MenuItem>
        <MenuItem active={open}>
          <MenuLink to='#'>About</MenuLink>
        </MenuItem>
        <MenuItem active={open}>
          <MenuLink to='#'>Contact</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='#' onClick={() => setMode(!mode)}>
            {mode ? 'Dark Mode' : 'Light Mode'}
          </MenuLink>
        </MenuItem>
      </MenuContainer>
      <MenuBurger {...props} />
    </Menu>
  )
}

export default Nav
