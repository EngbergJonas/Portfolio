import React from 'react'

import { NavButtonContainer, IconButton } from './styles.js'

const DropdownToggler = props => {
  console.log(props.open)
  return (
    <NavButtonContainer>
      <IconButton onClick={props.handleChange}>{props.icon}</IconButton>
      {props.open && props.children}
    </NavButtonContainer>
  )
}

export default DropdownToggler
