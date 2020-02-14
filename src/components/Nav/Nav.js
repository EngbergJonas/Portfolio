import React, { useState } from 'react'

import { Menu, MenuContainer, Brand, MenuItem, MenuLink } from '../Styles/Menu'
import MenuBurger from '../Styles/MenuBurger'
const Nav = () => {
  const [ open, setOpen ] = useState(false)
  const props = { open: open, setOpen: setOpen }

  return (
    <Menu>
      <Brand to='#'>
        <h4>Jonas Engberg</h4>
      </Brand>
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
      </MenuContainer>
      <MenuBurger {...props} />
    </Menu>
  )
}

export default Nav
