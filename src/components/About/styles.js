import styled from 'styled-components'
import device from '../../device'

export const Page = styled.div`
  width: auto;
  height: auto;
  background: ${props => props.theme.colors.primary};
  border-top: 1px solid ${props => props.theme.colors.test1};
  border-bottom: 1px solid ${props => props.theme.colors.test1};
`

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fonts.size.large.xl};
  font-weight: ${props => props.theme.fonts.weight.bold};
  margin: 1rem 0 0;
  &::before {
    display: block;
    content: "";
    margin-top: -7rem;
    height: 7rem;
    visibility: hidden;
    pointer-events: none;
  }
`

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fonts.size.xl};
  font-family: 'Raleway', sans-serif;
  font-weight: ${props => props.theme.fonts.weight.light};
  color: ${props => props.theme.colors.light};
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  margin: 2rem auto;
  align-items: center;
  justify-content: center;
  width: 80%;
  @media ${device.greaterThan.laptopMin} {
    width: 50%;
  }
  @media ${device.greaterThan.desktopMin} {
    width: 30%;
  }
`

export const ContainerItem = styled.div`flex-grow: ${props => (props.item ? 1 : '')};`
