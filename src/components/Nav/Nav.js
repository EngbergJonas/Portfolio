import React, { useState } from 'react'
import { Menu, MenuContainer, MenuBrand, MenuItem, MenuLink, MenuBrandText, MenuTag, MenuBurger, Line } from './styles'
import cv from '../../media/CV.pdf'

import { connect } from 'react-redux'
import { setTheme } from '../../reducers/themeReducer'
import { light, dark } from '../Theme'

const Nav = props => {
  const [ open, setOpen ] = useState(false)

  return (
    <Menu sticky>
      {/* NavBrand */}
      <MenuBrand className='svg-test1'>
        <MenuBrandText>Jonas Engberg</MenuBrandText>
      </MenuBrand>
      {/* NavBar */}
      <MenuContainer active={open}>
        <MenuItem>
          <MenuLink to='#'>Projects</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuTag href={cv} target='_blank'>
            Resume
          </MenuTag>
        </MenuItem>
        <MenuItem>
          <MenuLink to='#'>Contact</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuTag onClick={() => props.setTheme(props.theme === dark ? light : dark)}>
            {props.theme === dark ? 'Light' : 'Dark'}
          </MenuTag>
        </MenuItem>
      </MenuContainer>
      {/* NavBurger */}
      <MenuBurger onClick={() => setOpen(!open)}>
        <Line active={open} one />
        <Line active={open} two />
        <Line active={open} three />
      </MenuBurger>
    </Menu>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, { setTheme })(Nav)
