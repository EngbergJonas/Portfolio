import React, { useState } from 'react'
import { Menu, MenuContainer, Brand, MenuItem, MenuLink, BrandText, MenuTag } from './styles'
import MenuBurger from './MenuBurger'
import cvfile from '../../media/CV.pdf'

import { connect } from 'react-redux'
import { setTheme } from '../../reducers/themeReducer'
import { light, dark } from '../Theme'

const Nav = props => {
  const [ open, setOpen ] = useState(false)
  const mode = { open, setOpen }

  return (
    <Menu sticky>
      <Brand className='svg-test1'>
        <BrandText>Jonas Engberg</BrandText>
      </Brand>
      <MenuContainer active={open}>
        <MenuItem>
          <MenuLink to='#'>Projects</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuTag href={cvfile} target='_blank'>
            Resume
          </MenuTag>
        </MenuItem>
        <MenuItem>
          <MenuLink to='#'>Contact</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='#' onClick={() => props.setTheme(props.theme === dark ? light : dark)}>
            {props.theme === dark ? 'Light' : 'Dark'}
          </MenuLink>
        </MenuItem>
      </MenuContainer>
      <MenuBurger {...mode} />
    </Menu>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, { setTheme })(Nav)
