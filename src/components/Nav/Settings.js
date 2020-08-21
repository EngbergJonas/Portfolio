import React, { useState } from 'react'
import { MenuHyperlink, DropdownMenu, MenuItem } from './styles'
import i18n from '../../i18n'

import { connect } from 'react-redux'
import { setTheme } from '../../reducers/themeReducer'
import { light, dark } from '../Shared/Theme'

const Settings = props => {
  const [ open, setOpen ] = useState(false)

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  const setTheme = () => (
    <MenuHyperlink settingsBar onClick={() => props.setTheme(props.theme === dark ? light : dark)}>
      {props.theme === dark ? 'Light Mode' : 'Dark Mode'}
    </MenuHyperlink>
  )

  const setLanguage = (languageString, languageName) => (
    <MenuHyperlink settingsBar onClick={() => changeLanguage(languageString)}>
      {languageName}
    </MenuHyperlink>
  )

  return (
    <MenuItem>
      <MenuHyperlink onClick={() => setOpen(!open)}>Settings</MenuHyperlink>
      {open ? (
        <DropdownMenu>
          {setLanguage('en', 'In English')}
          {setLanguage('fi', 'Suomeksi')}
          {setTheme()}
        </DropdownMenu>
      ) : null}
    </MenuItem>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, { setTheme })(Settings)
