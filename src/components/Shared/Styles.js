import styled, { keyframes } from 'styled-components'

const cursorAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
export const Cursor = styled.span`
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    margin: auto;
    position: absolute;
    right: -5px;
    top: -3px;
    width: 2px;
    height: 100%;
    background-color: ${props => props.theme.colors.neutralLight};
    animation: ${cursorAnimation} 1.2s step-end infinite;
  }
`
