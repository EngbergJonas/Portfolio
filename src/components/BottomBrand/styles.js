import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import device from '../../device'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`
export const LogoContainer = styled.div`
  display: flex;
  position: fixed;
  width: 35vw;
  bottom: 2rem;
  @media ${device.greaterThan.laptopLMin} {
    width: 100vw;
    justify-content: flex-end;
  }
`
export const Logo = styled(ReactSVG)`
  fill: ${props => props.theme.colors.test1};
  &:hover{
    fill: ${props => props.theme.colors.light};
    cursor: pointer;
  }
`
