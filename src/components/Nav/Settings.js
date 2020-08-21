import React, { useState, useEffect, useRef } from 'react'
import { MenuHyperlink, DropdownMenu, MenuItem } from './styles'
import i18n from '../../i18n'

import { connect } from 'react-redux'
import { setTheme } from '../../reducers/themeReducer'
import { light, dark } from '../Shared/Theme'

import { useTranslation } from 'react-i18next'

const Settings = props => {
  const [ open, setOpen ] = useState(false)
  const { t } = useTranslation()
  const dropdownRef = useRef(null)

  const useCloseDropdown = ref => {
    useEffect(
      () => {
        const handleClickOutside = event => {
          if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false)
          }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      },
      [ ref ]
    )
  }

  useCloseDropdown(dropdownRef)

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  const setTheme = () => (
    <MenuHyperlink settingsBar onClick={() => props.setTheme(props.theme === dark ? light : dark)}>
      {props.theme === dark ? t('settings.light') : t('settings.dark')}
    </MenuHyperlink>
  )

  const setLanguage = (languageString, languageName) => (
    <MenuHyperlink settingsBar onClick={() => changeLanguage(languageString)}>
      {languageName}
    </MenuHyperlink>
  )

  return (
    <MenuItem>
      <MenuHyperlink onClick={() => setOpen(!open)}>{t('navigation.settings')}</MenuHyperlink>
      {open ? (
        <DropdownMenu ref={dropdownRef}>
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
