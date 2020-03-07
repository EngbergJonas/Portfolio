import React, { useState } from 'react'
import { Menu, MenuContainer, Brand, MenuItem, MenuLink, BrandText, MenuTag } from './styles'
import MenuBurger from './MenuBurger'
import cvfile from '../../media/CV.pdf'

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
          <MenuTag href={cvfile} target='_blank'>
            Resume
          </MenuTag>
        </MenuItem>
        <MenuItem active={open}>
          <MenuLink to='#'>Contact</MenuLink>
        </MenuItem>
        <MenuItem active={open}>
          <MenuLink to='#' onClick={() => setMode(!mode)}>
            {mode ? 'Dark' : 'Light'}
          </MenuLink>
        </MenuItem>
      </MenuContainer>
      <MenuBurger {...props} />
    </Menu>
  )
}

export default Nav
