import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CSSTransition } from 'react-transition-group'

import { DropdownContainer, DropdownMenuLink } from './styles.js'
import './dropdown.css'
import i18n from '../../i18n'
import { connect } from 'react-redux'
import { setTheme } from '../../reducers/themeReducer'
import { light, dark } from '../Shared/Theme'

import DropdownItem from './DropdownItem'
import DropdownToggler from './DropdownToggler'

import { useWindowDimensions } from '../../hooks/index'

const DropdownMenu = props => {
  const [ activeMenu, setActiveMenu ] = useState('main')
  const [ menuHeight, setMenuHeight ] = useState(null)
  const { width } = useWindowDimensions()
  const { t } = useTranslation()
  const mobileBreakpoint = 1025

  const calcHeight = el => {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  const handleSetTheme = () => props.setTheme(props.theme === dark ? light : dark)

  const handleSetLanguage = language => i18n.changeLanguage(language)

  const handleMenuChange = menu => menu && setActiveMenu(menu)

  const mobileRows = () => (
    <div style={{ display: width > mobileBreakpoint ? 'none' : 'block' }}>
      <DropdownMenuLink smooth to='#about'>
        {t('navigation.about')}
      </DropdownMenuLink>
      <DropdownItem>{t('navigation.projects')}</DropdownItem>
      <DropdownItem>{t('navigation.resume')}</DropdownItem>
      <DropdownItem>{t('navigation.contact')}</DropdownItem>
    </div>
  )

  return (
    <DropdownToggler>
      <DropdownContainer style={{ height: menuHeight }}>
        {/* Transition for main container */}
        <CSSTransition
          in={activeMenu === 'main'}
          unmountOnExit
          timeout={200}
          classNames='menu-primary'
          onEnter={calcHeight}
        >
          <div className='menu'>
            <DropdownItem handleChange={() => handleMenuChange('languageSelection')}>Languages</DropdownItem>
            <DropdownItem handleChange={() => handleSetTheme()}>
              {props.theme === dark ? t('settings.light') : t('settings.dark')}
            </DropdownItem>

            {/* Mobile Nav Links when query breaks */}
            {mobileRows()}
          </div>
        </CSSTransition>

        {/* Transition for language container */}
        <CSSTransition
          in={activeMenu === 'languageSelection'}
          unmountOnExit
          timeout={200}
          classNames='menu-secondary'
          onEnter={calcHeight}
        >
          <div className='menu'>
            <DropdownItem handleChange={() => handleSetLanguage('en')}>{t('settings.en')}</DropdownItem>
            <DropdownItem handleChange={() => handleSetLanguage('fi')}>{t('settings.fi')}</DropdownItem>
            <DropdownItem handleChange={() => handleSetLanguage('se')}>{t('settings.se')}</DropdownItem>
            <DropdownItem handleChange={() => handleMenuChange('main')}>Back</DropdownItem>
          </div>
        </CSSTransition>
      </DropdownContainer>
    </DropdownToggler>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, { setTheme })(DropdownMenu)
