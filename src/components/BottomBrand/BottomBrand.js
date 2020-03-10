import React from 'react'
import logo from '../../media/logo.svg'

import { Container, LogoContainer, Logo } from './styles'

const BottomBrand = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
    </Container>
  )
}

export default BottomBrand
