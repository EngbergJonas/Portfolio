import React, { useState } from 'react'
import {
  Menu,
  MenuContainer,
  MenuBrandContainer,
  MenuBrand,
  MenuItem,
  MenuLink,
  MenuTag,
  MenuBurger,
  Line
} from './styles'
import cv from '../../media/CV.pdf'
import logo from '../../media/logo.svg'

import { connect } from 'react-redux'
import { setTheme } from '../../reducers/themeReducer'
import { light, dark } from '../Theme'

const Nav = props => {
  const [ open, setOpen ] = useState(false)

  return (
    <Menu sticky>
      {/* NavBrand */}
      <MenuBrandContainer>
        <MenuBrand src={logo} />
      </MenuBrandContainer>
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
