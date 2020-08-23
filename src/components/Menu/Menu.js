import React from 'react'
import { useTranslation } from 'react-i18next'

import { Navbar, Nav, NavContainer, Brand, NavHyperlink, NavLink, NavContainerMain } from './styles.js'
import DropdownMenu from './DropdownMenu'

import { ReactComponent as Logo } from '../../assets/media/logo.svg'

const NavBrand = props => (
  <NavContainer onClick={props.handleChange}>
    <Brand>{props.icon}</Brand>
  </NavContainer>
)

const Menu = () => {
  const { t } = useTranslation()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Navbar>
      <Nav>
        <NavBrand handleChange={() => scrollToTop()} icon={<Logo />} />

        <NavContainerMain>
          <NavLink smooth to='#about'>
            {t('navigation.about')}
          </NavLink>
        </NavContainerMain>

        <NavContainerMain>
          <NavHyperlink>{t('navigation.projects')}</NavHyperlink>
        </NavContainerMain>

        <NavContainerMain>
          <NavHyperlink>{t('navigation.resume')}</NavHyperlink>
        </NavContainerMain>

        <NavContainerMain>
          <NavHyperlink>{t('navigation.contact')}</NavHyperlink>
        </NavContainerMain>

        <DropdownMenu />
      </Nav>
    </Navbar>
  )
}

export default Menu
