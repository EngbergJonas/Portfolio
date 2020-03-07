import React from 'react'
import { Burger, Line } from './styles'

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
