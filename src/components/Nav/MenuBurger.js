import React from 'react'
import styled from 'styled-components'
import device from '../../device'

export const Burger = styled.div`
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

const MenuBurger = ({ open, setOpen }) => {
  return (
    <Burger onClick={() => setOpen(!open)}>
      <Line active={open} one />
      <Line active={open} two />
      <Line active={open} three />
    </Burger>
  )
}

export default MenuBurger
