import styled from 'styled-components'
import backgroundImg from '../../background.svg'
import backgroundImg2 from '../../p.png'
export const Page = styled.div`background-color: ${props => props.theme.colors.background};`

export const HeroPage = styled.div`
  background-image: url(${backgroundImg});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: ${props => props.theme.colors.light};
  font-family: 'Raleway', sans-serif;
  pointer-events: none;
  height: 100vh;
  text-align: center;
  align-items: center;
`
