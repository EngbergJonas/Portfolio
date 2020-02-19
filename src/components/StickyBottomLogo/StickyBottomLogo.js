import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import logo from '../../media/logo.svg'
import device from '../../device'

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`
export const LogoContainer = styled.div`
  display: flex;
  position: fixed;
  width: 35vw;
  bottom: 2rem;
  @media ${device.greaterThan.laptop} {
    width: 100vw;
    justify-content: flex-end;
  }
`
const Logo = styled(ReactSVG)`
  fill: ${props => props.theme.colors.test1};
  &:hover{
    fill: ${props => props.theme.colors.light};
    cursor: pointer;
  }
`

const StickyBottomLogo = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
    </Container>
  )
}

export default StickyBottomLogo
