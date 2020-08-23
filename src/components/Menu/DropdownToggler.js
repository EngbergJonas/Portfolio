import React from 'react'

import { NavButtonContainer, IconButton } from './styles.js'

const DropdownToggler = props => (
  <NavButtonContainer>
    <IconButton onClick={() => props.setOpen(!props.open)}>{props.icon}</IconButton>
    {props.open && props.children}
  </NavButtonContainer>
)

export default DropdownToggler
