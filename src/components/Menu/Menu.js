import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Navbar, Nav, NavContainer, Brand, NavHyperlink, NavLink } from './styles.js'
import DropdownMenu from './DropdownMenu'
import DropdownToggler from './DropdownToggler'

import { ReactComponent as Logo } from '../../assets/media/logo.svg'
import { ReactComponent as Settings } from '../../assets/media/settings.svg'

const NavBrand = props => (
  <NavContainer onClick={props.handleChange}>
    <Brand>{props.icon}</Brand>
  </NavContainer>
)

const Menu = () => {
  const { t } = useTranslation()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const [ open, setOpen ] = useState(false)

  return (
    <Navbar>
      <Nav>
        <NavBrand handleChange={() => scrollToTop()} icon={<Logo />} />

        <NavContainer>
          <NavLink smooth to='#about'>
            {t('navigation.about')}
          </NavLink>
        </NavContainer>

        <NavContainer>
          <NavHyperlink>{t('navigation.projects')}</NavHyperlink>
        </NavContainer>

        <NavContainer>
          <NavHyperlink>{t('navigation.resume')}</NavHyperlink>
        </NavContainer>

        <NavContainer>
          <NavHyperlink>{t('navigation.contact')}</NavHyperlink>
        </NavContainer>

        <DropdownToggler open={open} setOpen={setOpen} icon={<Settings />}>
          <DropdownMenu />
        </DropdownToggler>
      </Nav>
    </Navbar>
  )
}

export default Menu
