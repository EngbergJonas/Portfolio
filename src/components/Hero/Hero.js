import React from 'react'
import { Title, Subtitle, Span, Container, Page, Button, Item } from './styles'
import { CursorSpan } from '../Shared/Styles'
import Typewriter from '../Shared/Typewriter'
import { connect } from 'react-redux'
import { dark } from '../Shared/Theme'

const Hero = props => {
  const scrollToRef = () => props.scrollPosition.current.scrollIntoView({ behavior: 'smooth' })
  const writeRows = () => {
    return (
      <div>
        <Title>Hello,</Title>
        <Subtitle>
          I'm <Span>Jonas Engberg</Span>
        </Subtitle>
        <Subtitle>
          I'm a {' '}
          <Span>
            <CursorSpan>
              <Typewriter />
            </CursorSpan>
          </Span>
        </Subtitle>
        <Item>
          <Button onClick={() => scrollToRef()}>About Me</Button>
        </Item>
      </div>
    )
  }
  return (
    <Page dark={props.theme === dark}>
      <Container>{writeRows()}</Container>
    </Page>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(Hero)
