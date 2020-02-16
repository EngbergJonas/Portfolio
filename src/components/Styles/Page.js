import styled from 'styled-components'

export const Page = styled.div`background-color: ${props => props.theme.colors.background};`

export const HeroPage = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  font-family: 'Raleway', sans-serif;
  pointer-events: none;
  height: 100vh;
  text-align: center;
  align-items: center;
`
