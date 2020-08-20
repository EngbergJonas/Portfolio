import React, { useState } from 'react'
import { MenuTag, MenuItem, MenuLink, DropdownMenu } from './styles'
import i18n from '../../i18n'

const Dropdown = props => {
  const [ open, setOpen ] = useState(false)
  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <MenuLink>
      <MenuTag onClick={() => setOpen(!open)}>Settings</MenuTag>
      {open ? (
        <DropdownMenu>
          <MenuTag onClick={() => changeLanguage('en')}>In English</MenuTag>
          <MenuTag onClick={() => changeLanguage('fi')}>Suomeksi</MenuTag>
          {props.changeTheme}
        </DropdownMenu>
      ) : null}
    </MenuLink>
  )
}

export default Dropdown
