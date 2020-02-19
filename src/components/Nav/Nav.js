import React, { useState } from 'react'
import { Menu, MenuContainer, Brand, MenuItem, MenuLink, BrandText } from './Menu'
import MenuBurger from './MenuBurger'

const Nav = ({ mode, setMode }) => {
  const [ open, setOpen ] = useState(false)
  const props = { open, setOpen }

  return (
    <Menu sticky>
      <Brand className='svg-test1'>
        <BrandText>Jonas Engberg</BrandText>
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
