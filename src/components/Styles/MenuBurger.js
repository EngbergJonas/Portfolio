import React from 'react'
import styled from 'styled-components'

export const Burger = styled.div`
  cursor: pointer;
  z-index: 10;
  @media (min-width: 768px) {
    display: none;
    z-index: 1;
  }
`
export const Line = styled.div`
  width: 25px;
  height: 3px;
  color: white;
  background-color: white;
  margin: 5px;
  transition: 0.5s ease;
  transform: ${props =>
    props.active && props.one
      ? 'rotate(-45deg) translate(-5px, 6px)'
      : props.active && props.three ? 'rotate(45deg) translate(-5px, -6px)' : ''};
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
