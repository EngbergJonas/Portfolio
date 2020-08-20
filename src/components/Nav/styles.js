import styled from 'styled-components'
import { Link } from 'react-router-dom'
import device from '../../device'
import { ReactSVG } from 'react-svg'

export const Menu = styled.nav`
  display: flex;
  padding: 1rem 0;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  background-color: ${props => props.theme.colors.primary};
  position: ${props => (props.sticky ? 'fixed' : 'relative')};
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.test1};
  z-index: 9999;
  @media ${device.greaterThan.laptopLMin} {
    height: 2.5rem;
  }
`

export const MenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  right: 0;
  height: 100vh;
  top: 0vh;
  background-color: ${props => props.theme.colors.primary};
  flex-direction: column;
  align-items: center;
  transform: ${props => (props.active ? 'translateY(0%)' : 'translateY(-100%)')};
  transition: transform 0.5s ease-in;

  @media ${device.greaterThan.laptopLMin} {
    transform: translateX(0%);
    position: relative;
    flex-direction: row;
    height: 0vh;
    width: 40%;
  }
  @media ${device.greaterThan.laptopL} {
    width: 25%;
  }
`
export const MenuItem = styled.li`
  list-style: none;
  display: inline-block;
  &:first-child {
    padding-top: 10rem;
  }
  &:last-child {
    padding-bottom: 10rem;
  }

  @media ${device.greaterThan.laptopLMin} {
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
  }
`

export const MenuLink = styled(Link)`
color: ${props => props.theme.colors.light};
text-decoration: none;
letter-spacing: 2px;
font-family: 'Raleway', sans-serif;
font-weight: ${props => props.theme.fonts.weight.bold};
font-size: ${props => props.theme.fonts.size.large.md};
&:hover {
  border-bottom: 2px solid ${props => props.theme.colors.danger};
}
@media ${device.greaterThan.laptopLMin} {
  font-weight: ${props => props.theme.fonts.weight.light};
  font-size: ${props => props.theme.fonts.size.md};
}
`

export const MenuTag = styled.a`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: ${props => props.theme.fonts.weight.bold};
  font-size: ${props => props.theme.fonts.size.large.md};
  font-family: 'Raleway', sans-serif;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${props => props.theme.colors.danger};
  }
  @media ${device.greaterThan.laptopLMin} {
    font-weight: ${props => props.theme.fonts.weight.light};
    font-size: ${props => props.theme.fonts.size.md};
  }
`

export const MenuBrandContainer = styled.div`z-index: 9998;`

export const MenuBrand = styled(ReactSVG)`
  fill: ${props => props.theme.colors.test1};
  height: auto;
  width: 15%;
  @media ${device.greaterThan.laptopLMin} {
    width: 18%;
  }
`

export const MenuBurger = styled.div`
  cursor: pointer;
  z-index: 10;
  @media ${device.greaterThan.laptopLMin} {
    display: none;
  }
`

export const Line = styled.div`
  width: 30px;
  height: 3px;
  margin: 6px;
  background-color: ${props => props.theme.colors.light};
  transition: 0.6s ease;
  transform: ${props =>
    props.active && props.one
      ? 'rotate(-45deg) translate(-6px, 7px)'
      : props.active && props.three ? 'rotate(45deg) translate(-6px, -7px)' : ''};
  opacity: ${props => (props.active && props.two ? 0 : 1)};
`
