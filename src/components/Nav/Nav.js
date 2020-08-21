import React, { useState } from 'react'
import {
  Menu,
  MenuContainer,
  MenuBrandContainer,
  MenuBrand,
  MenuItem,
  MenuLink,
  MenuHyperlink,
  MenuBurger,
  Line
} from './styles'

import cv from '../../assets/media/CV.pdf'
import logo from '../../assets/media/logo.svg'

import Settings from './Settings'

import { useTranslation } from 'react-i18next'

const Nav = () => {
  const [ open, setOpen ] = useState(false)
  const { t } = useTranslation()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Menu sticky>
      <MenuBrandContainer>
        <MenuBrand onClick={() => scrollToTop()} src={logo} />
      </MenuBrandContainer>
      <MenuContainer active={open}>
        <MenuItem>
          <MenuLink to='#'>{t('navigation.projects')}</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuHyperlink href={cv} target='_blank'>
            {t('navigation.resume')}
          </MenuHyperlink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='#'>{t('navigation.contact')}</MenuLink>
        </MenuItem>
        <Settings />
      </MenuContainer>

      <MenuBurger onClick={() => setOpen(!open)}>
        <Line active={open} one />
        <Line active={open} two />
        <Line active={open} three />
      </MenuBurger>
    </Menu>
  )
}

export default Nav
