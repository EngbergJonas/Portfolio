import styled from 'styled-components'

export const Page = styled.div`
  height: 100vh;
  width: auto;
  background: ${props => props.theme.colors.primary};
  border-top: 1px solid ${props => props.theme.colors.test1};
`

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fonts.size.large.xl};
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

export const Subtitle = styled.h2`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fonts.size.large.xs};
`

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fonts.size.md};
  font-family: 'Open Sans', sans-serif;
  color: ${props => props.theme.colors.light};
`

export const Container = styled.div`
  display: flex;
  margin: 2rem;
  justify-content: ${props => (props.center ? 'center' : '')};
  align-items: ${props => (props.center ? 'center' : '')};
`

export const ContainerItem = styled.div`
  flow-grow: 1;
  height: 100px;
  & + & {
    margin-left: 2%;
  }
`
