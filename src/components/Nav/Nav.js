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

import cv from '../../assets/media/CV.pdf'
import logo from '../../assets/media/logo.svg'
import { connect } from 'react-redux'
import { setTheme } from '../../reducers/themeReducer'
import { light, dark } from '../Shared/Theme'

import Dropdown from '../Nav/Dropdown'

import i18n from '../../i18n'

const Nav = props => {
  const [ open, setOpen ] = useState(false)

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  const changeTheme = () => (
    <MenuItem>
      <MenuTag onClick={() => props.setTheme(props.theme === dark ? light : dark)}>
        {props.theme === dark ? 'Light' : 'Dark'}
      </MenuTag>
    </MenuItem>
  )

  return (
    <Menu sticky>
      <MenuBrandContainer>
        <MenuBrand src={logo} />
      </MenuBrandContainer>

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
          <Dropdown changeTheme={changeTheme()} />
        </MenuItem>
      </MenuContainer>

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
