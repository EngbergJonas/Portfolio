import styled from 'styled-components'
import backgroundImg from '../../media/background.svg'

import device from '../../device'

export const Page = styled.div`background-color: ${props => props.theme.colors.background};`

export const HeroPage = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  font-family: 'Raleway', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media ${device.greaterThan.mobileL} {
    background-image: url(${backgroundImg});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`
